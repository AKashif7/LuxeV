function addToCart(button) {
    const product = button.parentNode;
    const productName = product.querySelector('h2').textContent;
    const productPrice = parseFloat(product.querySelector('.price').textContent.replace('£', ''));
    const quantityInput = product.querySelector('input[type="number"]');
    const quantity = quantityInput.valueAsNumber || 0;
    const basketItems = document.querySelectorAll('.basket-item');
    let itemExists = false;
    basketItems.forEach(item => {
        if (item.querySelector('.item-name').textContent === productName) {
            const itemQuantity = parseInt(item.querySelector('.item-quantity').textContent);
            const newItemQuantity = itemQuantity + quantity;
            const newItemTotal = productPrice * newItemQuantity;
            item.querySelector('.item-quantity').textContent = newItemQuantity;
            item.querySelector('.item-total').textContent = '£' + newItemTotal.toFixed(2);
            itemExists = true;
        }
    });
    if (!itemExists) {
        const basket = document.querySelector('.basket-items');
        const newItem = document.createElement('div');
        newItem.classList.add('basket-item');
        const itemName = document.createElement('span');
        itemName.classList.add('item-name');
        itemName.textContent = productName;
        newItem.appendChild(itemName);
        const itemQuantity = document.createElement('span');
        itemQuantity.classList.add('item-quantity');
        itemQuantity.textContent = quantity;
        newItem.appendChild(itemQuantity);
        const itemTotal = document.createElement('span');
        itemTotal.classList.add('item-total');
        itemTotal.textContent = '£' + (productPrice * quantity).toFixed(2);
        newItem.appendChild(itemTotal);

        //  remove button on the things
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-button');
        removeButton.addEventListener('click', function() {
            removeItem(newItem);
        });
        newItem.appendChild(removeButton);

        basket.appendChild(newItem);
    }

    updateTotal();
}
function removeItem(item) {
    item.parentNode.removeChild(item);
    updateTotal();
}
function updateTotal() {
    const basketItems = document.querySelectorAll('.basket-item');
    let total = 0;
    basketItems.forEach(item => {
        const itemTotal = parseFloat(item.querySelector('.item-total').textContent.replace('£', ''));
        total += itemTotal;
    });
    document.querySelector('.total-amount').textContent = '£' + total.toFixed(2);
}
