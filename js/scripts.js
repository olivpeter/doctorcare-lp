let slide = new Swiper('.depositionsCarousel', {
	slidesPerView: 1,
	spaceBetween: 32,
	speed: 800,
	grabCursor: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	breakpoints: {
		640: {
			slidesPerView: 1,
			spaceBetween: 32,
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
})

const mobileMenu = document.getElementById('mobileMenu')
const menu = document.getElementById('menu')

mobileMenu.addEventListener('click', () => {
	menu.classList.toggle('active')
})

const modalForm = document.getElementById('modalOverlay')
const form = document.getElementById('contactForm')

modalForm.addEventListener('click', ({ target }) => {
	target === modalForm ? modalForm.classList.remove('open') : null
})

function openModal() {
	modalForm.classList.add('open')
}

function closeModal() {
	modalForm.classList.remove('open')
}

function cleanForm() {
	let name = (document.getElementById('nameInput').value = '')
	let lastName = (document.getElementById('lastNameInput').value = '')
	let email = (document.getElementById('emailInput').value = '')
	let phone = (document.getElementById('phoneInput').value = '')
	let mensage = (document.getElementById('mensageInput').value = '')
}

form.addEventListener('submit', (e) => {
	e.preventDefault()

	let name = document.getElementById('nameInput').value
	let lastName = document.getElementById('lastNameInput').value
	let email = document.getElementById('emailInput').value
	let phone = document.getElementById('phoneInput').value
	let mensage = document.getElementById('mensageInput').value

	const user = {
		name: name,
		lastName: lastName,
		email: email,
		phone: phone,
		mensage: mensage,
	}

	const completeName = `${user.name} ${user.lastName}`

	const mensageToSend = `Olá, me chamo ${completeName}. Gostaria de receber uma cotação para do DoctorCare! Gostaria de: ${user.mensage}. Podem me contatar pelo email: ${user.email} ou pelo telefone ${user.phone}`

	const whatsappMensage = encodeURIComponent(mensageToSend)

	window.open(`https://wa.me/${user.phone}?text=${whatsappMensage}`, '_blank')

	cleanForm()
	closeModal()
})

const menuItems = document.querySelectorAll('.menuNavList li')

menuItems.forEach((item) => {
	item.addEventListener('click', () => {
		if (menu.classList.contains('active')) {
			menu.classList.remove('active')
		}
	})
})
