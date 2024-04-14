import inquirer from "inquirer";

const currency :any ={
    USD:1, //base currency
    EUR:0.94,
    INR:83.61,
    KRW:1380.60,
    JPY:153.28,
    SAR:3.75,
    QAR:3.64,
    PKR:277.30
};

let user_answer = await inquirer.prompt(
  [
    {
      name:"from",
      message:"enter from currency",
      type:"list",
      choices:["USD","EUR","INR","KRW","JPY","SAR","QAR","PKR"]   
    },
    { 
      name:"to",
      message:"enter to currency",
      type:"list",
      choices:["USD","EUR","INR","KRW","JPY","SAR","QAR","PKR"]
    },
    {
      name:"amount",
      message:"please enter your amount",
      type:"number" 
    }
  ]
); 

let fromAmount = currency[user_answer.from]
let toAmount =  currency[user_answer.to]
let amount=user_answer.amount 
let baseAmount = amount/fromAmount
let convertedAmount = baseAmount*toAmount
  console.log(convertedAmount);
