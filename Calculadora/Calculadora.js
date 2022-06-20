function Clear(){
   var r = document.getElementById('result').innerHTML;
   document.getElementById('result').innerHTML = r.substring(0, r.length -1);
}

function Calc(){
   var result = document.getElementById('result').innerHTML;
   if(result){
      document.getElementById('result').innerHTML = eval(result);
   }else{
      alert("Por Favor Insira seu Cálculo!");
   }
}

function Restart(){
    document.getElementById('result').innerHTML = "";
}

function Start(n){
   var num = document.getElementById('result').innerHTML;
   document.getElementById('result').innerHTML = num + n;
}