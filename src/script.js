// Получите ссылку на элемент с классом "catalog-link"
const catalogLink = document.querySelector(".catalog-link");
const catalogModal = document.getElementById("catalog-modal"); // Добавьте эту строку

// Добавьте обработчик события click на ссылку "Каталог"
catalogLink.addEventListener("click", function(event) {
    event.preventDefault(); // Предотвращаем стандартное действие ссылки
    catalogModal.style.display = "block"; // Открываем модальное окно
});

// Добавьте обработчик события click на кнопку "Закрыть" в модальном окне
const closeCatalogButton = document.getElementById("close-catalog");
closeCatalogButton.addEventListener("click", function() {
    catalogModal.style.display = "none"; // Закрываем модальное окно при клике на кнопку "Закрыть"
});