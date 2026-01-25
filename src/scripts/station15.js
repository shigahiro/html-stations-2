function displayList(e) {
  const paragraphs = document.querySelectorAll("p");
  const ul = document.createElement("ul");
  for (const p of paragraphs) {
    const li = document.createElement("li");
    li.textContent = p.textContent;
    ul.appendChild(li);
  }

  const fruits = document.querySelector("#fruits");

  // うまくいく
  fruits.replaceChildren();

  fruits.appendChild(ul);
}
