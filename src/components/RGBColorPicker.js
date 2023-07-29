import React, { useState } from 'react';
import SingleColorPicker from "./SingleColorPicker";

function RgbColorPicker(){
    const [rValue, setRvalue] = useState(0);
    const [gValue, setGvalue] = useState(0);
    const [bValue, setBvalue] = useState(0);

    // Helper function to clamp the input value to valid RGB range (0 to 255)
    const clampValue = (value) => {
        return Math.min(Math.max(value, 0), 255);
    };

    return (
        <div className='all-colors-container'>
            <div className='single-color-container'>
                <SingleColorPicker
                    color='r'
                    value={rValue}
                    onChange={(value) => setRvalue(clampValue(value))}
                />
                <SingleColorPicker
                    color='g'
                    value={gValue}
                    onChange={(value) => setGvalue(clampValue(value))}
                />
                <SingleColorPicker
                    color='b'
                    value={bValue}
                    onChange={(value) => setBvalue(clampValue(value))}
                />
                <div className='single-color'>
                    <div className='square' style={{backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`}}/>
                    <p>rgb: {rValue}, {gValue}, {bValue}</p>
                </div>
            </div>
        </div>
    );
}

export default RgbColorPicker;