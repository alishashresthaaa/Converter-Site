function calculateTime(){
  const selectFrom = document.querySelector('#time-from');
  const option1 = selectFrom.options[selectFrom.selectedIndex].value;
 
  const selectTo = document.querySelector('#time-to');
  const option2 = selectTo.options[selectTo.selectedIndex].value;

  const input = document.querySelector('#time-input').value;  

  let output = document.querySelector('#time-output');
  let outputValue;
  console.log(input + output);

  if(option1 == 'min' && option2 == 'sec'){
    outputValue = (input * 60);
  }
  else if(option1 == 'sec' && option2 == 'min'){
    outputValue = (input / 60);
  }   
  output.value = outputValue;
 
}