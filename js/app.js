// mostrar el nav
function abrir() {
    let posicion_nueva = 0;
    document.getElementById("contenedor_li").style.right =  posicion_nueva + "%"; 
} 

// ocultar el nav
document.getElementById("contenedor_li").addEventListener("mouseleave", esconder);
function esconder() {
    let posicion_escondida = -1000;
    document.getElementById("contenedor_li").style.right = posicion_escondida + "%"; 
}