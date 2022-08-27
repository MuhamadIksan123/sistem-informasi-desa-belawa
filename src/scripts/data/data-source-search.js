import data from '../../DATA.json';

class DataSourceSearch {
  static show(keyword) {
    return new Promise((resolve, reject) => {
      const filteredBelawa = data.belawas.filter((belawa) => belawa.nama.toUpperCase().includes(keyword.toUpperCase()));
      if (filteredBelawa.length) {
        resolve(filteredBelawa);
      } else {
        reject(`${keyword} is not found`);
      }
    });
  }
}

export default DataSourceSearch;
