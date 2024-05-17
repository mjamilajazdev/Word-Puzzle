import React, { useState, useEffect } from 'react';

const AnimalMatrix: React.FC = () => {
  const [matrix, setMatrix] = useState<string[][]>([
    ['L', 'I', 'O', 'N', 'B', 'A', 'M', 'S', 'R', 'T'],
    ['E', 'A', 'G', 'L', 'E', 'W', 'J', 'Y', 'Z', 'P'],
    ['Z', 'A', 'R', 'T', 'O', 'I', 'S', 'E', 'L', 'K'],
    ['D', 'U', 'C', 'K', 'Q', 'O', 'W', 'L', 'Y', 'N'],
    ['E', 'L', 'E', 'P', 'H', 'A', 'N', 'T', 'I', 'G'],
    ['I', 'R', 'A', 'N', 'X', 'Y', 'Z', 'Q', 'W', 'K'],
    ['E', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
    ['K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'],
    ['U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D'],
    ['E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N']
  ]);

  const [selectedLetters, setSelectedLetters] = useState<{ row: number; col: number, alphabet: string }[]>([]);
  const [wordSelected, setWordSelected] = useState(false);
  const [word, setWord] = useState<String>('')

  useEffect(() => {
    generateMatrix();
  }, []);

  const getRandomLetter = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
  };

  const generateMatrix = () => {
    // Matrix generation logic here
    // ...
  };

  const handleClick = (row: number, col: number) => {
    if (wordSelected) {
      // If a word is already selected, clear the selection
      setSelectedLetters([]);
      setWordSelected(false);
      setWord('');
      return;
    }

    const newSelectedLetters = [...selectedLetters];
    const isSelected = newSelectedLetters.some(
      (selected) => selected.row === row && selected.col === col
    );

    if (isSelected) {
      // Deselect the letter if it's already selected
      setSelectedLetters(newSelectedLetters.filter((selected) => !(selected.row === row && selected.col === col)));
    } else {
      // Select the letter
      setSelectedLetters([...newSelectedLetters, { row, col }]);
    }

    if (selectedLetters.length === 1 && !isSelected) {
      // If the second letter is selected, check if it forms a straight line with the first one
      const firstLetter = selectedLetters[0];
      const dx = col - firstLetter.col;
      const dy = row - firstLetter.row;

      if (dx === 0 || dy === 0 || Math.abs(dx) === Math.abs(dy)) {
        // The second letter forms a straight line with the first one
        const minX = Math.min(col, firstLetter.col);
        const minY = Math.min(row, firstLetter.row);
        const maxX = Math.max(col, firstLetter.col);
        const maxY = Math.max(row, firstLetter.row);

        const newSelectedWord = [];
        for (let y = minY; y <= maxY; y++) {
          for (let x = minX; x <= maxX; x++) {
            newSelectedWord.push({ row: y, col: x, alphabet: matrix[y][x] });
          }
        }
        console.log('New Sleected word:',newSelectedWord)
        setSelectedLetters(newSelectedWord);
        setWord(newSelectedWord.map(obj => obj.alphabet).join(''))
        setWordSelected(true);
      }
    }
  };

  const handleRangePick = (start: number, end: number) => {
    // Perform action with the selected letter range
    console.log('Selected range:', String.fromCharCode(start + 65), '-', String.fromCharCode(end + 65)); // Assuming A is the starting character (ASCII 65)
  };

  return (
    <div className="overflow-auto">
      <table className="table-auto border-collapse border border-gray-300">
        <tbody>
          {matrix.map((row, rowIndex) => (
            <tr key={rowIndex} className="h-10">
              {row.map((cell, colIndex) => (
                <td
                  key={colIndex}
                  onClick={() => handleClick(rowIndex, colIndex)}
                  className={`w-10 h-10 border border-gray-300 text-center cursor-pointer ${
                    selectedLetters.some(
                      (selected) => selected.row === rowIndex && selected.col === colIndex
                    )
                      ? 'bg-yellow-300'
                      : 'bg-transparent'
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AnimalMatrix;
