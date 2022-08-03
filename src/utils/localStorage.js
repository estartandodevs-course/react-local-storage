export function LocalStorage(key) {
  function getItem() {
    let personListString = localStorage.getItem(key);
    if (!personListString) {
      personListString = '[]';
    }
    return JSON.parse(personListString);
  }

  function setItem(item) {
    const itemStringfied = JSON.stringify(item);
    localStorage.setItem(key, itemStringfied);
  }

  return {
    getItem,
    setItem,
  };
}
