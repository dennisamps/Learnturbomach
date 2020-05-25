function checked1()
{
  document.getElementById('chb1_right_answer').innerHTML='';
  document.getElementById('chb1_wrong_answer').innerHTML='';

  var chb1 = document.getElementById('chb1');
  var chb2 = document.getElementById('chb2');
  var chb3 = document.getElementById('chb3');
  var chb4 = document.getElementById('chb4');
  var chb5 = document.getElementById('chb5');
  var chb6 = document.getElementById('chb6');


  if(chb1.checked && chb2.checked && chb3.checked && chb5.checked && chb6.checked)
  {
    document.getElementById('chb1_right_answer').innerHTML='Correct';
  } else {
    document.getElementById('chb1_wrong_answer').innerHTML='This in incorrect, try again';
  }

}

function checked2()
{
  document.getElementById('chb2_right_answer').innerHTML='';
  document.getElementById('chb2_wrong_answer').innerHTML='';

  var chb6 = document.getElementById('chb6');
  var chb7 = document.getElementById('chb7');
  var chb8 = document.getElementById('chb8');
  var chb9 = document.getElementById('chb9');
  var chb10 = document.getElementById('chb10');


  if(chb1.checked)
  {
    document.getElementById('chb2_right_answer').innerHTML='Correct';
  } else {
    document.getElementById('chb2_wrong_answer').innerHTML='This in incorrect, try again';
  }

}

function speed()
{

  document.getElementById('speed_right_answer').innerHTML='';
  document.getElementById('speed_wrong_answer').innerHTML='';
  var work=document.getElementById('speed').value;

  if(work == 354.1)
  {
    document.getElementById('speed_right_answer').innerHTML='Correct';
  } else {
    document.getElementById('speed_wrong_answer').innerHTML='This in incorrect, try again';
  }
}

function C2()
{

  document.getElementById('C2_right_answer').innerHTML='';
  document.getElementById('C2_wrong_answer').innerHTML='';
  var work=document.getElementById('C2').value;

  if(work == 120)
  {
    document.getElementById('C2_right_answer').innerHTML='Correct';
  } else {
    document.getElementById('C2_wrong_answer').innerHTML='This in incorrect, try again';
  }
}

function Ctheta2()
{

  document.getElementById('Ctheta2_right_answer').innerHTML='';
  document.getElementById('Ctheta2_wrong_answer').innerHTML='';
  var work=document.getElementById('Ctheta2').value;

  if(work == 369.3)
  {
    document.getElementById('Ctheta2_right_answer').innerHTML='Correct';
  } else {
    document.getElementById('Ctheta2_wrong_answer').innerHTML='This in incorrect, try again';
  }
}


function beta2()
{

  document.getElementById('beta2_right_answer').innerHTML='';
  document.getElementById('beta2_wrong_answer').innerHTML='';
  var work=document.getElementById('beta2').value;

  if(work == 44.9)
  {
    document.getElementById('beta2_right_answer').innerHTML='Correct';
  } else {
    document.getElementById('beta2_wrong_answer').innerHTML='This in incorrect, try again';
  }
}



function beta3()
{

  document.getElementById('beta3_right_answer').innerHTML='';
  document.getElementById('beta3_wrong_answer').innerHTML='';
  var work=document.getElementById('beta3').value;

  if(work == 64.9)
  {
    document.getElementById('beta3_right_answer').innerHTML='Correct';
  } else {
    document.getElementById('beta3_wrong_answer').innerHTML='This in incorrect, try again';
  }
}

function work()
{

  document.getElementById('work_right_answer').innerHTML='';
  document.getElementById('work_wrong_answer').innerHTML='';
  var work=document.getElementById('work').value;

  if(work == -68519.6)
  {
    document.getElementById('work_right_answer').innerHTML='Correct';
  } else {
    document.getElementById('work_wrong_answer').innerHTML='This in incorrect, try again';
  }
}

function turbo()
{

  document.getElementById('turbo_right_answer').innerHTML='';
  document.getElementById('turbo_wrong_answer').innerHTML='';
  var result=document.getElementById('turbo').value;


  if(result == 72)
  {
    document.getElementById('turbo_right_answer').innerHTML='Correct';
  } else {
    document.getElementById('turbo_wrong_answer').innerHTML='This in incorrect, try again';
  }
}
