import {useState} from 'react';
export default function Component() {
    const [age, setAge] = useState(18);
    const [num, setNum] = useState(0);
    function handleAgeChange(){
        setAge(age+1);
    }
    function handleNumChange(){
        setNum(num+1);
    }

    return(
        <ul>
        <li>
            <p>Мой возраст {age}</p>
            <button onClick={handleAgeChange}>click</button>
        </li>
        <li>
        <p>Количество братьев и систер {num}</p>
        <button onClick={handleNumChange}>click</button>
    </li>
    </ul>
    );
}
