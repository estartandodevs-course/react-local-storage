import { Person } from './Person';

export function PersonList({ personList, onRemove }) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '10px',
      }}
    >
      {personList.map((person, index) => (
        <Person
          key={index}
          onRemove={() => onRemove(index)}
          name={person.name}
          github={person.github}
        />
      ))}
    </div>
  );
}
