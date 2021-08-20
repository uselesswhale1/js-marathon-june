const board = document.querySelector('#board')
const colors = [ '#66CDAA', '#B0C4DE','#8A2BE2', '#778899', '#A52A2A', '#9400D3', '#FA8072']
const SQUARES_NUMBER = 600

for (let i=0; i<SQUARES_NUMBER; i++ ) {
    const square = document.createElement('div')
    square.classList.add('square')
    
    square.addEventListener('mouseover', () => 
    setColor(square))

    square.addEventListener('mouseleave', () => 
    removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 10px #1f1f1f, 0 0 2px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor='#1b1b1b '
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}
