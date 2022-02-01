// Your code here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(toDo = "go to the office") {
    return `This Monday, I will ${toDo}.`;
}

function wrapAdjective(){
    const innerFunction = function(empty = "special"){
        return function(){
let thisThing = `You are ${empty}`
        }
    }
}


