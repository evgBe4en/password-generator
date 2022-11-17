let arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let arrLowCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let arrUpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let arrSymb = ['!', '@', '#', '$', '%', '?', '-', '+', '=', '~']

const letRandom = () => Math.random() - 0.5

const randomInteger = (min, max) => Math.round(min - 0.5 + Math.random() * (max - min + 1))

function genPassword() {
    let arr = []
    if(document.querySelector('#arr_num').checked) {
        arr = arr.concat(arrNum)
    }

    if(document.querySelector('#arr_en').checked) {
        arr = arr.concat(arrLowCase)
    }

    if(document.querySelector('#arr_EN').checked) {
        arr = arr.concat(arrUpperCase)
    }

    if(document.querySelector('#arr_symb').checked) {
        arr = arr.concat(arrSymb)
    }

    arr.sort(letRandom);
    let password = ''
    let passLength = document.querySelector('#passLenght').value
        if(passLength > 14) {
            alert('Error')
        } else {
            for (let i = 0; i < passLength; i++){
                password += arr[randomInteger(0, arr.length - 1)]
            }
        }
    document.getElementById("passInput").value = password;
  }
  
 

 function copyPassword() {
    var copyText = document.getElementById("passInput");
    copyText.select();
    document.execCommand("copy");  
  }