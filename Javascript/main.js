document.querySelectorAll(".carousel").forEach(carousel => {
    const items = carousel.querySelectorAll(".items")
    const clicksHtml = Array.from(items, () => {
        return '<span class="clicks"></span>';
    });

    carousel.insertAdjacentHTML("beforeend", `
    <div class="button">
         ${clicksHtml.join("")}
    </div>
`);

    const clicks =  carousel.querySelectorAll(".clicks");

    clicks.forEach((button, i) => {
    
        button.addEventListener("click", () => {
            console.log(`You clicked button number ${i}`);
            
            items.forEach(item => item.classList.remove("item-selected"));
       });
    
    });
});