import { CalculatorContainer } from './styles';
import Input from '../Input';
import Button from '../Button';
import {Row} from '../Row/styles';
import useMathLogic from '../../hooks/useMathLogic';

const Calculator = () => {
    const { currentNumber, handleAddNumber, handleClear, handleSum, handleMinus, handleDivision, handleMultipler, handleEquals } = useMathLogic();

    return (
        <CalculatorContainer>
            <Input value={currentNumber}/>
            <Row>
                <Button label="7" variant="number" onClick={() => handleAddNumber('7')}/>
                <Button label="8" variant="number" onClick={() => handleAddNumber('8')}/>
                <Button label="9" variant="number" onClick={() => handleAddNumber('9')}/>
                <Button label="+" variant="operator" onClick={handleSum}/>
        </Row>
            <Row>
                <Button label="4" variant="number" onClick={() => handleAddNumber('4')}/>
                <Button label="5" variant="number" onClick={() => handleAddNumber('5')}/>
                <Button label="6" variant="number" onClick={() => handleAddNumber('6')}/>
                <Button label="-" variant="operator" onClick={handleMinus}/>
            </Row>
            <Row>
                <Button label="1" variant="number" onClick={() => handleAddNumber('1')}/>
                <Button label="2" variant="number" onClick={() => handleAddNumber('2')}/>
                <Button label="3" variant="number" onClick={() => handleAddNumber('3')}/>
                <Button label="*" variant="operator" onClick={handleMultipler}/>
            </Row>
            <Row>
                <Button label="0" variant="number" onClick={() => handleAddNumber('0')}/>
                <Button label="C" variant="clear" onClick={handleClear}/>
                <Button label="=" variant="equals" onClick={handleEquals}/>
                <Button label="/" variant="operator" onClick={handleDivision}/>
            </Row>
        </CalculatorContainer>
  );
}

export default Calculator;