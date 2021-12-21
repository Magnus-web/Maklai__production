let btnRef = document.querySelector("#myModalBtn");
let modalRef = document.querySelector("#myModal");
let spanRef = document.querySelector(".close");

// console.log(btnRef);
// console.log(modalRef);
// console.log(spanRef);

btnRef.addEventListener("click", () => {
  modalRef.style.display = "block";
});

spanRef.addEventListener("click", () => {
  modalRef.style.display = "none";
});
window.addEventListener("click", (event) => {
  if (event.target === modalRef) {
    event.target.style.display = "none";
  }
});
window.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    modalRef.style.display = "none";
  }
});
