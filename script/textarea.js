'use strict'

function myFunction() {
    let nom = "Thomas";
    let date = new toLocaleDateString()
    let x = document.getElementById("btnText").value;
    document.getElementById("demo").innerHTML =  `
        <article class = "box">
                <img class="img-fluid img-thumbnail" src="./img/imgarticle/luc.jpg" alt="article Luc">
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
                <p id= "demo"></p>
        </article>
            `;
            return x;
}
addEventListener("click", myFunction());