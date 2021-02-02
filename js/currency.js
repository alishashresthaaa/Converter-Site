function calculateCurrency(){
  const selectFrom = document.querySelector('#currency-from');
  const option1 = selectFrom.options[selectFrom.selectedIndex].value;
 
  const selectTo = document.querySelector('#currency-to');
  const option2 = selectTo.options[selectTo.selectedIndex].value;

  const input = document.querySelector('#currency-input').value;  

  let output = document.querySelector('#currency-output');
  let outputValue;
  console.log(input + output);

  if(option1 == 'inr' && option2 == 'nrs'){
    outputValue = (input * 1.60).toFixed(2);
  }
  else if(option1 == 'nrs' && option2 == 'inr'){
    outputValue = (input / 1.60).toFixed(2);
  }   
  output.value = outputValue;
 
}