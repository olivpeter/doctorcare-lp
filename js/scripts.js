var slide = new Swiper(".depositionsCarousel", {
  slidesPerView: 1,
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
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
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

  const completeName = user.name + " " + user.lastName;

  const mensageToSend =
    "Olá, me chamo " +
    completeName +
    ". Gostaria de receber uma cotação para do DoctorCare!" +
    "\n\nEstou precisando de: " +
    user.mensage +
    ".\n\nSegue meus endereços de contato: " +
    user.email +
    " ou pelo whatsapp: " +
    user.phone;

  const whatsappMensage = encodeURIComponent(mensageToSend);
  const phoneToSend = "31975712672";

  window.open(`https://wa.me/${phoneToSend}?text=${whatsappMensage}`, "_blank");

  cleanForm();
  closeModal();
});
