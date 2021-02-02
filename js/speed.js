function calculateSpeed(){
  const selectFrom = document.querySelector('#speed-from');
  const option1 = selectFrom.options[selectFrom.selectedIndex].value;
 
  const selectTo = document.querySelector('#speed-to');
  const option2 = selectTo.options[selectTo.selectedIndex].value;

  const input = document.querySelector('#speed-input').value;  

  let output = document.querySelector('#speed-output');
  let outputValue;
  console.log(input + output);

  if(option1 == 'kms' && option2 == 'ms'){
    outputValue = (input * 1000);
  }
  else if(option1 == 'ms' && option2 == 'kms'){
    outputValue = (input / 1000);
  }   
  output.value = outputValue;
 
}