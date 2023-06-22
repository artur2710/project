let abc = +prompt("Сколько убил врагов?");
switch (abc) {
    case 1: alert('Начислено 100 очков');
        break
    case 3: alert('Начислено 400 очков');
        break
    case 5: alert('Начислено 700 очков');
        break
    case 10: alert('Начислено 1000 очков');
        break
    /*default: alert('Начислено очков '+abc*100+' опыта')*/
    default: alert(`Вам начислено ${abc * 100} очков опыта`);
}