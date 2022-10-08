import React, { useState } from 'react';



const UseStateBasics = () => {
    const [number, setNumber] = useState(0);
    function handleIncrement(){
       setNumber(previousState => previousState + 1)
    }
    function handleDecrement(){
       setNumber(previousState => previousState - 1)
    }

   return (
       <div>
           <h1>{number}</h1>
           < button type='button' className='btn' onClick={handleIncrement}>
              +
           </button>
           < button type='button' className='btn' onClick={handleDecrement}>
              -
           </button>
       </div>
   );
}

export default UseStateBasics
    
    