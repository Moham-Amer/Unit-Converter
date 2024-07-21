const valueToConvertEl=document.getElementById("valueToConvert")
const convertButton=document.getElementById("convert")
const lengthDiv=document.getElementById("lengthSpan")
const volumeDiv=document.getElementById("volumeSpan")
const massDiv=document.getElementById("massSpan")
let valueToConvert;
convertButton.addEventListener("click",function(){
    valueToConvert=valueToConvertEl.value
    lengthDiv.innerHTML=`${valueToConvert} meters = ${(valueToConvert*3.28081).toFixed(3)} feet 
    | ${valueToConvert} feet = ${(valueToConvert/3.28081).toFixed(3)} meters`
        volumeDiv.innerHTML=`${valueToConvert} liters = ${(valueToConvert*0.264175).toFixed(3)} gallons 
    | ${valueToConvert} gallons = ${(valueToConvert/0.264175).toFixed(3)} liters`
          massDiv.innerHTML=`${valueToConvert} kilos = ${(valueToConvert*2.20458).toFixed(3)} pounds 
    | ${valueToConvert} pounds = ${(valueToConvert/2.20458).toFixed(3)} kilos`
})
