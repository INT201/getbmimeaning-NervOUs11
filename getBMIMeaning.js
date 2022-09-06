const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  return weight/height**2
}
function getBMIMeaning(weight, height) {
  let result
  let BMI = calculateBMI(weight,height)
  if (BMI < 18.5){
      result = "Underweight"
  }
  else if (BMI > 25.0 ){
      result = "Overweight"
  }
  else {
      result = "Normal weight"
  }
  console.log(result)
  return result
}
module.exports = getBMIMeaning