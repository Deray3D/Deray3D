document.addEventListener("DOMContentLoaded", () => {
    const cartItems = [];
    const cartList = document.querySelector(".cart-items");
    const cartTotal = document.querySelector(".cart-total");

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            const product = button.parentElement;
            const productId = button.getAttribute("data-id");
            const productName = product.querySelector("h2").innerText;
            const productPrice = parseFloat(product.querySelector("p").innerText.replace("Cena: ", "").replace(" zł", ""));

            const cartItem = {
                id: productId,
                name: productName,
                price: productPrice
            };

            cartItems.push(cartItem);
            updateCart();
        });
    });

    function updateCart() {
        cartList.innerHTML = "";
        let total = 0;

        cartItems.forEach(item => {
            const li = document.createElement("li");
            li.innerHTML = `${item.name} - ${item.price} zł`;
            cartList.appendChild(li);
            total += item.price;
        });

        cartTotal.innerText = total.toFixed(2);
    }

    document.querySelector(".checkout").addEventListener("click", () => {
        alert("Przejdź do płatności (funkcjonalność do zaimplementowania)");
    });
});
