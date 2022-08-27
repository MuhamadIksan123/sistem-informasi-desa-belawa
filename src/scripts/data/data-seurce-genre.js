import data from '../../DATA.json';

class DataSourceKategori {
  static show(keyword) {
    return new Promise((resolve, reject) => {
      const filteredBelawa = data.belawas.filter((belawa) => belawa.kategori.toUpperCase().includes(keyword.toUpperCase()));
      if (filteredBelawa.length) {
        resolve(filteredBelawa);
      } else {
        reject(`${keyword} is not found`);
      }
    });
  }
}

export default DataSourceKategori;
