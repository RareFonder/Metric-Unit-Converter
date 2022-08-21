const meterToFeetRatio = 3.281
const literToGallonRatio = 0.264
const kilogramToPoundRatio = 2.204
const submitInputBtn = document.getElementById("convert-btn")
const input = document.getElementById("convert-input")
const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")
let meterToFeetResult 
let feetToMeterResult
let literToGallonResult
let gallonsToLiterResult
let kilogramToPoundResult
let poundToKilogramResult

function calculate(x) {
    meterToFeetResult = (x * meterToFeetRatio).toFixed(3)
    feetToMeterResult = (x / meterToFeetRatio).toFixed(3)
    literToGallonResult = (x * literToGallonRatio).toFixed(3)
    gallonsToLiterResult = (x / literToGallonRatio).toFixed(3)
    kilogramToPoundResult = (x * kilogramToPoundRatio).toFixed(3)
    poundToKilogramResult = (x / kilogramToPoundRatio).toFixed(3)
}

submitInputBtn.addEventListener("click", function(){
    let x = input.value
    calculate(x) 
    lengthEl.textContent = `${x} meters = ${meterToFeetResult} feet | ${x} feet = ${feetToMeterResult} meters`
    volumeEl.textContent = `${x} liters = ${literToGallonResult} gallons | ${x} gallons = ${gallonsToLiterResult} liters`
    massEl.textContent = `${x} kilograms = ${kilogramToPoundResult} pounds | ${x} pounds = ${poundToKilogramResult} kilograms`
})



