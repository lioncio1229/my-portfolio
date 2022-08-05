import { useEffect, useRef } from "react";
import useCalculate from "./calculatorLogic";

const ExampleCalculator = () => {
    const opRef = useRef();
    const num1Ref = useRef();
    const num2Ref = useRef();
    
    const {result, calculate} = useCalculate();
    
    useEffect(() => {    
        setTimeout(() => {
            document.title = 'Now the result is '+result;
        }, 1000)
    });

    return ( 
        <div>
            <select ref={opRef}>
                <option value="+"> Add </option>
                <option value="-"> Sub </option>
                <option value="*"> Mul </option>
                <option value="/"> Div </option>
            </select>
            
            Num1 <input type="number" ref={num1Ref}/>
            Num2 <input type="number" ref={num2Ref}/>
            <input onClick={() => calculate(num1Ref.current.value, num2Ref.current.value, opRef.current.value)} type="submit" /> <br />
            Result {result}
            <br />
        </div>
     );
}
 
export default ExampleCalculator;
