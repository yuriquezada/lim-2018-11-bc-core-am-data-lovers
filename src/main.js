const arrKeys = Object.values(window.LOL.data);
const sortBy = document.getElementById('lol-sort');
const filtersByCategories = document.getElementById('lol-filter');
const inputSearchText = document.getElementById('search-champion');
const btnSearch = document.getElementById('search-btn');


// Recorre la data y plasma en el html img, name y title
const containerList = document.getElementById('container-list');
const createTemplateCard = (list) => {
  let templateListCard = '';
  list.forEach((arrKeys) => {
    const card = `
    <div class ="card-link">
      <a class="blog-card" id="${ arrKeys.id }" href="#open-modal">
      <img class="post-image" src="${ arrKeys.img }" />
      <div class="article-details" >
        <h1 class="post-name" id="${ arrKeys.id }">${ arrKeys.name} </h1>
        <h3 class="post-title" id="${ arrKeys.id }"> ${ arrKeys.title}</h3>
        <h3 class="post-title" id="${ arrKeys.id }"> <img class="difficulty-img" src="img/difficulty.jpg"/> ${ arrKeys.info.difficulty}</h3>
      </div>
      </a>
    </div>`;
    templateListCard += card;  
  });
  containerList.innerHTML = templateListCard;
};
createTemplateCard(arrKeys);

// Recorre la data y plasma en el html una ventana modal

const modal = document.getElementById('open-modal');
const createModalWindow = (mod) => {
  let modalWindow = '';
  mod.forEach((arrKeys) => {
    const card = `
    <div class = "modal-content" id="${ arrKeys.id }">
      <a href="#" title="Close" class="modal-close">X</a>
      <img class="post-image" src="" />

      <h1> <img src="${ arrKeys.img}"/>${ arrKeys.name}</h1>
      <h3>${ arrKeys.title}</h3>
      <p>${ arrKeys.blurb}</p>
      <p>${ arrKeys.tags}</p>
      <table>
        <tr>
          <th> Health Points (HP)</th>
          <th> HP per Level</th>
          <th> HP at Lvl. 5</th>
          <th> HP at Lvl. 10</th>
          <th> HP at Lvl. 15</th>
          <th> HP at Lvl. 18</th>
        </tr>
        <tr>
          <td>${ arrKeys.stats.hp}</td>
          <td>${ arrKeys.stats.hpperlevel}</td>
          <td>${ (parseFloat(arrKeys.stats.hp) + (parseFloat(arrKeys.stats.hpperlevel) * 5)).toFixed(2)}</td>
          <td>${ (parseFloat(arrKeys.stats.hp) + (parseFloat(arrKeys.stats.hpperlevel) * 10)).toFixed(2)}</td>
          <td>${ (parseFloat(arrKeys.stats.hp) + (parseFloat(arrKeys.stats.hpperlevel) * 15)).toFixed(2)}</td>
          <td>${ (parseFloat(arrKeys.stats.hp) + (parseFloat(arrKeys.stats.hpperlevel) * 18)).toFixed(2)}</td>
        </tr>
      </table>
    </div>`;
    modalWindow += card;
  });
  modal.innerHTML = modalWindow;
};
createModalWindow(arrKeys);

const functionModal = (event) => {
  let x = event.target;
  const capturedId = x.id;
  const classNameModalWindow = document.getElementsByClassName('modal-content');
  if (capturedId === classNameModalWindow.id) {
    createModalWindow()
  } else {}
};
functionModal();

// function myId(event) {
//   let x = event.target;
//   const capturedId = x.id;
//   return capturedId;
// }


// Filtrado

// const assassin = document.getElementById('assassin');
// assassin.addEventListener('click', functionFilterAssassin);
// function functionFilterAssassin() {
//   const filterAssassin = arrKeys.filter(function(data) {
//     return data.tags.includes('Assassin') === true;
//   });
//   console.log(filterAssassin);
// }


// Buscador 

const functionListenFilterOrder = () => {
  const listenSortBy = sortBy.options[sortBy.selectedIndex].value;
  const listenFiltersByCategories = filtersByCategories.options[filtersByCategories.selectedIndex].value;
  const arrayInputFilter = window.data.filterData(arrKeys, inputSearchText.value, parseInt(listenFiltersByCategories[0]));
  
  createTemplateCard(window.data.sortData(arrayInputFilter, parseInt(listenSortBy[0]), parseInt(listenSortBy[1])));
  return 1;
};

const functionMain = () => {
  functionListenFilterOrder();
  filtersByCategories.addEventListener('change', functionListenFilterOrder);
  sortBy.addEventListener('change', functionListenFilterOrder);
  btnSearch.addEventListener('click', functionListenFilterOrder);
};

functionMain();

// Filtrar
