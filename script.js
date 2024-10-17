const cart = [];
const cartItemsElement = document.getElementById("cart-items");
const totalElement = document.getElementById("total");

document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", (event) => {
        const productElement = event.target.closest(".product");
        const productName = productElement.querySelector("h2").textContent;
        const productPrice = parseFloat(
            productElement.querySelector("p").textContent.replace("Preço: R$ ", "").replace(",", ".")
        );

        addToCart(productName, productPrice);
    });
});

function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

function updateCart() {
    cartItemsElement.innerHTML = "";
    let total = 0;

    cart.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(li);
        total += item.price;
    });

    totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
}

document.getElementById("checkout").addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Carrinho vazio!");
    } else {
        // Redireciona para a página de pagamento (checkout.html)
        window.location.href = "checkout.html";
    }
});

