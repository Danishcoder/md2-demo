// // .push() for the end





// let ashBackpack = []

// ashBackpack.push('Pokeball')
// ashBackpack.push('Potion')
// ashBackpack.push('Pokedollars')

// //ashBackpack.shift()

// ashBackpack.splice(0, 1)

// let foundItem = "Waterstone"
// ashBackpack.push(foundItem)

// ashBackpack.pop()

// let itemCount = ashBackpack.length

// ashBackpack.push('great ball', 'antidote', 'revive')

// let satchel = ashBackpack.splice(3, 2)

// if (ashBackpack.length > 3){
//     for(let i = 0; i < 3; i++){
//         console.log(ashBackpack[i])D
//     }
// } else {
//     for(let i = 0; i < ashBackpack.length; i++){
//         console.log(ashBackpack[i])
//     }
// }

let guessMe = 54

while (guessMe < 100) {

    console.log('------',guessMe)
    if (guessMe % 4 === 0 || guessMe % 5 === 0) {
        guessMe += 25
        console.log('Guess me is divisible by 4 or 5 added 25', guessMe)
    } else if (guessMe % 3 === 0) {
        guessMe -= 27
        console.log('Guessme is divisible by 3 subtracted 27 ', guessMe)
    } else {
        guessMe += 3
        console.log('GuessMe hit else, added 3', guessMe)
    }
    guessMe += 22
    console.log(`Added 22, guessMe is now ${guessMe}`)
}

console.log('final value', guessMe)
