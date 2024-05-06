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

const modalForm = document.getElementById("modalOverlay");
const form = document.getElementById("contactForm");

modalForm.addEventListener("click", (event) => {
  event.target === modalForm ? modalForm.classList.remove("open") : null;
});

function openModal() {
  modalForm.classList.add("open");
}

function closeModal() {
  modalForm.classList.remove("open");
}

function cleanForm() {
  var name = (document.getElementById("nameInput").value = "");
  var lastName = (document.getElementById("lastNameInput").value = "");
  var email = (document.getElementById("emailInput").value = "");
  var phone = (document.getElementById("phoneInput").value = "");
  var mensage = (document.getElementById("mensageInput").value = "");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  var name = document.getElementById("nameInput").value;
  var lastName = document.getElementById("lastNameInput").value;
  var email = document.getElementById("emailInput").value;
  var phone = document.getElementById("phoneInput").value;
  var mensage = document.getElementById("mensageInput").value;

  const user = {
    name: name,
    lastName: lastName,
    email: email,
    phone: phone,
    mensage: mensage,
  };

  cleanForm();
  closeModal();
});
