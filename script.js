document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('.produto button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Produto adicionado ao carrinho!');
        });
    });
});