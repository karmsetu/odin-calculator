let currQueue = []
let currQueueInfo = [currQueue]
let prevQueue = []
let prevQueueInfo = [prevQueue]
let currStr;
let prevStr;
let operatorInQuestion;
let operatorPosition = false
function addToArray(e) {
    console.log(`added`)
    currQueue.push(e)
    console.log(currQueue)
}

function clear(e){
    while (e.length > 0) {
        e.pop()
        console.log(e)
    }

}

function intoString(e){
    str = e.toString()
    str =str.replaceAll(',','');

    return Number(str)
}

function operatorFunc(opr){
    if (operatorPosition == true) {
        equalsTo()
    } else {

        prevQueue = [...currQueue]
        clear(currQueue)
    }
    operatorPosition = true
    operatorInQuestion = opr
    console.log(`operatorInQuestion: ${operatorInQuestion}`)
    console.log(`prevQueue: ${prevQueue}`)
    console.log(`currQueue: ${currQueue}`)
}

function equalsTo(){
    // if(operatorPosition == false){
    //     return
    // } else {

    // }

    x = intoString(prevQueue)
    console.log((x))
    y = intoString(currQueue)
    console.log((y))
    let some
    if (operatorInQuestion == `+`) {
        some = parseInt(x) + parseInt(y)
        clear(prevQueue)
        clear(currQueue)
        prevQueue.push(some)
        console.log(some)
    } else if (operatorInQuestion == `-`) {
        some = parseInt(x) -  parseInt(y)
        clear(prevQueue)
        clear(currQueue)
        prevQueue.push(some)
        console.log(some)
    } else if (operatorInQuestion == `*`) {
        some = parseInt(x) *  parseInt(y)
        clear(prevQueue)
        clear(currQueue)
        prevQueue.push(some)
        console.log(some)
    } else if (operatorInQuestion == `/`) {
        some = parseInt(x) /  parseInt(y)
        clear(prevQueue)
        clear(currQueue)
        prevQueue.push(some)
        console.log(some)
    } else if (operatorInQuestion == `**`) {
        some = parseInt(x) ** parseInt(y)
        clear(prevQueue)
        clear(currQueue)
        prevQueue.push(some)
        console.log(some)
    } else {alert(Error)}

}
