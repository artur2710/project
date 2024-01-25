import {useState, useEffect} from 'react';
function Useeffect(){
    const[count, setCount] = useState(0);

    useEffect(()=>{
        setTimeout(()=>{
          console.log(`You clicked ${count} times`);
        },3000);
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>
                Click me
            </button>
        </div>
    );
}

export default Useeffect