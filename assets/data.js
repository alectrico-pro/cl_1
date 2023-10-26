fetch('https://www.alectrico.cl/listas/designer/fonos.json')
  .then( function (response) {
     return response.json();
  })
  .then( function (data){
     console.log( data );
     replaceFonos(data);
  })
  .catch( function (err) {
     console.log(err);
     fetch('http://localhost/servicios.json')
          .then( function (response) {
             return response.json();
          })
          .then( function (data) {
             console.log(data);
          })
          .catch( function (err) {
             console.log( err );
          });
  });

function replaceFonos(data) {
  //data es un json de llave servicios con llavez publico Y numero
  //Está definido como una función llamada fonos
  //en cloud de google
  //no usar el signo + en la escritura del número telefónico
  const whatsapp = document.getElementById("boton-whatsapp");
  whatsapp.href=`https://api.whatsapp.com/send?phone=${data.fonos[1].numero}&text=Hola alec, necesito resolver un problema eléctrico en Providencia`
  //whatsapp.href=`https://wa.me/${data.fonos[1].numero}`;
  //whatsapp.href=`tel: ${data.servicios[0].numero}`;
  whatsapp.innerHTML= data.fonos[1].numero;

  const llameAhora = document.getElementById("llame-ahora");
  llameAhora.href=`https://wa.me/${data.fonos[0].numero}`;
  llameAhora.href=`https://api.whatsapp.com/send?phone=${data.fonos[0].numero}&text=Hola alec, necesito resolver un problema eléctrico en Providencia`
  //nst span = llameAhora.createElement("span");
  //an.class = "socicon socicon-whatsapp mbr-iconfont mbr-iconfont-btn"
  //an.innerHTML = "span" ;
  llameAhora.innerHTML= data.fonos[0].numero;

	//"<span class="socicon socicon-whatsapp mbr-iconfont mbr-iconfont-btn"></span>LLAME AHORA<br>932-000-849<br></a></div>

}
       

fetch('https://www.alectrico.cl/listas/designer/cargas.json')
  .then( function (response) {
     return response.json();
  })
  .then( function (data){
     console.log( data );
     appendData(data);
  })
  .catch( function (err) {
     console.log(err);
     fetch('http://localhost/servicios.json')
	  .then( function (response) {
	     return response.json();
          })
	  .then( function (data) {
	     console.log(data);
	  })
	  .catch( function (err) {
	     console.log( err );
	  });
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
