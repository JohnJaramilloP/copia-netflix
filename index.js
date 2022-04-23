const d = document,
  btn = d.querySelectorAll(".faq_btn"),
  li = d.querySelectorAll(".faq_li");
  


// Efecto - preguntas frecuentes


btn.forEach((e, i) => {
  btn[i].addEventListener("click", () => {
    if (li[i].classList.contains("active")) {
      li[i].classList.remove("active");
    } else {
      li.forEach((e, i) => {
        li[i].classList.remove("active");
      });
      li[i].classList.add("active");
    }
  });
});

// Botones de idioma

let select_btn = d.querySelector(".select_span"),
  select = d.querySelector(".select");


  select_btn.addEventListener("click", (e) => {
    if (select.classList.contains("select_active")) {
      select.classList.remove("select_active");
    } else {
      select.classList.add("select_active");
    }
  });
