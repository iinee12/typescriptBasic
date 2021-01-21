/**
 * Let's make a game
 */

type Position = {
    x:number
    y:number
}

type Direction = 'up' | 'down' | 'left' | 'right'

let position:Position = {
    x:0,
    y:0
}

function move( direction : Direction ){
    switch ( direction ){
        case 'up':
            position.y += 1
            return
        case 'down':
            position.y -=1
            return
        case 'left':
            position.x -=1
            return
        case 'right':
            position.x += 1
            return
        default:
            console.log('unable Valu Input!!')
    }
    
}


 console.log(position)
 move('up')
 console.log(position)
 move('down')
 console.log(position)
 move('left')
 console.log(position)
 move('right')
 console.log(position)