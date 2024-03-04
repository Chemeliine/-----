function rock(){
    newImg = document.createElement("img");
    newImg.src = "https://sberbusiness.live/bcp-laika-public/04d02ab7-28ba-4ece-9b53-bda03e6cbe54/original"
    newImg.style.width = "200px";
    newImg.style.height = "200px";
    var oldTime = document.getElementById("player-zone").firstChild;
    document.getElementById("player-zone").replaceChild(newImg, oldTime);
    
    computerChoice("камень")
}

function cut(){
    newImg = document.createElement("img");
    newImg.src = "https://img.officedom.kz/image/cache/catalog/products/017-47588-330x330.jpg"
    newImg.style.width = "200px";
    newImg.style.height = "200px";
    var oldTime = document.getElementById("player-zone").firstChild;
    document.getElementById("player-zone").replaceChild(newImg, oldTime);

    computerChoice("ножницы")
}

function paper(){
    newImg = document.createElement("img");
    newImg.src = "https://www.kontext.ru/pic/tipy-bumagi-dlya-pechati-1.jpg"
    newImg.style.width = "200px";
    newImg.style.height = "200px";
    var oldTime = document.getElementById("player-zone").firstChild;
    document.getElementById("player-zone").replaceChild(newImg, oldTime);

    computerChoice("бумага");
}

// варианты для компьютера
const choices = ['камень', 'ножницы', 'бумага'];


// функция выбора компьютера
function computerChoice(userChoice){
    // определение рандомного числа 
    const randomIndex = Math.floor(Math.random() * 3);

    // создание тега 
    newImg = document.createElement("img");

    choiceImg = ["https://sberbusiness.live/bcp-laika-public/04d02ab7-28ba-4ece-9b53-bda03e6cbe54/original",
    "https://img.officedom.kz/image/cache/catalog/products/017-47588-330x330.jpg",
    "https://www.kontext.ru/pic/tipy-bumagi-dlya-pechati-1.jpg"]

    // добавление случайного значения в область компьютера
    newImg.src = choiceImg[randomIndex];
    newImg.style.height = "200px";
    newImg.style.width = "200px";

    // замена старого на новое
    var oldComp = document.getElementById("comp-zone").firstChild;
    document.getElementById("comp-zone").replaceChild(newImg, oldComp);

    //Определение последнего значения компьютера
    compChoice =  choices[randomIndex];

    // Вызов функции
    Game(userChoice, compChoice)

}


// Функция выигрыша
function Game(userChoice, compChoice){
    // Условия игры
    if (userChoice === compChoice) {alert( 'Ничья!'); }
    else{
        if ((userChoice === 'камень' && compChoice === 'ножницы') ||
            (userChoice === 'ножницы' && compChoice === 'бумага') ||
            (userChoice === 'бумага' && compChoice === 'камень')) {
             alert( 'Победа!');
        }
        else{
            alert( 'Поражение');
        }
    }
}


