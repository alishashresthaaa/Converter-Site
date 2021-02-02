function calculateMass(){
  const selectFrom = document.querySelector('#mass-from');
  const option1 = selectFrom.options[selectFrom.selectedIndex].value;
 
  const selectTo = document.querySelector('#mass-to');
  const option2 = selectTo.options[selectTo.selectedIndex].value;

  const input = document.querySelector('#mass-input').value;  

  let output = document.querySelector('#mass-output');
  let outputValue;
  console.log(input + output);

  if(option1 == 'kg' && option2 == 'lb'){
    outputValue = (input * 2.20).toFixed(2);
  }
  else if(option1 == 'lb' && option2 == 'kg'){
    outputValue = (input / 2.20).toFixed(2);
  }   
  output.value = outputValue;
 
}