function calculateLength(){
  const selectFrom = document.querySelector('#length-from');
  const option1 = selectFrom.options[selectFrom.selectedIndex].value;
 
  const selectTo = document.querySelector('#length-to');
  const option2 = selectTo.options[selectTo.selectedIndex].value;

  const input = document.querySelector('#length-input').value;  

  let output = document.querySelector('#length-output');
  let outputValue;
  console.log(input + output);

  if(option1 == 'in' && option2 == 'cm'){
    outputValue = (input * 2.54).toFixed(2);
  }
  else if(option1 == 'cm' && option2 == 'in'){
    outputValue = (input / 2.54).toFixed(2);
  }   
  output.value = outputValue;
 
}