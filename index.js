let Weight;
let Height;
let bmi;
Weight=prompt("Enter your Weight");
Height=prompt("Enter your Height");
Height/=100;
bmi=Weight/(Height*Height);
console.log("Body mass index",bmi);
if(bmi<=18.4)
{
  alert("Your bmi is :${bmi} which means you are underweight");
}

 else if(bmi>=18.5 &&bmi<=24.9)
{
  alert("Your bmi is :${bmi}which means you  are Normal");
}
else if (bmi>=25 && bmi <=39.9)
{
  alert ("Your bmi is:${bmi} which means you are overweight");

}
else{
  alert("your bmi is :${bmi} which means you are obese");
}

