// Array of items with their details
var items = [
    { id: 1, name: 'Item One', image: '../items/re-3_apples.png' },
    { id: 2, name: 'Item Two', image: '../items/re-4_oranges.png' },
    // Add more items as needed
];

// Function to dynamically generate list items
function generateListItems() {
    var listContainer = document.getElementById('item-list');

    items.forEach(function(item) {
        var listItem = document.createElement('li');
        listItem.className = 'list-item';
        listItem.innerHTML = item.name +
            '<div class="item-content" id="item' + item.id + '">' +
                '<p>ID: ' + item.id + '</p>' +
                '<p>Name: ' + item.name + '</p>' +
                '<img src="' + item.image + '" alt="' + item.name + ' Image" class="item-image">' +
            '</div>';
        
        listItem.onclick = function() {
            toggleItem('item' + item.id);
        };

        listContainer.appendChild(listItem);
    });
}

// Function to toggle the visibility of item content
function toggleItem(itemId) {
    var itemContent = document.getElementById(itemId);
    if (itemContent.style.display === 'none') {
        itemContent.style.display = 'block';
    } else {
        itemContent.style.display = 'none';
    }
}

window.onload = generateListItems;
