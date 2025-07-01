for(let i=0;i<5;i++)
{
    console.log("for loop iteration:" +i);

}
//while loop
let j=0;
while(j<5)
{
    console.log("while loop iteration:" +j);
    j++;
}

//do while
let i=0;
do{
    console.log("value of i:",+i);
    i++;
}while(i<5);
//for-of loop
let arr=[1,2,3,4,5];
for(let value of arr)
{console.log("for of loop",+value);
}
//for in loop
let obj={a:1,b:2,c:3};
for(let key in obj){
console.log("for in loop "+ key+",value;"+obj[key]);
}

    
//foreach loop
arr.forEach((value,index) =>                                         {
    console.log("for loop Index:"+index +",value:" +value);

})
