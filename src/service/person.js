import { LocalStorage } from '../utils/localStorage';

const KEY_STORAGE = 'person-list';
const storage = LocalStorage(KEY_STORAGE);

export function create(person) {
  const personList = storage.getItem();
  personList.push(person);
  storage.setItem(personList);
}

export function remove(index) {
  const personList = storage.getItem();
  personList.splice(index, 1);
  storage.setItem(personList);
}

export function getAll() {
  return storage.getItem();
}

export function get() {}
export function update() {}
