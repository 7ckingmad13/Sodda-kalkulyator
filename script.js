let x;

function hisoblash() {
    let natijaUmumiy;
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    switch (x) {
        case '+':
            natijaUmumiy = num1 + num2;
            break;
        case '-':
            natijaUmumiy = num1 - num2;
            break;
        case '*':
            natijaUmumiy = num1 * num2;
            break;
        case '/':
            natijaUmumiy = num1 / num2;
        default:
            alert("Siz amalni tanlamadingiz")
    }
    document.getElementById("natijalar").innerHTML = natijaUmumiy;
}
