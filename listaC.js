//Lista de contactos
let listaDeContactos = ["Joel Fernandez", "Ricardo Perez", "Arley Benites"];
let contactoNuevo;
contactoNuevo = "JoseDelToro"

const cont = {

    id : 1235038486,
    nombres : "Jose Armando",
    apellidos : "Del Toro",
    telefonos : 3053269392,
    ubicaciones : {
        cuidad : "Cartagena",
        direccion : "Pozon 14 de Febrero"
    }
}

console.log(listaDeContactos);

//Nuevo contacto
function nuevoContacto(nombres, telefonos) {
    nombres = cont.nombres;
    telefonos = cont.telefonos;
        listaDeContactos.unshift(nombres, telefonos);    
    

    return listaDeContactos;
}

nuevoContacto();
console.log(listaDeContactos);

let nuevaLista;
//Borrar un contacto
function borrarContacto(){
    let objetoRecorrido;
    for (objetoRecorrido in listaDeContactos) {
        nuevaLista = listaDeContactos.splice(3, 3, objetoRecorrido);    
    }

    return listaDeContactos;
}

borrarContacto()
console.log("Elemento Borrado: " + nuevaLista);

//Imprimir en consola la lista actualizada
function listaActualizada(){
    console.log(listaDeContactos);
}

listaActualizada(cont);