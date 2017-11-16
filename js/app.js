window.addEventListener('load', function () {
    var boxAddList = document.getElementsByClassName('add-list')[0];

    boxAddList.addEventListener('click', function () {
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
        container.setAttribute('class', 'box-form');
        form.setAttribute('placeholder', 'Añadir una lista...');
        form.setAttribute('class', 'input-style');
        btnSave.setAttribute('class', 'btn-style');
        btnSave.setAttribute('id','save-js');
        /*agregando texto al boton*/
        btnSave.textContent = 'Guardar';
        /*Borrar al div inicial */
        parentSection.removeChild(boxAddList);
        /* Creando Evento del boton guardar      */
        btnSave.addEventListener('click',function(){
            var textList= form.value;
            /** Creando el nuevo cuadro      */
            var containerList = document.createElement('div');
            var titleList = document.createElement('p');
            var boxInput = document.createElement('p');
            
            /*Agregando el texto  */
            titleList.textContent=textList;
            titleList.setAttribute('class','title-style');
            boxInput.textContent ='Añadir una tarea';
            /**Agregando a HTML */
            containerList.appendChild(titleList);
            containerList.appendChild(boxInput);
            parentSection.appendChild(containerList);
            parentSection.insertBefore(containerList,container);
            /**Agregando Atributos */
            containerList.setAttribute('class','box-form-list');
            boxInput.setAttribute('class','box-input-style')
            form.value='';
            boxInput.addEventListener('click',function(){
                /*Creando nuevos elementos de lista*/
                var textAreaList = document.createElement('textarea');
                var btnInputList =document.createElement('button');
                /**Agragando Atributos */
                btnInputList.setAttribute('class','btn-style');
                textAreaList.setAttribute('class','text-area-style');
                btnInputList.textContent ='Añadir';
                /**Agregando al HTML */
                containerList.appendChild(textAreaList);
                textAreaList.focus(); /* Dar foco al textarea*/ 
                containerList.removeChild(boxInput);
                containerList.appendChild(btnInputList);

                btnInputList.addEventListener('click',function(){
                    var listItem = document.createElement('div');
                    listItem.setAttribute('class','item-list-style')
                    listItem.textContent = textAreaList.value;
                    containerList.insertBefore(listItem,textAreaList);
                    textAreaList.focus()
                    textAreaList.value='';
                })
                


                


            })




        })

    })

})