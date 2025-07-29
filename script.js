// Wallpaper data with organized categories
const wallpaperData = [
    // Nature wallpapers
    {
        id: 1,
        title: "Misty Mountain Valley",
        category: "nature",
        tags: ["mountain", "valley", "mist", "landscape"],
        url: "https://pixabay.com/get/g4eaee6e06502cea7e243e9d64d16f5a06839036d827880a702576ac66729c19574e2a85764a5e0ce4eee00c0923fa5baed0cc8770941415ae21276e1d9fd7ce2_1280.jpg"
    },
    {
        id: 2,
        title: "Serene Forest Path",
        category: "nature",
        tags: ["forest", "path", "trees", "peaceful"],
        url: "https://pixabay.com/get/gfe56e81d5e723222146ee8e77545e2d3cf4733f848e3deb5c15733bad1c7b8d2ddedac03b51edc647cc33600a536268052cc14b8ca255b5ba626c3622d7c5ee2_1280.jpg"
    },
    {
        id: 3,
        title: "Desert Sunrise",
        category: "nature",
        tags: ["desert", "sunrise", "sand", "golden"],
        url: "https://pixabay.com/get/g02a9b7d5e9a31ec2b085780b4aae01262080ee9e39678ce52940cb37a0e02143b76e5e0d3d108c4dae0d9e1701acd439654b91558edc2f0d1ee56311f3a573a8_1280.jpg"
    },
    {
        id: 4,
        title: "Autumn Lake Reflection",
        category: "nature",
        tags: ["lake", "autumn", "reflection", "trees"],
        url: "https://pixabay.com/get/g43c8293c675b072d02a66b5211d497a39b079f7cc42aa53a6c22b08fb6c712404865b698e717fd0ab72b1e08cdaf7c80dc851fca2743b8f917027e7c387e40de_1280.jpg"
    },
    {
        id: 5,
        title: "Mountain Peak Sunset",
        category: "nature",
        tags: ["mountain", "sunset", "peak", "clouds"],
        url: "https://pixabay.com/get/g515a815c8904cf4bf29614b713df68414ad8d3a8317501ee5be7de215375f1edd0ef8790a43fe8de3f7b541cf09902764296fa344909e7df7e4c32ffcb5edf9d_1280.jpg"
    },
    {
        id: 6,
        title: "Tropical Paradise",
        category: "nature",
        tags: ["tropical", "beach", "palm", "paradise"],
        url: "https://pixabay.com/get/gbef32fe11a84afc58623d383a9173e9f13f664a44f42935106c6c0e7dad268f941d380733bdacf7e459c98cfa5791a0dcffe5143d9384d2254eefc64235ae776_1280.jpg"
    },
    {
        id: 7,
        title: "Rocky Coastline",
        category: "nature",
        tags: ["coast", "rocks", "ocean", "waves"],
        url: "https://pixabay.com/get/g04dc6518c9db5ad8647acef17de3147aa972df6cb4f615e72b7549ff1aae2787a8b5951d5f3569b96c45b0a0b312bb8db1debbab5fdebed9bd2d95add23ddd8e_1280.jpg"
    },
    {
        id: 8,
        title: "Alpine Meadow",
        category: "nature",
        tags: ["alpine", "meadow", "flowers", "mountains"],
        url: "https://pixabay.com/get/gbf7e66fddc52eab396e25b340c41981c8f4ad746b92f8522bd8ebfc1ce84208f296458b97750282f6c51d2b9ef3166d716faaf9cde7823dff37a5cb0e684e4e5_1280.jpg"
    },
    // Abstract patterns
    {
        id: 9,
        title: "Digital Wave",
        category: "abstract",
        tags: ["digital", "wave", "blue", "modern"],
        url: "https://pixabay.com/get/ga0f965c3d066b589f83e84b20ed26eb2104af5ce92ff978eccb4e497c4e03de8726019902ddcef57f7047cfa5582a58a36e875ba9aa64ab14093a22252f464d3_1280.jpg"
    },
    {
        id: 10,
        title: "Geometric Patterns",
        category: "abstract",
        tags: ["geometric", "patterns", "colorful", "shapes"],
        url: "https://pixabay.com/get/g4b549889a23e213e06797409057f56fbdf748b157c98777233ad5bdf45f223493399917249eba86ba3234b6c54fda3c03dee94e5de1342f80ecd622de4c0020c_1280.jpg"
    },
    {
        id: 11,
        title: "Fluid Art",
        category: "abstract",
        tags: ["fluid", "art", "purple", "flowing"],
        url: "https://pixabay.com/get/g3a337ca546f21bd7f9d14e9e2dc7d8cfc976234f9ca02259d9f918889aa283db13912b6db3d4c2155f9ca88e7b98bae57afbd5476e77f5de66dfbf24dade39c5_1280.jpg"
    },
    {
        id: 12,
        title: "Neon Glow",
        category: "abstract",
        tags: ["neon", "glow", "electric", "vibrant"],
        url: "https://pixabay.com/get/g63d6f412a1b63313c6e410e1ae70d89942e76cf6bb0c6683406fee2296aca8e195ae15643cf50e62c8696790242cda37f6917b47479580a59f90d85a344ae16c_1280.jpg"
    },
    {
        id: 13,
        title: "Crystal Formation",
        category: "abstract",
        tags: ["crystal", "formation", "prismatic", "light"],
        url: "https://pixabay.com/get/g6f5a7234a2e76c6c5c5584fb6cb104f734205aabb9aa89012cb5d278de375555f500d774a4a4ab3631026417be76c1965854362eaabbddccaeabf778055891fc_1280.jpg"
    },
    {
        id: 14,
        title: "Color Spectrum",
        category: "abstract",
        tags: ["spectrum", "colors", "gradient", "rainbow"],
        url: "https://pixabay.com/get/gb3ad0c338de3b4938dfa1c1a0d0f7f54fad1e8742c59db1fe95fa79ee471ef07cb5a3196657e70aa5548e2c3d3185c74d1fba00a7d79c9be583e5c33c2559665_1280.jpg"
    },
    // Animal wallpapers
    {
        id: 15,
        title: "Majestic Tiger",
        category: "animals",
        tags: ["tiger", "wildlife", "predator", "majestic"],
        url: "https://pixabay.com/get/ged2710df296d8de34445f675eb3795c0b8c5326634152676a3e998bc5567c54f7564ec31079c10119d39b8932df361285b1539f1efd41d4827861704e3f670d0_1280.jpg"
    },
    {
        id: 16,
        title: "Graceful Swan",
        category: "animals",
        tags: ["swan", "graceful", "water", "elegant"],
        url: "https://pixabay.com/get/g0748ae69d5617045fa2e868f238ae2bce529da4b21da2b30c9d6fec1bc364e1a887fbd5151e2f5e1cbb01cea8600948e39af443ed909e7c69f54f56c85a8c740_1280.jpg"
    },
    {
        id: 17,
        title: "Wild Wolf",
        category: "animals",
        tags: ["wolf", "wild", "nature", "fierce"],
        url: "https://pixabay.com/get/gf0e807e9e2c1dcc3d89bad67cac1c4f74227766ac64941d030a049188a65ad9187ccef00a78b3d274d0a205c4b5b1dd3b650fbe881986c0f5acd132dc0eed496_1280.jpg"
    },
    {
        id: 18,
        title: "Colorful Parrot",
        category: "animals",
        tags: ["parrot", "colorful", "tropical", "bird"],
        url: "https://pixabay.com/get/g1d113fdcbb5958f9019c8edd38edfb01b8ca0906bd498dc6c13be0d9d8aeff9e2a20c9eccf39a821804c2413bad52e3e9b3497b87c6caea1e850a4922ec756c0_1280.jpg"
    },
    {
        id: 19,
        title: "Playful Dolphins",
        category: "animals",
        tags: ["dolphins", "playful", "ocean", "marine"],
        url: "https://pixabay.com/get/g34910c9c99d61114b5e597dd1503ea8f18ff681f3ec46b8ef21b2bc717aa6d9fb806307712e6de253ba71a0e5ab73b30877875a4cdd52c218e499f2e0425e51b_1280.jpg"
    },
    {
        id: 20,
        title: "Mountain Goat",
        category: "animals",
        tags: ["goat", "mountain", "climbing", "wildlife"],
        url: "https://pixabay.com/get/g4a9b79d77e4ef2a6a23a76847287825b68fd8c658c290ecc958ffb2302616588ac896b043754235aefaaa78a0fbd7f36cd297fafd4e96133a820416f7ca2ea73_1280.jpg"
    },
    // City landscapes
    {
        id: 21,
        title: "Urban Skyline",
        category: "city",
        tags: ["skyline", "urban", "buildings", "modern"],
        url: "https://pixabay.com/get/g15ddce23a13ba1deb9075231bfcea975562809fe6ffe1cb8e444206e60f60e65e5f758b0fa4cee39b2cad2d0a9595071a1888215a89b2de649d1a5f3e7147f2d_1280.jpg"
    },
    {
        id: 22,
        title: "Night City Lights",
        category: "city",
        tags: ["night", "lights", "city", "illuminated"],
        url: "https://pixabay.com/get/g46578abdab4e59ecad216d0beab65ec089c5571c3e0bfc897a1cf9bbe588e611029520606a4b514478a6ec586b792f0816fd1770cc2754e78f437c2f53bb17f8_1280.jpg"
    },
    {
        id: 23,
        title: "Metropolitan Bridge",
        category: "city",
        tags: ["bridge", "metropolitan", "architecture", "urban"],
        url: "https://pixabay.com/get/ga05e5cb15d7ddc4ba05905f9472d06d3bc923297cb6d8ced20975e0314cae5293f0d7a72fff9fe855cc193de2d3eac348eb526ae4a2ccad6e1afa593083c9ba3_1280.jpg"
    },
    {
        id: 24,
        title: "Downtown District",
        category: "city",
        tags: ["downtown", "district", "business", "towers"],
        url: "https://pixabay.com/get/ga7d0ee496282a742ebcafaa495d51638b4c469be09602b560796c2b96f9db9a6e38caf3ae4b8ff1e758eb3c1767b928c94b1e29ca893cfe8741e44919d8f9c63_1280.jpg"
    }
];

// Global variables
let currentWallpapers = [...wallpaperData];
let currentCategory = 'all';
let currentView = 'grid';
let uploadedWallpapers = []; // Store session uploads

// DOM elements
const wallpaperGrid = document.getElementById('wallpaperGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const filterBtns = document.querySelectorAll('.filter-btn');
const viewBtns = document.querySelectorAll('.view-btn');
const resultsCount = document.getElementById('resultsCount');
const noResults = document.getElementById('noResults');

// Modal elements
const imageModal = document.getElementById('imageModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalCategory = document.getElementById('modalCategory');
const downloadBtn = document.getElementById('downloadBtn');
const shareBtn = document.getElementById('shareBtn');

// Upload modal elements
const uploadBtn = document.getElementById('uploadBtn');
const uploadModal = document.getElementById('uploadModal');
const uploadModalOverlay = document.getElementById('uploadModalOverlay');
const uploadModalClose = document.getElementById('uploadModalClose');
const uploadArea = document.getElementById('uploadArea');
const fileInput = document.getElementById('fileInput');
const uploadDetails = document.getElementById('uploadDetails');
const uploadTitle = document.getElementById('uploadTitle');
const uploadCategory = document.getElementById('uploadCategory');
const uploadTags = document.getElementById('uploadTags');
const submitUpload = document.getElementById('submitUpload');

// Loading element
const loading = document.getElementById('loading');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    renderWallpapers();
    setupEventListeners();
    updateResultsCount();
}

function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    searchBtn.addEventListener('click', handleSearch);
    
    // Category filters
    filterBtns.forEach(btn => {
        btn.addEventListener('click', handleCategoryFilter);
    });
    
    // View toggle
    viewBtns.forEach(btn => {
        btn.addEventListener('click', handleViewToggle);
    });
    
    // Modal events
    modalOverlay.addEventListener('click', closeModal);
    modalClose.addEventListener('click', closeModal);
    downloadBtn.addEventListener('click', handleDownload);
    shareBtn.addEventListener('click', handleShare);
    
    // Upload modal events
    uploadBtn.addEventListener('click', openUploadModal);
    uploadModalOverlay.addEventListener('click', closeUploadModal);
    uploadModalClose.addEventListener('click', closeUploadModal);
    uploadArea.addEventListener('click', () => fileInput.click());
    uploadArea.addEventListener('dragover', handleDragOver);
    uploadArea.addEventListener('dragleave', handleDragLeave);
    uploadArea.addEventListener('drop', handleDrop);
    fileInput.addEventListener('change', handleFileSelect);
    submitUpload.addEventListener('click', handleUploadSubmit);
    
    // Keyboard events
    document.addEventListener('keydown', handleKeyDown);
}

function renderWallpapers() {
    wallpaperGrid.innerHTML = '';
    
    if (currentWallpapers.length === 0) {
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    
    currentWallpapers.forEach(wallpaper => {
        const wallpaperElement = createWallpaperElement(wallpaper);
        wallpaperGrid.appendChild(wallpaperElement);
    });
    
    // Apply current view
    wallpaperGrid.className = `wallpaper-grid ${currentView === 'list' ? 'list-view' : ''}`;
}

function createWallpaperElement(wallpaper) {
    const div = document.createElement('div');
    div.className = 'wallpaper-item';
    div.dataset.id = wallpaper.id;
    
    div.innerHTML = `
        <img class="wallpaper-image" src="${wallpaper.url}" alt="${wallpaper.title}" loading="lazy">
        <div class="wallpaper-overlay">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
            </svg>
        </div>
        <div class="wallpaper-info">
            <h3 class="wallpaper-title">${wallpaper.title}</h3>
            <span class="wallpaper-category">${wallpaper.category}</span>
        </div>
    `;
    
    div.addEventListener('click', () => openModal(wallpaper));
    
    return div;
}

function handleSearch() {
    const query = searchInput.value.toLowerCase().trim();
    
    if (query === '') {
        filterWallpapers();
        return;
    }
    
    const allWallpapers = [...wallpaperData, ...uploadedWallpapers];
    const filteredByCategory = currentCategory === 'all' 
        ? allWallpapers 
        : allWallpapers.filter(w => w.category === currentCategory);
    
    currentWallpapers = filteredByCategory.filter(wallpaper => {
        return wallpaper.title.toLowerCase().includes(query) ||
               wallpaper.tags.some(tag => tag.toLowerCase().includes(query)) ||
               wallpaper.category.toLowerCase().includes(query);
    });
    
    renderWallpapers();
    updateResultsCount();
}

function handleCategoryFilter(e) {
    const category = e.target.dataset.category;
    
    // Update active button
    filterBtns.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    currentCategory = category;
    filterWallpapers();
}

function filterWallpapers() {
    const allWallpapers = [...wallpaperData, ...uploadedWallpapers];
    
    if (currentCategory === 'all') {
        currentWallpapers = allWallpapers;
    } else {
        currentWallpapers = allWallpapers.filter(wallpaper => 
            wallpaper.category === currentCategory
        );
    }
    
    renderWallpapers();
    updateResultsCount();
    
    // Clear search if category changed
    if (searchInput.value) {
        searchInput.value = '';
    }
}

function handleViewToggle(e) {
    const view = e.target.dataset.view;
    
    // Update active button
    viewBtns.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    currentView = view;
    wallpaperGrid.className = `wallpaper-grid ${view === 'list' ? 'list-view' : ''}`;
}

function updateResultsCount() {
    const count = currentWallpapers.length;
    const term = count === 1 ? 'wallpaper' : 'wallpapers';
    resultsCount.textContent = `${count} ${term}`;
}

function openModal(wallpaper) {
    modalImage.src = wallpaper.url;
    modalImage.alt = wallpaper.title;
    modalTitle.textContent = wallpaper.title;
    modalCategory.textContent = wallpaper.category;
    
    imageModal.classList.add('show');
    document.body.style.overflow = 'hidden';
    
    // Store current wallpaper for download
    imageModal.dataset.wallpaperId = wallpaper.id;
}

function closeModal() {
    imageModal.classList.remove('show');
    document.body.style.overflow = '';
}

function handleDownload() {
    const wallpaperId = imageModal.dataset.wallpaperId;
    const allWallpapers = [...wallpaperData, ...uploadedWallpapers];
    const wallpaper = allWallpapers.find(w => w.id == wallpaperId);
    
    if (wallpaper) {
        // Create a temporary link to trigger download
        const link = document.createElement('a');
        link.href = wallpaper.url;
        link.download = `${wallpaper.title.replace(/\s+/g, '_')}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Show success message
        showNotification('Download started!', 'success');
    }
}

function handleShare() {
    const wallpaperId = imageModal.dataset.wallpaperId;
    const allWallpapers = [...wallpaperData, ...uploadedWallpapers];
    const wallpaper = allWallpapers.find(w => w.id == wallpaperId);
    
    if (wallpaper) {
        if (navigator.share) {
            navigator.share({
                title: wallpaper.title,
                text: `Check out this amazing wallpaper: ${wallpaper.title}`,
                url: wallpaper.url
            }).catch(() => {
                fallbackShare(wallpaper);
            });
        } else {
            fallbackShare(wallpaper);
        }
    }
}

function fallbackShare(wallpaper) {
    // Copy URL to clipboard
    navigator.clipboard.writeText(wallpaper.url).then(() => {
        showNotification('Image URL copied to clipboard!', 'success');
    }).catch(() => {
        showNotification('Unable to share. Please copy the URL manually.', 'error');
    });
}

function openUploadModal() {
    uploadModal.classList.add('show');
    document.body.style.overflow = 'hidden';
    resetUploadForm();
}

function closeUploadModal() {
    uploadModal.classList.remove('show');
    document.body.style.overflow = '';
}

function resetUploadForm() {
    uploadDetails.style.display = 'none';
    uploadArea.style.display = 'block';
    uploadTitle.value = '';
    uploadCategory.value = '';
    uploadTags.value = '';
    fileInput.value = '';
}

function handleDragOver(e) {
    e.preventDefault();
    uploadArea.classList.add('drag-over');
}

function handleDragLeave(e) {
    e.preventDefault();
    uploadArea.classList.remove('drag-over');
}

function handleDrop(e) {
    e.preventDefault();
    uploadArea.classList.remove('drag-over');
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
        handleFileSelect({ target: { files } });
    }
}

function handleFileSelect(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    if (!file.type.startsWith('image/')) {
        showNotification('Please select an image file.', 'error');
        return;
    }
    
    // Show upload details form
    uploadArea.style.display = 'none';
    uploadDetails.style.display = 'flex';
    
    // Pre-fill title with filename (without extension)
    const fileName = file.name.replace(/\.[^/.]+$/, "");
    uploadTitle.value = fileName.charAt(0).toUpperCase() + fileName.slice(1);
}

function handleUploadSubmit() {
    const title = uploadTitle.value.trim();
    const category = uploadCategory.value;
    const tags = uploadTags.value.trim();
    
    if (!title || !category) {
        showNotification('Please fill in all required fields.', 'error');
        return;
    }
    
    // Create a new wallpaper object
    const file = fileInput.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
        const newWallpaper = {
            id: Date.now(), // Simple ID generation
            title: title,
            category: category,
            tags: tags ? tags.split(',').map(tag => tag.trim().toLowerCase()) : [],
            url: e.target.result,
            uploaded: true
        };
        
        uploadedWallpapers.push(newWallpaper);
        
        // Update display if current category matches or is 'all'
        if (currentCategory === 'all' || currentCategory === category) {
            currentWallpapers.push(newWallpaper);
            renderWallpapers();
            updateResultsCount();
        }
        
        closeUploadModal();
        showNotification('Wallpaper uploaded successfully!', 'success');
    };
    
    reader.readAsDataURL(file);
}

function handleKeyDown(e) {
    if (e.key === 'Escape') {
        if (imageModal.classList.contains('show')) {
            closeModal();
        } else if (uploadModal.classList.contains('show')) {
            closeUploadModal();
        }
    }
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '12px 24px',
        borderRadius: '6px',
        color: 'white',
        fontWeight: '500',
        zIndex: '3000',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease',
        backgroundColor: type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#6366f1'
    });
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add smooth loading effect
function showLoading() {
    loading.style.display = 'flex';
}

function hideLoading() {
    loading.style.display = 'none';
}

// Lazy loading for images
function observeImages() {
    const images = document.querySelectorAll('.wallpaper-image[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Call observe images after rendering
const originalRenderWallpapers = renderWallpapers;
renderWallpapers = function() {
    originalRenderWallpapers.call(this);
    setTimeout(observeImages, 100);
};
