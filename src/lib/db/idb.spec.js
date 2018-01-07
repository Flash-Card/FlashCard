import fakeIndexedDB from 'fake-indexeddb';
import * as idb from './index';
import schema from './schema';

describe('Indexed store', () => {

  const originIndexedDB = global.indexedDB;
  let data;
  let list;
  beforeEach(() => {
    global.indexedDB = fakeIndexedDB;
    data = {};
    list = [];
  });

  afterEach(() => {
    global.indexedDB._databases.clear();
    global.indexedDB = originIndexedDB;
    delete global.document.reload;
  });

  it('Open db check indexes', () => {
    return idb.openDB({ DB_NAME: 'FlashCards', DB_VERSION: 1 })
      .then(db => {
        expect(db.name).toEqual('FlashCards');
        expect(db.version).toBe(1);
        const os = idb.os(db, schema[1][0].name, 'readonly');
        expect(os.name).toEqual(schema[1][0].name);
        expect(os.indexNames).toEqual(schema[1][0].indexes.map(e => e.name));
      });
  });

  it('object store throw if table not exist', () => {
    const permission = 'readonly';
    const table = 'notExistTable';
    return idb.openDB({ DB_NAME: 'FlashCards', DB_VERSION: 1 })
      .then(db => {
        expect(() => idb.os(db, table, permission)).toThrow();
      });
  });

  it('add item to table', () => {
    data = { key: 'test' };
    return idb.addItem('dictionary', data)
      .then(res => {
        expect(res).toBe(1);
        return idb.getItem('dictionary', 'index', 1);
      })
      .then(res => {
        expect(res).toEqual({ ...data, index: 1 });
      });
  });

  it('add item to table with custom index', () => {
    data = { key: 'test', index: 10 };
    return idb.addItem('dictionary', data)
      .then(res => {
        expect(res).toBe(10);
        return idb.getItem('dictionary', 'index', 10);
      });
  });

  it('add list of item', () => {
    list = [{ key: 'test' }, { key: 'test2' }];
    return idb.addList('dictionary', list)
      .then(res => {
        expect(res).toEqual([1, 2]);
        return idb.getItem('dictionary', 'key', 'test2');
      })
      .then(res => {
        expect(res).toEqual({ key: 'test2', index: 2 });
      });
  });

  it('get list', () => {
    list = [{ key: 'test', index: 1 }, { key: 'test2', index: 10 }];
    return idb.addList('dictionary', list)
      .then(res => {
        expect(res).toEqual([1, 10]);
        return idb.openDB();
      })
      .then(db => idb.getList(db, 'dictionary'))
      .then(l => {
        expect(l).toEqual(list);
      });
  });

  it('update item', () => {
    list = [{ key: 'test', index: 1 }, { key: 'test2', index: 10 }];
    const item = { key: 'test2-1', index: 10 };
    return idb.addList('dictionary', list)
      .then(res => {
        expect(res).toEqual([1, 10]);
        return idb.updateItem('dictionary', item);
      })
      .then(res => {
        expect(res).toBe(10);
        return idb.getItem('dictionary', 'index', res);
      })
      .then(res => {
        expect(res).toEqual(item);
      });
  });

  it('delete item', () => {
    list = [{ key: 'test', index: 1 }, { key: 'test2', index: 10 }];
    return idb.addList('dictionary', list)
      .then(res => {
        expect(res).toEqual([1, 10]);
        return idb.deleteItem('dictionary', 1);
      })
      .then(res => {
        expect(res).not.toBeDefined();
        return idb.count('dictionary');
      })
      .then(res => {
        expect(res).toBe(1);
      });
  });

  it('fill store', () => {
    list = [{ key: 'test', index: 1 }, { key: 'test2', index: 10 }];
    return idb.addList('dictionary', list)
      .then(res => {
        expect(res).toEqual([1, 10]);
        return idb.fillStore(['dictionary']);
      })
      .then(l => {
        expect(l).toEqual({ 'dictionary': list });
      });
  });

});
