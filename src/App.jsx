import React, { useState, useEffect } from 'react';

const App = () => {
  const [evaluations, setEvaluations] = useState([]);

  useEffect(() => {
    const studentNames = [
      'Syafa',
      'Ale',
      'Sidiq',
      'Dimas',
      'Alan',
      'Lisa',
      'Dewi',
      'Faiz',
      'Dzaki',
      'Bagas',
    ];

    const aspectsCount = 5;

    const initialEvaluations = studentNames.map(() =>
      Array.from({ length: aspectsCount }, () => 1)
    );

    setEvaluations(initialEvaluations);
  }, []);

  const handleInputChange = (e, studentIndex, aspectIndex) => {
    const { value } = e.target;
    const updatedEvaluations = [...evaluations];
    updatedEvaluations[studentIndex][aspectIndex] = parseInt(value);
    setEvaluations(updatedEvaluations);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const jsonOutput = JSON.stringify(evaluations, null, 2);
    console.log(jsonOutput);
  };

  const renderAspects = (studentIndex, aspects) => {
    return aspects.map((aspect, aspectIndex) => (
      <div key={aspectIndex}>
        <label>
          Aspect {aspectIndex + 1}:
          <input
            type="number"
            name={`student${studentIndex + 1}-aspect${aspectIndex + 1}`}
            min="1"
            max="10"
            value={aspect}
            onChange={(e) => handleInputChange(e, studentIndex, aspectIndex)}
          />
        </label>
      </div>
    ));
  };

  const renderStudents = () => {
    return evaluations.map((studentEvaluations, studentIndex) => (
      <div key={studentIndex}>
        <h3>{studentNames[studentIndex]}</h3>
        {renderAspects(studentIndex, studentEvaluations)}
      </div>
    ));
  };

  const studentNames = [
    'Syafa',
    'Ale',
    'Sidiq',
    'Dimas',
    'Alan',
    'Lisa',
    'Dewi',
    'Faiz',
    'Dzaki',
    'Bagas',
  ];

  return (
    <div>
      <h1>Penilaian Mahasiswa</h1>
      <form onSubmit={handleFormSubmit}>
        {evaluations.length === 0 ? null : renderStudents()}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;







