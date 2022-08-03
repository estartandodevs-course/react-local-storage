export function Person({ name, github, onRemove }) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '5px',
        backgroundColor: 'gray',
        padding: '5px',
      }}
    >
      <span>{name}</span>
      <span>{github}</span>
      <button onClick={onRemove}>Remover</button>
    </div>
  );
}
