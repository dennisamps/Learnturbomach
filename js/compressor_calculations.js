function checked1()
{
  document.getElementById('chb1_right_answer').innerHTML='';
  document.getElementById('chb1_wrong_answer').innerHTML='';

  var chb1 = document.getElementById('chb1');
  var chb2 = document.getElementById('chb2');
  var chb3 = document.getElementById('chb3');
  var chb4 = document.getElementById('chb4');
  var chb5 = document.getElementById('chb5');


  if(chb1.checked && chb2.checked && chb5.checked)
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


  if(chb10.checked && chb6.checked)
  {
    document.getElementById('chb2_right_answer').innerHTML='Correct';
  } else {
    document.getElementById('chb2_wrong_answer').innerHTML='This in incorrect, try again';
  }

}

function pic()
{
  document.getElementById('pic_right_answer').innerHTML='';
  document.getElementById('pic_wrong_answer').innerHTML='';

  var pic1 = document.getElementById('myCheckbox1');
  var pic2 = document.getElementById('myCheckbox2');



  if(pic1.checked &! pic2.checked)
  {
    document.getElementById('pic_right_answer').innerHTML='Correct';
  } else {
    document.getElementById('pic_wrong_answer').innerHTML='This in incorrect, try again';
  }

}

function work()
{

  document.getElementById('work_right_answer').innerHTML='';
  document.getElementById('work_wrong_answer').innerHTML='';
  var work=document.getElementById('work').value;

  if(work == -40.4)
  {
    document.getElementById('work_right_answer').innerHTML='Correct';
  } else {
    document.getElementById('work_wrong_answer').innerHTML='This in incorrect, try again';
  }
}

function Ctheta()
{

  document.getElementById('Ctheta_right_answer').innerHTML='';
  document.getElementById('Ctheta_wrong_answer').innerHTML='';
  var work=document.getElementById('Ctheta').value;

  if(work == 175.7)
  {
    document.getElementById('Ctheta_right_answer').innerHTML='Correct';
  } else {
    document.getElementById('Ctheta_wrong_answer').innerHTML='This in incorrect, try again';
  }
}

function Wtheta()
{

  document.getElementById('Wtheta_right_answer').innerHTML='';
  document.getElementById('Wtheta_wrong_answer').innerHTML='';
  var work=document.getElementById('Wtheta').value;

  if(work == -54.3)
  {
    document.getElementById('Wtheta_right_answer').innerHTML='Correct';
  } else {
    document.getElementById('Wtheta_wrong_answer').innerHTML='This in incorrect, try again';
  }
}

function beta()
{

  document.getElementById('beta_right_answer').innerHTML='';
  document.getElementById('beta_wrong_answer').innerHTML='';
  var work=document.getElementById('beta').value;

  if(work == -28.5)
  {
    document.getElementById('beta_right_answer').innerHTML='Correct';
  } else {
    document.getElementById('beta_wrong_answer').innerHTML='This in incorrect, try again';
  }
}

function comp1()
{

  document.getElementById('comp1_right_answer').innerHTML='';
  document.getElementById('comp1_wrong_answer').innerHTML='';
  var work=document.getElementById('comp1').value;

  if(work == 0)
  {
    document.getElementById('comp1_right_answer').innerHTML='Correct';
  } else {
    document.getElementById('comp1_wrong_answer').innerHTML='This in incorrect, try again';
  }
}

function comp2()
{

  document.getElementById('comp2_right_answer').innerHTML='';
  document.getElementById('comp2_wrong_answer').innerHTML='';
  var work=document.getElementById('comp2').value;

  if(work == 0)
  {
    document.getElementById('comp2_right_answer').innerHTML='Correct';
  } else {
    document.getElementById('comp2_wrong_answer').innerHTML='This in incorrect, try again';
  }
}


function comp3()
{

  document.getElementById('comp3_right_answer').innerHTML='';
  document.getElementById('comp3_wrong_answer').innerHTML='';
  var work=document.getElementById('comp3').value;

  if(work == 0)
  {
    document.getElementById('comp3_right_answer').innerHTML='Correct';
  } else {
    document.getElementById('comp3_wrong_answer').innerHTML='This in incorrect, try again';
  }
}
