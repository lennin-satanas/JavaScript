var x= 4, y='4'
//utilizar siempre el triple igual
//no commitiar codigo con el doble igual

/*
var sacha = {
  nombre: 'Sacha'
}

var otraPersona = {
  nombre: 'Sacha'
}
//esto nos da False con == y ===
*/

/*
var sacha = {
  nombre: 'Sacha'
}

var otraPersona = sacha
// al comparar con == o === True
*/

var sacha = {
  nombre: 'Sacha'
}

var otraPersona = {
  ...sacha
}
// false porque es otro objeto
//otra posicion en memoria  RAM si se modifica solo cambia en uno
