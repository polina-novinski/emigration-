function verify() {
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
        document.getElementById("result").innerText =  result;

    } else {
        result = "Нельзя"
        document.getElementById("result").innerText = result;

    }
if (m >= v2) {
        result2 = "Можно"
        document.getElementById("result2").innerText = result2;

    } else {
        result2 = "Нельзя"
        document.getElementById("result2").innerText = result2;

    }

if (m >= v3) {
        result3 = "Можно"
        document.getElementById("result3").innerText = result3;

    } else {
        result3 = "Нельзя"
        document.getElementById("result3").innerText = result3;
    }
}

const elementA = document.getElementById("a");
const elementB = document.getElementById("h");
const elementC = document.getElementById("r");
const elementD = document.getElementById("m");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);
