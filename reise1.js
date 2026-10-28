const jaipurData = {
  entstehung: `
    <h3>Die perfekt geplante Königsstadt</h3>
    Jaipur entstand im Jahr <strong>1727</strong>, gegründet von <strong>Maharaja Sawai Jai Singh II.</strong>, dem Herrscher von Amer. Im Gegensatz zu den meisten anderen indischen Städten jener Zeit, die organisch und chaotisch wuchsen, wurde Jaipur komplett auf dem Reißbrett entworfen.<br /><br />
    Jai Singh II. nutzte dafür die Prinzipien des <strong>Shilpa Shastra</strong> (der traditionellen hinduistischen Architekturlehre) und des Vastu Shastra. Die Stadt wurde in neun quadratische Rasteblöcke aufgeteilt, die den Himmelskörpern entsprechen, und von einer mächtigen Stadtmauer mit sieben Toren geschützt.
  `,
  "warum-pink": `
    <h3>Der Anstrich für die Ewigkeit</h3>
    Das absolute Markenzeichen Jaipurs ist seine Farbe. Im Jahr <strong>1876</strong> kündigte sich der britische Thronfolger <strong>Prinz Albert</strong> (der spätere König Edward VII.) zu einem Staatsbesuch an.<br /><br />
    Um den Prinzen gebührend zu ehren und die Stadt in vollem Glanz erstrahlen zu lassen, befahl der damalige Maharaja Ram Singh, die gesamte Stadt in einem traditionellen Terrakotta-Rosa anzustreichen – einer Farbe, die in Rajasthan seit jeher als **Symbol für herzliche Gastfreundschaft** gilt. Das Gesetz war so populär, dass es bis heute ein Dekret gibt, welches den Rosa-Anstrich für Gebäude in der Altstadt vorschreibt.
  `,
  bedeutung: `
    <h3>Schutzfestung gestern, Kulturmetropole heute</h3>
    <strong>Frühere Funktion:</strong> Jaipur war das stolze, wirtschaftliche und militärische Machtzentrum des Kachwaha-Rajputenclans. Es diente als sichere, moderne Residenzstadt und wichtiger Handelsknotenpunkt für Juwelen, Textilien und Gewürze auf den Wüstenrouten Indiens.<br /><br />
    <strong>Heutige Bedeutung:</strong> Heute ist Jaipur die pulsierende Hauptstadt des Bundesstaates Rajasthan und bildet zusammen mit Delhi und Agra das weltberühmte <strong>Goldene Dreieck</strong> Indiens. Die Altstadt gehört vollständig zum <strong>UNESCO-Weltkulturerbe</strong>. Sie verbindet die reiche Kunst des Edelsteinschleifens mit modernem Tourismus und ist ein lebendiges Freiluftmuseum, das die traditionsreiche Geschichte der Maharajas bewahrt.
  `,
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
