
var section1 = document.querySelector('.section-1')
var button = document.querySelector('.icon')

button.addEventListener('click', toggleSection1)

function toggleSection1(){
    section1.classList.toggle('hidden')
}

var section2 = document.querySelector('.section-2')
var button = document.querySelector('.icon')

button.addEventListener('click', toggleSection2)

function toggleSection2(){
    section1.classList.toggle('hidden')
}

console.log('hidden element')

// Rumus luas segitiga
function luasCalc()
{
    var segialas = parseInt(document.getElementById('alas-segitiga').value);
    var segitinggi = parseInt(document.getElementById('tinggi-segitiga').value);
    const segirumus = 1/2
    {
    hasil = document.getElementById('segitiga-luas-result').value = segirumus*(segialas*segitinggi);
    }
}
console.log('berhasil')

function kelilingCalc()
{
    var segisisia = parseInt(document.getElementById('segisisi1').value);
    var segisisib = parseInt(document.getElementById('segisisi2').value);
    var segisisic = parseInt(document.getElementById('segisisi3').value);
    {
    hasil = document.getElementById('segitiga-keliling-result').value = segisisia+segisisib+segisisic;
    }
}
console.log('berhasil1')

function jajarLuasCalc()
{
    var jajaalas = parseInt(document.getElementById('alas-jajargenjang').value);
    var jajatinggi = parseInt(document.getElementById('tinggi-jajargenjang').value);
    {
    hasil = document.getElementById('jajargenjang-luas-result').value = jajaalas*jajatinggi;
    }
}
console.log('berhasil2')

function jajarKelilingCalc()
{
    var jajasisia = parseInt(document.getElementById('jajasisi1').value);
    var jajasisib = parseInt(document.getElementById('jajasisi2').value);
    const jajarumus = 2
    {
    hasil = document.getElementById('jajargenjang-keliling-result').value = jajarumus*(jajasisia+jajasisib);
    }
}
console.log('berhasil3')

let btnClear = document.querySelector('#reset');
let inputs = document.querySelectorAll('input')

btnClear.addEventListener('click',()=>{
    inputs.forEach(input=>input.value='');
});
console.log('berhasilReset')