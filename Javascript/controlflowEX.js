var text="",x,i;
//simple for loop
for (i = 0; i < 10; i++) {
text = "The number is " + i + "\n";
    if(i===2){continue;}
    if(i===5){break;}
console.log(text);
}
//The For-In Loop
var person = {name:"Naresh",age: 22}; 
for (x in person) {
text = person[x];
console.log(text);
}
//while loop for finding(2^10)
var res=1,cnt=0;
while(cnt<10){
res=res*2;
cnt++;
}
console.log(res);
//do-while loop
//here var i will take prev value i=5
do {
    text = "The number is= " + i;
    i++;
}
while (i < 1);
console.log(text);
//switch case example
for(i=1;i<7;i++)
{
    switch(i){
    case 1:console.log("this is case "+i);
            break;
    case 2:console.log("this is case "+i);
              break;
    case 3:console.log("this is case "+i);
              break;
    case 4:console.log("this is case "+i);  
            break;
    default:console.log("default stmnt");
    }
}