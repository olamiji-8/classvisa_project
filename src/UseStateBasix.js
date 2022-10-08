import React from 'react'

const UseStateBasix = () => {
    const [text, setTest] = React.useState("random title")
    function handleClick(){
        setTest(prevState === "random title" ? "myTitle")
    }
  return (
    <div>
        <h1>{text}</h1>
           < button type='button' className='btn' onClick={handleClick}>
              change title
           </button>
    </div>
  )
}

export default UseStateBasix