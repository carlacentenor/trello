window.addEventListener('load',function(){
var boxAddList= document.getElementsByClassName('add-list')[0];

boxAddList.addEventListener('click',function(){
/*creando etiquetas  */
var container = document.createElement('div');
var form = document.createElement('input')
var btnSave = document.createElement('button');
var parentSection = document.getElementById('container')
/*Agregando al html */
container.appendChild(form);
container.appendChild(btnSave);
parentSection.appendChild(container);
/* Agregando Atributos */
container.setAttribute('class','box-form');
form.setAttribute('placeholder','Añadir una lista...');
form.setAttribute('class','input-style');
btnSave.setAttribute('class','btn-style');
/*agregando texto al boton*/
btnSave.textContent = 'Guardar';
/*Borrar al div inicial */
parentSection.removeChild(boxAddList);
})

})