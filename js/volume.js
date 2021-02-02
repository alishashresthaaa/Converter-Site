function calculateVolume(){
  const selectFrom = document.querySelector('#volume-from');
  const option1 = selectFrom.options[selectFrom.selectedIndex].value;
 
  const selectTo = document.querySelector('#volume-to');
  const option2 = selectTo.options[selectTo.selectedIndex].value;

  const input = document.querySelector('#volume-input').value;  

  let output = document.querySelector('#volume-output');
  let outputValue;
  console.log(input + output);

  if(option1 == 'ltr' && option2 == 'ml'){
    outputValue = (input * 1000).toFixed(2);
  }
  else if(option1 == 'ml' && option2 == 'ltr'){
    outputValue = (input / 1000).toFixed(2);
  }   
  output.value = outputValue;
 
}