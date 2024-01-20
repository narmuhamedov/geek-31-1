// src/App.js
import React from 'react';
import { connect } from 'react-redux';
import { addNumber, clearList, performOperation } from './components/Action';
import './App.css';

const App = ({ numbers, result, addNumber, clearList, performOperation }) => {
  const handleAdd = () => {
    const inputValue = parseInt(document.getElementById('numberInput').value, 10);
    if (!isNaN(inputValue)) {
      addNumber(inputValue);
    }
  };

  return (
    <div className="App">
      <input type="number" id="numberInput" />
      <button onClick={handleAdd}>Add</button>
      <button onClick={clearList}>Clear</button>
      <button onClick={() => performOperation('add')}>Add</button>
      <button onClick={() => performOperation('subtract')}>Subtract</button>
      <button onClick={() => performOperation('multiply')}>Multiply</button>
      <button onClick={() => performOperation('divide')}>Divide</button>

      <div>
        <p>Numbers: {numbers.join(', ')}</p>
        <p>Result: {result}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  numbers: state.numbers,
  result: state.result,
});

export default connect(mapStateToProps, { addNumber, clearList, performOperation })(App);
