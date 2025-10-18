// Create a button dynamically
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

// Function to calculate the total
const getSum = () => {
  // Select all elements with class 'price'
  const prices = document.querySelectorAll(".price");

  // Initialize total sum
  let total = 0;

  // Loop through each price cell and add its value
  prices.forEach((price) => {
    total += parseFloat(price.textContent);
  });

  // Create a new row for total
  const table = document.querySelector("table");
  const newRow = document.createElement("tr");

  // Create a single cell that spans two columns
  const totalCell = document.createElement("td");
  totalCell.colSpan = 2; // Make it span across both columns
  totalCell.style.textAlign = "center";
  totalCell.textContent = `Total Price = Rs ${total}`;

  // Append cell to row and row to table
  newRow.appendChild(totalCell);
  table.appendChild(newRow);
};

// Add event listener to button
getSumBtn.addEventListener("click", getSum);
