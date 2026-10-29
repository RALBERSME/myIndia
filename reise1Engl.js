const jaipurData = {
  entstehung: `
    <h3>The Perfectly Planned Royal City</h3>
    Jaipur was founded in <strong>1727</strong>, by <strong>Maharaja Sawai Jai Singh II.</strong>, the ruler of Amer. Unlike most other Indian cities of that era, which grew organically and chaotically, Jaipur was completely designed on the drawing board.<br /><br />
    Jai Singh II.  utilized the principles of <strong>Shilpa Shastra</strong> (traditional Hindu architectural science) and Vastu Shastra. The city was divided into nine square grid blocks corresponding to celestial bodies and protected by a mighty city wall featuring seven gates. 
  `,
  "warum-pink": `
    <h3>A Coat of Paint for Eternity</h3>
The absolute trademark of Jaipur is its color. In <strong>1876</strong> , the British heir to the throne, <strong>Prinz Albert</strong> (later King Edward VII), announced a state visit.<br /><br />
    To honor the prince appropriately and allow the city to shine in full splendor, the Maharaja at the time, Ram Singh, ordered the entire city to be painted in a traditional terracotta pink—a color that has always been <strong>a symbol of warm hospitality</strong> in Rajasthan. The law proved so popular that a decree remains in place to this day, mandating the pink coat of paint for buildings in the Old City.
  `,
  bedeutung: `
    <h3>Defensive Fortress Yesterday, Cultural Metropolis Today</h3>
    <strong>Past function:</strong> Jaipur was the proud economic and military powerhouse of the Kachwaha Rajput clan. It served as a secure, modern residential city and a vital trading hub for jewels, textiles, and spices along India's desert routes.<br /><br />
    <strong>Present significance:</strong> 
    Today, Jaipur is the bustling capital of the state of Rajasthan and, together with Delhi and Agra, forms India’s world-famous <strong>Golden Triangle</strong>. The entire Old City is a <strong>UNESCO World Heritage Site</strong>. It blends the rich art of gemstone cutting with modern tourism and stands as a living open-air museum preserving the legendary history of the Maharajas.`,
};

const tabs = document.querySelectorAll(".tab-btn");
const contentBox = document.getElementById("story-content");

function switchTab(tabKey) {
  contentBox.innerHTML = jaipurData[tabKey];
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    const tabKey = tab.getAttribute("data-tab");
    switchTab(tabKey);
  });
});

switchTab("entstehung");
