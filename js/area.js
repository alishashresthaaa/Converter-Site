function calculateArea(){
  const selectFrom = document.querySelector('#area-from');
  const option1 = selectFrom.options[selectFrom.selectedIndex].value;
 
  const selectTo = document.querySelector('#area-to');
  const option2 = selectTo.options[selectTo.selectedIndex].value;

  const input = document.querySelector('#area-input').value;  

  let output = document.querySelector('#area-output');
  let outputValue;
  console.log(input + output);

  if(option1 == 'm2' && option2 == 'cm2'){
    outputValue = (input * 10000);
  }
  else if(option1 == 'cm2' && option2 == 'm2'){
    outputValue = (input / 10000);
  }   
  output.value = outputValue;
 
}