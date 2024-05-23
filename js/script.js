let btnClear = document.querySelector('#luasReset');
let inputs = document.querySelectorAll('input')

btnClear.addEventListener('click',()=>{
    inputs.forEach(input=>input.value='');
});

// Rumus luas segitiga
function luasCalc()
{
    var alas = parseInt(document.getElementById('alas-segitiga').value);
    var tinggi = parseInt(document.getElementById('tinggi-segitiga').value);
    const rumus = 1/2
    {
    hasil = document.getElementById('luasResult').value = rumus*(alas*tinggi);
    }
}

var alasSegitiga = document.getElementById('alas-segitiga').value

console.log(alasSegitiga)

var tinggiSegitiga = document.getElementById('tinggi-segitiga').value

console.log(tinggiSegitiga)

function kelilingCalc()
{
    var sisia = parseInt(document.getElementById('sisi1').value);
    var sisib = parseInt(document.getElementById('sisi2').value);
    var sisic = parseInt(document.getElementById('sisi3').value);
    {
    hasil = document.getElementById('kelilingResult').value = sisia+sisib+sisic;
    }
}

