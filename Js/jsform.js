const contacto ={
    nombre: "",
    apellido:"",
    email:"",
    asunto:"",
    mjs:"",
};
const form = document.querySelector("form");
form.addEventListener("submit",escuchar );


function escuchar(e)
{
e.preventDefault();
contacto.nombre = e.target.nombre.value;
contacto.apellido = e.target.apellido.value;
contacto.email = e.target.email.value;
contacto.asunto = e.target.asunto.value;
contacto.mjs = e.target.mjs.value;

console.log(contacto);

}
