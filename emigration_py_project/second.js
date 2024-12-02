function verify(event) {
event.preventDefault();
    console.log("a, h, r, m")
    let a = parseInt(elementA.value);
    let h = parseInt(elementB.value);
    let r = parseInt(elementC.value);
    let m = parseInt(elementD.value);
    console.log(a, h, r, m)

    let v1 = Math.pow(a, 3);
    let v2 = Math.PI * Math.pow(r, 2) * h;
    let v3 = v1 + v2;

if (m >= v1) {
        result = "Можно"
        document.getElementById("result").innerText = messageText + result;
        document.getElementsByName('result')[0].value = result;
        check = true;

    } else {
        result = "Нельзя"
        document.getElementById("result").innerText = messageText + result;
        document.getElementsByName('result')[0].value = result;
        check = false;

    }
if (m >= v2) {
        result2 = "Можно"
        document.getElementById("result2").innerText = messageText2 + result2;
        document.getElementsByName('result2')[0].value = result2;
        check = true;

    } else {
        result2 = "Нельзя"
        document.getElementById("result2").innerText = messageText2 + result2;
        document.getElementsByName('result2')[0].value = result2;
        check = false;

    }

if (m >= v3) {
        result3 = "Можно"
        document.getElementById("result3").innerText = messageText3 + result3;
        document.getElementsByName('result3')[0].value = result3;
        check = true;

    } else {
        result3 = "Нельзя"
        document.getElementById("result3").innerText = messageText3 + result3;
        document.getElementsByName('result3')[0].value = result3;
        check = false;
    }
}

function send() {
    if (check) {
        let textCondition = document.getElementsByTagName('p')[0].innerText
        document.getElementsByName('formulation')[0].value = textCondition;
        document.getElementsByName('result')[0].value = result;
        document.getElementsByName('result2')[0].value = result2;
        document.getElementsByName('result3')[0].value = result3;
        document.getElementById("UserEnter").submit();
    }
}

function verify_send() {
    verify();
    send();
}

let messageText = document.getElementById("result").innerText
let messageText2 = document.getElementById("result2").innerText
let messageText3 = document.getElementById("result3").innerText
console.log(messageText)
console.log(messageText2)
console.log(messageText3)

let result;
let result2;
let result3;
let check = false;

const elementA = document.getElementById("a");
elementA.addEventListener('keyup', verify);
const elementB = document.getElementById("h");
elementB.addEventListener('keyup', verify);
const elementC = document.getElementById("r");
elementC.addEventListener('keyup', verify);
const elementD = document.getElementById("m");
elementD.addEventListener('keyup', verify);

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)
