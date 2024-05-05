const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

var slide = new Swiper(".depositionsCarousel", {
  slidesPerView: 2,
  spaceBetween: 32,
  speed: 800,
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const modalBtn = document.getElementById("modalBtn");
const modalForm = document.getElementById("modalOverlay");

modalBtn.addEventListener("click", function () {
  modalForm.classList.add("open");
});

modalForm.addEventListener("click", function (event) {
  event.target === modalForm ? modalForm.classList.remove("open") : null;
  console.log(event);
});
