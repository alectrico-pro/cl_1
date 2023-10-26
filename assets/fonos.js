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
     fetch('http://localhost:5000/servicios.json')
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
  //Borra los datos existentes, los cuales se usarían como fallback
  //en caso necesario
  //Los datos que queremos borrar es el contenido de la lista
  //de precios que se ubican como la primera tabla
  //Se borrarán solo las filas de la primera tabla que sea encontrada
  const whatsapp = document.getElementById("boton-whatsapp");
  whatsapp.href=`tel: ${data.servicios[0].precio}`;
  whatsapp.innerHTML= data.servicios[0].precio;
  alert(`Este es el contenido de #boton-whatsapp.href ${whatsapp.href}`);
}
