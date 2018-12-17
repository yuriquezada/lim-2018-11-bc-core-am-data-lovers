
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

//Ordenar
const sortDataFunction = (data, sortBy, sortOrder) => {

  let newArrayFilter = [];
 
  for (let i = 0; i < data.length; i++)
    newArrayFilter.push(Object.assign({}, data[i]));
 
  if (sortBy === 0) {
    //Ordenar por Alfabéticamente
    newArrayFilter.sort(
      function (a, b) {
        if (sortOrder === 0) {
          if (a.name > b.name) return 1;
        else return -1;
        }
         else {
          if (a.name < b.name) return 1;
          else return -1;
        }
      }
    );
  }
  else{
  //Ordenar por Dificultad
  newArrayFilter.sort(
    function (a, b) {
      if (sortOrder === 0) return a.info.difficulty - b.info.difficulty;
      else return b.info.difficulty - a.info.difficulty;
    });
  }
  return newArrayFilter;
 };

 window.data = {
   filterData: filterDataFunction,
   sortData: sortDataFunction,
 }