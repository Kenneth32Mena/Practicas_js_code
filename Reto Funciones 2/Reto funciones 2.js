const Formulario = {
  nombre: "Kenneth",
  email: "Kenneth2024@test.com",
  mensaje: 'Hello'

}
function validar(Formulario) {
  if (Formulario.nombre == '' || Formulario.email == '' || Formulario.mensaje == '') {
    console.log("Por favor completa todos los campos.")
  }
  else {
    console.log("¡Formulario eviado con exito");
  }
}
validar(Formulario);