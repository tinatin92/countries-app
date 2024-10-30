import { ChangeEvent, KeyboardEvent, useRef, useState, useEffect } from 'react';
import classes from './classes.module.css';

type OtpProps = {
    length: number
}

const Otp: React.FC<OtpProps> = ({length}) => {
    const [inputs, setInputs] = useState(Array.from({ length }, () => ({ value: '' })));
    const inputRefs = useRef<HTMLInputElement[]>([]);

    useEffect(() => {
        inputRefs.current[0]?.focus();
    }, []);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const { value } = e.target;

       
        if (/^\d*$/.test(value)) {
            const newInputs = [...inputs];
            newInputs[index].value = value;
            setInputs(newInputs);

           
            if (value && index < inputs.length - 1) {
                inputRefs.current[index + 1]?.focus();
            }

           
            const allFilled = newInputs.every(input => input.value);
            if (allFilled) {
                inputRefs.current[index]?.blur();
            }
        }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace') {
            if (inputs[index].value !== '') {
               
                const newInputs = [...inputs];
                newInputs[index].value = ''; 
                setInputs(newInputs);
            } else if (index > 0) {
                
                inputRefs.current[index - 1]?.focus();
            }
            
           
        }
    };

    return (
        <div className={classes.inputBox}>
            {inputs.map((input, index) => (
                <input
                    type="tel"
                    inputMode="numeric"
                    maxLength={1}
                    ref={(element) => {
                        if (element) {
                            inputRefs.current[index] = element;
                        }
                    }}
                    key={index}
                    onChange={(e) => handleInputChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)} 
                    value={input.value}
                />
            ))}
        </div>
    );
};

export default Otp;
