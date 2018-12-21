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
    <div class="article-details">
    <h1 class="post-name">${ arrKeys.name}</h1>
    <h3 class="post-title"> ${ arrKeys.title}</h3>
    <h3 class="post-title"> <img class="difficulty-img" src="img/difficulty.jpg"/> ${ arrKeys.info.difficulty}</h3>

    </div>
    </a>
    </div>`;
    templateListCard += card;
  });
  containerList.innerHTML = templateListCard;
};
createTemplateCard(arrKeys);

// Filtrado

// const assassin = document.getElementById('assassin');
// assassin.addEventListener('click', functionFilterAssassin);
// function functionFilterAssassin() {
//   const filterAssassin = arrKeys.filter(function(data) {
//     return data.tags.includes('Assassin') === true;
//   });
//   console.log(filterAssassin);
// }


// const fighter = document.getElementById('fighter');
// fighter.addEventListener('change', functionFilterFighter);
// function functionFilterFighter() {
//   const filterFighter = arrKeys.filter(function(data) {
//     return data.tags.includes('Fighter') === true;
//   });
//   console.log(filterFighter);
// }


// const mage = document.getElementById('mage');
// mage.addEventListener('click', functionFilterMage);
// function functionFilterMage() {
//   const filterMage = arrKeys.filter(function(data) {
//     return data.tags.includes('Mage') === true;
//   });
//   console.log(filterMage);
// }


// const marksman = document.getElementById('marksman');
// marksman.addEventListener('click', functionFilterMarksman);
// function functionFilterMarksman() {
//   const filterMarksman = arrKeys.filter(function(data) {
//     return data.tags.includes('Marksman') === true;
//   });
//   console.log(filterMarksman);
// }


// const support = document.getElementById('support');
// support.addEventListener('click', functionFilterSupport);
// function functionFilterSupport() {
//   const filterSupport = arrKeys.filter(function(data) {
//     return data.tags.includes('Support') === true;
//   });
//   console.log(filterSupport);
// }


// const tank = document.getElementById('tank');
// tank.addEventListener('click', functionFilterTank);
// function functionFilterTank() {
//   const filterTank = arrKeys.filter(function(data) {
//     return data.tags.includes('Tank') === true;
//   });
//   console.log(filterTank);
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