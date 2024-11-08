// Calculator.js
import React, { useState } from 'react';
import './Calculator.css'; // Import custom CSS styles

const Calculator = () => {
    const [display, setDisplay] = useState('');
    const [result, setResult] = useState(null);

    const handleButtonClick = (value) => {
        if (value === 'C') {
            setDisplay('');
            setResult(null);
        } else if (value === '=') {
            try {
                const evalResult = eval(display); // Calculate result
                setResult(evalResult);
                setDisplay(evalResult.toString());
            } catch (error) {
                setResult('Error');
            }
        } else {
            setDisplay((prev) => prev + value);
        }
    };

    return (
        <div className="calculator-container">
            <div className="display">
                <div className="display-text">{result !== null ? result : display || '0'}</div>
            </div>
            <div className="button-grid">
                {['C', '±', '%', '/'].map((item) => (
                    <button
                        key={item}
                        className="button operator"
                        onClick={() => handleButtonClick(item)}
                    >
                        {item}
                    </button>
                ))}
                {['7', '8', '9', '*'].map((item) => (
                    <button
                        key={item}
                        className={`button ${isNaN(item) ? 'operator' : ''}`}
                        onClick={() => handleButtonClick(item)}
                    >
                        {item}
                    </button>
                ))}
                {['4', '5', '6', '-'].map((item) => (
                    <button
                        key={item}
                        className={`button ${isNaN(item) ? 'operator' : ''}`}
                        onClick={() => handleButtonClick(item)}
                    >
                        {item}
                    </button>
                ))}
                {['1', '2', '3', '+'].map((item) => (
                    <button
                        key={item}
                        className={`button ${isNaN(item) ? 'operator' : ''}`}
                        onClick={() => handleButtonClick(item)}
                    >
                        {item}
                    </button>
                ))}
                <button className="button zero" onClick={() => handleButtonClick('0')}>
                    0
                </button>
                <button className="button" onClick={() => handleButtonClick('.')}>
                    .
                </button>
                <button className="button operator" onClick={() => handleButtonClick('=')}>
                    =
                </button>
            </div>
        </div>
    );
};

export default Calculator;


