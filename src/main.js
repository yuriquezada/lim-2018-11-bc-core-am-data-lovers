const arrKeys = Object.values(LOL.data);
const parrafo = document.getElementById("campeones");

//Recorrer y devuelve el URL del icono, el nombre y su título
for (let i = 0; i < arrKeys.length; i++){
    //const arr = [];
    const champions = arrKeys[i];
    const imgChampions = (`${champions.img} ${champions.name} ${champions.title} </br>`);
    //arr[i] = imgChampions;
    // document.write(imgChampions);
    console.log(imgChampions);
};





const containerList = document.getElementById("container-list");
const crearTemplateDeCard = (data) => {
    let templateListOfCards = '';
    // recorremos nuestro array con forEach
    data.forEach((LOL) => {
      // creamos un template(string) por cada elemento del array
      const card = `
        <div class="card-link">
          <article class="blog-card">
            <img class="post-image" src="${ champions.img }" />
            <div class="article-details">
              <h4 class="post-category">${ champions.name }</h4>
              <h3 class="post-title">${ champions.title }</h3>
              <p>"Hola Mundo"</p>
            </div>
          </article>
        </div>
      `;
      // vamos concatenando cada li 
      templateListOfCards += card;
    })
    containerList.innerHTML = templateListOfCards;
    crearTemplateDeCard(LOL);
  };
  // ejecuntado funciona para pintar la data en mi html
  
  