require('../src/data.js');
const input1 = [
  {id: 'Aatrox', name: 'Aatrox', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png'},
  {id: 'Ahri', name: 'Ahri', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png'},
  {id: 'Akali', name: 'Akali', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Akali.png'}
];

const input2 = [
  {id: 'Ahri', name: 'Ahri', tags: ['Mage', 'Assassin']},
  {id: 'Braum', name: 'Braum', tags: ['Support', 'Tank']},
  {id: 'Corki', name: 'Corki', tags: ['Marksman']}
];

const input3 = [
  {id: 'Ahri', name: 'Ahri', hp: 514.4, hpperlevel: 80}
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
const output3 = [
  {id: 'Ahri', name: 'Ahri', tags: ['Mage', 'Assassin']},
];

const output4 = [1954.40];


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
      expect(window.data.filterData(input2, 'Assassin')).toEqual(output3);
    });
  });

  describe('data.computeStats', () => {
    it('Debería ser una función', () => {
      expect(typeof window.data.computeStats).toBe('function');
    });
    it('Debería devolver 1954.40', () => {
      expect(window.data.computeStats(18, input3)).toEqual(output4);
    });
  });
});
