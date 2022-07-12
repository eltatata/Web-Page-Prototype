function abrir() {
    let posicion_nueva = 0; 
    document.getElementById("li_contacto").style.right = posicion_nueva + "%";
}

document.getElementById("li_contacto").addEventListener("mouseleave", esconder);
function esconder() {
    let posicion_escondida = -100;
    document.getElementById("li_contacto").style.right = posicion_escondida + "%"; 
}