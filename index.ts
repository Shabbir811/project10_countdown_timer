#! /usr/bin/env node

import inquirer from "inquirer";
import {differenceInSeconds} from "date-fns"

let list = ["timer for seconds","timer for minutes"]

console.log("+-".repeat(60) );
console.log(`\t\t\t\t\twelcome to countdown timer program`);
console.log("+-".repeat(60) );
   





let  user_input = await inquirer.prompt([
        {
            name: "options",
            type:"list",
            message:"please select option from given list: ",
            choices:list
        }
     ])

let answer = user_input.options

if(answer == list[0]){
    let  user_input = await inquirer.prompt([
        {
            name: "seconds",
            type:"number",
            message:"please set timer in seconds",
            validate:(input)=>{
                if(isNaN(input)){
                    return '\n\ttime enter only in numbers\n'
                }else if(input>60){
                    return '\n\tenter seconds between 1 to 60\n'
                }else{
                    return true
                }
            }
        }
    ])
    
    let seconds = user_input.seconds
    seconds = seconds

    function countdown_start(seconds:number){
        let end_time = new Date(new Date().getTime()+seconds*1000);
        
        let intervaild = setInterval((()=>{
            let curr_time = new Date()
            let time_diff = differenceInSeconds(end_time,curr_time);

            if(time_diff <= 0){
                console.log(`\n\tcountdown timer has expired...\n`);
                clearInterval(intervaild);
                process.exit()
                
            }else{
                let secs = Math.floor(time_diff%60)
                console.log(`00 : ${secs.toString().padStart(2,"0")}`);
                
            }
           



        }),1000)
    }

    countdown_start(seconds)
}else if(answer == list[1]){
    let  user_input = await inquirer.prompt([
        {
            name: "minutes",
            type:"number",
            message:"\n\tplease set timer in minutes\n",
            validate:(input)=>{
                if(isNaN(input)){
                    return '\n\ttime enter only in numbers\n'
                }else if(input>60){
                    return '\n\tenter minutes between 1 to 60\n'
                }else{
                    return true
                }
            }
        }
    ])
    
    let minutes = user_input.minutes

    function countdown_start(minutes:number){
        let end_time = new Date(new Date().getTime()+minutes*60000)
        
       let intervaild = setInterval((()=>{
            let curr_time = new Date()
            let time_diff = differenceInSeconds(end_time,curr_time);

            if(time_diff <= 0){
                console.log(`\n\tcountdown timer has expired...\n`);
                clearInterval(intervaild)
                process.exit()
                
            }
            
            let min = Math.floor(time_diff/60)
            let secs = Math.floor(time_diff%60)
            console.log(`${min.toString().padStart(2,"0")} : ${secs.toString().padStart(2,"0")}`);
            



        }),1000)
    }

    countdown_start(minutes)

}
















