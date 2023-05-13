var divEle = document.getElementById("container");
var numEle = document.getElementById("num")
// var btnEle = document.getElementById = "btn" ;


// console.log(divEle.style.backgroundColor = "red")

function changeColor(){
    // alert('hello world')
    var num = Math.round((Math.random() * 6) +1 )
    numEle.innerText = " Random Number : " + num
    
    switch(num){
        case 1:
            divEle.style.backgroundColor = 'red';
            break;
        case 2 :
            divEle.style.backgroundColor = 'brown';
            break;
        case 3 :
            divEle.style.backgroundColor = 'black';
            break;

        case 4 :
            divEle.style.backgroundColor = 'green';
            break;

        case 5 :
            divEle.style.backgroundColor = 'blue';
            break;

        case 6:
            divEle.style.backgroundColor = 'brown';
            break;

    }
}
// btnEle.addEventlitner("click",changeColor())