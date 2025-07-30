import React from 'react'

const Comp7 = () => {
  const words = ['Spider-man', 'Iron-man', 'Hulk', 'Thor', 'Captain America'];
  
  return (
    <div>
      <h2>"Komp7" - heroju sarasas</h2>
      <ul>
        {words.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
    </div>
  );
};

export default Comp7