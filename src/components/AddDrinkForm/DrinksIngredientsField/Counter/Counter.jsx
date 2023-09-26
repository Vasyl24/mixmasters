import { useState } from 'react';
import icons from '../../../../assets/sprite.svg';
import { CounterWrp, StyledButton } from './Counter.styled';

const Counter = () => {
  const [counter, setCounter] = useState(1);



  const handleAddCounter = () => {
    setCounter(counter + 1);
  };

  const handleMinusCounter = () => {
    setCounter(counter - 1);
    if (counter === 1) {
      setCounter(1);
      return;
    };
  }

return (
    <CounterWrp>
      <StyledButton onClick={handleMinusCounter}>
            <svg>
             <use xlinkHref={`${icons}#icon-minus`} />
            </svg> 
      </StyledButton>
      <p>{counter}</p>
      <StyledButton onClick={handleAddCounter}>
            <svg>
              <use xlinkHref={`${icons}#icon-plus-plus`} />         
            </svg> 
      </StyledButton>
    </CounterWrp>
  );
};

export default Counter;