let a=[];
let sum=0;
let avg;
for(let i=0; i<100; i++){
    a[i]=Math.floor(Math.random()*100+1);
    sum+=a[i];
    avg=sum/a.length;
}

console.log(avg.toFixed(1));