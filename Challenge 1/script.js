// Open Modal

const openModal = document.getElementById("open-modal");
const overlay = document.getElementById("overlay")

openModal.addEventListener("click", function() {
    overlay.style.display = "block"
})

// Close Modal


const closeModal = document.getElementById("close-modal")

closeModal.addEventListener("click", function() {
    overlay.style.display = "none"
})