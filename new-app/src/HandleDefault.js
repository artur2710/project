export default function HandleDefault() {
    function handleClick(e) {
        /*e.preventDefault();*/
        console.log('Была нажата ссылка');
    }

    return (
        <a href="https://www.google.by" onClick={handleClick}>
        Нажми на меня
        </a>
    );
}