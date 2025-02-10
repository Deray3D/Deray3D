document.addEventListener("DOMContentLoaded", () => {
    const cart = []; // Przechowuje produkty w koszyku
    const cartItemsList = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const cartCount = document.getElementById("cart-count");
    const cartModal = document.getElementById("cart-modal");
    const cartButton = document.getElementById("cart-button");
    const closeCartButton = document.getElementById("close-cart");
    const checkoutButton = document.getElementById("checkout");

    // Dodawanie produktów do koszyka
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            const product = {
                id: button.getAttribute("data-id"),
                name: button.getAttribute("data-name"),
                price: parseFloat(button.getAttribute("data-price"))
            };

            cart.push(product);
            updateCart();
        });
    });

    // Aktualizacja koszyka
    function updateCart() {
        cartItemsList.innerHTML = "";
        let total = 0;

        cart.forEach(item => {
            const li = document.createElement("li");
            li.innerHTML = `${item.name} - ${item.price} zł`;
            cartItemsList.appendChild(li);
            total += item.price;
        });

        cartTotal.innerText = total.toFixed(2);
        cartCount.innerText = cart.length;
    }

    // Otwieranie koszyka
    cartButton.addEventListener("click", () => {
        cartModal.style.display = "flex";
    });

    // Zamykanie koszyka
    closeCartButton.addEventListener("click", () => {
        cartModal.style.display = "none";
    });

    // Składanie zamówienia
    checkoutButton.addEventListener("click", () => {
        alert("Zamówienie złożone! Suma: " + cartTotal.innerText + " zł");
        cart.length = 0; // Czyści koszyk
        updateCart();
        cartModal.style.display = "none";
    });
});
