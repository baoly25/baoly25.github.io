document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item"); // Get all FAQ items

    faqItems.forEach((item) => {
        const question = item.querySelector("h4"); // Get the question inside the item

        question.addEventListener("click", () => {
            item.classList.toggle("open-faq"); // Toggle open-faq class to show/hide answer
        });
    });
});