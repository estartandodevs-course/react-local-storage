import { useEffect, useState } from 'react';
import { Form } from './components/Form';
import { PersonList } from './components/PersonList';
import { create, getAll, remove } from './service/person';

function App() {
  const [personList, setPersonList] = useState([]);

  const loadPersonList = () => {
    const data = getAll();
    setPersonList(data);
  };

  const handleCreate = (person) => {
    create(person);
    loadPersonList();
  };

  const handleRemove = (index) => {
    remove(index);
    loadPersonList();
  };

  useEffect(() => {
    loadPersonList();
  }, []);

  return (
    <div className="App">
      <Form onCreate={handleCreate} />
      <PersonList personList={personList} onRemove={handleRemove} />
    </div>
  );
}

export default App;
