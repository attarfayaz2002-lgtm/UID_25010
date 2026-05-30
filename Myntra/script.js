const products = [
    { category: "men", brand: "Roadster", name: "Men checked casual shirt", price: 799, mrp: 1999, discount: "60% OFF", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80" },
    { category: "men", brand: "HRX", name: "Training joggers", price: 999, mrp: 2499, discount: "60% OFF", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=700&q=80" },
    { category: "men", brand: "U.S. Polo", name: "Slim fit polo t-shirt", price: 899, mrp: 1799, discount: "50% OFF", image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=700&q=80" },
    { category: "men", brand: "Wrogn", name: "Denim jacket", price: 1799, mrp: 3999, discount: "55% OFF", image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=700&q=80" },
    { category: "women", brand: "Sassafras", name: "Floral fit and flare dress", price: 1199, mrp: 2999, discount: "60% OFF", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=80" },
    { category: "women", brand: "Libas", name: "Printed kurta with trousers", price: 1399, mrp: 3499, discount: "60% OFF", image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=700&q=80" },
    { category: "women", brand: "Mango", name: "Solid casual blazer", price: 2299, mrp: 4599, discount: "50% OFF", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80" },
    { category: "women", brand: "DressBerry", name: "High rise straight jeans", price: 999, mrp: 2499, discount: "60% OFF", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80" },
    { category: "kids", brand: "YK Disney", name: "Boys cotton t-shirt", price: 499, mrp: 999, discount: "50% OFF", image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=700&q=80" },
    { category: "kids", brand: "H&M Kids", name: "Girls party dress", price: 899, mrp: 1799, discount: "50% OFF", image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=700&q=80" },
    { category: "kids", brand: "Gini & Jony", name: "Printed hoodie", price: 799, mrp: 1599, discount: "50% OFF", image: "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&w=700&q=80" },
    { category: "kids", brand: "Pantaloons Junior", name: "Dungaree set", price: 1099, mrp: 2199, discount: "50% OFF", image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=700&q=80" },
    { category: "beauty", brand: "Lakme", name: "Makeup essentials kit", price: 699, mrp: 1299, discount: "46% OFF", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=80" },
    { category: "beauty", brand: "Maybelline", name: "Matte lipstick combo", price: 549, mrp: 999, discount: "45% OFF", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=700&q=80" },
    { category: "beauty", brand: "The Body Shop", name: "Skincare gift box", price: 1299, mrp: 2499, discount: "48% OFF", image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=700&q=80" },
    { category: "beauty", brand: "Minimalist", name: "Daily serum set", price: 899, mrp: 1399, discount: "36% OFF", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=700&q=80" },
    { category: "home", brand: "Myntra Home", name: "Decor cushion covers", price: 599, mrp: 1499, discount: "60% OFF", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=700&q=80" },
    { category: "home", brand: "Spaces", name: "Printed bedsheet set", price: 999, mrp: 2499, discount: "60% OFF", image: "https://images.unsplash.com/photo-1616627561950-9f746e330187?auto=format&fit=crop&w=700&q=80" },
    { category: "home", brand: "Home Centre", name: "Table lamp", price: 1299, mrp: 2599, discount: "50% OFF", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=700&q=80" },
    { category: "home", brand: "D'Decor", name: "Window curtain pair", price: 1499, mrp: 2999, discount: "50% OFF", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=700&q=80" },
    { category: "genz", brand: "Street 9", name: "Oversized graphic t-shirt", price: 649, mrp: 1299, discount: "50% OFF", image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=700&q=80" },
    { category: "genz", brand: "Tokyo Talkies", name: "Wide leg cargo pants", price: 1099, mrp: 2199, discount: "50% OFF", image: "https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?auto=format&fit=crop&w=700&q=80" },
    { category: "genz", brand: "Here & Now", name: "Sneaker style co-ord set", price: 1599, mrp: 3199, discount: "50% OFF", image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=700&q=80" },
    { category: "genz", brand: "Kook N Keech", name: "Streetwear bomber jacket", price: 1899, mrp: 3799, discount: "50% OFF", image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=700&q=80" }
];

let cartCount = 0;
let currentCategory = "all";

const categorySearchItems = [
    { type: "Category", title: "Men", description: "Open men's shirts, jackets, joggers, t-shirts and casual fashion.", action: "filterProducts('men')" },
    { type: "Category", title: "Women", description: "Open women's dresses, kurtas, jeans, blazers and fashion outfits.", action: "filterProducts('women')" },
    { type: "Category", title: "Kids", description: "Open kids t-shirts, dresses, hoodies and casual wear.", action: "filterProducts('kids')" },
    { type: "Category", title: "Beauty", description: "Open makeup, lipstick, skincare, serum and beauty products.", action: "filterProducts('beauty')" },
    { type: "Category", title: "Home", description: "Open home decor, bedsheets, table lamps, curtains and cushion covers.", action: "filterProducts('home')" },
    { type: "Category", title: "GenZ", description: "Open streetwear, oversized t-shirts, cargo pants and GenZ fashion.", action: "filterProducts('genz')" }
];

const footerSearchItems = [
    { type: "Customer Policy", title: "Contact Us", description: "Support email, call support, order help and customer care working hours.", action: "showFooterMessage('Contact Us')" },
    { type: "Customer Policy", title: "FAQ", description: "Answers for orders, cancellation, refunds, coupons and gift cards.", action: "showFooterMessage('FAQ')" },
    { type: "Customer Policy", title: "Shipping", description: "Delivery time, tracking, shipping fee and order dispatch details.", action: "showFooterMessage('Shipping')" },
    { type: "Customer Policy", title: "Returns", description: "Return window, pickup status, refund mode and product return rules.", action: "showFooterMessage('Returns')" },
    { type: "Customer Policy", title: "Terms of Use", description: "Website rules, account responsibility, order rules and policy updates.", action: "showFooterMessage('Terms of Use')" },
    { type: "Useful Link", title: "About Us", description: "Project information, frontend ecommerce clone details and technologies used.", action: "showFooterMessage('About Us')" },
    { type: "Useful Link", title: "Gift Cards", description: "Gift card value, birthday and festival use, and checkout redeem details.", action: "showFooterMessage('Gift Cards')" },
    { type: "Useful Link", title: "Myntra Insider", description: "Reward points, exclusive coupons, early sale access and member perks.", action: "showFooterMessage('Myntra Insider')" },
    { type: "Useful Link", title: "Blog", description: "Fashion articles, style guides, outfit ideas and beauty tips.", action: "showFooterMessage('Blog')" },
    { type: "Useful Link", title: "Careers", description: "Career email, hiring page, technology roles and internship opportunities.", action: "showFooterMessage('Careers')" },
    { type: "Promise", title: "100% Original Products", description: "Genuine product listings, quality checks and customer trust information.", action: "showFooterMessage('Original Products')" },
    { type: "Promise", title: "Easy Returns", description: "Return request, doorstep pickup and refund after product checking.", action: "showFooterMessage('Easy Returns')" },
    { type: "Promise", title: "Secure Payments", description: "UPI, cards, wallet, net banking and protected checkout details.", action: "showFooterMessage('Secure Payments')" }
];

const pageSearchItems = [
    { type: "Page Section", title: "Hero Offer", description: "Grand Fashion Festival banner with Flat 50-80% off message.", action: "window.scrollTo({ top: 0, behavior: 'smooth' })" },
    { type: "Page Section", title: "Shop By Category", description: "Image cards for Men, Women, Kids, Beauty, Home and GenZ categories.", action: "document.querySelector('.category-grid').scrollIntoView({ behavior: 'smooth' })" },
    { type: "Page Section", title: "Deal of the Day", description: "Offer banner for branded styles from Rs. 399.", action: "document.querySelector('.deal-banner').scrollIntoView({ behavior: 'smooth' })" },
    { type: "Page Section", title: "Trending Now", description: "Main product listing area where product cards are displayed.", action: "scrollToProducts()" },
    { type: "Page Section", title: "Footer", description: "Online shopping links, customer policies, useful links and promise details.", action: "document.querySelector('.footer').scrollIntoView({ behavior: 'smooth' })" }
];

function formatPrice(amount) {
    return "Rs. " + amount;
}

function displayProducts(productList) {
    const productContainer = document.getElementById("productContainer");

    if (productList.length === 0) {
        productContainer.innerHTML = '<p class="empty-message">No products found. Try another category or search word.</p>';
        return;
    }

    productContainer.innerHTML = productList.map(function (product) {
        return `
            <article class="product-card">
                <img src="${product.image}" alt="${product.brand} ${product.name}">
                <div class="product-info">
                    <h3 class="brand-name">${product.brand}</h3>
                    <p class="product-name">${product.name}</p>
                    <div class="price-line">
                        <span class="price">${formatPrice(product.price)}</span>
                        <span class="mrp">${formatPrice(product.mrp)}</span>
                        <span class="discount">${product.discount}</span>
                    </div>
                    <div class="product-actions">
                        <button class="cart-btn" onclick="addToBag()">Add to bag</button>
                        <button class="wishlist-btn" aria-label="Add ${product.name} to wishlist">
                            <i class="fa-regular fa-heart"></i>
                        </button>
                    </div>
                </div>
            </article>
        `;
    }).join("");
}

function displaySearchResults(results, searchText) {
    const productContainer = document.getElementById("productContainer");

    if (results.length === 0) {
        productContainer.innerHTML = `<p class="empty-message">No results found for "${searchText}". Try words like men, beauty, contact, returns, gift card or footer.</p>`;
        return;
    }

    productContainer.innerHTML = results.map(function (result) {
        if (result.kind === "product") {
            return `
                <article class="product-card">
                    <img src="${result.image}" alt="${result.brand} ${result.name}">
                    <div class="product-info">
                        <p class="result-type">Product</p>
                        <h3 class="brand-name">${result.brand}</h3>
                        <p class="product-name">${result.name}</p>
                        <div class="price-line">
                            <span class="price">${formatPrice(result.price)}</span>
                            <span class="mrp">${formatPrice(result.mrp)}</span>
                            <span class="discount">${result.discount}</span>
                        </div>
                        <div class="product-actions">
                            <button class="cart-btn" onclick="addToBag()">Add to bag</button>
                            <button class="wishlist-btn"><i class="fa-regular fa-heart"></i></button>
                        </div>
                    </div>
                </article>
            `;
        }

        return `
            <article class="search-result-card">
                <p class="result-type">${result.type}</p>
                <h3>${result.title}</h3>
                <p>${result.description}</p>
                <button onclick="${result.action}">Open</button>
            </article>
        `;
    }).join("");
}

function updateFilterLabel(category) {
    const activeFilter = document.getElementById("activeFilter");
    const labels = {
        all: "All collections",
        men: "Men collection",
        women: "Women collection",
        kids: "Kids collection",
        home: "Home collection",
        beauty: "Beauty collection",
        genz: "GenZ collection"
    };

    activeFilter.innerText = labels[category] || "All collections";
}

function filterProducts(category) {
    currentCategory = category;
    document.getElementById("searchInput").value = "";
    updateFilterLabel(category);

    if (category === "all") {
        displayProducts(products);
    } else {
        displayProducts(products.filter(function (product) {
            return product.category === category;
        }));
    }

    scrollToProducts();
}

function searchProducts() {
    const searchText = document.getElementById("searchInput").value.toLowerCase().trim();

    if (searchText === "") {
        updateFilterLabel(currentCategory);
        if (currentCategory === "all") {
            displayProducts(products);
        } else {
            displayProducts(products.filter(function (product) {
                return product.category === currentCategory;
            }));
        }
        return;
    }

    const productResults = products
        .filter(function (product) {
            const productText = (product.brand + " " + product.name + " " + product.category + " " + product.discount).toLowerCase();
            return productText.includes(searchText);
        })
        .map(function (product) {
            return { kind: "product", ...product };
        });

    const infoResults = categorySearchItems
        .concat(footerSearchItems, pageSearchItems)
        .filter(function (item) {
            const itemText = (item.type + " " + item.title + " " + item.description).toLowerCase();
            return itemText.includes(searchText);
        });

    document.getElementById("activeFilter").innerText = `Search results for "${searchText}"`;
    displaySearchResults(productResults.concat(infoResults), searchText);
    scrollToProducts();
}

function addToBag() {
    cartCount = cartCount + 1;
    document.getElementById("cartCount").innerText = cartCount;
}

function openLoginModal() {
    document.getElementById("loginModal").classList.add("show");
    document.getElementById("loginMessage").innerText = "New user? Create an account after login setup.";
}

function closeLoginModal() {
    document.getElementById("loginModal").classList.remove("show");
}

function loginUser() {
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
    const loginMessage = document.getElementById("loginMessage");

    if (email === "" || password === "") {
        loginMessage.innerText = "Please enter both email/mobile number and password.";
        return;
    }

    loginMessage.innerText = "Login successful for demo. Welcome to your profile!";
}

function showFooterMessage(linkName) {
    const footerMessage = document.getElementById("footerMessage");
    const messages = {
        "Online Shopping": {
            title: "Online Shopping",
            text: "This section connects customers to the main shopping categories of the website.",
            points: ["Men, Women, Kids, Home, Beauty, and GenZ categories", "Each category filters the product cards on the same page", "Useful for quick browsing from the footer"],
            contacts: [{ label: "Main Action", value: "Browse all products", href: "#products" }, { label: "Feature", value: "Category based filtering", href: "#products" }, { label: "Best For", value: "Fast product discovery", href: "#products" }],
            link: "#products"
        },
        "Customer Policies": {
            title: "Customer Policies",
            text: "Customer policies explain the important service rules that help shoppers understand support, shipping, returns, and website terms.",
            points: ["Contact support for order or account help", "Read FAQ before placing or cancelling orders", "Check shipping, return, and terms information"],
            contacts: [{ label: "Support", value: "Contact Us", href: "https://www.myntra.com/contactus" }, { label: "Help Topic", value: "FAQ and refund questions", href: "https://www.myntra.com/faqs" }, { label: "Policy Topic", value: "Returns and Terms of Use", href: "https://www.myntra.com/termsofuse" }],
            link: "https://www.myntra.com/faqs"
        },
        "Useful Links": {
            title: "Useful Links",
            text: "Useful links give quick access to company information, gift cards, rewards, style content, and career information.",
            points: ["About Us explains the project or company idea", "Gift Cards and Insider add ecommerce features", "Blog and Careers make the website feel complete"],
            contacts: [{ label: "Company", value: "About Us", href: "#products" }, { label: "Shopping Extra", value: "Gift Cards and Insider", href: "https://www.myntra.com/giftcard" }, { label: "Explore", value: "Blog and Careers", href: "https://www.myntra.com/careers" }],
            link: "#products"
        },
        "Promise": {
            title: "Promise",
            text: "The promise section builds trust by telling shoppers what they can expect while buying from the website.",
            points: ["Original product listings", "Easy returns within the allowed return window", "Secure payment experience during checkout"],
            contacts: [{ label: "Product Trust", value: "100% original products", href: "#products" }, { label: "Return Promise", value: "Easy returns within 14 days", href: "https://www.myntra.com/my/orders" }, { label: "Payment Safety", value: "Secure payments", href: "#products" }],
            link: "#products"
        },
        "Contact Us": {
            title: "Contact Us",
            text: "Need help with shopping, payment, delivery, cancellation, return pickup, or refund status? Use these support options.",
            points: ["Support email: support@myntraclone.com", "Help centre: Track orders, returns, refunds, and account issues", "Working hours: 9:00 AM to 9:00 PM, Monday to Saturday"],
            contacts: [{ label: "Email Support", value: "support@myntraclone.com", href: "mailto:support@myntraclone.com" }, { label: "Call Support", value: "+91 98765 43210", href: "tel:+919876543210" }, { label: "Order Help", value: "Open order support", href: "https://www.myntra.com/contactus" }],
            link: "https://www.myntra.com/contactus"
        },
        "FAQ": { title: "Frequently Asked Questions", text: "This section contains common questions that shoppers usually ask before or after placing an order.", points: ["How to place an order", "How to cancel an order", "How refunds are processed", "How to use coupons and gift cards"], contacts: [{ label: "Popular Question", value: "How do I cancel my order?", href: "https://www.myntra.com/faqs" }, { label: "Refund Help", value: "Check refund answers", href: "https://www.myntra.com/faqs" }, { label: "Coupon Help", value: "Coupon usage guide", href: "https://www.myntra.com/faqs" }], link: "https://www.myntra.com/faqs" },
        "Shipping": { title: "Shipping Information", text: "Shipping details explain how products are packed, dispatched, and delivered to the customer address.", points: ["Delivery depends on location", "Tracking is available after dispatch", "Some orders may qualify for free shipping"], contacts: [{ label: "Track Order", value: "Open tracking page", href: "https://www.myntra.com/my/orders" }, { label: "Delivery Time", value: "Usually 3 to 7 days", href: "https://www.myntra.com/my/orders" }, { label: "Shipping Fee", value: "Shown before checkout", href: "#products" }], link: "https://www.myntra.com/my/orders" },
        "Returns": { title: "Returns", text: "Return details help customers understand which items can be returned and how pickup or refund works.", points: ["Return window depends on product type", "Product should be unused with tags", "Refund starts after quality check"], contacts: [{ label: "Return Window", value: "Usually 7 to 14 days", href: "https://www.myntra.com/my/orders" }, { label: "Pickup Status", value: "Check pickup updates", href: "https://www.myntra.com/my/orders" }, { label: "Refund Mode", value: "Original payment method", href: "https://www.myntra.com/faqs" }], link: "https://www.myntra.com/my/orders" },
        "Terms of Use": { title: "Terms of Use", text: "Terms of Use explain the rules for using the website, buying products, and accessing services.", points: ["User account responsibility", "Website usage rules", "Order and payment conditions"], contacts: [{ label: "Account Rules", value: "Use correct personal details", href: "https://www.myntra.com/termsofuse" }, { label: "Order Rules", value: "Orders depend on availability", href: "https://www.myntra.com/termsofuse" }, { label: "Policy Update", value: "Terms may change over time", href: "https://www.myntra.com/termsofuse" }], link: "https://www.myntra.com/termsofuse" },
        "Gift Cards": { title: "Gift Cards", text: "Gift cards can be used as prepaid shopping value for fashion, beauty, and lifestyle products.", points: ["Good for birthdays and festivals", "Easy to redeem while shopping", "Useful when you are unsure about size or style"], contacts: [{ label: "Starting Value", value: "Rs. 500 and above", href: "https://www.myntra.com/giftcard" }, { label: "Best For", value: "Birthdays and festivals", href: "https://www.myntra.com/giftcard" }, { label: "Redeem At", value: "Checkout payment page", href: "https://www.myntra.com/giftcard" }], link: "https://www.myntra.com/giftcard" },
        "About Us": { title: "About Us", text: "This Myntra-inspired clone is a learning project that shows how an ecommerce homepage can be built using HTML, CSS, and JavaScript.", points: ["Fashion shopping layout inspired by Myntra", "Category filtering, product cards, footer details, and cart count", "Made for front-end practice and video explanation"], contacts: [{ label: "Project Type", value: "Frontend ecommerce clone", href: "#products" }, { label: "Built With", value: "HTML, CSS, JavaScript", href: "#products" }], link: "#products" },
        "Myntra Insider": { title: "Myntra Insider", text: "A loyalty-style section where users can imagine rewards, exclusive offers, early sale access, and special benefits.", points: ["Reward points", "Exclusive coupons", "Early sale access"], contacts: [{ label: "Reward Type", value: "Points and coupons", href: "https://www.myntra.com/myntrainsider" }, { label: "Sale Benefit", value: "Early access offers", href: "https://www.myntra.com/myntrainsider" }, { label: "Member Perk", value: "Special brand deals", href: "https://www.myntra.com/myntrainsider" }], link: "https://www.myntra.com/myntrainsider" },
        "Blog": { title: "Fashion Blog", text: "The blog section can contain outfit ideas, trend guides, styling tips, beauty routines, and seasonal shopping suggestions.", points: ["Festive outfit ideas", "Office wear styling", "Beauty and grooming tips"], contacts: [{ label: "Latest Topic", value: "Summer outfit ideas", href: "https://www.myntra.com" }, { label: "Style Guide", value: "Office wear looks", href: "https://www.myntra.com" }, { label: "Beauty Tips", value: "Daily skincare routine", href: "https://www.myntra.com" }], link: "https://www.myntra.com" },
        "Careers": { title: "Careers", text: "Careers content can show job roles, company culture, hiring information, and opportunities in fashion technology.", points: ["Technology roles", "Design and merchandising roles", "Customer experience roles", "Internship and fresher opportunities"], contacts: [{ label: "Career Email", value: "careers@myntraclone.com", href: "mailto:careers@myntraclone.com" }, { label: "Hiring Page", value: "View openings", href: "https://www.myntra.com/careers" }], link: "https://www.myntra.com/careers" },
        "Original Products": { title: "100% Original Products", text: "This promise builds customer trust by saying that products shown on the shopping website are genuine.", points: ["Trusted brand listings", "Quality checked products", "No duplicate items in the clone concept"], contacts: [{ label: "Brand Promise", value: "Genuine product listings", href: "#products" }, { label: "Quality Check", value: "Verified before delivery", href: "#products" }, { label: "Customer Trust", value: "Clear brand and price details", href: "#products" }], link: "#products" },
        "Easy Returns": { title: "Easy Returns", text: "Easy returns make online shopping more comfortable because customers can return eligible products within the allowed time.", points: ["Simple return request", "Pickup from address", "Refund after product check"], contacts: [{ label: "Return Request", value: "Start from orders page", href: "https://www.myntra.com/my/orders" }, { label: "Pickup", value: "Doorstep pickup option", href: "https://www.myntra.com/my/orders" }, { label: "Refund", value: "Processed after checking", href: "https://www.myntra.com/faqs" }], link: "#products" },
        "Secure Payments": { title: "Secure Payments", text: "Secure payment content explains that customer payment details should be protected during checkout.", points: ["Card and UPI payment support", "Protected checkout flow", "Order confirmation after payment"], contacts: [{ label: "Payment Modes", value: "UPI, card, wallet, net banking", href: "#products" }, { label: "Safety", value: "Encrypted checkout idea", href: "#products" }, { label: "Confirmation", value: "Order message after payment", href: "#products" }], link: "#products" }
    };

    const selectedContent = messages[linkName];
    if (!selectedContent) {
        return;
    }

    const contactRows = selectedContent.contacts.map(function (contact) {
        const target = contact.href.startsWith("#") || contact.href.startsWith("mailto:") || contact.href.startsWith("tel:") ? "_self" : "_blank";
        return `
            <a class="detail-row" href="${contact.href}" target="${target}">
                <span>${contact.label}</span>
                <strong>${contact.value}</strong>
            </a>
        `;
    }).join("");

    footerMessage.innerHTML = `
        <h3>${selectedContent.title}</h3>
        <p>${selectedContent.text}</p>
        <div class="detail-list">${contactRows}</div>
        <ul>
            ${selectedContent.points.map(function (point) {
                return `<li>${point}</li>`;
            }).join("")}
        </ul>
        <a href="${selectedContent.link}" target="${selectedContent.link.startsWith("#") ? "_self" : "_blank"}">Open related link</a>
    `;

    footerMessage.scrollIntoView({ behavior: "smooth", block: "center" });
}

function scrollToProducts() {
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

displayProducts(products);
