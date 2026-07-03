function sumCalculator(){
    const n1 = document.getElementById('num1').value ;
    const n2 = document.getElementById('num2').value ;
<<<<<<< HEAD
    const n3 = document.getElementById('num3').value ;

    const number1 = parseFloat(n1);
    const number2 = parseFloat(n2);
    const number3 = parseFloat(n3);

    const sum = number1 + number2 + number3;
=======

    const number1 = parseFloat(n1);
    const number2 = parseFloat(n2);

    const sum = number1 + number2;
>>>>>>> 54a2527fe9bd544e5c6dcdcf18457db0fe423113

    document.getElementById('res').textContent=sum;

}
function eraser (){
    document.getElementById('num1').value="";
    document.getElementById('num2').value="";
<<<<<<< HEAD
    document.getElementById('num3').value="";
=======
>>>>>>> 54a2527fe9bd544e5c6dcdcf18457db0fe423113
    document.getElementById('res').textContent="";
}