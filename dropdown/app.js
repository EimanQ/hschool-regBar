const btn = document.querySelector(`.button`),
    menu = document.querySelector(`.dropdown-menu`),
    item1 = document.querySelector(`.dropdown-item1`),
    item2 = document.querySelector(`.dropdown-item2`),
    item3 = document.querySelector(`.dropdown-item3`),
    item4 = document.querySelector(`.dropdown-item4`),
    textBtn = document.querySelector(`.btn-name`);

btn.addEventListener(`click`, () => {
    menu.style = `display: block`;
    document.querySelector(`.btn-arrow`).style = `transform: rotateX(180deg)`;
})

item1.addEventListener(`click`, () => {
    const text = item1.textContent;
    textBtn.innerHTML = text;
})
item2.addEventListener(`click`, () => {
    const text = item2.textContent;
    textBtn.innerHTML = text;
})
item3.addEventListener(`click`, () => {
    const text = item3.textContent;
    textBtn.innerHTML = text;
})
item4.addEventListener(`click`, () => {
    const text = item4.textContent;
    textBtn.innerHTML = text;
})