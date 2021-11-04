// Ricreiamo le card del nostro team aggiungendo al layout di base fornito, il nostro javascript in cui:
// - Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. (nel nostro file js)
// Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.
// - Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.

// Creo Array che contiene tutti i membri

var members = [
    {
        "img_member" : "img/wayne-barnett-founder-ceo.jpg",
        "name" : "Wayne Barnett",
        "role" : "Founder & CEO"

    },
    {
        "img_member" : "img/angela-caroll-chief-editor.jpg",
        "name" : "Angela Caroll",
        "role" : "Chief Editor"

    },
    {
        "img_member" : "img/walter-gordon-office-manager.jpg",
        "name" : "Walter Gordon",
        "role" : "Office Manager"

    },
    {
        "img_member" : "img/angela-lopez-social-media-manager.jpg",
        "name" : "Angela Lopez",
        "role" : "Social Media Manager"

    },
    {
        "img_member" : "img/scott-estrada-developer.jpg",
        "name" : "Scott Estrada",
        "role" : "Developer"

    },
    {
        "img_member" : "img/barbara-ramos-graphic-designer.jpg",
        "name" : "Barbara Ramos",
        "role" : "Graphic Designer"

    }

];

// variabile utilizzata per salvare in html

let container = document.querySelector(".team-container");

for(let i = 0; i < members.length; i++){
    let object = members[i];
    
// variabile utilizzata per stampare in html

    container.innerHTML +=`

        <div class="team-card">
            <div class="card-image">
              <img
                src="${members[i].img_member}"
                alt="Wayne Barnett"
              />
            </div>
            <div class="card-text">
              <h3>${members[i].name}</h3>
              <p>${members[i].role}</p>
            </div>
          </div>
        </div>

`
};
