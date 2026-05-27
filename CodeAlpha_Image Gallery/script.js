const galleryData = [
    {
        id: 1,
        category: 'nature',
        src: 'https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?auto=format&fit=crop&w=800&q=80',
        hdSrc: 'https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?auto=format&fit=crop&w=1600&q=100',
        caption: 'Misty Forest Morning',
        spanClass: 'span-2-row'
    },
    {
        id: 2,
        category: 'animals',
        src: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=80',
        hdSrc: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1600&q=100',
        caption: 'Cute Dog',
        spanClass: ''
    },
    {
        id: 3,
        category: 'architecture',
        src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
        hdSrc: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=100',
        caption: 'Modern Glass Facade',
        spanClass: 'span-2-col'
    },
    {
        id: 4,
        category: 'nature',
        src: 'https://plus.unsplash.com/premium_photo-1706625696284-24dcdb90ee3f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        hdSrc: 'https://plus.unsplash.com/premium_photo-1706625696284-24dcdb90ee3f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: 'Golden Hour Mountains',
        spanClass: ''
    },
    {
        id: 5,
        category: 'animals',
        src: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',
        hdSrc: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1600&q=100',
        caption: 'Curious Cat',
        spanClass: 'span-2-row'
    },
    {
        id: 6,
        category: 'architecture',
        src: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=800&q=80',
        hdSrc: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1600&q=100',
        caption: 'Concrete Curves',
        spanClass: ''
    },
    {
        id: 7,
        category: 'nature',
        src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80',
        hdSrc: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=100',
        caption: 'Lush Canopy',
        spanClass: 'span-2-col'
    },
    {
        id: 8,
        category: 'animals',
        src: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=800&q=80',
        hdSrc: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=1600&q=100',
        caption: 'Wild Fox',
        spanClass: ''
    },
    {
        id: 9,
        category: 'architecture',
        src: 'https://images.unsplash.com/photo-1428366890462-dd4baecf492b?auto=format&fit=crop&w=800&q=80',
        hdSrc: 'https://images.unsplash.com/photo-1428366890462-dd4baecf492b?auto=format&fit=crop&w=1600&q=100',
        caption: 'Symmetrical Halls',
        spanClass: 'span-2-row'
    },
    {
        id: 10,
        category: 'food',
        src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80',
        hdSrc: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1600&q=100',
        caption: 'Fresh Salad',
        spanClass: ''
    },
    {
        id: 11,
        category: 'drawing',
        src: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80',
        hdSrc: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1600&q=100',
        caption: 'Artistic Sketch',
        spanClass: 'span-2-col'
    },
    {
        id: 12,
        category: 'food',
        src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
        hdSrc: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1600&q=100',
        caption: 'Gourmet Pizza',
        spanClass: 'span-2-row'
    },
    {
        id: 13,
        category: 'drawing',
        src: 'https://images.unsplash.com/photo-1580136579312-94651dfd596d?auto=format&fit=crop&w=800&q=80',
        hdSrc: 'https://images.unsplash.com/photo-1580136579312-94651dfd596d?auto=format&fit=crop&w=1600&q=100',
        caption: 'Pencil Portrait',
        spanClass: ''
    },
    {
        id: 14,
        category: 'food',
        src: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=800&q=80',
        hdSrc: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=1600&q=100',
        caption: 'Delicious Sandwich',
        spanClass: ''
    },
    {
        id: 15,
        category: 'drawing',
        src: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=800&q=80',
        hdSrc: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1600&q=100',
        caption: 'Creative Painting',
        spanClass: 'span-2-col'
    },
    {
        id: 16,
        category: 'nature',
        src: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=800&q=80',
        hdSrc: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1600&q=100',
        caption: 'Mountain Lake',
        spanClass: ''
    },
    {
        id: 17,
        category: 'nature',
        src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&q=80',
        hdSrc: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1600&q=100',
        caption: 'Green Valley',
        spanClass: ''
    },
    {
        id: 18,
        category: 'animals',
        src: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80',
        hdSrc: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1600&q=100',
        caption: 'Happy Puppy',
        spanClass: ''
    },
    {
        id: 19,
        category: 'animals',
        src: 'https://images.unsplash.com/photo-1456926631375-92c8ce872def?auto=format&fit=crop&w=800&q=80',
        hdSrc: 'https://images.unsplash.com/photo-1456926631375-92c8ce872def?auto=format&fit=crop&w=1600&q=100',
        caption: 'Leopard Gaze',
        spanClass: ''
    },
    {
        id: 20,
        category: 'architecture',
        src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80',
        hdSrc: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=100',
        caption: 'White Building',
        spanClass: ''
    },
    {
        id: 21,
        category: 'architecture',
        src: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&w=800&q=80',
        hdSrc: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&w=1600&q=100',
        caption: 'Sky High',
        spanClass: ''
    },
    {
        id: 22,
        category: 'food',
        src: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
        hdSrc: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1600&q=100',
        caption: 'Classic Burger',
        spanClass: ''
    },
    {
        id: 23,
        category: 'food',
        src: 'https://plus.unsplash.com/premium_photo-1678198828975-02016abf2c5e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        hdSrc: 'https://plus.unsplash.com/premium_photo-1678198828975-02016abf2c5e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: 'Sweet Dessert',
        spanClass: ''
    },
    {
        id: 24,
        category: 'drawing',
        src: 'https://images.unsplash.com/photo-1688225206417-0bb2c9e9c4f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFdhdGVyY29sb3IlMjBBcnR8ZW58MHx8MHx8fDA%3D',
        hdSrc: 'https://images.unsplash.com/photo-1688225206417-0bb2c9e9c4f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFdhdGVyY29sb3IlMjBBcnR8ZW58MHx8MHx8fDA%3D',
        caption: 'Watercolor Art',
        spanClass: ''
    },
    {
        id: 25,
        category: 'drawing',
        src: 'https://images.unsplash.com/photo-1596460107916-430662021049?auto=format&fit=crop&w=800&q=80',
        hdSrc: 'https://images.unsplash.com/photo-1596460107916-430662021049?auto=format&fit=crop&w=1600&q=100',
        caption: 'Digital Sketch',
        spanClass: ''
    },
    {
        id: 26,
        category: 'nature',
        src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80',
        hdSrc: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=100',
        caption: 'Sunset Field',
        spanClass: ''
    },
    {
        id: 27,
        category: 'nature',
        src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80',
        hdSrc: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1600&q=100',
        caption: 'Mountain Peak',
        spanClass: ''
    },
    {
        id: 28,
        category: 'nature',
        src: 'https://images.unsplash.com/photo-1421091242698-34f6ad7fc088?auto=format&fit=crop&w=800&q=80',
        hdSrc: 'https://images.unsplash.com/photo-1421091242698-34f6ad7fc088?auto=format&fit=crop&w=1600&q=100',
        caption: 'Autumn Leaves',
        spanClass: ''
    },
    {
        id: 29,
        category: 'animals',
        src: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800&q=80',
        hdSrc: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=1600&q=100',
        caption: 'Elephant Herd',
        spanClass: ''
    },
    {
        id: 30,
        category: 'animals',
        src: 'https://images.unsplash.com/photo-1555169062-013468b47731?auto=format&fit=crop&w=800&q=80',
        hdSrc: 'https://images.unsplash.com/photo-1555169062-013468b47731?auto=format&fit=crop&w=1600&q=100',
        caption: 'Colorful Parrot',
        spanClass: ''
    },
    {
        id: 31,
        category: 'animals',
        src: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGlueSUyMEhhbXN0ZXJ8ZW58MHx8MHx8fDA%3D',
        hdSrc: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGlueSUyMEhhbXN0ZXJ8ZW58MHx8MHx8fDA%3D',
        caption: 'Tiny Hamster',
        spanClass: ''
    },
    {
        id: 32,
        category: 'architecture',
        src: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=800&q=80',
        hdSrc: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1600&q=100',
        caption: 'Abstract Building',
        spanClass: ''
    },
    {
        id: 33,
        category: 'architecture',
        src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
        hdSrc: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=100',
        caption: 'Minimalist Home',
        spanClass: ''
    },
    {
        id: 34,
        category: 'architecture',
        src: 'https://plus.unsplash.com/premium_photo-1676823570572-db8c83487ed5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8SW50ZXJpb3IlMjBIYWxsfGVufDB8fDB8fHww',
        hdSrc: 'https://plus.unsplash.com/premium_photo-1676823570572-db8c83487ed5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8SW50ZXJpb3IlMjBIYWxsfGVufDB8fDB8fHww',
        caption: 'Interior Hall',
        spanClass: ''
    },
    {
        id: 35,
        category: 'food',
        src: 'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?auto=format&fit=crop&w=800&q=80',
        hdSrc: 'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?auto=format&fit=crop&w=1600&q=100',
        caption: 'Pancakes',
        spanClass: ''
    },
    {
        id: 36,
        category: 'food',
        src: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=800&q=80',
        hdSrc: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=1600&q=100',
        caption: 'Pasta',
        spanClass: ''
    },
    {
        id: 37,
        category: 'food',
        src: 'https://plus.unsplash.com/premium_photo-1671379041175-782d15092945?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJ1aXRzfGVufDB8fDB8fHww',
        hdSrc: 'https://plus.unsplash.com/premium_photo-1671379041175-782d15092945?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJ1aXRzfGVufDB8fDB8fHww',
        caption: 'Fruits',
        spanClass: ''
    },
    {
        id: 38,
        category: 'drawing',
        src: 'https://images.unsplash.com/photo-1720248090619-95d555f01bfb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UGVuY2lsJTIwQXJ0fGVufDB8fDB8fHww',
        hdSrc: 'https://images.unsplash.com/photo-1720248090619-95d555f01bfb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UGVuY2lsJTIwQXJ0fGVufDB8fDB8fHww',
        caption: 'Pencil Art',
        spanClass: ''
    },
    {
        id: 39,
        category: 'drawing',
        src: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?auto=format&fit=crop&w=800&q=80',
        hdSrc: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?auto=format&fit=crop&w=1600&q=100',
        caption: 'Colorful Paint',
        spanClass: ''
    },
    {
        id: 40,
        category: 'drawing',
        src: 'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?auto=format&fit=crop&w=800&q=80',
        hdSrc: 'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?auto=format&fit=crop&w=1600&q=100',
        caption: 'Charcoal Sketch',
        spanClass: ''
    }
];

const galleryContainer = document.getElementById('gallery');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('search-input');

// Lightbox Elements
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-image');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxCounter = document.getElementById('lightbox-counter');
const closeBtn = document.getElementById('close-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentItems = [...galleryData];
let currentIndex = 0;
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// Initialize Gallery
function initGallery() {
    renderGallery(galleryData);
    setupFilters();
    setupSearch();
    setupLightbox();
}

// Render Gallery Items
function renderGallery(items) {
    galleryContainer.innerHTML = '';
    items.forEach((item, index) => {
        const itemEl = document.createElement('div');
        itemEl.className = `gallery-item ${item.spanClass}`;
        itemEl.dataset.category = item.category;
        itemEl.dataset.index = index;
        
        const isFav = favorites.includes(item.id);
        itemEl.innerHTML = `
            <img src="${item.src}" alt="${item.caption}" loading="lazy">
            <div class="gallery-overlay">
                <span class="category-tag">${item.category}</span>
                <h3 class="item-caption">${item.caption}</h3>
                <div class="item-actions">
                    <button class="action-btn favorite-btn ${isFav ? 'active' : ''}" data-id="${item.id}" aria-label="Favorite">
                        <i class="ri-heart-3-${isFav ? 'fill' : 'line'}"></i>
                    </button>
                    <button class="action-btn download-btn" aria-label="Download" onclick="event.stopPropagation(); forceDownload('${item.hdSrc}', 'Prismatic-${item.id}.jpg')">
                        <i class="ri-download-line"></i>
                    </button>
                </div>
            </div>
        `;

        itemEl.addEventListener('click', (e) => {
            if (e.target.closest('.action-btn')) return; // Prevent lightbox if action button clicked
            openLightbox(index);
        });
        
        // Favorite functionality
        const favBtn = itemEl.querySelector('.favorite-btn');
        favBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleFavorite(item.id, favBtn);
        });
        galleryContainer.appendChild(itemEl);
        
        // Staggered animation
        setTimeout(() => {
            itemEl.classList.add('showing');
        }, index * 50);
    });
}

// Toggle Favorite Function
function toggleFavorite(id, btnEl = null) {
    const index = favorites.indexOf(id);
    if (index === -1) {
        favorites.push(id);
        if (btnEl) btnEl.querySelector('i').className = 'ri-heart-3-fill';
    } else {
        favorites.splice(index, 1);
        if (btnEl) btnEl.querySelector('i').className = 'ri-heart-3-line';
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    
    // Update lightbox favorite button if active
    if (lightbox.classList.contains('active') && currentItems[currentIndex].id === id) {
        updateLightboxActions();
    }
    
    // Update gallery grid favorite buttons globally
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        if (parseInt(btn.dataset.id) === id) {
            btn.querySelector('i').className = favorites.includes(id) ? 'ri-heart-3-fill' : 'ri-heart-3-line';
        }
    });
}

// Setup Filters and Search
function setupSearch() {
    searchInput.addEventListener('input', () => {
        applyFilters();
    });
}

function setupFilters() {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active class
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            applyFilters();
        });
    });
}

function applyFilters() {
    const activeBtn = document.querySelector('.filter-btn.active');
    const category = activeBtn ? activeBtn.dataset.filter : 'all';
    const query = searchInput.value.toLowerCase().trim();

    const items = document.querySelectorAll('.gallery-item');
    
    // First hide everything
    items.forEach(item => {
        item.classList.remove('showing');
        item.classList.add('hiding');
    });

    setTimeout(() => {
        currentItems = galleryData.filter(item => {
            const matchesCategory = category === 'all' || item.category === category;
            const matchesSearch = item.caption.toLowerCase().includes(query) || item.category.toLowerCase().includes(query);
            return matchesCategory && matchesSearch;
        });
        
        renderGallery(currentItems);
    }, 400); // Wait for hide animation
}

// Lightbox Logic
function setupLightbox() {
    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', showPrev);
    nextBtn.addEventListener('click', showNext);
    
    const lbFavBtn = document.getElementById('lightbox-favorite-btn');
    lbFavBtn.addEventListener('click', () => {
        const item = currentItems[currentIndex];
        toggleFavorite(item.id);
    });
    
    // Close on backdrop click
    lightbox.addEventListener('click', (e) => {
        if (e.target.classList.contains('lightbox-backdrop') || e.target.classList.contains('lightbox-ui')) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showPrev();
        if (e.key === 'ArrowRight') showNext();
    });
}

function openLightbox(index) {
    currentIndex = index;
    updateLightboxContent();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
    setTimeout(() => {
        lightboxImg.src = ''; // Clear image after transition
        lightboxImg.classList.remove('loaded');
    }, 600);
}

function updateLightboxContent() {
    const item = currentItems[currentIndex];
    
    lightboxImg.classList.remove('loaded');
    
    // Preload image
    const img = new Image();
    img.src = item.hdSrc;
    img.onload = () => {
        lightboxImg.src = item.hdSrc;
        lightboxImg.classList.add('loaded');
    };

    lightboxCaption.textContent = item.caption;
    lightboxCounter.textContent = `${currentIndex + 1} / ${currentItems.length}`;
    updateLightboxActions();
}

function updateLightboxActions() {
    const item = currentItems[currentIndex];
    const lbFavBtn = document.getElementById('lightbox-favorite-btn');
    const lbDownBtn = document.getElementById('lightbox-download-btn');
    
    const isFav = favorites.includes(item.id);
    lbFavBtn.classList.toggle('active', isFav);
    lbFavBtn.querySelector('i').className = isFav ? 'ri-heart-3-fill' : 'ri-heart-3-line';
    
    lbDownBtn.onclick = (e) => {
        e.preventDefault();
        forceDownload(item.hdSrc, `Prismatic-${item.id}.jpg`);
    };
}

function showPrev() {
    currentIndex = (currentIndex - 1 + currentItems.length) % currentItems.length;
    updateLightboxContent();
}

function showNext() {
    currentIndex = (currentIndex + 1) % currentItems.length;
    updateLightboxContent();
}

// Start the app
document.addEventListener('DOMContentLoaded', initGallery);

// Force Download Function
async function forceDownload(url, filename) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const blob = await response.blob();
        const blobUrl = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = blobUrl;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
        console.error('Download failed:', error);
        window.open(url, '_blank'); // fallback
    }
}
