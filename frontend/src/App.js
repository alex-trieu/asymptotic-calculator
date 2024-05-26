// src/App.js
import React, { useState } from 'react';
import CodeEditor from './components/CodeEditor.js';
import './App.css';

const App = () => {
    const [code, setCode] = useState('');
    const [result, setResult] = useState('');

    const analyzeCode = async () => {
        try {
            const response = await fetch('/analyze', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ code }),
            });
            const data = await response.json();
            setResult(data.complexity);
        } catch (error) {
            console.error('Error analyzing code:', error);
            setResult('Error analyzing code');
        }
    };

    return (
        <div className="App">
            <h1>Asymptotic Complexity Calculator</h1>
            <CodeEditor code={code} setCode={setCode} />
            <button onClick={analyzeCode}>Analyze</button>
            <div id="result">Asymptotic Complexity: {result}</div>
        </div>
    );
};

export default App;
