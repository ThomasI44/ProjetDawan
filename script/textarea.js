'use strict'
// Création de mes deux variable nom et date (retrouver dans la maquette de l'article plus bas)
function myFunction() {
    let nom = "Anonymous";
    let date = new Date();
// Appel de ma div avec l'ID demo. innerHTML me sert a intégré la maquette de mon article 
    document.getElementById("demo").innerHTML += `
        <article class = "box">
                <img class="img-fluid img-thumbnail" src="./img/imgarticle/ano.png" alt="article Luc">
                <div class="btn-group">
                    <button type="button" class="btn-sm btn-success">Action</button>
                    <button type="button" class="btn-sm btn-success dropdown-toggle dropdown-toggle-split"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="sr-only">Action</span>
                    </button>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Ajouter amis</a>
                        <a class="dropdown-item" href="#">Recommander</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Signaler</a>
                    </div>
                </div>
                <h2>${nom}</h2>
                <h6>
                    ${date}
                </h6>
<!-- Appel de mon input=text via l'ID editor1 (.value sert a intégré dans mes balise <p> tous ce que j"écrit) -->
                <p>${document.getElementById("editor1").value}</p>
        </article>`;
// appel de de mon bouton de mon textarea via l'ID btnTEXT.
// Il faut ajouter un evenement dans la page HTML 
   document.getElementById("btnText")
};