const tajData = {
  geschichte: {
    title: "The Legend of an Endless Love",
    text: "The Taj Mahal was built by the <strong>Mughal Emperor Shah Jahan</strong>. He erected the monument as a mausoleum for his great love and chief consort, <strong>Arjumand Banu Begum </strong> (known as Mumtaz Mahal), who passed away in 1631 while giving birth to their 14th child.<br /><br />On her deathbed, she asked him to build a tomb the likes of which the world had never seen before. Consumed by deepest grief, the ruler kept his promise.",
  },
  bauzeit: {
    title: "A Masterpiece of Superlatives",
    text: "Construction began around <strong>1632</strong> and took over 20 years to reach final completion in <strong>1653</strong>.<br /><br />More than <strong>20,000 craftsmen</strong>, stonemasons, and architects from across Asia and Persia were involved in the project. In addition, over <strong>1,000 elephants</strong> were deployed to transport the heavy white marble from the quarries of Makrana, located more than 300 kilometers away, to Agra.",
  },
  architektur: {
    title: "Perfect Symmetry & Optical Illusions",
    text: "The Taj Mahal is considered the finest example of Mughal architecture. The entire complex is laid out <strong>in perfect symmetry</strong>.<br /><br />A <strong>fascinating trick</strong>: the four minarets (towers) at the corners <strong>lean ever so slightly outward</strong>. This serves two purposes: first, in the event of an earthquake, they would fall away from the main building rather than onto it. Second, when viewed from a distance, they appear perfectly straight to the human eye.",
  },
  bedeutung: {
    title: "A Wonder of the World Then and Now",
    text: "Shortly after its completion, Shah Jahan was overthrown by his own son and imprisoned in the Red Fort of Agra. From there, until his death, he could only look out of his window at the tomb of his beloved wife.<br /><br />Today, the Taj Mahal is a UNESCO World Heritage Site and was voted one of the <strong>New 7 Wonders of the World</strong>. It attracts between 7 and 8 million visitors annually and stands worldwide as the ultimate symbol of India.",
  },
};

const cards = document.querySelectorAll(".info-card");
const displayBox = document.getElementById("details-display");
const displayTitle = document.getElementById("details-title");
const displayText = document.getElementById("details-text");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const topic = card.getAttribute("data-topic");

    if (card.classList.contains("active")) {
      card.classList.remove("active");
      displayBox.classList.add("hidden");
    } else {
      cards.forEach((c) => c.classList.remove("active"));

      card.classList.add("active");

      displayTitle.innerHTML = tajData[topic].title;
      displayText.innerHTML = tajData[topic].text;

      displayBox.classList.remove("hidden");

      displayBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  });
});
