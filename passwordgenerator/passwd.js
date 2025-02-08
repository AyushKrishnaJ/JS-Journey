function Generate() {
    const length = document.getElementById("length").value;
    const capital = document.getElementById("capital");
    const number = document.getElementById("number");
    const symbol = document.getElementById("symbol");
    let arr = [...'abcdefghijklmnopqrstuvwxyz'];
    const output = document.getElementById("genpass");
    if (capital.checked) {
        arr = [...arr, ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
    }
    if (number.checked) {
        arr = [...arr, ...'1234567890'];
    }
    if (symbol.checked) {
        arr = [...arr, ...'!@#$%^&*(){}[]<>/|'];
    }
    const pass = [];
    for (let i = 0; i<length; i++) {
        const index = Math.floor(Math.random()*(arr.length));
        pass.push(arr[index]);
    }
    output.innerHTML = `${pass.join('')}`; 
}  