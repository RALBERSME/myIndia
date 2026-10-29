document.addEventListener("DOMContentLoaded", () => {
  const kastenDaten = {
    brahmanen: {
      title: "1. Brahmanen",
      translation: "Traditionelle Rolle: Priester, Gelehrte und Lehrer",
      description:
        "Sie stehen an der Spitze der klassischen Hierarchie (aus dem Mund des Urwesens entstanden). Ihre Aufgabe war das Studieren und Lehren der heiligen Schriften (Veden) sowie das Durchführen von Opferritualen. Sie genossen höchste gesellschaftliche Privilegien und galten als absolut rein.",
      color: "#4A90E2",
    },
    kshatriyas: {
      title: "2. Kshatriyas",
      translation: "Traditionelle Rolle: Krieger, Herrscher und Adlige",
      description:
        "Entstanden aus den Armen des Urwesens. Ihre Aufgabe war der Schutz der Gesellschaft, die Ausübung von weltlicher Macht und die Verwaltung des Landes. Könige und Soldaten gehörten traditionell dieser Kaste an.",
      color: "#E2844A",
    },
    vaishyas: {
      title: "3. Vaishyas",
      translation: "Traditionelle Rolle: Händler, Kaufleute und Grundbesitzer",
      description:
        "Entstanden aus den Oberschenkeln des Urwesens. Sie bildeten die wirtschaftliche Säule der traditionellen indischen Gesellschaft. Viehzüchter, Händler, Handwerker und Ackerbauern fielen in diese Kategorie.",
      color: "#50B83C",
    },
    shudras: {
      title: "4. Shudras",
      translation: "Traditionelle Rolle: Diener, Arbeiter und Dienstleister",
      description:
        "Entstanden aus den Füßen des Urwesens. Ihre religiös zugewiesene Aufgabe war es, den drei oberen Kasten zu dienen. Sie stellten die breite Masse der einfachen Arbeiter und Bauern dar und hatten historisch kaum Rechte.",
      color: "#9B5DE5",
    },
    dalits: {
      title: "Außerhalb der Hierarchie: Dalits",
      translation:
        "Früher abwertend: „Unberührbare“ (Heute selbstgewählt: Dalits = die Zerbrochenen)",
      description:
        "Sie stehen komplett außerhalb des vierstufigen Varna-Systems. Traditionell wurden sie für extrem unrein erklärt und mussten Arbeiten verrichten, die sonst niemand tat (z.B. Fäkalienbeseitigung, Gerben von Leder, Straßenkehren). Sie erlitten über Jahrhunderte massive Ausgrenzung und Diskriminierung.",
      color: "#6C757D",
    },
  };

  const layers = document.querySelectorAll(".pyramid-layer");
  const infoBox = document.getElementById("kasten-info-box");
  const infoTitle = document.getElementById("info-title");
  const infoTranslation = document.getElementById("info-translation");
  const infoDescription = document.getElementById("info-description");

  layers.forEach((layer) => {
    layer.addEventListener("click", () => {
      layers.forEach((l) => l.classList.remove("active-layer"));
      layer.classList.add("active-layer");

      const kastenKey = layer.getAttribute("data-target");
      const daten = kastenDaten[kastenKey];

      if (daten) {
        infoTitle.innerText = daten.title;
        infoTranslation.innerText = daten.translation;
        infoDescription.innerText = daten.description;

        infoBox.style.borderColor = daten.color;

        infoBox.style.opacity = 0;
        setTimeout(() => {
          infoBox.style.opacity = 1;
        }, 50);
      }
    });
  });
});
