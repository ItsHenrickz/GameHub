const codigo = window.location.hash.slice(1);
eval(codigo);
document.getElementById("teste").innerHTML = codigo;




















 
/*const codigo = window.location.hash.slice(1);

const elemento = document.getElementById("teste");

if (elemento) {
    elemento.textContent = codigo;
}
*/