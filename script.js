const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll(".price");
  let total = 0;

  prices.forEach(cell => {
    total += Number(cell.textContent) || 0;
  });

  const table = document.querySelector("table");
  const row = document.createElement("tr");
  const cell = document.createElement("td");

  cell.id = "ans";        // required
  cell.colSpan = 2;       // merge both columns
  cell.textContent = total; // only number, no text

  cell.style.textAlign = "center";
  cell.style.fontWeight = "bold";

  row.appendChild(cell);
  table.appendChild(row);

  getSumBtn.disabled = true;
};

getSumBtn.addEventListener("click", getSum);
