const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll(".price");
  let total = 0;

  prices.forEach((cell) => {
    total += parseFloat(cell.textContent);
  });

  const table = document.querySelector("table");
  const newRow = document.createElement("tr");
  const totalCell = document.createElement("td");

  // Give the total cell the id that Cypress expects
  totalCell.id = "ans";

  totalCell.colSpan = 2;
  totalCell.style.textAlign = "center";
  totalCell.style.fontWeight = "bold";
  totalCell.textContent = `Total Price = Rs ${total}`;

  newRow.appendChild(totalCell);
  table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);
