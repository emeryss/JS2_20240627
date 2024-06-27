console.log("hello")


// 문제 1
let startNum1=document.getElementById("prob1-startNum")
let endNum1=document.getElementById("prob1-endNum")
let prob1_Button = document.getElementById("prob1-calculate")
let prob1_Clear = document.getElementById("prob1-clear")
let output1 = document.getElementById("prob1-output")

startNum1.addEventListener("focus", function(){startNum1.value})
endNum1.addEventListener("focus", function(){endNum1.value})
prob1_Button.addEventListener("click", prob1)
prob1_Clear.addEventListener("click", clear1)


function prob1(){
    let sum=0;
    let a=Number(startNum1.value)
    let b=Number(endNum1.value)

    if(isNaN(a)==true || isNaN(b)==true){
        output1.innerHTML = '숫자를 다시 입력하세요'
    }else if(a>b){
        output1.innerHTML = '앞의 숫자가 더 클 수 없습니다.'
    }else{
        for(i=a;i<=b;i++){
            sum=sum+i;
        }
        output1.innerHTML=`결과: ${a}부터 ${b}까지의 숫자를 모두 더하면 ${sum} 입니다`;
    }
    
}

function clear1(){
    output1.innerHTML = `결과`
}

// 문제 2
let startNum2=document.getElementById("prob2-startNum")
let endNum2=document.getElementById("prob2-endNum")
let prob2_Button = document.getElementById("prob2-calculate")
let prob2_Clear = document.getElementById("prob2-clear")
let output2 = document.getElementById("prob2-output")

startNum2.addEventListener("focus", function(){startNum2.value})
endNum2.addEventListener("focus", function(){endNum2.value})
prob2_Button.addEventListener("click", prob2)
prob2_Clear.addEventListener("click", clear2)

function prob2(){
    let a=Number(startNum2.value)
    let b=Number(endNum2.value)
    
    output2.innerHTML = `${a} ~ ${b} 사이 홀수는:</br>`

    if(isNaN(a)==true || isNaN(b)==true){
        output2.innerHTML = '숫자를 다시 입력하세요'
    }else if (a<0 || b<0){
        output2.innerHTML = '음수는 입력하지 마세요'
    }else if(a>b){
        output2.innerHTML = '앞의 숫자가 더 클 수 없습니다.'
    }else if (a%2==0){    //첫째 숫자(a)가 짝수일 경우
        for(i=a+1;i<=b;i+=2){
            output2.innerHTML += `${i} &nbsp`
        }
    }else{
        for(i=a;i<=b;i+=2){
            output2.innerHTML += `${i} &nbsp`
        }
    }
}

function clear2(){
    output2.innerHTML = `결과`
}

// 문제 3

let maxCount = document.getElementById("prob3-limit")
let maxCountMsg = document.getElementById("max-count")
let condition1 = document.getElementById("prob3-condition1")
let condition2 = document.getElementById("prob3-condition2")
let condition3 = document.getElementById("prob3-condition3")
let prob3_Results = document.getElementById("prob3-results") 
let prob3_Clear = document.getElementById("prob3-clear")
let output3 = document.getElementById("prob3-output")

maxCount.addEventListener("focus", function(){maxCount.value})
condition1.addEventListener("focus", function(){condition1.value})
condition2.addEventListener("focus", function(){condition2.value})
condition3.addEventListener("focus", function(){condition3.value})
prob3_Results.addEventListener("click", prob3)
prob3_Clear.addEventListener("click", clear3)

function prob3(){
    let limit=500;
    let clapNum=[] //"짝"으로 만들 조건(숫자)
    let startNum=1
    let endNum=maxCount.value
    let numToString=""; 

    maxCountMsg.innerHTML = ``
    output3.innerHTML = '계산된 결과는: </br></br>'
    clapNum[0]=condition1.value;
    clapNum[1]=condition2.value;
    clapNum[2]=condition3.value;
    console.log(clapNum)


    if (clapNum[0]==""){clapNum[0]=-1} //입력하지 않으면 -1로 처리
    if (clapNum[1]==""){clapNum[1]=-1}
    if (clapNum[2]==""){clapNum[2]=-1}

    if (endNum<10 || endNum>limit || endNum-Math.round(endNum)!=0){
        maxCountMsg.innerHTML = `10 이상의 숫자를 입력하세요`
    }else if (isNaN(maxCount.value)==true || maxCount.value<10){
        maxCountMsg.innerHTML = `10 이상의 숫자를 입력하세요`
    }else if (isNaN(condition1.value)==true || //숫자가 아니면 error
        isNaN(condition2.value)==true ||
        isNaN(condition3.value)==true){
            output3.innerHTML = `숫자를 입력하세요`
    }else if (condition1.value<0 || // 음수 입력하면 error
              condition2.value<0 ||
              condition3.value<0
    ){
            output3.innerHTML = `음수는 받지 않습니다`
    }else if(clapNum[0]>9 ||
             clapNum[1]>9 ||
             clapNum[2]>9
    ){
            output3.innerHTML=`조건에는 10 미만의 숫자를 입력하세요`
    }else{
        for(i=startNum; i<=endNum; i++){
            numToString=i.toString() //숫자를 string으로 변환
            if(
                numToString.includes(clapNum[0])==true || 
                numToString.includes(clapNum[1])==true || 
                numToString.includes(clapNum[2])==true
            ){
                output3.innerHTML += `짝&nbsp`
            }else {
                output3.innerHTML += `${i}&nbsp`
            }
        }
    }
    
}

function clear3(){
    output3.innerHTML = '결과'
}

// 문제 4
let inputSource=document.getElementById("prob4-input")
let checkButton=document.getElementById("prob4-button")
let output4=document.getElementById("output4")

inputSource.addEventListener("focus", function(){inputSource.value})
checkButton.addEventListener("click", prob4)

function prob4(){
    // 주어진 숫자(input)보다 작은 숫자로 input이 나누어진다면 소수가 아니다
    let input = inputSource.value;
    let isPrime=true;

    output4.innerHTML=``
    if (isNaN(input)==true){
        output4.innerHTML = `3 이상의 "숫자"를 입력하세요`
    }else if(input==0 || input==1 || input==2){
        output4.innerHTML = `0, 1, 2는 소수가 아닙니다.</br>"3 이상의 숫자"를 입력하세요`
    }else if(input<0){
        output4.innerHTML = `3 이상의 "양수"를 입력하세요`
    }else if(input-Math.round(input)!=0){
        output4.innerHTML = `소수점이 있는 숫자는 입력하지 마세요`
    }else{
        for(i=input-1; i>1; i--){
            if(input%i==0){isPrime=false}
        }
        isPrime==true ? output4.innerHTML = `${input}은(는) 소수입니다.` : output4.innerHTML = `${input}은(는) 소수가 아닙니다.`
    }
    
    
}