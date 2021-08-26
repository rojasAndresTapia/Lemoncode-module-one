let inputName = document.getElementById('name').value = 'Andrés';

let inputLastName = document.getElementById('lastName').value = 'Rojas';
document.getElementById('img').src= 'img/foto perfil1.png';

document.getElementById("button").onclick = function(){
    console.log(inputName + " " + inputLastName);
};