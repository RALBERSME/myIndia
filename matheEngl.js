document.addEventListener("DOMContentLoaded", () => {
  const inputNumber = document.getElementById("input-number");
  const inputMultiplier = document.getElementById("input-multiplier");
  const calcOutput = document.getElementById("calc-output");

  function calculateVedic() {
    const numStr = inputNumber.value.trim();
    const multiplier = parseInt(inputMultiplier.value);

    if (!numStr || isNaN(multiplier) || parseInt(numStr) <= 0) {
      calcOutput.innerHTML =
        "<p style='color:#EF4444;'>Please enter a valid positive number.</p>";
      return;
    }

    const workingStr = "0" + numStr + "0";
    let outputHtml = `<h3>Vedic calculation method for ${multiplier} × ${numStr}:</h3>`;
    outputHtml += `<p style='color:#94A3B8; margin-bottom:15px;'>Virtual chain with zeros: <strong>${workingStr.split("").join(" ")}</strong></p>`;

    let carry = 0;
    let resultDigits = [];

    const factor = multiplier - 10;

    for (let i = workingStr.length - 2; i >= 0; i--) {
      const currentDigit = parseInt(workingStr[i]);
      const rightNeighbor = parseInt(workingStr[i + 1]);

      const currentCalculation = currentDigit * factor + rightNeighbor + carry;
      const newDigit = currentCalculation % 10;
      const nextCarry = Math.floor(currentCalculation / 10);

      let stepExplanation = `• Digit <strong>${currentDigit}</strong>: `;
      if (factor === 1) {
        stepExplanation += `${currentDigit} + neighbor ${rightNeighbor}`;
      } else {
        stepExplanation += `(${currentDigit} × ${factor}) + neighbor ${rightNeighbor}`;
      }

      if (carry > 0) stepExplanation += ` + carry ${carry}`;
      stepExplanation += ` = <strong>${currentCalculation}</strong>`;

      if (currentCalculation >= 10) {
        stepExplanation += ` ➔ write <b>${newDigit}</b>, carry <b>${nextCarry}</b>`;
      } else {
        stepExplanation += ` ➔ write <b>${newDigit}</b>`;
      }

      outputHtml += `<div class='step-line'>${stepExplanation}</div>`;

      resultDigits.unshift(newDigit);
      carry = nextCarry;
    }

    if (carry > 0) {
      outputHtml += `<div class='step-line'>• Final carry: ➔ write <b>${carry}</b></div>`;
      resultDigits.unshift(carry);
    }

    let finalResult = resultDigits.join("");
    if (finalResult.startsWith("0") && finalResult.length > 1) {
      finalResult = finalResult.substring(1);
    }

    outputHtml += `<div class='final-result'>Final result: ${finalResult}</div>`;
    calcOutput.innerHTML = outputHtml;
  }

  inputNumber.addEventListener("input", calculateVedic);
  inputMultiplier.addEventListener("change", calculateVedic);

  calculateVedic();
});
