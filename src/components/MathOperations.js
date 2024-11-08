// MathOperations.js
import React, { useState } from 'react';

const MathOperations = () => {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [result, setResult] = useState(null);
    const [operation, setOperation] = useState('+');

    const calculateResult = () => {
        const num1 = parseFloat(input1);
        const num2 = parseFloat(input2);

        if (isNaN(num1) || isNaN(num2)) {
            setResult('Please enter valid numbers');
            return;
        }

        let res;
        switch (operation) {
            case '+':
                res = num1 + num2;
                break;
            case '-':
                res = num1 - num2;
                break;
            case '*':
                res = num1 * num2;
                break;
            case '/':
                res = num2 !== 0 ? num1 / num2 : 'Error: Division by 0';
                break;
            default:
                res = 'Invalid operation';
                break;
        }

        setResult(res);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h2>Math Operations</h2>

            <div style={{ marginBottom: '20px' }}>
                <input
                    type="number"
                    placeholder="Input 1"
                    value={input1}
                    onChange={(e) => setInput1(e.target.value)}
                    style={{ marginRight: '10px', padding: '10px', width: '100px' }}
                />
                <span style={{ fontSize: '20px', fontWeight: 'bold', margin: '0 10px' }}>{operation}</span>
                <input
                    type="number"
                    placeholder="Input 2"
                    value={input2}
                    onChange={(e) => setInput2(e.target.value)}
                    style={{ marginLeft: '10px', padding: '10px', width: '100px' }}
                />
            </div>

            <div style={{ marginBottom: '20px' }}>
                <div>Answer</div>
                <input
                    type="text"
                    value={result !== null ? result : ''}
                    disabled
                    style={{
                        padding: '10px',
                        marginTop: '5px',
                        width: '200px',
                        textAlign: 'center',
                        fontSize: '18px',
                        color: result === 'Please enter valid numbers' || result === 'Error: Division by 0' ? 'red' : 'black',
                    }}
                />
            </div>

            <div style={{ marginBottom: '20px' }}>
                <button onClick={() => setOperation('+')} style={{ margin: '5px', padding: '10px' }}>Addition (+)</button>
                <button onClick={() => setOperation('-')} style={{ margin: '5px', padding: '10px' }}>Subtraction (-)</button>
                <button onClick={() => setOperation('*')} style={{ margin: '5px', padding: '10px' }}>Multiplication (*)</button>
                <button onClick={() => setOperation('/')} style={{ margin: '5px', padding: '10px' }}>Division (/)</button>
            </div>

            <div>
                <button onClick={calculateResult} style={{ padding: '10px 20px', fontSize: '16px' }}>Calculate</button>
            </div>
        </div>
    );
};

export default MathOperations;











