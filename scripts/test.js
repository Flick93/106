
function sayHello(){
    console.log("Hello");
}

function init(){
    console.log("this is the initial state:");
    sayHello();
}

window.onload = init;