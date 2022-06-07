var pInput = document.getElementById('p');
var qInput = document.getElementById('q');
var public = document.getElementById('public');
var private = document.getElementById('private');
var original = document.getElementById('original');
var encrypted = document.getElementById('encrypted');
var decrypted = document.getElementById('decrypted');
var text = document.getElementById('text');
const btn = document.querySelector('#send');
var e;
var ASCIIconvert = new Array;
var encrypt = new Array;
var decrypt = new Array;
var dTemp = new Number;
var d = new Number;
var eTemp;
                                               
                                                
function findPrimeNumber(number) {
    for (var i = 2; i < number; i++) {
        var flag = 0;
        if (number % i == 0) {
            flag = 1;
            break;
        }
    }
    if (flag == 0) {
        return true;
    }
    else {
        alert('Values Are not prime');
        pInput.value = ''
        qInput.value = ''
        return false;
    }

}
                                                    
                                                  
btn.addEventListener('click', (event) => {
    ASCIIconvert = [];
    encrypt = [];
    decrypt = [];
    var q = parseInt(qInput.value, 10);
    var p = parseInt(pInput.value, 10);
    var check = findPrimeNumber(q);                        
    var check2 = findPrimeNumber(p);
    if (check === true || check2 === true) {            
        var n = p * q;                             
        var fi = (p - 1) * (q - 1);               
        do {
            eTemp = Math.floor(Math.random() * fi) + 1     
            for (var i = 2; i < eTemp; i++) {
                var flag = 0;
                if (eTemp % i == 0) {
                    flag = 1;
                    break;
                }
            }
            if (flag == 0) {
                e = eTemp;

            }
            else {
                continue;
            }
        }
        while (fi % eTemp == !1 || eTemp % fi == !1);       
        for (var i = 0; i < text.value.length; i++) {     
            var code = text.value.charCodeAt(i);
            ASCIIconvert.push(code);
            encrypt[i] = Math.pow(ASCIIconvert[i], e) % n;  
        }
        for (var j = 0; j <= fi; j++) {                    
            dTemp = (1 + j * fi)
            dTemp = dTemp / e;
            d = Math.floor(dTemp)

            if (d - dTemp == 0) {                         
                break;
            }
        }
        for (var k = 0; k < encrypt.length; k++) {         
            encrypt[k] = encrypt[k] % n;
            
            var decryptedChar = Math.pow(encrypt[k], d) % n;
            decrypt.push(decryptedChar);
        }
        public.innerHTML = `(${e},${fi})`;                
        private.innerHTML = `(${fi},${d})`;
        original.innerHTML = `${ASCIIconvert}`;
        encrypted.innerHTML = `${encrypt}`;
        decrypted.innerHTML = `${decrypt}`;
       
    }
    else{
        public.innerHTML = '';
        private.innerHTML = '';
        original.innerHTML = '';
        encrypted.innerHTML = '';
        decrypted.innerHTML = '';
           
    }
                           
})