import React, { useState } from 'react';
import Calendar from './components/Calendar';
import Box from './components/Box';
import './App.css';

function App() {
    const [boxState, setBoxState] = useState(0);
    const moveBox = () => {
        const updatedState = boxState + 1;
        setBoxState(updatedState);
    };

    return (
        <div className="App">
            <Calendar />
            <button onClick={moveBox}>MOVE</button>
            <Box move={boxState}>HI</Box>
        </div>
    );
}

export default App;
