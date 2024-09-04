const cajas = document.querySelectorAll(".no");

const very = (entries, observer) => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            console.log("La caja es visible:", entry.target.textContent);
        }
    }
}

const observer = new IntersectionObserver(very, {}); // pasa un objeto de opciones vacío si no tienes opciones específicas

for (let i = 0; i < cajas.length; i++) {
    observer.observe(cajas[i]); // utiliza observe para comenzar a observar cada elemento objetivo
}
