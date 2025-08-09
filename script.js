// CineMood — Static Version with 100 Real Movies & Series
// This version does not require an API key.

const data = [
  {
    id: 101,
    title: "Inception",
    type: "movie",
    genre: ["Action", "Science Fiction", "Adventure"],
    platform: "netflix",
    year: 2010,
    img: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq27gApcjBJU3GZpM.jpg",
    desc: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
  },
  {
    id: 102,
    title: "Breaking Bad",
    type: "series",
    genre: ["Drama", "Crime"],
    platform: "netflix",
    year: 2008,
    img: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    desc: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
  },
  {
    id: 103,
    title: "The Boys",
    type: "series",
    genre: ["Action", "Adventure", "Sci-Fi"],
    platform: "prime",
    year: 2019,
    img: "https://image.tmdb.org/t/p/w500/stTEycfG9928HYGEISBFaG1NGi3.jpg",
    desc: "A group of vigilantes known informally as “The Boys” set out to take down corrupt superheroes with no more than their blue-collar grit and a willingness to fight dirty.",
  },
  {
    id: 104,
    title: "Interstellar",
    type: "movie",
    genre: ["Adventure", "Drama", "Science Fiction"],
    platform: "prime",
    year: 2014,
    img: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    desc: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  },
  {
    id: 105,
    title: "Mirzapur",
    type: "series",
    genre: ["Action", "Crime", "Drama"],
    platform: "prime",
    year: 2018,
    img: "https://image.tmdb.org/t/p/w500/sgxawbJ1v61j3aPvf4NUsQe8ty6.jpg",
    desc: "The iron-fisted Akhandanand Tripathi is a millionaire carpet exporter and the mafia don of Mirzapur. His son, Munna, is an unworthy heir who will stop at nothing to inherit his father's legacy.",
  },
  {
    id: 106,
    title: "Kota Factory",
    type: "series",
    genre: ["Comedy", "Drama"],
    platform: "youtube",
    year: 2019,
    img: "https://image.tmdb.org/t/p/w500/l2i5d7M9U1nIflg3pT3iW4S6g8.jpg",
    desc: "India's first 'Black and White' show highlights the problems present day IIT-JEE aspirants face in their day-to-day lives.",
  },
  {
    id: 107,
    title: "Panchayat",
    type: "series",
    genre: ["Comedy", "Drama"],
    platform: "prime",
    year: 2020,
    img: "https://image.tmdb.org/t/p/w500/5ys2yhHn0nFTl62jZ2b7a2t2o4p.jpg",
    desc: "A comedy-drama, which captures the journey of an engineering graduate Abhishek, who for lack of a better job option joins as secretary of a Panchayat office in a remote village of Uttar Pradesh.",
  },
  {
    id: 108,
    title: "The Dark Knight",
    type: "movie",
    genre: ["Drama", "Action", "Crime"],
    platform: "netflix",
    year: 2008,
    img: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    desc: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
  },
  {
    id: 109,
    title: "Game of Thrones",
    type: "series",
    genre: ["Sci-Fi", "Fantasy", "Action"],
    platform: "jiohotstar",
    year: 2011,
    img: "https://image.tmdb.org/t/p/w500/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg",
    desc: "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north.",
  },
  {
    id: 110,
    title: "Stranger Things",
    type: "series",
    genre: ["Sci-Fi", "Mystery", "Drama"],
    platform: "netflix",
    year: 2016,
    img: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
    desc: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
  },
  {
    id: 111,
    title: "The Matrix",
    type: "movie",
    genre: ["Action", "Science Fiction"],
    platform: "netflix",
    year: 1999,
    img: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9Gz0gSbn0QZfo.jpg",
    desc: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
  },
  {
    id: 112,
    title: "Parasite",
    type: "movie",
    genre: ["Comedy", "Thriller", "Drama"],
    platform: "prime",
    year: 2019,
    img: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    desc: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
  },
  {
    id: 113,
    title: "Friends",
    type: "series",
    genre: ["Comedy", "Romance"],
    platform: "netflix",
    year: 1994,
    img: "https://image.tmdb.org/t/p/w500/f496cm9enuEsZkSPzCwn9OIGeo.jpg",
    desc: "Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.",
  },
  {
    id: 114,
    title: "Sacred Games",
    type: "series",
    genre: ["Action", "Crime", "Drama"],
    platform: "netflix",
    year: 2018,
    img: "https://image.tmdb.org/t/p/w500/y123P9ml1J2d4s5SZt25a4dffz8.jpg",
    desc: "A link in their pasts leads an honest cop to a fugitive gang boss, whose cryptic warning spurs the officer on a quest to save Mumbai from cataclysm.",
  },
  {
    id: 115,
    title: "The Office (US)",
    type: "series",
    genre: ["Comedy"],
    platform: "prime",
    year: 2005,
    img: "https://image.tmdb.org/t/p/w500/qZtAf4Z1QZ_AgDwk3wYvjYWtovm.jpg",
    desc: "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.",
  },
  {
    id: 116,
    title: "Pulp Fiction",
    type: "movie",
    genre: ["Thriller", "Crime"],
    platform: "jiohotstar",
    year: 1994,
    img: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    desc: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
  },
  {
    id: 117,
    title: "Attack on Titan",
    type: "series",
    genre: ["Animation", "Action", "Sci-Fi"],
    platform: "netflix",
    year: 2013,
    img: "https://image.tmdb.org/t/p/w500/hTP1DtLGFamjfu8WqjnuQ5116fX.jpg",
    desc: "After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.",
  },
  {
    id: 118,
    title: "Dune",
    type: "movie",
    genre: ["Science Fiction", "Adventure"],
    platform: "prime",
    year: 2021,
    img: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIY2VFIHH2amAgXS.jpg",
    desc: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people.",
  },
  {
    id: 119,
    title: "Money Heist",
    type: "series",
    genre: ["Crime", "Drama"],
    platform: "netflix",
    year: 2017,
    img: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
    desc: "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.",
  },
  {
    id: 120,
    title: "Spider-Man: No Way Home",
    type: "movie",
    genre: ["Action", "Adventure", "Science Fiction"],
    platform: "netflix",
    year: 2021,
    img: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irDe3GPblNst9hpC5g.jpg",
    desc: "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous.",
  },
  {
    id: 121,
    title: "The Shawshank Redemption",
    type: "movie",
    genre: ["Drama", "Crime"],
    year: 1994,
    platform: "prime",
    img: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    desc: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
  },
  {
    id: 122,
    title: "The Mandalorian",
    type: "series",
    genre: ["Sci-Fi", "Action", "Adventure"],
    year: 2019,
    platform: "jiohotstar",
    img: "https://image.tmdb.org/t/p/w500/eU1i6eCXsJSPdsvVglc69RifYmM.jpg",
    desc: "After the fall of the Galactic Empire, a lone bounty hunter operates in the outer reaches, far from the authority of the New Republic.",
  },
  {
    id: 123,
    title: "Forrest Gump",
    type: "movie",
    genre: ["Comedy", "Drama", "Romance"],
    year: 1994,
    platform: "netflix",
    img: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TWTT.jpg",
    desc: "A man with a low IQ has accomplished great things in his life and been present during significant historical events—in each case, far exceeding what anyone imagined he could do.",
  },
  {
    id: 124,
    title: "Chernobyl",
    type: "series",
    genre: ["Drama", "History"],
    year: 2019,
    platform: "jiohotstar",
    img: "https://image.tmdb.org/t/p/w500/900tHlHeOon2waPqJ31I9rE8dO.jpg",
    desc: "In April 1986, an explosion at the Chernobyl nuclear power plant in the USSR becomes one of the world's worst man-made catastrophes.",
  },
  {
    id: 125,
    title: "Joker",
    type: "movie",
    genre: ["Crime", "Thriller", "Drama"],
    year: 2019,
    platform: "prime",
    img: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    desc: "In 1981 Gotham City, a struggling stand-up comedian is driven insane and turns to a life of crime and chaos.",
  },
  {
    id: 126,
    title: "Squid Game",
    type: "series",
    genre: ["Action", "Mystery", "Drama"],
    year: 2021,
    platform: "netflix",
    img: "https://image.tmdb.org/t/p/w500/dDlEsimihOfUhSqSHBEoHGPcgyc.jpg",
    desc: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes.",
  },
  {
    id: 127,
    title: "Fight Club",
    type: "movie",
    genre: ["Drama"],
    year: 1999,
    platform: "prime",
    img: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    desc: "An insomniac office worker looking for a way to change his life crosses paths with a devil-may-care soap maker and they form an underground fight club that evolves into something much, much more.",
  },
  {
    id: 128,
    title: "Sherlock",
    type: "series",
    genre: ["Crime", "Drama", "Mystery"],
    year: 2010,
    platform: "prime",
    img: "https://image.tmdb.org/t/p/w500/7WTsnHkGs3NBQpmfscz13uBOlaL.jpg",
    desc: "A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.",
  },
  {
    id: 129,
    title: "Goodfellas",
    type: "movie",
    genre: ["Drama", "Crime"],
    year: 1990,
    platform: "netflix",
    img: "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkQm3LpGq.jpg",
    desc: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito.",
  },
  {
    id: 130,
    title: "Fleabag",
    type: "series",
    genre: ["Comedy", "Drama"],
    year: 2016,
    platform: "prime",
    img: "https://image.tmdb.org/t/p/w500/27vEYsDuk4QeK20QyK7i8D3sc34.jpg",
    desc: "A comedy series adapted from the award-winning play about a young woman trying to cope with life in London whilst coming to terms with a recent tragedy.",
  },
  {
    id: 131,
    title: "The Godfather",
    type: "movie",
    genre: ["Drama", "Crime"],
    year: 1972,
    platform: "jiohotstar",
    img: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    desc: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone, barely survives an attempt on his life, his youngest son, Michael, steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
  },
  {
    id: 132,
    title: "Black Mirror",
    type: "series",
    genre: ["Sci-Fi", "Drama", "Thriller"],
    year: 2011,
    platform: "netflix",
    img: "https://image.tmdb.org/t/p/w500/5UaYsGZOFciYkM9tS4S89Y5gQZt.jpg",
    desc: "An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide.",
  },
  {
    id: 133,
    title: "Blade Runner 2049",
    type: "movie",
    genre: ["Science Fiction", "Drama"],
    year: 2017,
    platform: "prime",
    img: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
    desc: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
  },
  {
    id: 134,
    title: "Avatar: The Last Airbender",
    type: "series",
    genre: ["Animation", "Action", "Adventure"],
    year: 2005,
    platform: "netflix",
    img: "https://image.tmdb.org/t/p/w500/cZ0d3rtvXPuKoJclvStj3h3a3iH.jpg",
    desc: "In a war-torn world of elemental magic, a young boy reawakens to undertake a dangerous mystic quest to fulfill his destiny as the Avatar, and bring peace to the world.",
  },
  {
    id: 135,
    title: "Mad Max: Fury Road",
    type: "movie",
    genre: ["Action", "Adventure", "Science Fiction"],
    year: 2015,
    platform: "jiohotstar",
    img: "https://image.tmdb.org/t/p/w500/820eqYOFLEh7GJzybyb39eA1T2.jpg",
    desc: "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and almost everyone is crazed fighting for the necessities of life.",
  },
  {
    id: 136,
    title: "Better Call Saul",
    type: "series",
    genre: ["Crime", "Drama"],
    year: 2015,
    platform: "netflix",
    img: "https://image.tmdb.org/t/p/w500/he18mkNgrPanJqG1S22K0n9x3iI.jpg",
    desc: "Six years before Saul Goodman meets Walter White, he is known as Jimmy McGill, a small-time lawyer searching for his destiny, and, more immediately, hustling to make ends meet.",
  },
  {
    id: 137,
    title: "Whiplash",
    type: "movie",
    genre: ["Drama", "Music"],
    year: 2014,
    platform: "prime",
    img: "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
    desc: "Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost, even his humanity.",
  },
  {
    id: 138,
    title: "The Crown",
    type: "series",
    genre: ["Drama", "History"],
    year: 2016,
    platform: "netflix",
    img: "https://image.tmdb.org/t/p/w500/1DDE02fsoOR112iBEO2D2I5a2v.jpg",
    desc: "The inside story of two of the most famous addresses in the world – Buckingham Palace and 10 Downing Street – and the intrigues, love lives and machinations behind the great events that shaped the second half of the 20th century.",
  },
  {
    id: 139,
    title: "Django Unchained",
    type: "movie",
    genre: ["Drama", "Western"],
    year: 2012,
    platform: "netflix",
    img: "https://image.tmdb.org/t/p/w500/7oWY8VDWW7thTzWh3OKYRkWUlD5.jpg",
    desc: "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
  },
  {
    id: 140,
    title: "Peaky Blinders",
    type: "series",
    genre: ["Drama", "Crime"],
    year: 2013,
    platform: "netflix",
    img: "https://image.tmdb.org/t/p/w500/vUUqzSykdpPf91LSd6aCv9bCe4z.jpg",
    desc: "A gangster family epic set in 1919 Birmingham, England; centered on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
  },
  {
    id: 141,
    title: "The Grand Budapest Hotel",
    type: "movie",
    genre: ["Comedy", "Drama"],
    year: 2014,
    platform: "jiohotstar",
    img: "https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",
    desc: "The adventures of Gustave H, a legendary concierge at a famous hotel from the fictional Republic of Zubrowka between the first and second World Wars, and Zero Moustafa, the lobby boy who becomes his most trusted friend.",
  },
  {
    id: 142,
    title: "Mindhunter",
    type: "series",
    genre: ["Crime", "Drama"],
    year: 2017,
    platform: "netflix",
    img: "https://image.tmdb.org/t/p/w500/fbKE87MoSts6Sj0ayxt0f21IWB.jpg",
    desc: "In the late 1970s two FBI agents expand criminal science by delving into the psychology of murder and getting uneasily close to all-too-real monsters.",
  },
  {
    id: 143,
    title: "Inglourious Basterds",
    type: "movie",
    genre: ["Drama", "Action", "Thriller"],
    year: 2009,
    platform: "prime",
    img: "https://image.tmdb.org/t/p/w500/7sfbE636ldyNUDbWeC0FHflRiJp.jpg",
    desc: "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
  },
  {
    id: 144,
    title: "Dark",
    type: "series",
    genre: ["Sci-Fi", "Drama", "Mystery"],
    year: 2017,
    platform: "netflix",
    img: "https://image.tmdb.org/t/p/w500/apbrb6EVpiV2e6LHWYc2wMAbC63.jpg",
    desc: "A family saga with a supernatural twist, set in a German town, where the disappearance of two young children exposes the relationships among four families.",
  },
  {
    id: 145,
    title: "The Revenant",
    type: "movie",
    genre: ["Western", "Adventure", "Drama"],
    year: 2015,
    platform: "prime",
    img: "https://image.tmdb.org/t/p/w500/jiT90tVbbM6so2tGkBF320wTM33.jpg",
    desc: "A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.",
  },
  {
    id: 146,
    title: "Narcos",
    type: "series",
    genre: ["Crime", "Drama"],
    year: 2015,
    platform: "netflix",
    img: "https://image.tmdb.org/t/p/w500/r5z1gLd0T Kw0iCALEA23T82T13.jpg",
    desc: "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country through the years.",
  },
  {
    id: 147,
    title: "The Wolf of Wall Street",
    type: "movie",
    genre: ["Crime", "Drama", "Comedy"],
    year: 2013,
    platform: "prime",
    img: "https://image.tmdb.org/t/p/w500/34m2wqrdkVwQJsGkCF0a741it6r.jpg",
    desc: "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
  },
  {
    id: 148,
    title: "The Queen's Gambit",
    type: "series",
    genre: ["Drama"],
    year: 2020,
    platform: "netflix",
    img: "https://image.tmdb.org/t/p/w500/zU0htwEjIFnwsCopYLMA2jmTb2r.jpg",
    desc: "Orphaned at the tender age of nine, prodigious introvert Beth Harmon discovers and masters the game of chess in 1960s USA. But child stardom comes at a price.",
  },
  {
    id: 149,
    title: "Shutter Island",
    type: "movie",
    genre: ["Drama", "Thriller", "Mystery"],
    year: 2010,
    platform: "prime",
    img: "https://image.tmdb.org/t/p/w500/4GDy01GDBvltnv5moC7KevxG2u1.jpg",
    desc: "In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.",
  },
  {
    id: 150,
    title: "Ted Lasso",
    type: "series",
    genre: ["Comedy", "Drama"],
    year: 2020,
    platform: "youtube",
    img: "https://image.tmdb.org/t/p/w500/5fhZdedc6l1aotUaJz2F2m3uL1z.jpg",
    desc: "An American football coach is hired to manage a British soccer team; what he lacks in knowledge, he makes up for in optimism, underdog determination and biscuits.",
  },
  {
    id: 151,
    title: "Her",
    type: "movie",
    genre: ["Romance", "Science Fiction", "Drama"],
    year: 2013,
    platform: "jiohotstar",
    img: "https://image.tmdb.org/t/p/w500/eCOtqtf5sAL3M6i6OfMBUpy1b1A.jpg",
    desc: "A lonely writer develops an unlikely relationship with an advanced operating system designed to meet his every need.",
  },
  {
    id: 152,
    title: "Westworld",
    type: "series",
    genre: ["Sci-Fi", "Western", "Mystery"],
    year: 2016,
    platform: "jiohotstar",
    img: "https://image.tmdb.org/t/p/w500/8MfgyFHf7XEboZ829aV3I1v2iS.jpg",
    desc: "A dark odyssey about the dawn of artificial consciousness and the evolution of sin, exploring a world in which every human appetite, no matter how noble or depraved, can be indulged.",
  },
  {
    id: 153,
    title: "Arrival",
    type: "movie",
    genre: ["Science Fiction", "Drama", "Mystery"],
    year: 2016,
    platform: "netflix",
    img: "https://image.tmdb.org/t/p/w500/x2FJsf1ElAgr63Y3PNPtJrc7Hsp.jpg",
    desc: "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.",
  },
  {
    id: 154,
    title: "Succession",
    type: "series",
    genre: ["Drama"],
    year: 2018,
    platform: "jiohotstar",
    img: "https://image.tmdb.org/t/p/w500/lSC0s6T1iC51O0gGjIq2nCEoO5M.jpg",
    desc: "The Roy family is known for controlling the biggest media and entertainment company in the world. However, their world changes when their father steps down from the company.",
  },
  {
    id: 155,
    title: "A Wednesday!",
    type: "movie",
    genre: ["Drama", "Thriller", "Action"],
    year: 2008,
    platform: "netflix",
    img: "https://image.tmdb.org/t/p/w500/y1CHHebeHH1tVl1yuCw2vUh4z5p.jpg",
    desc: "A retiring police commissioner recounts the most memorable case of his career wherein he was informed about a bomb scare in Mumbai.",
  },
  {
    id: 156,
    title: "TVF Pitchers",
    type: "series",
    genre: ["Comedy", "Drama"],
    year: 2015,
    platform: "youtube",
    img: "https://image.tmdb.org/t/p/w500/5N5e4bM5H2Vn1sK6oziG3sWNFt.jpg",
    desc: "Four friends, Naveen Bansal, Jitendra Maheshwari, Yogendra Kumar and Saurabh Mandal, decide to quit their jobs and launch their own start-up company.",
  },
  {
    id: 157,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    type: "movie",
    genre: ["Adventure", "Fantasy", "Action"],
    year: 2001,
    platform: "prime",
    img: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    desc: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
  },
  {
    id: 158,
    title: "The Good Place",
    type: "series",
    genre: ["Comedy", "Fantasy", "Sci-Fi"],
    year: 2016,
    platform: "netflix",
    img: "https://image.tmdb.org/t/p/w500/eLVzM4tG8ds5eA898aDg6L6s1p1.jpg",
    desc: "Four people and their otherworldly frienemy struggle in the afterlife to define what it means to be good.",
  },
  {
    id: 159,
    title: "Gangs of Wasseypur",
    type: "movie",
    genre: ["Action", "Crime", "Drama"],
    year: 2012,
    platform: "netflix",
    img: "https://image.tmdb.org/t/p/w500/v15a42kM0DK4nZlXJVxW42dGf7t.jpg",
    desc: "A clash between Sultan and Shahid Khan leads to the expulsion of Khan from Wasseypur, and ignites a deadly blood feud spanning three generations.",
  },
  {
    id: 160,
    title: "Arcane",
    type: "series",
    genre: ["Animation", "Sci-Fi", "Action"],
    year: 2021,
    platform: "netflix",
    img: "https://image.tmdb.org/t/p/w500/fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg",
    desc: "Amid the stark discord of twin cities Piltover and Zaun, two sisters fight on rival sides of a war between magic technologies and clashing convictions.",
  },
  {
    id: 161,
    title: "WALL·E",
    type: "movie",
    genre: ["Animation", "Family", "Science Fiction"],
    year: 2008,
    platform: "jiohotstar",
    img: "https://image.tmdb.org/t/p/w500/hbhFnRzzg6RjYpUI8bA18GfC6Oh.jpg",
    desc: "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.",
  },
  {
    id: 162,
    title: "The Sopranos",
    type: "series",
    genre: ["Drama", "Crime"],
    year: 1999,
    platform: "jiohotstar",
    img: "https://image.tmdb.org/t/p/w500/rTc7ZXdroqjk1alG1aWvP3TM2rC.jpg",
    desc: "New Jersey mob boss Tony Soprano deals with personal and professional issues in his home and business life that affect his mental state, leading him to seek professional psychiatric counseling.",
  },
  {
    id: 163,
    title: "Se7en",
    type: "movie",
    genre: ["Crime", "Mystery", "Thriller"],
    year: 1995,
    platform: "prime",
    img: "https://image.tmdb.org/t/p/w500/6yoghtyTpznpBqJeGUMhGmWrNBF.jpg",
    desc: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
  },
  {
    id: 164,
    title: "The Wire",
    type: "series",
    genre: ["Crime", "Drama"],
    year: 2002,
    platform: "jiohotstar",
    img: "https://image.tmdb.org/t/p/w500/4lbclrpJle9E0vLGGg4Q42i41g5.jpg",
    desc: "The drug scene in Baltimore, Maryland, is looked at through the eyes of both the drug dealers and the law enforcement officers who are tasked to stop them.",
  },
  {
    id: 165,
    title: "Spirited Away",
    type: "movie",
    genre: ["Animation", "Family", "Fantasy"],
    year: 2001,
    platform: "netflix",
    img: "https://image.tmdb.org/t/p/w500/39wmItIW2zwAtoO7K4P77449i2.jpg",
    desc: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
  },
  {
    id: 166,
    title: "House of Cards",
    type: "series",
    genre: ["Drama"],
    year: 2013,
    platform: "netflix",
    img: "https://image.tmdb.org/t/p/w500/hU1X5Lw9eC2QY4832wPROeG7G9C.jpg",
    desc: "A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him.",
  },
  {
    id: 167,
    title: "The Silence of the Lambs",
    type: "movie",
    genre: ["Crime", "Drama", "Thriller"],
    year: 1991,
    platform: "prime",
    img: "https://image.tmdb.org/t/p/w500/uS9m8f दौग 2rztvTMILWfF1K7EI.jpg",
    desc: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
  },
  {
    id: 168,
    title: "Rick and Morty",
    type: "series",
    genre: ["Animation", "Comedy", "Sci-Fi"],
    year: 2013,
    platform: "netflix",
    img: "https://image.tmdb.org/t/p/w500/8kOWDBK6XlPUzckuHDo3wwVRFwt.jpg",
    desc: "An animated series that follows the exploits of a super scientist and his not-so-bright grandson.",
  },
  {
    id: 169,
    title: "Saving Private Ryan",
    type: "movie",
    genre: ["Drama", "History", "War"],
    year: 1998,
    platform: "prime",
    img: "https://image.tmdb.org/t/p/w500/1wY4psJ5NVEhCuOYROwLH2XExM2.jpg",
    desc: "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
  },
  {
    id: 170,
    title: "Black Friday",
    type: "movie",
    genre: ["Action", "Crime", "Drama"],
    year: 2004,
    platform: "jiohotstar",
    img: "https://image.tmdb.org/t/p/w500/wETD1sTaS7rGztn12S1f0Hnhtzn.jpg",
    desc: "A film about the investigations following the 1993 serial Bombay bomb blasts, told through the different stories of the people involved -- police, conspirators, victims, middlemen.",
  },
  {
    id: 171,
    title: "Back to the Future",
    type: "movie",
    genre: ["Adventure", "Comedy", "Science Fiction"],
    year: 1985,
    platform: "prime",
    img: "https://image.tmdb.org/t/p/w500/fNOH9f1aA7XRTzl1sAOx9iF553Q.jpg",
    desc: "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.",
  },
  {
    id: 172,
    title: "The Family Man",
    type: "series",
    genre: ["Action", "Drama"],
    year: 2019,
    platform: "prime",
    img: "https://image.tmdb.org/t/p/w500/1aT3r3gD9k8VJ5E54P84aLQ70Tz.jpg",
    desc: "A working man from the National Investigation Agency tries to protect the nation from terrorism, but he also has to protect his family from the impact of his secretive, high-pressure job.",
  },
  {
    id: 173,
    title: "La La Land",
    type: "movie",
    genre: ["Comedy", "Drama", "Romance"],
    year: 2016,
    platform: "netflix",
    img: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdEjzEVXldcIeQ.jpg",
    desc: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
  },
  {
    id: 174,
    title: "Aspirants",
    type: "series",
    genre: ["Drama"],
    year: 2021,
    platform: "youtube",
    img: "https://image.tmdb.org/t/p/w500/61cQ5Qy15hCSv21ZW2n3i1P8tCC.jpg",
    desc: "It is the story of the journey of three UPSC (public service competitive exam in India) aspirants and their friendship against all odds.",
  },
  {
    id: 175,
    title: "Gladiator",
    type: "movie",
    genre: ["Action", "Drama", "Adventure"],
    year: 2000,
    platform: "prime",
    img: "https://image.tmdb.org/t/p/w500/ty8TGRmv2BERbGn2maH9HLriiVs.jpg",
    desc: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
  },
  {
    id: 176,
    title: "Ozark",
    type: "series",
    genre: ["Crime", "Drama", "Thriller"],
    year: 2017,
    platform: "netflix",
    img: "https://image.tmdb.org/t/p/w500/pCGyBmd0x6v22M2eEktbC1i5TfG.jpg",
    desc: "A financial advisor drags his family from Chicago to the Missouri Ozarks, where he must launder money to appease a drug boss.",
  },
  {
    id: 177,
    title: "The Prestige",
    type: "movie",
    genre: ["Drama", "Mystery", "Science Fiction"],
    year: 2006,
    platform: "prime",
    img: "https://image.tmdb.org/t/p/w500/tRNlZbgNCNOpLpbPEz5L8G8A0JN.jpg",
    desc: "After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
  },
  {
    id: 178,
    title: "Scam 1992: The Harshad Mehta Story",
    type: "series",
    genre: ["Crime", "Drama", "History"],
    year: 2020,
    platform: "youtube",
    img: "https://image.tmdb.org/t/p/w500/saOFbCF1H85wV3gCRa9z4nJd2t.jpg",
    desc: "Set in 1980s and 90s Bombay, it follows the life of Harshad Mehta, a stockbroker who took the stock market to dizzying heights and his catastrophic downfall.",
  },
  {
    id: 179,
    title: "The Departed",
    type: "movie",
    genre: ["Drama", "Thriller", "Crime"],
    year: 2006,
    platform: "netflix",
    img: "https://image.tmdb.org/t/p/w500/kK9plwebeAGyiGdc5sICnQnpX0Y.jpg",
    desc: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
  },
  {
    id: 180,
    title: "Death Note",
    type: "series",
    genre: ["Animation", "Crime", "Drama"],
    year: 2006,
    platform: "netflix",
    img: "https://image.tmdb.org/t/p/w500/iigTZbPse44P531wOCB4eFD4a6m.jpg",
    desc: "An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook that can kill anyone whose name is written in it.",
  },
  {
    id: 181,
    title: "Terminator 2: Judgment Day",
    type: "movie",
    genre: ["Action", "Thriller", "Science Fiction"],
    year: 1991,
    platform: "prime",
    img: "https://image.tmdb.org/t/p/w500/5MdeLMWB2y01I3oj2I7Xb0V7273.jpg",
    desc: "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her ten-year-old son John from a more advanced and powerful cyborg.",
  },
  {
    id: 182,
    title: "True Detective",
    type: "series",
    genre: ["Crime", "Drama", "Mystery"],
    year: 2014,
    platform: "jiohotstar",
    img: "https://image.tmdb.org/t/p/w500/hE3HoklC1p8a5Z30741f4RIaKCH.jpg",
    desc: "An anthology series in which police investigations unearth the personal and professional secrets of those involved, both within and outside the law.",
  },
  {
    id: 183,
    title: "Alien",
    type: "movie",
    genre: ["Horror", "Science Fiction"],
    year: 1979,
    platform: "jiohotstar",
    img: "https://image.tmdb.org/t/p/w500/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg",
    desc: "After a space merchant vessel perceives an unknown transmission as a distress call, one of the crew is attacked by a mysterious life form and they soon realize that its life cycle has merely begun.",
  },
  {
    id: 184,
    title: "Vikings",
    type: "series",
    genre: ["Action", "Adventure", "Drama"],
    year: 2013,
    platform: "netflix",
    img: "https://image.tmdb.org/t/p/w500/bQLrHIRNEkE3PdIW2XhGOPDRLNE.jpg",
    desc: "The adventures of Ragnar Lothbrok, the greatest hero of his age. The series tells the sagas of Ragnar's band of Viking brothers and his family, as he rises to become King of the Viking tribes.",
  },
  {
    id: 185,
    title: "Psycho",
    type: "movie",
    genre: ["Horror", "Drama", "Thriller"],
    year: 1960,
    platform: "youtube",
    img: "https://image.tmdb.org/t/p/w500/81d8oyEFgj7FU9s4lGvlaS04T0m.jpg",
    desc: "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run, and checks into a remote motel run by a young man under the domination of his mother.",
  },
  {
    id: 186,
    title: "Daredevil",
    type: "series",
    genre: ["Action", "Crime", "Drama"],
    year: 2015,
    platform: "netflix",
    img: "https://image.tmdb.org/t/p/w500/p2GfB1vA3a12xqa6g2pzaq9T63i.jpg",
    desc: "A blind lawyer by day, vigilante by night. Matt Murdock fights the injustice of Hell's Kitchen as Daredevil.",
  },
  {
    id: 187,
    title: "Dr. Strangelove",
    type: "movie",
    genre: ["Drama", "Comedy", "War"],
    year: 1964,
    platform: "youtube",
    img: "https://image.tmdb.org/t/p/w500/4I1jxRRJhM3tr8vSKN3x30l0e8t.jpg",
    desc: "An insane general triggers a path to nuclear holocaust that a War Room full of politicians and generals frantically tries to stop.",
  },
  {
    id: 188,
    title: "Band of Brothers",
    type: "series",
    genre: ["War", "Drama"],
    year: 2001,
    platform: "jiohotstar",
    img: "https://image.tmdb.org/t/p/w500/z1e22y3U2k1lJ1aEVb78Yv0o1k0.jpg",
    desc: "The story of Easy Company of the U.S. Army 101st Airborne Division, and their mission in World War II Europe, from Operation Overlord, through V-J Day.",
  },
  {
    id: 189,
    title: "Once Upon a Time in Hollywood",
    type: "movie",
    genre: ["Comedy", "Drama", "Thriller"],
    year: 2019,
    platform: "prime",
    img: "https://image.tmdb.org/t/p/w500/8j58iEBw9pYFD2L7lqRN4kdPk02.jpg",
    desc: "A faded television actor and his stunt double strive to achieve fame and success in the final years of Hollywood's Golden Age in 1969 Los Angeles.",
  },
  {
    id: 190,
    title: "Gullak",
    type: "series",
    genre: ["Comedy", "Drama", "Family"],
    year: 2019,
    platform: "youtube",
    img: "https://image.tmdb.org/t/p/w500/s3TjA01N9xl1gC62Vd4Jb27aSTi.jpg",
    desc: "Set in quaint by-lanes in the heart of India, Gullak is a collection of disarming and relatable tales of the Mishra family.",
  },
  {
    id: 191,
    title: "Jurassic Park",
    type: "movie",
    genre: ["Adventure", "Science Fiction"],
    year: 1993,
    platform: "netflix",
    img: "https://image.tmdb.org/t/p/w500/oU7Oq2kFAAlGqbU4VoAE36g4hoI.jpg",
    desc: "A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
  },
  {
    id: 192,
    title: "Severance",
    type: "series",
    genre: ["Sci-Fi", "Drama", "Mystery"],
    year: 2022,
    platform: "prime",
    img: "https://image.tmdb.org/t/p/w500/lFf6LLr96dH04Ees6t5305aKzcA.jpg",
    desc: "Mark leads a team of office workers whose memories have been surgically divided between their work and personal lives. When a mysterious colleague appears outside of work, it begins a journey to discover the truth about their jobs.",
  },
  {
    id: 193,
    title: "Eternal Sunshine of the Spotless Mind",
    type: "movie",
    genre: ["Science Fiction", "Drama", "Romance"],
    year: 2004,
    platform: "prime",
    img: "https://image.tmdb.org/t/p/w500/5MwkWH9tYge2p51e1s0d2E3d23k.jpg",
    desc: "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.",
  },
  {
    id: 194,
    title: "The West Wing",
    type: "series",
    genre: ["Drama"],
    year: 1999,
    platform: "jiohotstar",
    img: "https://image.tmdb.org/t/p/w500/r3pPehXQo7w746V1A2q1x3D3a0b.jpg",
    desc: "Inside the lives of staffers in the West Wing of the White House.",
  },
  {
    id: 195,
    title: "The Truman Show",
    type: "movie",
    genre: ["Comedy", "Drama"],
    year: 1998,
    platform: "netflix",
    img: "https://image.tmdb.org/t/p/w500/4nC40g6aIe2sGIy1G1a3m9G2v0.jpg",
    desc: "An insurance salesman discovers his whole life is actually a reality TV show.",
  },
  {
    id: 196,
    title: "Cosmos: A Spacetime Odyssey",
    type: "series",
    genre: ["Documentary"],
    year: 2014,
    platform: "youtube",
    img: "https://image.tmdb.org/t/p/w500/8uD4vK3T4eJvhmY169bJc2Sg2A5.jpg",
    desc: "An exploration of our discovery of the laws of nature and coordinates in space and time.",
  },
  {
    id: 197,
    title: "No Country for Old Men",
    type: "movie",
    genre: ["Crime", "Drama", "Thriller"],
    year: 2007,
    platform: "prime",
    img: "https://image.tmdb.org/t/p/w500/6d5XOczc2i641I3e9sR2a4Dwr18.jpg",
    desc: "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.",
  },
  {
    id: 198,
    title: "Planet Earth II",
    type: "series",
    genre: ["Documentary"],
    year: 2016,
    platform: "youtube",
    img: "https://image.tmdb.org/t/p/w500/iZ2dtQmMrcUqbutGHKSbwwG1tT2.jpg",
    desc: "David Attenborough returns with a new wildlife documentary that shows life in a variety of habitats.",
  },
  {
    id: 199,
    title: "There Will Be Blood",
    type: "movie",
    genre: ["Drama"],
    year: 2007,
    platform: "netflix",
    img: "https://image.tmdb.org/t/p/w500/fa4ymNglodC06Y2w7d232Ab1I05.jpg",
    desc: "A story of family, religion, hatred, oil and madness, focusing on a turn-of-the-century prospector in the early days of the business.",
  },
  {
    id: 200,
    title: "Lost",
    type: "series",
    genre: ["Adventure", "Mystery", "Drama"],
    year: 2004,
    platform: "jiohotstar",
    img: "https://image.tmdb.org/t/p/w500/og6S0aTZU6YUJAbqxeKjCa3kY1E.jpg",
    desc: "The survivors of a plane crash are forced to work together in order to survive on a seemingly deserted tropical island.",
  },
];


const genres = Array.from(new Set(data.flatMap((d) => d.genre))).sort();
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

let watchlist = JSON.parse(localStorage.getItem("cinemood_watchlist") || "[]");

function updateWatchlistBadge() {
  watchlistBtn.innerText = `Watchlist (${watchlist.length})`;
}

// THEME TOGGLE
(function () {
  const themeToggle = document.getElementById("themeToggle");
  const saved = localStorage.getItem("cinemood_theme");
  if (saved === "light") document.body.classList.add("toggle-light");

  if (themeToggle) {
    themeToggle.textContent = document.body.classList.contains("toggle-light")
      ? "Light"
      : "Dark";
    themeToggle.addEventListener("click", () => {
      const isLight = document.body.classList.toggle("toggle-light");
      themeToggle.textContent = isLight ? "Light" : "Dark";
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
    div.className = "card"; // Re-using card class might not be ideal here
    div.innerHTML = `<div style="display:flex;gap:12px;align-items:center">
      <div style="width:80px;height:60px;background-image:url('${i.img}');background-size:cover;border-radius:8px"></div>
      <div style="flex:1"><h4 style="margin:0">${i.title}</h4><div class="meta">${i.year} • ${i.platform}</div></div>
      <div><button class="cta" onclick="openPlatform('${i.platform}','${i.title.replace(/'/g,"")}')">Watch</button><button class="ghost" style="margin-top:6px" onclick="removeFromWatchlist(${i.id})">Remove</button></div>
    </div>`;
    watchlistItems.appendChild(div);
  });
}

function renderToast(msg) {
  const t = document.createElement("div");
  t.innerText = msg;
  t.className = "toast";
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2600);
}

function init() {
  genres.forEach((g) => {
    const el = document.createElement("div");
    el.className = "genre";
    el.innerText = g;
    el.onclick = () => {
      el.classList.toggle("active");
      filterAndRender();
    };
    genreChips.appendChild(el);
  });
  renderCards(data);
  renderFeatured(data[0]);
  updateWatchlistBadge();
}

function renderCards(list) {
  cardsGrid.innerHTML = "";
  list.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card platform-" + item.platform;
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

function filterAndRender() {
  const activeGenres = Array.from(document.querySelectorAll(".genre.active")).map((el) => el.innerText);
  const mood = (moodInput.value || "").toLowerCase();
  const platform = platformSelect.value;
  const titleQuery = (titleSearchInput.value || "").toLowerCase();

  const filtered = data.filter((d) => {
    if (platform !== "all" && d.platform !== platform) return false;
    if (activeGenres.length && !activeGenres.some((g) => d.genre.includes(g))) return false;
    
    const combinedText = [d.title, ...d.genre, d.desc].join(" ").toLowerCase();
    if (mood && !combinedText.includes(mood)) return false;
    
    if (titleQuery && !d.title.toLowerCase().includes(titleQuery)) return false;

    return true;
  });
  
  renderCards(filtered);
  if (filtered[0]) {
      renderFeatured(filtered[0]);
  } else {
      featuredArea.innerHTML = `<p class="lead" style="text-align:center; width:100%;">No matching titles found.</p>`;
  }
}

// Event Listeners
searchBtn.onclick = filterAndRender;
titleSearchBtn.onclick = filterAndRender;
clearBtn.onclick = () => {
  document.querySelectorAll(".genre.active").forEach((e) => e.classList.remove("active"));
  moodInput.value = "";
  titleSearchInput.value = "";
  platformSelect.value = "all";
  filterAndRender();
};
platformSelect.onchange = filterAndRender;

watchlistBtn.onclick = () => {
  watchlistModal.style.display = "flex";
  renderWatchlist();
};
closeWatchlist.onclick = () => {
  watchlistModal.style.display = "none";
};

// Mobile Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".nav");
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
});

// Initialize the app with the static data
init();
