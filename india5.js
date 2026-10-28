const tajData = {
  geschichte: {
    title: "Die Legende einer unendlichen Liebe",
    text: "Das Taj Mahal wurde vom Großmogul <strong>Shah Jahan</strong> erbaut. Er errichtete das Monument als Mausoleum für seine große Liebe und Hauptfrau <strong>Arjumand Banu Begum</strong> (bekannt als Mumtaz Mahal), die 1631 bei der Geburt ihres 14. Kindes verstarb.<br /><br />Auf dem Sterbebett bat sie ihn, ihr ein Grabmal zu errichten, das die Welt so noch nie gesehen hat. Aus tiefster Trauer hielt sich der Herrscher an sein Versprechen.",
  },
  bauzeit: {
    title: "Meisterwerk der Superlative",
    text: "Der Bau begann um <strong>1632</strong> und dauerte über 20 Jahre bis zur endgültigen Fertigstellung im Jahr <strong>1653</strong>.<br /><br />Mehr als <strong>20.000 Handwerker</strong>, Steinmetze und Architekten aus ganz Asien und Persien waren am Bau beteiligt. Zusätzlich wurden über <strong>1.000 Elefanten</strong> eingesetzt, um den schweren weißen Marmor aus den über 300 Kilometer entfernten Steinbrüchen von Makrana nach Agra zu transportieren.",
  },
  architektur: {
    title: "Perfekte Symmetrie & Optische Täuschungen",
    text: "Das Taj Mahal gilt als das schönste Beispiel der Mogul-Architektur. Das gesamte Areal ist **vollkommen symmetrisch** aufgebaut.<br /><br />Ein faszinierender Trick: Die vier Minarette (Türme) an den Ecken neigen sich **ganz leicht nach außen**. Das hat zwei Gründe: Zum einen stürzen sie bei einem Erdbeben nicht auf das Hauptgebäude. Zum anderen wirken sie aus der Ferne für das menschliche Auge exakt gerade.",
  },
  bedeutung: {
    title: "Weltwunder damals und heute",
    text: "Schon kurz nach der Fertigstellung wurde Shah Jahan von seinem eigenen Sohn gestürzt und im Roten Fort von Agra eingesperrt. Von dort aus konnte er bis zu seinem Tod nur noch aus dem Fenster auf das Grab seiner geliebten Frau blicken.<br /><br />Heute gehört das Taj Mahal zum <strong>UNESCO-Weltkulturerbe</strong> und wurde zu einem der <strong>neuen 7 Weltwunder</strong> gewählt. Jährlich zieht es zwischen 7 und 8 Millionen Besucher an und steht weltweit als das absolute Symbol für Indien.",
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
