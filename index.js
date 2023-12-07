
function writeCards(names){
    const messages = [];
    for(let i=0; i<names.length; i++){
        messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    return messages
}

function countDown(x){
    for(let i=0; i<11; i++){
        console.log(i)
    }
}
































/*// Code your solutions in this file

function writeCards(stringNames, eventNames){
    const messages = [];
    for (let i=0; i<stringNames.length; i++){
        //debugger;
        messages[i] = `Thank you, ${stringNames[i]}, for the wonderful ${eventNames} gift!`
        //debugger;
    }
    return messages;
}
//writeCards(["Charlie", "Samip", "Ali"], "birthday");


function countDown(integer){
    if (integer>=0){
        while(integer>=0){
            console.log(integer--)
        }
    }   
};
*/
