// Variables declaradas
const arrKeys = Object.values(window.LOL.data);
const sortBy = document.getElementById('lol-sort');
const filtersByCategories = document.getElementById('lol-filter');
const inputSearchText = document.getElementById('search-champion');
const btnSearch = document.getElementById('search-btn');

// Recorre la data y plasma en el html templates (cards y ventanas modales)

const containerList = document.getElementById('container-list');
const createTemplateCard = (arrKeys) => {
  let data = [];
  let newGrill = [];
  containerList.value = '';

  for (let i = 0; i < arrKeys.length; i++)
    data.push(Object.assign({}, arrKeys[i]));

  for (let i = 0; i < data.length; i++) {
    newGrill.push(`

    <div class ="card-link">
        <a class="blog-card" id="${ data[i].id }" href="#openmodal${i}">
        <div>
          <img class="post-image " src="${data[i].img}" />
          <div class="article-details" >
          <h1 class="post-name" id="${ data[i].id }">${ data[i].name} </h1>
          <h3 class="post-title" id="${ data[i].id }"> ${ data[i].title}</h3>
          <h3 class="post-title" id="${ data[i].id }"> <img class="difficulty-img" src="img/difficulty.jpg"/> ${ data[i].info.difficulty}</h3>
          </div>                   
        </div>
        </a>
    </div>
          
    <section id="openmodal${i}" class="modal-window">
      <div class = "modal-content" id="${ data[i].id }">
      <a href="#" title="Close" class="modal-close">X</a>
      <img class="modal-img" src="${ data[i].splash }" />
      <div class="modal-info">
      <img src="${ data[i].img}"/>
      <h1>${ data[i].name}</h1>
      <h3>${ data[i].title}</h3>
      <p>${ data[i].blurb}</p>
      <p>${ data[i].tags}</p>
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
          <td>${ data[i].stats.hp}</td>
          <td>${ data[i].stats.hpperlevel}</td>
          <td>${window.data.computeStats(5, data[i])}</td>
          <td>${window.data.computeStats(10, data[i])}</td>
          <td>${window.data.computeStats(15, data[i])}</td>
          <td>${window.data.computeStats(18, data[i])}</td>
        </tr>
      </table>
      </div>
    </div>
    </section>`
    );
  }
  containerList.innerHTML = newGrill.join('');
};
createTemplateCard(arrKeys);

// Filtrar
const tagArray = Object.values(document.getElementsByClassName('filter-champ'));
const filterChamp = (arrayTag) => {
  let arrayChoices = [];
  arrayTag.forEach(tag => {
    tag.addEventListener('change', () => {
      if (tag.checked === true) {
        arrayChoices.push(tag.value);
      } else {
        const x = arrayChoices.indexOf(tag.value);
        arrayChoices.splice(x, 1);
        createTemplateCard(arrKeys);
      }
      createTemplateCard(window.data.filterData(arrKeys, arrayChoices));
    });
  });
};
filterChamp(tagArray);

// Ordenar y Buscar

const functionListenFilterOrder = () => {
  const listenSortBy = sortBy.options[sortBy.selectedIndex].value;
  const listenFiltersByCategories = filtersByCategories.options[filtersByCategories.selectedIndex].value;
  const arrayInputFilter = window.data.searchData(arrKeys, inputSearchText.value, parseInt(listenFiltersByCategories[0]));
  
  createTemplateCard(window.data.sortData(arrayInputFilter, parseInt(listenSortBy[0]), parseInt(listenSortBy[1])));
};

const functionMain = () => {
  functionListenFilterOrder();
  filtersByCategories.addEventListener('change', functionListenFilterOrder);
  sortBy.addEventListener('change', functionListenFilterOrder);
  btnSearch.addEventListener('click', functionListenFilterOrder);
};

functionMain();

