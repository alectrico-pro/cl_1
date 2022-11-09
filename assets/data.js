fetch('https://www.alectrico.cl/servicios/designer/cargas.json')
  .then( function (response) {
     return response.json();
  })
  .then( function (data){
     console.log( data );
     appendData(data);
  })
  .catch( function (err) {
     console.log(err);
  });


function appendData(data) {
  //Borra los datos existentes, los cuales se usarían como fallback
  //en caso necesario
  //Los datos que queremos borrar es el contenido de la lista
  //de precios que se ubican como la primera tabla
  //Se borrarán solo las filas de la primera tabla que sea encontrada
  var tbody = document.getElementsByTagName("tbody");
  tbody[0].innerHTML='';

  //Ahora es necesario agregar datos desde el servidor
  var myData = tbody[0];

  for (var i = 0; i < data.servicios.length; i++) {
    var tr = document.createElement("tr");
    var nombre = document.createElement("td");
          
    nombre.innerHTML = data.servicios[i].nombre;
    nombre.class = "body-item mbr-fonts-style display-7"
    tr.appendChild(nombre);

    var precio = document.createElement("td");
    precio.class = "body-item mbr-fonts-style display-7"
    precio.innerHTML = '$' +  data.servicios[i].precio;
    tr.appendChild(precio);
    myData.appendChild(tr);
  }
}

