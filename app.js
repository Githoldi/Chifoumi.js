const ps = require('prompt-sync')
const col = require('colors')
const pss = ps()

console.clear()
console.log('')
console.log(col.red('Welcome To Chifoumi.JS'))
console.log('')

var username = ''

setTimeout(() => {
    username = pss(col.yellow('please enter your username --> '))
    console.log('')
    console.log(col.yellow('ok ' + username + ', do you want to start ?'))
    setTimeout(() => {
        let starting = pss(col.blue('yes') + ' or ' + col.blue('quit') + ' --> ')
        if(starting === 'yes') {
            startGame()
        } else if(starting === 'quit') {
            console.log('Okay, I quit')
        } else {
            console.log(col.red('It\'s not a correct word, sorry'))
        }
    }, 100)
}, 100)

function startGame() {
    console.log('')
    let object = pss('Okay, enter 1 for rock, 2 for paper or 3 for scissors --> ')
    if(object === '1') {
        object = 'rock'
    } else if(object === '2') {
        object = 'paper'
    } else if(object === '3') {
        object = 'scissors'
    } else {
        console.log(col.red('It\'s not a correct word, sorry'))
    }
    console.log('')
    console.log('You have play the ' + col.blue(object))
    let contre = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)]
    console.log('And the bot has play the ' + col.blue(contre))
    console.log('')
    setTimeout(() => {
        console.log(testWin(object, contre))
        setTimeout(() => {
            console.log('')
            console.log(col.yellow('Okay, ' + username + ', do you want to restart ?'))
            setTimeout(() => {
                let restart = pss(col.blue('yes') + ' or ' + col.blue('quit') + ' --> ')
                if(restart === 'yes') {
                    startGame()
                } else if(restart === 'quit') {
                    console.log('Okay, I quit')
                } else {
                    console.log(col.red('It\'s not a correct word, sorry'))
                }
            }, 100)
        }, 100)
    }, 1500)
}

function testWin(o, c) {
    if(o === 'rock') {
        if(c === 'paper') {
            return col.red('So, You Lose...')
        } else if(c === 'scissors') {
            return col.green('So, You Win!')
        } else if(c === 'rock') {
            return col.blue('So, there is a egality')
        }
    } else if(o === 'paper') {
        if(c === 'rock') {
            return col.green('So, You Win!')
        } else if(c === 'scissors') {
            return col.red('So, You Lose...')
        } else if(c === 'paper') {
            return col.blue('So, there is a egality')
        }
    } else if(o === 'scissors') {
        if(c === 'paper') {
            return col.green('So, You Win!')
        } else if(c === 'rock') {
            return col.red('So, You Lose...')
        } else if(c === 'scissors') {
            return col.blue('So, there is a egality')
        }
    }
}