// SALUDO
function saludo() {
    alert("¡Hola! Soy Maxi 👨‍💻");
}

// MODO OSCURO
const btnModo = document.getElementById("modoBtn");

btnModo.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// BOTÓN VOLVER ARRIBA
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

// ANIMACIONES SCROLL
const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

hiddenElements.forEach(el => observer.observe(el));

const form = document.getElementById("formContacto");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;

    if(nombre === "" || email === "") {
        alert("Por favor completá los campos obligatorios");
        return;
    }

    alert("Mensaje enviado correctamente 🚀");

    form.reset();
});


let indice = 0;

function moverSlide(direccion) {
    const track = document.getElementById("carouselTrack");
    const totalSlides = track.children.length;

    indice += direccion;

    if (indice < 0) {
        indice = totalSlides - 1;
    }

    if (indice >= totalSlides) {
        indice = 0;
    }

    track.style.transform = `translateX(-${indice * 100}%)`;
}