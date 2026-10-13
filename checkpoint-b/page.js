import { items } from "./items.js";

export function renderItems(list) {
  const listElement = document.querySelector("#list");
  listElement.innerHTML = "";

  list.forEach(item => {
    const li = document.createElement("li");
    li.classList.add("tile");
    li.textContent = `${item.name} - ${item.price} EGP`;
    listElement.append(li);
  });
}

export function matching() {
  return items.filter(item => item.inStock === true);
}

export function start() {
  renderItems(items);

  const button = document.querySelector("#pick");

  button.addEventListener("click", () => {
    renderItems(matching());
  });
}
document.addEventListener("DOMContentLoaded", start);