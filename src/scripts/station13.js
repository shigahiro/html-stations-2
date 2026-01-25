function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  const check = document.querySelector("#check");
  const text = document.querySelector("#text");

  if (check.checked) {
    text.style.backgroundColor = "red";
  } else {
    text.style.backgroundColor = "white";
  }
}
