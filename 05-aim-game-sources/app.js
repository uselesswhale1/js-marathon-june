const colors = [ '#FF851B', '#B10DC9','#7FDBFF', '#01FF70', '#85144b', '#9400D3', '#FA8072']
const startBtn = document.querySelector('.start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')

let time = 0
console.log(timeList)

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        startGame()
    }
})

let score = 0
board.addEventListener('click', event => {
    if(event.target.classList.contains('circle')){
        score++ 
        event.target.remove()
        createRandomCircle()
    }
})


function startGame(){
    setInterval(decreaseTime, 1000);
    createRandomCircle()
    setTime(time)
}

function decreaseTime(){ 
    if(time===0){
        finishGame()
    }else {
        let current = --time
        if(current<10){
            current = `0${current}`
        }
        setTime(current)
    }
}

function setTime(value){
    timeEl.innerHTML = `00:${value}`
}

function finishGame(){
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Cчет: <span class=""primary>${score}</span></h1>`
}

function createRandomCircle(){
    const circle = document.createElement('div')
    const size = getRandomNumber(40,100)
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomNumber(0, width-size)
    const y = getRandomNumber(0, height-size)
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    
    circle.style.backgroundColor = getRandomColor()
    
    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`

    board.append(circle)
}

function getRandomNumber(min,max) {
    return Math.round(Math.random() * (max-min) + min)    
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

function winTheGame(){

    function kill (){        
        const circle = document.querySelector('.circle')
        if(circle){
            circle.click()
        }
    }
    
    setInterval(() => {
        kill()
    }, 5);
}