//Milestone 1
//Creiamo il nostro array di oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
const posts = [
    {
        "id": 1,
        "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi adipisci possimus animi quasi inventore omnis, quae quidem tempora dignissimos neque.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 790,
        "created": "25-06-2021"
    },
    {
        "id": 2,
        "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi adipisci possimus animi quasi inventore omnis, quae quidem tempora dignissimos neque.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 402,
        "created": "03-09-2021"
    },
    {
        "id": 3,
        "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi adipisci possimus animi quasi inventore omnis, quae quidem tempora dignissimos neque.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Fedez",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 93,
        "created": "03-09-2021"
    },
    {
        "id": 4,
        "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi adipisci possimus animi quasi inventore omnis, quae quidem tempora dignissimos neque.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Chiara Ferragni",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 51,
        "created": "03-09-2021"
    },
    {
        "id": 5,
        "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi adipisci possimus animi quasi inventore omnis, quae quidem tempora dignissimos neque.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Mariano Di Vaio",
            "image": ""
        },
        "likes": 43,
        "created": "03-09-2021"
    },
  
  
];



const homepage = document.querySelector(".lista-post");

for (let index = 0; index < posts.length; index++) {
  homepage.insertAdjacentHTML('beforeend', `<div class="post">
  <div class="post-header">
      <div class="cnt1">
          <div class="icon-cnt1">
              <img class="img-cnt1" src= "${posts[index].media}" alt="Phil Mangione">
          </div>
          <div class="info-cnt1">
              <div class="name-cnt1">${posts[index].author.name}</div>
              <div class="date-cnt1">${posts[index].created}</div>
          </div>
      </div>
  </div>
  <div class="text-post">${posts[index].content}</div>
  <img class="first-image" src="${posts[index].author.image}" alt="">
  <div>
      <div class="likes">
          <div>
                  <button id="button-like">Mi Piace</button>
          </div>
          <div>
              Piace a <b>${posts[index].likes}</b> persone
          </div>
      </div>
  </div>
</div>

</div>


</div>
  
  `

  )
    
}

document.addEventListener("click", function(event){
    console.log(event.target);
 if (event.target.id === "button-like") {
     console.log(event.child);

     
 }




});






