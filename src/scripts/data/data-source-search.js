import data from '../../DATA.json';

class DataSourceSearch {
  static show(keyword) {
    return new Promise((resolve, reject) => {
      const filteredKomik = data.komiks.filter((komik) => komik.nama.toUpperCase().includes(keyword.toUpperCase()));
      if (filteredKomik.length) {
        resolve(filteredKomik);
      } else {
        reject(`${keyword} is not found`);
      }
    });
  }
}

export default DataSourceSearch;
