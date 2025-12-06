const fs = require('fs');
const path = require('path');

const trendingProducts = [
    "Wireless Earbuds", "Gaming Headset", "Smartwatch", "Bluetooth Speaker", 
    "Fast Car Charger", "Laptop Cooling Pad", "Office Chair", "Vitamin C Serum", 
    "Running Shoes", "Layered Necklace Set", "Backpack", "Air Fryer"
];

// --- START: 99 DEALS GENERATE KARNE WALA LOGIC ---
const NUM_DEALS = 99; 
const realDealsData = [];

for (let i = 1; i <= NUM_DEALS; i++) {
    const price = Math.floor(Math.random() * 8000) + 500;
    const mrp = price + Math.floor(Math.random() * 3000) + 500;
    const randomProduct = trendingProducts[Math.floor(Math.random() * trendingProducts.length)];

    realDealsData.push({
        title: `${randomProduct} - Save Today! (ID: ${Math.random().toFixed(4)})`,
        price: price,
        mrp: mrp,
        savings: `Flat ${Math.round(((mrp - price) / mrp) * 100)}% Off`,
        affiliate_link: `https://www.amazon.in/s?k=${randomProduct.replace(/\s/g, '+')}&tag=ascreation00f-21`, 
        // 🟢 FIX 1: WORKING STATIC PLACEHOLDER IMAGE URL
        image: "https://i.imgur.com/kS4rR4m.png" // Simple, working image URL
    });
}
// --- END: 99 DEALS GENERATE KARNE WALA LOGIC ---

// ... (Rest of the script logic remains the same for file read/write)
