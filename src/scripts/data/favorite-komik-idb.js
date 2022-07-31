/* eslint-disable no-prototype-builtins */
/* eslint-disable consistent-return */
import { openDB } from 'idb';

const DATABASE_NAME = 'komiksun-database';
const DATABASE_VERSION = 1;
const OBJECT_STORE_NAME = 'komiks';

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteKomikIdb = {
  async getKomik(id) {
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllKomik() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putKomik(komik) {
    return (await dbPromise).put(OBJECT_STORE_NAME, komik);
  },
  async deleteKomik(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};

export default FavoriteKomikIdb;
