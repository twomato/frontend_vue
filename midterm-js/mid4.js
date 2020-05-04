let num=[];

function sum(...a) {
    let result = 0;
    for (let i = 0; i < a.length; ++i)
        result += a[i];
    return result; 
}
function test_sum(){
    for(let i=0; i<5; i++){
        num[i]=Math.floor(Math.random()*10)+1;
        console.log(num);
    }
}
for(let i=0; i<5; i++){
  sum(test_sum);
}
