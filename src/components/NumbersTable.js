import React from 'react';

function NumbersTable(props) {
  const { limit } = props;
  const numberArray = Array.from({ length: limit + 1 }, (_, index) => index);

  return (
    <table className="num-table">
      <tbody>
        {Array.from({ length: Math.ceil(numberArray.length / 5) }, (_, rowIndex) => (
          <tr key={rowIndex}>
            {Array.from({ length: 5 }, (_, cellIndex) => {
              const numberIndex = rowIndex * 5 + cellIndex;
              const number = numberArray[numberIndex];
              return (
                <td key={number} className={number % 2 === 0 ? 'even-cell' : ''}>
                  {number}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default NumbersTable;
