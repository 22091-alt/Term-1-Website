document.querySelectorAll(".carousel").forEach(carousel => {
    const items = carousel.querySelectorAll(".items")
    const clicksHtml = Array.from(items, () => {
        return '<span class="clicks"></span>';
    });

    carousel.insertAdjacentHTML(beforeend, '<div class="button">  ');

    console.log(clicksHtml);
});