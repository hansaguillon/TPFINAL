let comentarios = [];


//obtengo elementos
const addComForm = document.getElementById("comment-form");
const comModal = document.getElementById("comD");
const editComForm = document.getElementById("editComForm");
const eliminarButton = document.getElementById("eliminarButton");
const cancelarButton = document.getElementById("cancelarButton");
//const cambiarcolor = document.getElementById("colorbutton");
const estadobutton = document.getElementById("estadobutton");
//detecto los eventos
addComForm.addEventListener("submit", agregarelemtosform);
editComForm.addEventListener("submit",escuchareditbutclick);
eliminarButton.addEventListener("click",escuchareliminarbutclick) ;
cancelarButton.addEventListener("click",() => comModal.close()) ;
//cambiarcolor.addEventListener("click", escucharCambiarColor);
estadobutton.addEventListener("click",cambiodeestado);


//funciones
function cambiodeestado()
{
  const comId = Number(editComForm.querySelector("#comId").textContent)
  console.log(comId);
  const com = comentarios.find(comen => comen.id === comId);
  if(com.estado === true)
  {
    com.estado = false;
  }
  else
  {
    com.estado = true;
  }

  comModal.close();
  renderDiv();


  

}


/*function escucharCambiarColor()
{
  comentarios.forEach((comen) =>{
  const colorBox = document.getElementById("color"+comen.id);
  const red = Math.floor(Math.random() * 256);
  const yellow = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const ramdonColor = "rgb("+red + ","+ yellow+","+blue +")";
  colorBox.style.backgroundColor = ramdonColor; 
  })
  /*const colorBox = document.getElementById("color");
  const red = Math.floor(Math.random() * 256);
  const yellow = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const ramdonColor = "rgb("+red + ","+ yellow+","+blue +")";
  colorBox.style.backgroundColor = ramdonColor; 
  
  comModal.close();
}
*/

function escuchareditbutclick(e)
{
  e.preventDefault();
  const textomodal = editComForm.querySelector("#conTextoModal");
  const comIdmodal = Number(editComForm.querySelector("#comID").textContent);
  const comen = comentarios.find(com => com.id === comIdmodal);
  comen.texto = textomodal.value;
  renderDiv();
  comModal.close();


}
function escuchareliminarbutclick(){
  const comId = Number(editComForm.querySelector("#comId").textContent);
  console.log(comId);
  comentarios = comentarios.filter(comen => comen.id !== comId);
  console.log(comId);
  comModal.close();

  renderDiv();
 



} 

function agregarelemtosform(e)
{
  e.preventDefault();

  const forComtextarea = addComForm.querySelector("#comment-input");
  const comtexarea = forComtextarea.value.trim();

  if(comtexarea !== "")
  {
    const newcom = {
      id: generateId(comentarios),
      texto: comtexarea,
      estado: false,
    };
    comentarios.push(newcom);
    //console.log(newcom);
    renderDiv();
    addComForm.reset();
  }

}

function renderDiv(){
  const div = document.getElementById("comment-section");
  div.innerHTML = "";

  comentarios.forEach((comen) =>{

    const com = document.createElement("div");
    com.classList.add("comment"); 
    com.setAttribute("data-com-id",comen.id);
    com.textContent = comen.texto;
    com.addEventListener("click",escuchardivclick);

    div.appendChild(com);
    
    
  })
function escuchardivclick(e)
{
  //console.log(e.currentTarget.getAttribute("data-com-id"));
  const comId = e.currentTarget.getAttribute("data-com-id");
  const com = comentarios.find(comen => comen.id === Number(comId));

  const est = document.getElementById("estado");
  if(com.estado)
  {
    est.textContent = "Aprobado";
    est.classList.add("blue");
    est.classList.remove("red");
  }
  else{
    est.textContent = "Pendiente";
    est.classList.add("red");
    est.classList.remove("blue");
  }

  const comIdInput = editComForm.querySelector("#comId");

  const comTextoInput = editComForm.querySelector("#conTextoModal");
  
  comIdInput.textContent = com.id;
  comTextoInput.value = com.texto;

  comModal.showModal();
}

}
/*
document.getElementById("comment-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var commentInput = document.getElementById("comment-input").value;
    if (commentInput !== "") {
      var commentSection = document.getElementById("comment-section");
      var commentElement = document.createElement("div");
      commentElement.classList.add("comment");
      commentElement.textContent = commentInput;
      commentSection.appendChild(commentElement);
      document.getElementById("comment-input").value = "";
    }
  });

*/

function generateId(comentarios) {
  if (comentarios.length === 0) {
    return 1;
  } else {
    const ultCom = comentarios[comentarios.length - 1];
    return ultCom.id + 1;
  }
}

















