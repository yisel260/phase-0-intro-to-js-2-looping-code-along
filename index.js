// Code your solutions in this file
const names = [ "Ana", "Mary", "Speedy", ]
const messages = [];
function writeCards(names) {
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return messages 
  }
  function countDown() {
    let countDown = 10
    while (countDown >= 0) {
        console.log (countDown)
        countDown--
    }
  } 