// Code your solutions in this file
function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messages.push(message);
    };
    return messages;
};

console.log(messages);

function countDown(numb) {
    while (numb >= 0) {
        console.log(numb)
        numb -= 1;
    }
}

   