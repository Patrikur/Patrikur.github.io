import React, { useState } from 'react';

const ServiceCode = () => {    
    const [isCode, setCode] = useState('Service Code');
    const [isClicked, setClicked] = useState(false);
    
    const rng = () => {
        let number = Math.floor(Math.random()*10);
        return number;
    };
    
    const serviceCode = () => {
        const codeArray = [];

        for(let i=0; i < 2; i++){
            let numberArray = [];
            for(let k=0; k < 3; k++){
                numberArray.push(rng());
            };
            let numbers = numberArray.join('');
            codeArray.push(numbers);
        };

        const code = codeArray.join('-');

        setCode(code);
        setClicked(true);
    };    
    
    return (
        <div className="service-code" onClick={!isClicked && serviceCode}>
            {isCode}
        </div>
    )
};

export default ServiceCode;