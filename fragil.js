const codigo = window.location.hash.slice(1);
eval(codigo);
document.getElementById("teste").innerHTML = codigo;