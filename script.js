var result = document.getElementById('r');
var hist = document.getElementById('h');

function insertNumber(num){
    // verifica o excesso de digitos no display
    if(result.innerHTML.length <= 15)  
            result.innerHTML += num;    
}
function insertOperator(op){
    if(result.innerHTML.length <= 14){
        // verifica o ultimo digito na tela para nao repetir operações juntas 
        const i = result.innerHTML[result.innerHTML.length -1];
        if(!(i=='/'||i=='*'||i=='-'||i=='+'||i=='.'))
            result.innerHTML += op;
    }
}

function clearResult(){
    result.innerHTML = '';
}

function clearHistory(){
    result.innerHTML = '';
    hist.innerHTML = '';
}
function del(){
    result.innerHTML = result.innerHTML.substring(0, result.innerHTML.length -1);
}
function iqual(){
    if(result.innerHTML){
        hist.innerHTML = result.innerHTML;
        // eval(função do js) realiza as operações no result
        result.innerHTML = eval(result.innerHTML);
    }else{
        result.innerHTML =''
    }
}