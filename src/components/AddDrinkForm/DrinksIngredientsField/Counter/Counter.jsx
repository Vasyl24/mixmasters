import { useState } from 'react';
import icons from '../../../../assets/sprite.svg';
import { CounterWrp, StyledButton } from './Counter.styled';

const Counter = () => {
  const [counter, setCounter] = useState(3);



  const handleAddCounter = () => {
    setCounter(p => p + 1);
  };

  const handleMinusCounter = () => {
    setCounter(p => p - 1);
  };

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