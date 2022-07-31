import data from '../../DATA.json';

class DataSourceGenre {
  static show(keyword) {
    return new Promise((resolve, reject) => {
      const filteredKomik = data.komiks.filter((komik) => komik.genre.toUpperCase().includes(keyword.toUpperCase()));
      if (filteredKomik.length) {
        resolve(filteredKomik);
      } else {
        reject(`${keyword} is not found`);
      }
    });
  }
}

export default DataSourceGenre;
