document.addEventListener("DOMContentLoaded", () => {
  let geladeneThemen =
    JSON.parse(localStorage.getItem("indienReiseThemen")) || [];

  const linkElement = document.getElementById("nextStepLink");
  const endMessage = document.getElementById("noMoreTopics");

  if (geladeneThemen.length > 0) {
    const aktuellesThema = geladeneThemen[0];

    const dateiName = aktuellesThema.toLowerCase() + ".html";

    linkElement.href = dateiName;
    linkElement.innerText = `➥ Klick hier, denn jetzt geht's zum '${aktuellesThema}'`;
    linkElement.classList.remove("hidden");

    linkElement.addEventListener("click", (e) => {
      geladeneThemen.shift();

      if (geladeneThemen.length === 0) {
        localStorage.removeItem("indienReiseThemen");
        console.log(
          "Local Storage wurde bereinigt, da die Reiseplanung abgeschlossen ist.",
        );
      } else {
        localStorage.setItem(
          "indienReiseThemen",
          JSON.stringify(geladeneThemen),
        );
      }
    });
  } else {
    endMessage.classList.remove("hidden");
  }
});

const infoTexts = {
  kultur: {
    title: "Das „Goldene Dreieck“",
    text: ` Wir starten in <strong>Agra</strong>, der Heimat des Taj Mahal. Dieses weltberühmte Monument aus weißem Marmor muss man einmal im Leben mit eigenen Augen gesehen haben. <br /><br /> Lerne 
      <strong>Jaipur</strong> kennen! Die „pinke Stadt“ in Rajasthan fasziniert mit gewaltigen
      Festungen (Amber Fort) und dem prachtvollen Palast der Winde (Hawa Mahal).
      <br /><br />Dann geht's nach <strong>Neu-Delhi</strong>. Die indische Hauptstadt ist ein Schmelztiegel aus Geschichte und Moderne. Kontraste pur zwischen den engen Gassen von Alt-Delhi und den Prachtstraßen von Neu-Delhi.`,
  },
  herz: {
    title: "Das spirituelle Herz",
    text: `In <strong>Varanasi</strong> betrittst du eine der ältesten Städte der Welt. Die rituellen Waschungen und die abendlichen Ganga Aarti-Zeremonien an den Ghats des heiligen Flusses Ganges sind eine tief prägende Erfahrung. <br /><br /> Danach geht es nach <strong>Amritsar</strong>. Hier steht der Goldene Tempel, das Allerheiligste der Sikh-Religion. Die friedliche Atmosphäre und die riesige Gemeinschaftsküche, die täglich Zehntausende Menschen kostenlos bekocht, sind einzigartig.`,
  },
  natur: {
    title: "Romantik & Natur",
    text: `Besuche <strong>Udaipur</strong>, das oft als das „Venedig des Ostens“ bezeichnet wird. Die Stadt in Rajasthan liegt an idyllischen Seen und ist berühmt für ihre weißen Paläste, die direkt aus dem Wasser zu ragen scheinen. <br /><br /> Genieße <strong>Kerala</strong> (Backwaters): Im grünen Süden Indiens kannst du dir ein traditionelles Hausboot mieten und tagelang durch ein Netzwerk aus tropischen Kanälen, Palmenhainen und Gewürzplantagen gleiten.`,
  },
  goa: {
    title: "Genieße Goa",
    text: "Wenn du nach dem Trubel der Großstädte entspannen willst, bieten die Strände im Süden von <strong>Goa</strong> (z. B. Palolem) ruhige Tage unter Palmen, während der Norden für seine Hippie-Märkte und Partys bekannt ist.",
  },
};

const buttons = document.querySelectorAll(".info-btn");
const infoBox = document.getElementById("info-box");
const infoTitle = document.getElementById("info-title");
const infoText = document.getElementById("info-text");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetKey = button.getAttribute("data-target");

    if (button.classList.contains("active")) {
      button.classList.remove("active");
      infoBox.classList.add("hidden");
    } else {
      buttons.forEach((btn) => btn.classList.remove("active"));

      button.classList.add("active");

      infoTitle.innerHTML = infoTexts[targetKey].title;
      infoText.innerHTML = infoTexts[targetKey].text;

      infoBox.classList.remove("hidden");
    }
  });
});
