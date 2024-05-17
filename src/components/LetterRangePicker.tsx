import React, { useState } from 'react';

interface LetterRangePickerProps {
  onRangePick: (start: number, end: number) => void;
}

const LetterRangePicker: React.FC<LetterRangePickerProps> = ({ onRangePick }) => {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  const handleStartChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStart(e.target.value.toUpperCase());
  };

  const handleEndChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnd(e.target.value.toUpperCase());
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onRangePick(start.charCodeAt(0) - 65, end.charCodeAt(0) - 65); // Assuming A is the starting character (ASCII 65)
    setStart('');
    setEnd('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={start} onChange={handleStartChange} />
      <input type="text" value={end} onChange={handleEndChange} />
      <button type="submit">Pick Range</button>
    </form>
  );
};

export default LetterRangePicker;
