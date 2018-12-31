// Filtrar
const assassin = document.getElementById('assassin');
const fighter = document.getElementById('fighter');
const mage = document.getElementById('mage');
const marksman = document.getElementById('marksman');
const support = document.getElementById('support');
const tank = document.getElementById('tank');
const filterTags = (tag, string) => {
  tag.addEventListener('change', () => {
    const arrKeysFilter = arrKeys.filter(data => {
      return data.tags.includes(string) === true;
    });
    if (tag.checked === true) {
      createTemplateCard(arrKeysFilter);
    } else {
      createTemplateCard(arrKeys);
    }
  });
};
filterTags(assassin, assassin.value);
filterTags(fighter, fighter.value);
filterTags(mage, mage.value);
filterTags(marksman, marksman.value);
filterTags(support, support.value);
filterTags(tank, tank.value);

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
const filterDataFunction = (data, dataFilter, condition) => {
  let dataCopy = [];
  let arrayFilter = [];
  let newArrayFilter = [];

  for (let i = 0; i < data.length; i++)
    dataCopy.push(Object.assign({}, data[i]));

  if (dataFilter.length === 0)
    return dataCopy;

  switch (condition) {   
  case 0:
    for (let i = 0; i < dataCopy.length; i++) {
      arrayFilter.push(dataCopy[i].name.toLowerCase());
      if (arrayFilter[i].indexOf(dataFilter.toLowerCase()) !== -1)
        newArrayFilter.push(dataCopy[i]);
    }
    break;
  default: alert('No existe opcion');
  }
  return newArrayFilter;
};


window.data = {
  filterData: filterDataFunction,
  sortData: sortDataFunction,
};