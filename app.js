// Get references to the necessary elements
const searchInput = document.getElementById('search-input');
const filteredList = document.getElementById('filtered-list');
const items = document.getElementsByClassName('item');

// Add an event listener to the search input
searchInput.addEventListener('input', filterItems);

// Function to filter the items based on the search input
function filterItems() {
  const searchText = searchInput.value.toLowerCase();

  // Clear the existing filtered list
  filteredList.innerHTML = '';

  // Iterate over each item and check if it matches the search text
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const itemText = item.textContent.toLowerCase();

    if (itemText.includes(searchText)) {
      // Clone the matched item and append it to the filtered list
      const clonedItem = item.cloneNode(true);
      filteredList.appendChild(clonedItem);
    }
  }
}