


var container = document.getElementById("container")
var button = document.getElementById("action-btn")
var fomulario = document.getElementById("quiz")

// Escodnder o menu de informações

button.addEventListener("click", function(check){
      var container = document.getElementById("container");
      var formul = document.getElementById("quiz");

      if(container.style.display === "none" && formul.style.display === "block") {
          container.style.display = "block";
          formul.style.display = "none";
      }else{
          container.style.display = "none";
          formul.style.display = "block"
      }
    }); 