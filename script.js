const boton = document.getElementById("btn2");
const botom = document.getElementById("btn3");

function color(){
    document.body.style.backgroundColor = 'red'
}
boton.onclick = function(){
boton.classList.toggle('rotar');
}

botom.addEventListener('click',function(){
    botom.classList.toggle('palpitar');

})