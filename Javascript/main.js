document.querySelectorAll(".carousel").forEach(carousel => {
    // Select both classes so we count all slides
    const items = carousel.querySelectorAll(".items, .items-selected");
    
    // Build the dots
    const clickHtml = Array.from(items, () => {
        return '<span class="click"></span>';
    });

    // Inject the dots into the bottom of the carousel
    carousel.insertAdjacentHTML("beforeend", `<div class="button">${clickHtml.join("")}</div>`);

    const buttons = carousel.querySelectorAll(".click");

    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
            // 1. Hide all items
            items.forEach(item => {
                item.classList.remove("items-selected");
                item.classList.add("items");
            });
            
            // 2. De-select all buttons
            buttons.forEach(btn => btn.classList.remove("click-selected"));

            // 3. Select the one you clicked
            items[i].classList.add("items-selected");
            button.classList.add("click-selected");
        });
    });

    // Set the first dot to "active" on load
    if (buttons[0]) buttons[0].classList.add("click-selected");
});