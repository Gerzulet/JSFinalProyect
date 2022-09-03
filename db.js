// DATABASE

let animacionesDB = `
#offcanvasTop{
  background-color: black;
  border-color: white;
  font-family:'Courier New', Courier, monospace; 
  height: 400px;
  
}

body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-size: 1.5rem;
}

.inputUsuario {
	-webkit-animation: fade-in 3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: fade-in 3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}

#salir
  -webkit-animation: fade-in 3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: fade-in 3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}


@-webkit-keyframes fade-in {
 0% {
   opacity: 0;
 }
 100% {
   opacity: 1;
 }
}
@keyframes fade-in {
 0% {
   opacity: 0;
 }
 100% {
   opacity: 1;
 }
}


     
    `


let inputInvalido = `

#inputLog {
	-webkit-animation: shake-horizontal 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
	        animation: shake-horizontal 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
}

@-webkit-keyframes shake-horizontal {
 0%,
 100% {
   -webkit-transform: translateX(0);
           transform: translateX(0);
 }
 10%,
 30%,
 50%,
 70% {
   -webkit-transform: translateX(-10px);
           transform: translateX(-10px);
 }
 20%,
 40%,
 60% {
   -webkit-transform: translateX(10px);
           transform: translateX(10px);
 }
 80% {
   -webkit-transform: translateX(8px);
           transform: translateX(8px);
 }
 90% {
   -webkit-transform: translateX(-8px);
           transform: translateX(-8px);
 }
}
@keyframes shake-horizontal {
 0%,
 100% {
   -webkit-transform: translateX(0);
           transform: translateX(0);
 }
 10%,
 30%,
 50%,
 70% {
   -webkit-transform: translateX(-10px);
           transform: translateX(-10px);
 }
 20%,
 40%,
 60% {
   -webkit-transform: translateX(10px);
           transform: translateX(10px);
 }
 80% {
   -webkit-transform: translateX(8px);
           transform: translateX(8px);
 }
 90% {
   -webkit-transform: translateX(-8px);
           transform: translateX(-8px);
 }
}



`
let loginDesvanecer = `#inputLog {
	-webkit-animation: fade-out 1s ease-out both;
	        animation: fade-out 1s ease-out both;
}

 @-webkit-keyframes fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
`

let pagPrincipalDesvanecer = `body {
	-webkit-animation: fade-out 1s ease-out both;
	        animation: fade-out 1s ease-out both;
}

 @-webkit-keyframes fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
`
let pagPrincipal = ` <div id="pagPrincipal" class="container  ">
<div class="row my-4 ">
  <div id="title" class="col border border-light text-light text-center">
  </div>
  <div class="col-1  mx-4 my-4">
    <a href="#" onclick="logout()">
      <img src="./Images/door-open.svg" alt="Logout" id="logout">

    </a>
  </div>
</div>
<div class="resumen row ">
  <div class="col border border-light " id="cajaresumen">
    <div class="row my-2 ">
      <div class="col-3  mx-5 text-light">
        <a href="#">Nombre</a>
      </div>
      <div class="col-2  mx-4 text-light">
      <a href="#" >Fecha</a>
      </div>
      <div class="col-1  mx-2 text-light">
      <a href="#">Usuario</a>
      </div>
      <div class="col-2  mx-4 text-light">
      <a href="#">Importancia</a>
      </div>
      <div class="col-1   text-light">
        
      </div>


      <div id="contenedorNotas" class="row my-3 overflow-auto">
      
      
      </div>
     
    
    </div>
    
    
  
  </div >
  <div class="col-1 border border-light mx-4 fixed-right ">
    <div class="col text-center my-5">
    <a id="myOffCanvas" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom"><img  class="bar" id="addOffcanvas" src="./Images/plus.svg" alt="Add"></a>
    </div>
    <div class="col text-center my-5" >
      <a href="#"><img onclick="mostrarAtajos()" class="bar" src="./Images/keyboard-fill.svg" alt="atajos"></a>
     <h5 id="mensajeDesarrollo" style="color:white; font-size: 10px; font-family: 'Courier New', Courier, monospace"><h5>
    </div>
    <div class="col text-center my-5 ">

    <a type="button" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
    <img class="bar" src="./Images/info.svg" alt="info">
  </a>

      </div>
      <div class="col text-center my-5">
      <a  href="#" onclick="enviarForm()"><img class="bar" src="./Images/envelope-plus.svg"  alt="mail"></a>
      </div>
      <div class="col text-center my-5">
        <img class="cat" src="./Images/cat.png" alt="">
        </div>
    </div>
     
  </div>
 
</div>

  <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
    
  </div>

 


<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title text-light" id="offcanvasExampleLabel">Informacion</h5>
    <button type="button" class="btn btn-close btn-light text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <section class="text-light"> 
    Programa para crear notas localmente, funcional con varios usuarios. 
    Se añade uso de API de formspree. 
    <br> <br> 
    **Usar con navegador maximizado.
    Actualmente esta pagina no admite su uso en dispositivos tales como tablets o celulares (en desarollo).
    

    </section> 
  </div>
</div>

<div class="offcanvas offcanvas-bottom text-center" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title text-light " id="offcanvasBottomLabel"> 
    
    <button  type="button" class="btn-close mx-2" data-bs-dismiss="offcanvas" aria-label="Close">
    
    <img class="bar" onclick="agregarNotas()" src="./Images/add.svg" alt="">
    </button></h5>
    
    <button  type="button" class="btn-close mx-2" data-bs-dismiss="offcanvas" aria-label="Close">
    <img onclick="minimizarAgregarNotas()" class="bar " src="./Images/trash.svg" alt="">
    
    
    </button>
  </div>
  <div id="offcanvasBody" class="offcanvas-body small">
    <div class="row my-2">
      <div  class="form__group field col mx-1">
        <input maxlength="25" type="input" class="form__field mousetrap" placeholder="Titulo" name="name" id="tituloNota" required />
        <label for="name" class="form__label">Titulo</label>
    </div> 
  <div class="form__group field row mx-1">
        <select class="form__field mousetrap" id="importanciaNota" required>
          <option selected disabled value="">Importancia</option>
          <option>Alta</option>
          <option>Normal</option>
          <option>Baja</option>
          </select>
  </div>
  

    <div class="mt-5 ">
  <textarea   placeholder="Aca va tu nota" maxlength="130" class="form__field mousetrap" id="notaTextArea" rows="3"></textarea>
  
  </div>
  </div>
</div>
</div>

 
</div>





`