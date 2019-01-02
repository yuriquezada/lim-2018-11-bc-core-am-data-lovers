// Función para Filtrar
const filterChamp = document.getElementsByClassName('filter-champ');
const tagArray = Object.values(filterChamp);
let choices = [];

tagArray.forEach(tag => {
  tag.addEventListener('change', () => {
    if (tag.checked === true) {
      choices.push(tag.value);
    } else {
      const x = choices.indexOf(tag.value);
      choices.splice(x, 1); 
      createTemplateCard(arrKeys);
    }

    function porFavorDebesSalir(data) {
      const arregloTrueFalse = [];
      choices.forEach(choice => {
        if (data.tags.includes(choice)) {
          arregloTrueFalse.push(true);
        } else {
          arregloTrueFalse.push(false);
        }
      });

      if (arregloTrueFalse.includes(false)) {
        return false;
      } else {
        return data;
      }
    }
    const arrKeysFilter = arrKeys.filter(porFavorDebesSalir);

    createTemplateCard(arrKeysFilter);
  });
});

// Ordenar
const sortDataFunction = (data, sortBy, sortOrder) => {
  let newArrayFilter = [];
 
  for (let i = 0; i < data.length; i++)
    newArrayFilter.push(Object.assign({}, data[i]));
 
  if (sortBy === 0) {
    // Ordenar por Alfabéticamente
    newArrayFilter.sort(
      function(ab, cd) {
        if (sortOrder === 0) {
          if (ab.name > cd.name) return 1;
          else return -1;
        } else {
          if (ab.name < cd.name) return 1;
          else return -1;
        }
      }
    );
  } else {
  // Ordenar por Dificultad
    newArrayFilter.sort(
      function(ab, cd) {
        if (sortOrder === 0) return ab.info.difficulty - cd.info.difficulty;
        else return cd.info.difficulty - ab.info.difficulty;
      });
  }
  return newArrayFilter;
};

// Buscador
const searchDataFunction = (data, dataSearch, condition) => {
  let dataCopy = [];
  let arraySearch = [];
  let newArraySearch = [];

  for (let i = 0; i < data.length; i++)
    dataCopy.push(Object.assign({}, data[i]));

  if (dataSearch.length === 0)
    return dataCopy;

  switch (condition) {   
  case 0:
    for (let i = 0; i < dataCopy.length; i++) {
      arraySearch.push(dataCopy[i].name.toLowerCase());
      if (arraySearch[i].indexOf(dataSearch.toLowerCase()) !== -1)
        newArraySearch.push(dataCopy[i]);
    }
    break;
  default: alert('No existe opcion');
  }
  return newArraySearch;
};

const statFunction = (num, arrKeys) => {
  return (parseFloat(arrKeys.stats.hp) + (parseFloat(arrKeys.stats.hpperlevel) * num)).toFixed(2);
};

window.data = {
  sortData: sortDataFunction,
  searchData: searchDataFunction,
  computeStats: statFunction,
};