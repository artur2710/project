import {useEffect, useState} from 'react';

export default function BasicEffect(){
    const[age, setAge] = useState(69)

    const handleClick = ()=>setAge(age+1)

    useEffect(()=>{
        document.title = `Тебе ${age} лет`
    })

    return (
        <>
        <p>Обратите внимание на заголовок текущей вкладки браузера.</p>
        <button onClick={handleClick}>Обновить заголовок!</button>
        </>
    )
}