const fs = require('fs');
const path = require('path');

// --- START: 99 DEALS GENERATE KARNE WALA LOGIC ---
const NUM_DEALS = 99; // Har ghante 99 nayi deals banengi
const realDealsData = [];

for (let i = 1; i <= NUM_DEALS; i++) {
    // Random Price aur MRP set karna
    const price = Math.floor(Math.random() * 8000) + 500;
    const mrp = price + Math.floor(Math.random() * 3000) + 500;

    realDealsData.push({
        // Title rozana alag-alag dikhega
        title: `Trending Deal (Ref. #${i}) - ${new Date().toLocaleTimeString()}`,
        price: price,
        mrp: mrp,
        // Savings percentage calculate karna
        savings: `Flat ${Math.round(((mrp - price) / mrp) * 100)}% Off`,
        affiliate_link: `https://www.amazon.in/s?k=Top+Daily+Deal+${i}&tag=ascreation00f-21`,
        image: "https://example.com/placeholder.jpg" // Placeholder image URL
    });
}
// --- END: 99 DEALS GENERATE KARNE WALA LOGIC --- ⬅️ YAHAN FIX KIYA GAYA HAI


// Step 1: Deals Array ko JavaScript Code mein Convert karna
const dealsArrayString = JSON.stringify(realDealsData, null, 4);

// Step 2: index.html file ko padhna
// ... (baki code same rahega)
