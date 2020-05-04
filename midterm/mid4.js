function sum(...a) {
    let result = 0;
    for (let i = 0; i < a.length; ++i)
        result += a[i];
    return result; 
}
let a=[];
let sum=0;
for(let i=0; i<10; i++){
    a[i]=Math.floor(Math.random()*100+1);
    sum+=a[i];
    
}
con
