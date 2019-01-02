require('../src/data.js');
const input1 = [
  {id: 'Aatrox', name: 'Aatrox', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png'},
  {id: 'Ahri', name: 'Ahri', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png'},
  {id: 'Akali', name: 'Akali', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Akali.png'}
];

const input2 = [
  {id: 'Alistar', name: 'Alistar', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Alistar.png', difficulty: 7},
  {id: 'Amumu', name: 'Amumu', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Amumu.png', difficulty: 3},
  {id: 'Anivia', name: 'Anivia', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Anivia.png', difficulty: 10}
];

const output1 = [
  {id: 'Aatrox', name: 'Aatrox', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png'},
  {id: 'Ahri', name: 'Ahri', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png'},
  {id: 'Akali', name: 'Akali', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Akali.png'}  
];

const output2 = [
  {id: 'Akali', name: 'Akali', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Akali.png'},
  {id: 'Ahri', name: 'Ahri', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png'},
  {id: 'Aatrox', name: 'Aatrox', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png'}
];


describe('data', () => {
  it('Debería ser un objeto', () => {
    expect(typeof data).toBe('object');
  });

  describe('data.sortData', () => {
    it('Debería ser una función', () => {
      expect(typeof window.data.sortData).toBe('function');
    });
    it('Debería devolver el array de la A-Z', () => {
      expect(window.data.sortData(input1, 0, 0)).toEqual(output1);
    });
    it('Debería devolver el array de la Z-A', () => {
      expect(window.data.sortData(input1, 0, 1)).toEqual(output2);
    });
  }); 
  
  describe('data.filterData', () => {
    it('Debería ser una función', () => {
      expect(typeof window.data.filterData).toBe('function');      
    });
    it('Debería devolver el array filtrado por rol Assassin', () => {
      expext(window.data.filterData()).toEqual(output3);
    })
  });

  describe('data.computeStats', () => {
    it('Debería ser una función', () => {
      expect(typeof window.data.computeStats).toBe('function');
    });
  });
});

// describe('example', () => {
//   it('is a function', () => {
//     expect(typeof example).toBe('function');
//   });

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });
