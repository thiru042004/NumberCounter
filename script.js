let count = 0;
var sum =0;
let countElement = document.getElementById('count-el');
let sumele = document.getElementById('sumOf');
let saveEl = document.getElementById('saved-text');
function increment(){
    count = count +1 ;
    countElement.innerText = count;
}
function save(){
    countstr =  '- '+count+' ';
    sum += count;
    document.getElementById('saved-text').textContent+=countstr;
    countElement.textContent = 0;
    count = 0;
}



