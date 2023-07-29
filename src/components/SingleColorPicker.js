import React from 'react';

function SingleColorPicker(props){
    const { value, color, onChange } = props;
    let localColor = '';
    if(color === 'r'){
        localColor = [value, 0, 0];
    } else if(color === 'g'){
        localColor = [0, value, 0]
    } else {
        localColor = [0, 0, value]
    }

    // Helper function to handle input change and invoke onChange callback with clamped value
    const handleInputChange = (event) => {
        const newValue = parseInt(event.target.value, 10);
        // Clamp the value to the valid RGB range (0 to 255)
        onChange(clampValue(newValue));
    };

    // Helper function to clamp the value to the valid RGB range (0 to 255)
    const clampValue = (value) => {
        return Math.min(Math.max(value, 0), 255);
    };

    return (
        <div className='single-color'>
            <div className='square' style={{backgroundColor: `rgb(${localColor[0]}, ${localColor[1]}, ${localColor[2]})`}}></div>
            <br/>
            <input type='number' value={value} onChange={handleInputChange} />
        </div>
    );
}

export default SingleColorPicker;