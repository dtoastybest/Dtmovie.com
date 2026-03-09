/* ==========================================
   DT MOVIES — app.js
   All interactivity: movies, modal, filters
   ========================================== */

'use strict';

/* ---------- Movie Data ---------- */
const MOVIES = [
  {
    id: 1,
    title: 'Big Buck Bunny',
    year: 2008,
    rating: 8.5,
    duration: '9 min',
    genres: ['Animation', 'Comedy', 'Family'],
    synopsis: 'A large, gentle rabbit sits in a pastoral meadow enjoying the sights and sounds of nature. His tranquility is disrupted by three young rodents who take pleasure in bullying him. The rabbit decides to retaliate against the bullies with elaborate traps using the resources of the forest. A landmark open-source animated short that changed indie animation.',
    poster: 'https://picsum.photos/seed/bbb/400/600',
    videoType: 'html5',
    videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4',
    trending: true,
  },
  {
    id: 2,
    title: 'Elephant Dream',
    year: 2006,
    rating: 7.8,
    duration: '11 min',
    genres: ['Animation', 'Sci-Fi', 'Drama'],
    synopsis: 'In a dystopian mechanical world, two characters, Emo and Proog, explore a fantastical world of strange, living machines. Proog believes in the power of the world, while Emo questions its reality. The first open movie project from the Blender Institute, a pioneering work in computer animation.',
    poster: 'https://picsum.photos/seed/elephant/400/600',
    videoType: 'html5',
    videoSrc: 'https://www.w3schools.com/html/movie.mp4',
    trending: true,
  },
  {
    id: 3,
    title: 'Sintel',
    year: 2010,
    rating: 8.9,
    duration: '15 min',
    genres: ['Animation', 'Adventure', 'Drama'],
    synopsis: 'A young woman named Sintel searches relentlessly for a dragon she once befriended. Her journey is long and perilous, filled with treacherous environments and hostile foes. The emotional climax reveals a heartbreaking twist that challenges everything she believed. An award-winning short from Blender Institute.',
    poster: 'https://picsum.photos/seed/sintel/400/600',
    videoType: 'html5',
    videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    trending: true,
  },
  {
    id: 4,
    title: 'Cosmos Laundromat',
    year: 2015,
    rating: 8.2,
    duration: '12 min',
    genres: ['Sci-Fi', 'Drama', 'Animation'],
    synopsis: 'On a desolate island, Franck is about to end it all when Victor, a mysterious life coach, arrives with an unusual proposition — a second chance at life. What begins as a surreal escape becomes a mind-bending journey across the cosmos. The most ambitious Blender open movie to date.',
    poster: 'https://picsum.photos/seed/cosmos/400/600',
    videoType: 'html5',
    videoSrc: 'https://www.w3schools.com/html/movie.mp4',
    trending: false,
  },
  {
    id: 5,
    title: 'Tears of Steel',
    year: 2012,
    rating: 7.6,
    duration: '12 min',
    genres: ['Sci-Fi', 'Action', 'Drama'],
    synopsis: 'In a dystopian future Amsterdam, a group of warriors fight against robotic overlords that have devastated humanity. Four soldiers revisit the bridge where they fought many years ago, confronting both robots and their own haunted pasts. A VFX-heavy showcase blending live action and CGI.',
    poster: 'https://picsum.photos/seed/steel/400/600',
    videoType: 'html5',
    videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trending: false,
  },
  {
    id: 6,
    title: 'Caminandes: Llamigos',
    year: 2016,
    rating: 8.1,
    duration: '3 min',
    genres: ['Animation', 'Comedy', 'Family'],
    synopsis: 'Koro the llama has a pebble problem — he loves to throw rocks at things. But when he slings a stone at a particularly determined penguin, he may have bitten off more than he can chew. A charming and hilariously funny animated short with beautiful Patagonian landscapes.',
    poster: 'https://picsum.photos/seed/llama/400/600',
    videoType: 'html5',
    videoSrc: 'https://www.w3schools.com/html/movie.mp4',
    trending: false,
  },
  {
    id: 7,
    title: 'Glass Half',
    year: 2020,
    rating: 7.4,
    duration: '6 min',
    genres: ['Drama', 'Action'],
    synopsis: 'A lone fighter must push through the exhaustion of a brutal training session to overcome self-doubt and discover untapped reserves of strength. A powerful meditation on resilience, mental fortitude, and the human spirit\'s refusal to quit even when the body says stop.',
    poster: 'https://picsum.photos/seed/glass/400/600',
    videoType: 'html5',
    videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    trending: false,
  },
  {
    id: 8,
    title: 'Steel Heart',
    year: 2019,
    rating: 7.9,
    duration: '8 min',
    genres: ['Action', 'Sci-Fi'],
    synopsis: 'In the near future, a retired combat android reactivates itself to protect a small child from a brutal gang that has taken over their neighborhood. Sleek action sequences and a surprising emotional core make this a standout in the micro-budget sci-fi genre.',
    poster: 'https://picsum.photos/seed/steelheart/400/600',
    videoType: 'html5',
    videoSrc: 'https://www.w3schools.com/html/movie.mp4',
    trending: true,
  },
  {
    id: 9,
    title: 'The Blue Marble',
    year: 2018,
    rating: 8.0,
    duration: '7 min',
    genres: ['Drama', 'Adventure'],
    synopsis: 'An astronaut orbiting Earth grapples with a memory she cannot shake — a conversation with her dying father about what truly matters in life. Floating above the blue marble, she must decide whether to return home or continue her mission into deep space. Quietly devastating.',
    poster: 'https://picsum.photos/seed/bluemarble/400/600',
    videoType: 'html5',
    videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trending: true,
  },
  {
    id: 10,
    title: 'Neon District',
    year: 2022,
    rating: 8.3,
    duration: '10 min',
    genres: ['Action', 'Comedy', 'Sci-Fi'],
    synopsis: 'A bumbling detective in a rain-soaked cyberpunk city stumbles onto the biggest case of her career — only to discover it involves her own missing memories. Part noir mystery, part slapstick comedy, Neon District is a neon-drenched genre mashup with a huge heart.',
    poster: 'https://picsum.photos/seed/neon/400/600',
    videoType: 'html5',
    videoSrc: 'https://www.w3schools.com/html/movie.mp4',
    trending: false,
  },
];

/* ---------- State ---------- */
let activeGenre = 'all';
let searchQuery = '';
let currentMovieId = null;
let myList = JSON.parse(localStorage.getItem('dtMoviesMyList') || '[]');

/* ---------- DOM References ---------- */
const movieGrid        = document.getElementById('movieGrid');
const trendingRow      = document.getElementById('trendingRow');
const myListRow        = document.getElementById('myListRow');
const myListSection    = document.getElementById('mylist');
const noResults        = document.getElementById('noResults');
const genreFilters     = document.getElementById('genreFilters');
const searchInput      = document.getElementById('searchInput');
const searchInputMobile= document.getElementById('searchInputMobile');
const modalOverlay     = document.getElementById('modalOverlay');
const modalClose       = document.getElementById('modalClose');
const modalCloseBtn    = document.getElementById('modalCloseBtn');
const modalAddToListBtn= document.getElementById('modalAddToListBtn');
const heroPlayBtn      = document.getElementById('heroPlayBtn');
const heroInfoBtn      = document.getElementById('heroInfoBtn');
const navbar           = document.getElementById('navbar');
const navToggle        = document.getElementById('navToggle');
const navLinks         = document.querySelector('.navbar-links');
const mobileSearchWrapper = document.querySelector('.mobile-search-wrapper');

/* ---------- Build Movie Card ---------- */
function createMovieCard(movie, badgeText) {
  const card = document.createElement('div');
  card.className = 'movie-card fade-in';
  card.dataset.id = movie.id;
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', `Watch ${movie.title}`);

  const genreTags = movie.genres.map(g => `<span class="genre-tag">${g}</span>`).join('');
  const badge = badgeText ? `<div class="card-trending-number">${badgeText}</div>` : '';
  const inList = isInMyList(movie.id);

  card.innerHTML = `
    <div class="card-poster">
      ${badge}
      <img src="${movie.poster}" alt="${movie.title} poster" loading="lazy" />
      <div class="card-overlay">
        <div class="play-icon">&#9654;</div>
        <button class="card-list-btn ${inList ? 'in-list' : ''}"
                aria-label="${inList ? 'Remove from My List' : 'Add to My List'}"
                data-id="${movie.id}">
          ${inList ? '&#10003;' : '&#43;'}
        </button>
      </div>
    </div>
    <div class="card-body">
      <div class="card-title">${movie.title}</div>
      <div class="card-meta">
        <span class="card-year">${movie.year}</span>
        <span class="card-rating">&#9733; ${movie.rating}</span>
      </div>
      <div class="card-genres">${genreTags}</div>
    </div>
  `;

  card.addEventListener('click', () => openModal(movie.id));
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal(movie.id);
    }
  });

  /* Add-to-list button: stop propagation so it doesn't open the modal */
  const listBtn = card.querySelector('.card-list-btn');
  listBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMyList(parseInt(listBtn.dataset.id));
    const nowInList = isInMyList(movie.id);
    listBtn.innerHTML = nowInList ? '&#10003;' : '&#43;';
    listBtn.classList.toggle('in-list', nowInList);
    listBtn.setAttribute('aria-label', nowInList ? 'Remove from My List' : 'Add to My List');
  });
  listBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.stopPropagation();
    }
  });

  return card;
}

/* ---------- Render Movie Grid ---------- */
function renderMovies() {
  const filtered = MOVIES.filter(m => {
    const matchGenre  = activeGenre === 'all' || m.genres.includes(activeGenre);
    const matchSearch = m.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchGenre && matchSearch;
  });

  movieGrid.innerHTML = '';

  if (filtered.length === 0) {
    noResults.style.display = 'block';
  } else {
    noResults.style.display = 'none';
    filtered.forEach(movie => {
      movieGrid.appendChild(createMovieCard(movie));
    });
  }
}

/* ---------- Render Trending Row ---------- */
function renderTrending() {
  const trending = MOVIES.filter(m => m.trending);
  trendingRow.innerHTML = '';
  trending.forEach((movie, idx) => {
    trendingRow.appendChild(createMovieCard(movie, `#${idx + 1}`));
  });
}

/* ---------- My List Helpers ---------- */
function saveMyList() {
  localStorage.setItem('dtMoviesMyList', JSON.stringify(myList));
}

function isInMyList(id) {
  return myList.includes(id);
}

function toggleMyList(id) {
  if (isInMyList(id)) {
    myList = myList.filter(item => item !== id);
  } else {
    myList.push(id);
  }
  saveMyList();
  renderMyList();
}

function renderMyList() {
  if (myList.length === 0) {
    myListSection.style.display = 'none';
    return;
  }
  myListSection.style.display = '';
  myListRow.innerHTML = '';
  myList.forEach(id => {
    const movie = MOVIES.find(m => m.id === id);
    if (movie) {
      myListRow.appendChild(createMovieCard(movie));
    }
  });
}

/* ---------- Genre Filter ---------- */
genreFilters.addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;

  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  activeGenre = btn.dataset.genre;
  renderMovies();
});

/* ---------- Open Modal ---------- */
function openModal(movieId) {
  const movie = MOVIES.find(m => m.id === movieId);
  if (!movie) return;

  currentMovieId = movieId;

  /* Populate header */
  document.getElementById('modalTitle').textContent    = movie.title;
  document.getElementById('modalYear').textContent     = movie.year;
  document.getElementById('modalRating').textContent   = `★ ${movie.rating}`;
  document.getElementById('modalDuration').textContent = movie.duration;
  document.getElementById('modalSynopsis').textContent = movie.synopsis;

  /* Genre tags */
  const genresEl = document.getElementById('modalGenres');
  genresEl.innerHTML = movie.genres.map(g => `<span class="genre-tag">${g}</span>`).join('');

  /* Video */
  const videoWrapper = document.querySelector('.modal-video-wrapper');
  videoWrapper.innerHTML = '';

  if (movie.videoType === 'html5') {
    const video = document.createElement('video');
    video.controls = true;
    video.autoplay = true;
    video.src = movie.videoSrc;
    video.style.width = '100%';
    video.style.height = '100%';
    video.style.display = 'block';
    videoWrapper.appendChild(video);
  } else if (movie.videoType === 'youtube') {
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${movie.videoSrc}?autoplay=1&rel=0`;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.style.border = 'none';
    videoWrapper.appendChild(iframe);
  }

  /* Play button inside modal */
  document.getElementById('modalPlayBtn').onclick = () => {
    const vid = videoWrapper.querySelector('video');
    if (vid) vid.play();
  };

  /* My List button */
  if (isInMyList(movieId)) {
    modalAddToListBtn.innerHTML = '&#10003; In My List';
    modalAddToListBtn.classList.add('in-list');
  } else {
    modalAddToListBtn.innerHTML = '&#43; My List';
    modalAddToListBtn.classList.remove('in-list');
  }
  modalAddToListBtn.onclick = () => {
    toggleMyList(movieId);
    if (isInMyList(movieId)) {
      modalAddToListBtn.innerHTML = '&#10003; In My List';
      modalAddToListBtn.classList.add('in-list');
    } else {
      modalAddToListBtn.innerHTML = '&#43; My List';
      modalAddToListBtn.classList.remove('in-list');
    }
  };

  /* Show overlay */
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  /* Focus management */
  setTimeout(() => modalClose.focus(), 100);
}

/* ---------- Close Modal ---------- */
function closeModal() {
  const videoWrapper = document.querySelector('.modal-video-wrapper');

  /* Pause / stop video */
  const vid = videoWrapper.querySelector('video');
  if (vid) {
    vid.pause();
    vid.src = '';
  }
  const iframe = videoWrapper.querySelector('iframe');
  if (iframe) {
    iframe.src = '';
  }

  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
  currentMovieId = null;
}

modalClose.addEventListener('click', closeModal);
modalCloseBtn.addEventListener('click', closeModal);

/* Close on overlay click (outside modal box) */
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});

/* Close on Escape key */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalOverlay.classList.contains('open')) {
    closeModal();
  }
});

/* ---------- Hero Buttons ---------- */
heroPlayBtn.addEventListener('click', () => openModal(1)); /* Big Buck Bunny */
heroInfoBtn.addEventListener('click', () => openModal(1)); /* Open modal with more info */

/* ---------- Navbar scroll effect ---------- */
window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

/* ---------- Mobile nav toggle ---------- */
navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  mobileSearchWrapper.classList.toggle('open', isOpen);
});

/* Close mobile nav when a link is clicked */
navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    mobileSearchWrapper.classList.remove('open');
  });
});

/* ---------- Search ---------- */
function handleSearch(query) {
  searchQuery = query.trim();
  /* Keep both inputs in sync */
  searchInput.value = query;
  searchInputMobile.value = query;
  renderMovies();
  if (searchQuery) {
    document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
  }
}

searchInput.addEventListener('input', (e) => handleSearch(e.target.value));
searchInputMobile.addEventListener('input', (e) => handleSearch(e.target.value));

/* ---------- Smooth scroll for nav links ---------- */
document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ---------- Init ---------- */
renderMovies();
renderTrending();
renderMyList();
