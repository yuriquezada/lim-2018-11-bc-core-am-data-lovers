const arrKeys = Object.values(LOL.data);

//Recorre la data y plasma en el html img, name y title
const containerList=document.getElementById("container-list");
const createTemplateCard = (list) => {
  let templateListCard = '';
  list.forEach((arrKeys)=>{
    const card=`
    <div class ="card-link">
    <article class="blog-card">
    <img class="post-image" src="${ arrKeys.img }" />
    <div class="article-details">
    <h1 class="post-name">${ arrKeys.name}</h1>
    <h3 class="post-title"> ${ arrKeys.title}</h3>
    </div>
    </article>
    </div>`;
    templateListCard += card;
  })
  containerList.innerHTML=templateListCard
};
createTemplateCard(arrKeys);

//Recorrer y devuelve el URL del icono, el nombre y su título
for (let i = 0; i < arrKeys.length; i++){
    //const arr = [];
    const champions = arrKeys[i];
    const imgChampions = (`${champions.img} ${champions.name} ${champions.title} </br>`);
    //arr[i] = imgChampions;
    // document.write(imgChampions);
    console.log(imgChampions);
};


//filtrado

const resultFighter = arrKeys.filter(function (data) {

    return data.tags.includes('Support')===true;

});
console.log(resultFighter);


//Buscador 

