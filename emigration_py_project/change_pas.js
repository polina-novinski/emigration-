const change = document.getElementById("change")

function change_data(){
var test = document.getElementsByTagName('div')[7].innerHTML;
var cut_symbol = test.replace(/[^а-яё\d\-\s]/gi,'');
if(test == cut_symbol)
document.getElementsByTagName('div')[7].innerHTML='Novinskaya';
else
document.getElementsByTagName('div')[7].innerHTML='Новинская';
if(test == cut_symbol)
document.getElementsByTagName('div')[8].innerHTML='Paulina';
else
document.getElementsByTagName('div')[8].innerHTML='Полина';
if(test == cut_symbol)
document.getElementsByTagName('div')[9].innerHTML='Olegovna';
else
document.getElementsByTagName('div')[9].innerHTML='Олеговна';

}

change.addEventListener("click", change_data)
