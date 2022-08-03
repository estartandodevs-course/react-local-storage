import { useState } from 'react';

export function Form({ onCreate }) {
  const [name, setName] = useState('');
  const [github, setGithub] = useState('');

  const handleSubmit = () => {
    const person = {
      name,
      github,
    };
    onCreate(person);
  };

  return (
    <>
      <input
        placeholder="Nome"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        placeholder="Github"
        value={github}
        onChange={(event) => setGithub(event.target.value)}
      />
      <button onClick={handleSubmit}>Salvar</button>
    </>
  );
}
