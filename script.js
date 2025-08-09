// CineMood — Real-time TMDB Version
const TMDB_API_KEY = "35040d62829bedfe15090ba42fa8643a";
const platforms = ["netflix", "prime", "jiohotstar", "youtube"];
const allGenres = {};
let initialMediaLoad = [];

// DOM Elements
const genreChips = document.getElementById("genreChips");
const cardsGrid = document.getElementById("cardsGrid");
const featuredArea = document.getElementById("featuredArea");
const moodInput = document.getElementById("moodInput");
const platformSelect = document.getElementById("platformSelect");
const searchBtn = document.getElementById("searchBtn");
const clearBtn = document.getElementById("clearBtn");
const watchlistBtn = document.getElementById("watchlistBtn");
const watchlistModal = document.getElementById("watchlistModal");
const watchlistItems = document.getElementById("watchlistItems");
const closeWatchlist = document.getElementById("closeWatchlist");
const titleSearchInput = document.getElementById("titleSearchInput");
const titleSearchBtn = document.getElementById("titleSearchBtn");
const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".nav");

let watchlist = JSON.parse(localStorage.getItem("cinemood_watchlist") || "[]");

// --- API Fetching and Data Processing ---

async function fetchFromTMDB(endpoint) {
    // V3 authentication sends the key as a URL parameter
    const url = `https://api.themoviedb.org/3/${endpoint}?api_key=${TMDB_API_KEY}`;
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`API request failed: ${response.statusText}`);
        return response.json();
    } catch (err) {
        console.error('Error fetching from TMDB:', err);
        cardsGrid.innerHTML = `<p class="lead" style="text-align: center; grid-column: 1 / -1;">Failed to load movie data. Please check your API key or network connection.</p>`;
        return null;
    }
}

async function fetchAllGenres() {
    const movieGenres = await fetchFromTMDB('genre/movie/list');
    const tvGenres = await fetchFromTMDB('genre/tv/list');
    
    if (movieGenres) movieGenres.genres.forEach(genre => { allGenres[genre.id] = genre.name; });
    if (tvGenres) tvGenres.genres.forEach(genre => { allGenres[genre.id] = genre.name; });
}

function transformMediaData(item) {
    if (!item.poster_path || !item.overview) return null;

    const type = item.media_type === 'tv' || item.first_air_date ? 'series' : 'movie';
    const year = type === 'movie' 
        ? (item.release_date ? item.release_date.substring(0, 4) : 'N/A')
        : (item.first_air_date ? item.first_air_date.substring(0, 4) : 'N/A');

    return {
        id: item.id,
        title: item.title || item.name,
        type: type,
        genre: item.genre_ids.map(id => allGenres[id]).filter(Boolean),
        platform: platforms[Math.floor(Math.random() * platforms.length)],
        year: year,
        img: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
        desc: item.overview,
    };
}


// --- UI Rendering ---

function updateWatchlistBadge() {
  watchlistBtn.innerText = `Watchlist (${watchlist.length})`;
}

function renderCards(list) {
  cardsGrid.innerHTML = "";
  if (list.length === 0) {
      cardsGrid.innerHTML = `<p class="lead" style="text-align: center; grid-column: 1 / -1;">No results found. Try a different search!</p>`;
      return;
  }
  list.forEach((item) => {
    const card = document.createElement("div");
    card.className = `card platform-${item.platform.toLowerCase()}`;
    
    card.innerHTML = `
      <div class="thumb" style="background-image:url('${item.img}')"></div>
      <div class="card-body">
        <div class="badge">${item.platform.toUpperCase()}</div>
        <h3 class="title">${item.title}</h3>
        <div class="meta">${item.year} • ${item.type}</div>
        <p class="desc">${item.desc}</p>
        <div class="actions">
            <button class="cta" data-action="watch" data-platform="${item.platform}" data-title="${item.title.replace(/'/g, "")}">Watch</button>
            <button class="ghost" data-action="add" data-item='${JSON.stringify(item).replace(/'/g, "’")}'>+ Watchlist</button>
        </div>
      </div>`;
      
    card.addEventListener('click', (e) => {
        const action = e.target.dataset.action;
        if (action) {
            e.stopPropagation();
            switch(action) {
                case 'watch':
                    openPlatform(e.target.dataset.platform, e.target.dataset.title);
                    break;
                case 'add':
                    addToWatchlist(JSON.parse(e.target.dataset.item.replace(/’/g, "'")));
                    break;
            }
        } else {
            renderFeatured(item);
        }
    });
      
    cardsGrid.appendChild(card);
  });
}

function renderFeatured(item) {
  if (!item) {
      featuredArea.innerHTML = `<p class="lead">No movie to feature.</p>`;
      return;
  };
  featuredArea.innerHTML = "";
  const el = document.createElement("div");
  el.className = "featured-card";
  el.style.backgroundImage = `url('${item.img}')`;
  el.innerHTML = `<div><h3 style="margin:0">${
    item.title
  }</h3><p class="meta">${item.genre.join(", ")} • ${
    item.year
  }</p><p style="margin-top:8px">${
    item.desc
  }</p><div style="margin-top:12px"><button class="cta" onclick='openPlatform("${
    item.platform
  }","${item.title.replace(/'/g, "")}")'>Watch on ${
    item.platform
  }</button><button class="ghost" style="margin-left:10px" onclick='addToWatchlist(${JSON.stringify(
    item
  ).replace(/'/g, "'")})'>Add to Watchlist</button></div></div>`;
  featuredArea.appendChild(el);
}

function populateGenreChips() {
    const uniqueGenres = [...new Set(Object.values(allGenres))].sort();
    genreChips.innerHTML = "";
    uniqueGenres.forEach((g) => {
        const el = document.createElement("div");
        el.className = "genre";
        el.innerText = g;
        el.onclick = () => {
            el.classList.toggle("active");
            applyFilters();
        };
        genreChips.appendChild(el);
    });
}


// --- Core Functionality & Event Handling ---

async function searchByTitle(query) {
    cardsGrid.innerHTML = `<h2 style="text-align:center; grid-column: 1 / -1;">Searching for "${query}"...</h2>`;
    const data = await fetchFromTMDB(`search/multi?query=${encodeURIComponent(query)}`);
    if (data && data.results) {
        const searchResults = data.results.map(item => transformMediaData(item)).filter(Boolean);
        renderCards(searchResults);
        if (searchResults.length > 0) {
            renderFeatured(searchResults[0]);
        } else {
             featuredArea.innerHTML = `<p class="lead" style="text-align:center; width:100%;">No results found for your search.</p>`;
        }
    }
}

function applyFilters() {
  const activeGenres = Array.from(document.querySelectorAll(".genre.active")).map((el) => el.innerText);
  const mood = (moodInput.value || "").toLowerCase();
  const platform = platformSelect.value;

  if (!mood && platform === 'all' && activeGenres.length === 0) {
      renderCards(initialMediaLoad);
      if (initialMediaLoad.length > 0) renderFeatured(initialMediaLoad[0]);
      return;
  }
  
  const filtered = initialMediaLoad.filter((d) => {
    if (platform !== "all" && d.platform !== platform) return false;
    if (activeGenres.length && !activeGenres.some((g) => d.genre.includes(g))) return false;
    
    const combinedText = [d.title, ...d.genre, d.desc].join(" ").toLowerCase();
    if (mood && !combinedText.includes(mood)) return false;

    return true;
  });
  
  renderCards(filtered);
  if (filtered[0]) {
      renderFeatured(filtered[0]);
  } else {
      featuredArea.innerHTML = `<p class="lead" style="text-align:center; width:100%;">No matching titles found for your filters.</p>`;
  }
}

function openPlatform(platform, title) {
  const urls = {
    netflix: "https://www.netflix.com/search?q=",
    prime: "https://www.primevideo.com/search/ref=atv_nb_sr?phrase=",
    jiohotstar: "https://www.jiocinema.com/search/",
    youtube: "https://www.youtube.com/results?search_query=",
  };
  const url = urls[platform] + encodeURIComponent(title);
  window.open(url, "_blank");
}


// --- Watchlist & UI ---

(function themeToggle() {
  const toggle = document.getElementById("themeToggle");
  const saved = localStorage.getItem("cinemood_theme");
  if (saved === "light") document.body.classList.add("toggle-light");

  if (toggle) {
    toggle.textContent = document.body.classList.contains("toggle-light") ? "Light" : "Dark";
    toggle.addEventListener("click", () => {
      const isLight = document.body.classList.toggle("toggle-light");
      toggle.textContent = isLight ? "Light" : "Dark";
      localStorage.setItem("cinemood_theme", isLight ? "light" : "dark");
    });
  }
})();

function saveWatchlist() {
  localStorage.setItem("cinemood_watchlist", JSON.stringify(watchlist));
  updateWatchlistBadge();
}

function addToWatchlist(item) {
  if (!watchlist.find((i) => i.id === item.id)) {
    watchlist.push(item);
    saveWatchlist();
    renderToast(`${item.title} added to watchlist`);
  } else {
    renderToast(`${item.title} is already in your watchlist`);
  }
}

function removeFromWatchlist(id) {
  watchlist = watchlist.filter((i) => i.id !== id);
  saveWatchlist();
  renderWatchlist();
}

function renderWatchlist() {
  watchlistItems.innerHTML = "";
  if (watchlist.length === 0) {
    watchlistItems.innerHTML = '<p class="meta">Your watchlist is empty.</p>';
    return;
  }
  watchlist.forEach((i) => {
    const div = document.createElement("div");
    div.innerHTML = `<div style="display:flex; gap:12px; align-items:center; padding: 8px; border-bottom: 1px solid var(--glass);">
      <img src="${i.img}" style="width:50px; height:75px; object-fit:cover; border-radius:4px;" />
      <div style="flex:1;">
        <h4 style="margin:0 0 4px 0;">${i.title}</h4>
        <div class="meta">${i.year} • ${i.platform}</div>
      </div>
      <div>
        <button class="cta" onclick="openPlatform('${i.platform}','${i.title.replace(/'/g, "")}')">Watch</button>
        <button class="ghost" style="margin-top:6px" onclick="removeFromWatchlist(${i.id})">Remove</button>
      </div>
    </div>`;
    watchlistItems.appendChild(div);
  });
}

function renderToast(msg) {
  const t = document.createElement("div");
  t.className = "toast";
  t.innerText = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2600);
}


// --- App Initialization ---

async function initializeApp() {
    cardsGrid.innerHTML = `<h2 style="text-align:center; grid-column: 1 / -1;">Fetching the latest movies & series...</h2>`;
    
    await fetchAllGenres();
    
    const promises = [];
    for (let i = 1; i <= 13; i++) {
        promises.push(fetchFromTMDB(`movie/popular?page=${i}`));
        promises.push(fetchFromTMDB(`tv/popular?page=${i}`));
    }
    
    const results = await Promise.all(promises);
    
    const rawMedia = results.flatMap((res) => {
        return res ? res.results.map(item => transformMediaData(item)) : [];
    });
    
    initialMediaLoad = rawMedia.filter(Boolean).sort(() => 0.5 - Math.random());
    
    populateGenreChips();
    renderCards(initialMediaLoad);
    if (initialMediaLoad.length > 0) {
        renderFeatured(initialMediaLoad[0]);
    }
    updateWatchlistBadge();

    // Event Listeners
    searchBtn.onclick = applyFilters;
    titleSearchBtn.onclick = () => {
        const query = titleSearchInput.value.trim();
        if (query) searchByTitle(query);
    };
    titleSearchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            const query = titleSearchInput.value.trim();
            if (query) searchByTitle(query);
        }
    });

    clearBtn.onclick = () => {
      document.querySelectorAll(".genre.active").forEach((e) => e.classList.remove("active"));
      moodInput.value = "";
      titleSearchInput.value = "";
      platformSelect.value = "all";
      renderCards(initialMediaLoad);
      if(initialMediaLoad.length > 0) renderFeatured(initialMediaLoad[0]);
    };
    platformSelect.onchange = applyFilters;
    watchlistBtn.onclick = () => {
      watchlistModal.style.display = "flex";
      renderWatchlist();
    };
    closeWatchlist.onclick = () => {
      watchlistModal.style.display = "none";
    };
    
    // NEW: Hamburger Menu Toggle
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
}

initializeApp();
