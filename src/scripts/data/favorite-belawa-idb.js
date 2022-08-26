/* eslint-disable no-prototype-builtins */
/* eslint-disable consistent-return */
import { openDB } from 'idb';

const DATABASE_NAME = 'belawa-database';
const DATABASE_VERSION = 1;
const OBJECT_STORE_NAME = 'belawas';

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteBelawaIdb = {
  async getBelawa(id) {
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllBelawa() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putBelawa(belawa) {
    return (await dbPromise).put(OBJECT_STORE_NAME, belawa);
  },
  async deleteBelawa(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};

export default FavoriteBelawaIdb;
