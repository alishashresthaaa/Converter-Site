function calculateTemperature(){
  const selectFrom = document.querySelector('#temperature-from');
  const option1 = selectFrom.options[selectFrom.selectedIndex].value;
 
  const selectTo = document.querySelector('#temperature-to');
  const option2 = selectTo.options[selectTo.selectedIndex].value;

  const input = document.querySelector('#temperature-input').value;  

  let output = document.querySelector('#temperature-output');
  let outputValue;
  console.log(input + output);

  if(option1 == 'C' && option2 == 'F'){
    outputValue = (input * 33.8).toFixed(2);
  }
  else if(option1 == 'F' && option2 == 'C'){
    outputValue = (input / 33.8).toFixed(2);
  }   
  output.value = outputValue;
 
}