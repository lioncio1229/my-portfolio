import useCalculate from "./calculatorLogic";

const OtherHud = () => {
    const {result, calculate} = useCalculate();
    return ( 
        <div>
            The calculation result is {result}
        </div>
     );
}

export default OtherHud;