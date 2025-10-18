const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll(".price");
  let total = 0;

  // Add all price values (even if they’re edited)
  prices.forEach((cell) => {
    total += parseFloat(cell.textContent) || 0; // handles empty or invalid values
  });

  const table = document.querySelector("table");
  const newRow = document.createElement("tr");
  const totalCell = document.createElement("td");

  // ✅ Cypress expects this element
  totalCell.id = "ans";
  totalCell.colSpan = 2;
  totalCell.style.textAlign = "center";
  totalCell.style.fontWeight = "bold";

  // ✅ Must contain ONLY the total number (not extra words)
  totalCell.textContent = total;

  newRow.appendChild(totalCell);
  table.appendChild(newRow);

  // Optional: disable button to avoid duplicates
  getSumBtn.disabled = true;
};

getSumBtn.addEventListener("click", getSum);
