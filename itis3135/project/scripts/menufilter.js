document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("category-select"); // Get the category dropdown
    const menuItems = document.querySelectorAll(".menu-item"); // Get all menu items

    select.addEventListener("change", () => {
        const category = select.value; // Get selected category

        menuItems.forEach((item) => {
            const categories = item.dataset.category.split(" "); // Get item categories
            if (category === "all" || categories.includes(category)) {
                item.style.display = "block"; // Show matching items
            } else {
                item.style.display = "none"; // Hide non-matching items
            }
        });
    });
});