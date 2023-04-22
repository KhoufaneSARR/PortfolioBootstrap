const txtAnim = document.querySelector('h1');

new Typewriter(txtAnim, {
    //deleteSpeed:20
    loop:true,
})
.typeString(' Je suis Khoufane SARR')
//faire apparaitre le texte
.pauseFor(300)
.deleteChars(21)
//supprimer le texte
.typeString(' Agile ')
.pause(600)
.deleteChars(7)
.typeString(' Motivé ')
.pause(900)
.deleteChars(8)
.typeString('Perfectionniste')
.pause(1000)
.deleteChars('15')
.typeString('Créatif')
.start()

//animation bouton scroll

// Sélectionnez le bouton de retour en haut de la page
var mybutton = document.querySelector(".btn-scroll");

// Lorsque l'utilisateur fait défiler la page vers le bas de 20 pixels à partir du haut, affichez le bouton
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Lorsque l'utilisateur clique sur le bouton, faites défiler la page jusqu'en haut
mybutton.addEventListener("click", function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});


//Formulaire contact

// Sélectionnez le formulaire
var form = document.querySelector("form");

// Lorsque l'utilisateur soumet le formulaire, appelez la fonction de validation
form.addEventListener("submit", function(event) {
  if (!validateForm()) {
    event.preventDefault();
  }
});

// Définissez la fonction de validation du formulaire
function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;

  // Vérifiez que les champs "Nom", "Email" et "Téléphone" sont remplis
  if (name == "" || email == "" || phone == "") {
    alert("Veuillez remplir tous les champs obligatoires.");
    return false;
  }

  // Vérifiez que le numéro de téléphone est un nombre à 9 chiffres
  if (isNaN(phone) || phone.length != 9) {
    alert("Veuillez saisir un numéro de téléphone valide à 9 chiffres.");
    return false;
  }

  return true;
}

