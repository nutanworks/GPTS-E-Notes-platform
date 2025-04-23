//conditonal statement

let score = prompt("Enter the score:");

if(score>=90 && score<=100){
    console.log("A grade");
}
else if(score>=70 && score<=89){
    console.log("B grade");
}
else if(score>=60 && score<=69){
    console.log("C grade");
}
else if(score>=50 && score<=59){
    console.log("D grade");
}
else{
    console.log("Fail");
}