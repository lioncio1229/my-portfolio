import {useState} from 'react';

export default function useCalculate()
{
    const [result, setResult] = useState(0);

    const calculate = (num1, num2, operation) => {
        num1 = Number(num1);
        num2 = Number(num2);
        switch (operation) {
            case '+':
                setResult(num1 + num2);
                break;
            case '-':
                setResult(num1 - num2);
                break;
            case '*':
                setResult(num1 * num2);
                break;
            case '/':
                setResult(num1 / num2);
        }
    }

    return {result, calculate};
}