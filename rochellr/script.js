// Application State
let cart = [];
let currentFilter = 'all';
let maxPrice = 500;

// WhatsApp Numbers
const WHATSAPP_ORDER = '201234567890'; // رقم واتساب الطلبات
const WHATSAPP_INQUIRY = '201234567891'; // رقم واتساب الاستفسارات

// DOM Elements
const menuGrid = document.getElementById('menu-grid');
const offersGrid = document.getElementById('offers-grid');
const offersSection = document.getElementById('offers-section');
const cartSidebar = document.getElementById('cart-sidebar');
const cartOverlay = document.getElementById('cart-overlay');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const priceRange = document.getElementById('price-range');
const priceValue = document.getElementById('price-value');
const itemModal = document.getElementById('item-modal');
const modalBody = document.getElementById('modal-body');
const confirmationModal = document.getElementById('confirmation-modal');
const confirmationMessage = document.getElementById('confirmation-message');
const confirmBtn = document.getElementById('confirm-btn');
const cancelBtn = document.getElementById('cancel-btn');

// Initialize App
document.addEventListener('DOMContentLoaded', function () {
    renderOffers();
    renderMenu();
    setupEventListeners();
    updateCartUI();
});

// Event Listeners Setup
function setupEventListeners() {
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.category;

            if (currentFilter === 'offers') {
                offersSection.scrollIntoView({ behavior: 'smooth' });
                renderMenu(); 
            } else {
                renderMenu();
            }
        });
    });

    // Price range filter
    priceRange.addEventListener('input', function () {
        maxPrice = parseInt(this.value);
        priceValue.textContent = `${maxPrice} جنيه`;
        debouncedRenderMenu();
    });

    // Modal close events
    window.addEventListener('click', function (event) {
        if (event.target === itemModal) {
            closeModal();
        }
        if (event.target === confirmationModal) {
            hideConfirmation();
        }
    });
}

// Render Functions
function renderOffers() {
    offersGrid.innerHTML = '';
    offersData.forEach(offer => {
        const offerCard = createOfferCard(offer);
        offersGrid.appendChild(offerCard);
    });
}

function renderMenu() {
    menuGrid.innerHTML = '';

    if (currentFilter === 'offers') {
        menuGrid.innerHTML = `
            <div class="empty-state">
                <h3>قسم العروض</h3>
                <p>تصفح العروض الخاصة في الأعلى!</p>
            </div>
        `;
        return;
    }

    const allItems = Object.values(menuData).flat();

    const filteredItems = allItems.filter(item => {
        const categoryMatch = currentFilter === 'all' || item.category === currentFilter;
        const priceMatch = item.price <= maxPrice;
        return categoryMatch && priceMatch;
    });

    if (filteredItems.length === 0) {
        menuGrid.innerHTML = `
            <div class="empty-state">
                <h3>لا توجد عناصر</h3>
                <p>لا توجد عناصر تطابق الفلترة المحددة</p>
            </div>
        `;
        return;
    }

    filteredItems.forEach(item => {
        const itemCard = createItemCard(item);
        menuGrid.appendChild(itemCard);
    });
}

const debouncedRenderMenu = debounce(renderMenu, 250);

function createItemCard(item) {
    const card = document.createElement('div');
    card.className = 'item-card fade-in';

    const categoryTranslations = {
        grills: "مشويات",
        salads: "سلطات",
        drinks: "مشروبات",
        desserts: "حلويات"
    };

    card.innerHTML = `
        <div class="category-badge">${categoryTranslations[item.category] || item.category}</div>
        <div class="item-image">
            <img src="${item.image}" alt="${item.name}" loading="lazy">
        </div>
        <div class="item-info">
            <h3 class="item-name">${item.name}</h3>
            <p class="item-description">${item.description}</p>
            <div class="item-price">
                <span class="price">${item.price} جنيه</span>
            </div>
            <button class="add-to-cart" onclick="addToCart(event, ${item.id})">
                إضافة للعربة
            </button>
        </div>
    `;

    card.addEventListener('click', function (e) {
        if (!e.target.classList.contains('add-to-cart')) {
            showItemDetails(item);
        }
    });

    return card;
}

function createOfferCard(offer) {
    const card = document.createElement('div');
    card.className = 'offer-card fade-in';
    card.innerHTML = `
        <div class="offer-badge">عرض خاص</div>
        <div class="item-image">
            <img src="${offer.image}" alt="${offer.name}" loading="lazy">
        </div>
        <div class="item-info">
            <h3 class="item-name">${offer.name}</h3>
            <p class="item-description">${offer.description}</p>
            <div class="item-price">
                <span class="price">${offer.price} جنيه</span>
                <span class="old-price">${offer.oldPrice} جنيه</span>
            </div>
            <button class="add-to-cart" onclick="addToCart(event, '${offer.id}', true)">
                إضافة للعربة
            </button>
        </div>
    `;

    card.addEventListener('click', function (e) {
        if (!e.target.classList.contains('add-to-cart')) {
            showItemDetails(offer);
        }
    });

    return card;
}

// Cart Functions
function addToCart(event, itemId, isOffer = false) {
    event.stopPropagation(); 
    let item;

    if (isOffer) {
        item = offersData.find(offer => offer.id === itemId);
    } else {
        const allItems = Object.values(menuData).flat();
        item = allItems.find(menuItem => menuItem.id === itemId);
    }

    if (!item) return;

    const existingItem = cart.find(cartItem => cartItem.id === itemId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...item,
            quantity: 1,
            isOffer: isOffer
        });
    }

    updateCartUI();

    const button = event.target;
    const originalText = button.textContent;
    button.textContent = 'تم الإضافة ✓';
    button.style.background = '#28a745';
    button.disabled = true;

    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = '';
        button.disabled = false;
    }, 1000);
}

function removeFromCart(itemId) {
    showConfirmation('هل أنت متأكد أنك تريد حذف هذا المنتج؟', () => {
        cart = cart.filter(item => item.id != itemId);
        updateCartUI();
        hideConfirmation();
    });
}

function updateQuantity(itemId, change) {
    const item = cart.find(cartItem => cartItem.id == itemId); 
    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        removeFromCart(itemId);
    } else {
        updateCartUI();
    }
}

function clearCart() {
    if (cart.length > 0) {
        showConfirmation('هل أنت متأكد أنك تريد حذف جميع المنتجات من العربة؟', () => {
            cart = [];
            updateCartUI();
            hideConfirmation();
        });
    }
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total;

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-state">
                <h3>العربة فارغة</h3>
                <p>لم تقم بإضافة أي عناصر بعد</p>
            </div>
        `;
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${item.price} جنيه</div>
            </div>
            <div class="quantity-controls">
                <button class="quantity-btn" onclick="updateQuantity('${typeof item.id === 'string' ? item.id : item.id}', -1)">-</button>
                <span class="quantity">${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity('${typeof item.id === 'string' ? item.id : item.id}', 1)">+</button>
            </div>
            <button class="remove-item-btn" onclick="removeFromCart('${typeof item.id === 'string' ? item.id : item.id}')">✕</button>
        </div>
    `).join('');
}

// Modal Functions
function showItemDetails(item) {
    const isOffer = !!item.oldPrice;
    modalBody.innerHTML = `
        <div class="modal-item-image">
             <img src="${item.image}" alt="${item.name}">
        </div>
        <h2 class="modal-item-name">${item.name}</h2>
        <div class="modal-item-details">
            <div class="detail-section">
                <div class="detail-label">الوصف:</div>
                <div class="detail-content">${item.details || item.description}</div>
            </div>
            <div class="detail-section">
                <div class="detail-label">المكونات:</div>
                <div class="detail-content">${item.ingredients}</div>
            </div>
            <div class="detail-section">
                <div class="detail-label">السعرات الحرارية:</div>
                <div class="detail-content">${item.calories}</div>
            </div>
        </div>
        <div class="modal-price">
            ${item.oldPrice ? `<span class="old-price">${item.oldPrice} جنيه</span>` : ''}
            <span class="price">${item.price} جنيه</span>
        </div>
        <button class="add-to-cart" onclick="addToCart(event, '${item.id}', ${isOffer}); closeModal();">
            إضافة للعربة
        </button>
    `;

    itemModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    itemModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Confirmation Modal Functions
function showConfirmation(message, onConfirm) {
    confirmationMessage.textContent = message;
    confirmationModal.style.display = 'block';

    confirmBtn.onclick = onConfirm;
    cancelBtn.onclick = hideConfirmation;
}

function hideConfirmation() {
    confirmationModal.style.display = 'none';
}

// Cart Toggle Functions
function toggleCart() {
    cartSidebar.classList.toggle('open');
    cartOverlay.classList.toggle('active');
    document.body.style.overflow = cartSidebar.classList.contains('open') ? 'hidden' : 'auto';
}

// WhatsApp Functions
function sendOrder() {
    if (cart.length === 0) {
        alert('العربة فارغة! يرجى إضافة عناصر أولاً');
        return;
    }

    const orderText = generateOrderText();
    const whatsappUrl = `https://wa.me/${WHATSAPP_ORDER}?text=${encodeURIComponent(orderText)}`;
    window.open(whatsappUrl, '_blank');
}

function openInquiry() {
    const inquiryText = 'مرحباً، لدي استفسار حول المنيو';
    const whatsappUrl = `https://wa.me/${WHATSAPP_INQUIRY}?text=${encodeURIComponent(inquiryText)}`;
    window.open(whatsappUrl, '_blank');
}

function generateOrderText() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    let orderText = 'مرحباً، أود طلب:\n\n';

    cart.forEach(item => {
        orderText += `${item.quantity}x ${item.name}\n`;
    });

    orderText += `\nالإجمالي: ${total} جنيه\n\n`;
    orderText += 'شكراً لكم 🍽️';

    return orderText;
}

// Utility Functions
function formatPrice(price) {
    return `${price} جنيه`;
}

// Animation Functions
function addFadeInAnimation(element) {
    element.classList.add('fade-in');
}

function addBounceInAnimation(element) {
    element.classList.add('bounce-in');
}

// Search Functionality (Future Enhancement)
function searchItems(query) {
    const allItems = Object.values(menuData).flat().concat(offersData);
    return allItems.filter(item =>
        item.name.includes(query) ||
        item.description.includes(query) ||
        item.ingredients.includes(query)
    );
}

// Local Storage Functions (Future Enhancement)
function saveCartToStorage() {
    localStorage.setItem('goldenMenuCart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('goldenMenuCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
}

// Performance Optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Error Handling
window.addEventListener('error', function (e) {
    console.error('خطأ في التطبيق:', e.error);
});

// Service Worker Registration (Future Enhancement)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js')
            .then(function (registration) {
                console.log('Service Worker registered successfully');
            })
            .catch(function (error) {
                console.log('Service Worker registration failed');
            });
    });
}