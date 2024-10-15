function appendToResult(value){
    document.getElementById('result').value+=value;
}
function clearResult(){
    document.getElementById('result').value='';
}
function calculateResult(){
    try{
        document.getElementById('result').value=eval(document.getElementById('result').value)+"\n Atluntadhi manathoni";
    }catch (e){
        document.getElementById('result').value ='sarigga kodithey vasthadhi';
    }
}