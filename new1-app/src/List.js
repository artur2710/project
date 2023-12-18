import { useState } from 'react';
export default function List() {
    const [comment, setComment] = useState("ffffff");
    const [hobby, setHobby] = useState("Еда");
    const [name, setName] = useState("Tom");

    function handleNameChange(event) {
        setName(event.target.value);
    }
    function handleChangeComment(event) {
        setComment(event.target.value);
    }
    function handleChangeHobby(event) {
        setHobby(event.target.value);
    }

    return (
        <div>
            <input type='text' value={name} onChange={handleNameChange} />
            <div>
                {name}
            </div>
            <textarea type="text" id='comment' value={comment} onChange={handleChangeComment} />
            <div>
                {comment}
            </div>
            <select name='hobby' id='hobby' value={hobby} onChange={handleChangeHobby}>
                <option value="Программирование">Программирование</option>
                <option value="Еда">Еда</option>
                <option value="Вязание">Вязание</option>
            </select>
            <div>
                {hobby}
            </div>
        </div>
    );
}