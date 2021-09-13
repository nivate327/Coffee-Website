let arrow=document.getElementById("arrow");


window.onscroll=function()
{
  scrollTopFun();
}

const scrollTopFun=()=>
{
  if(document.body.scrollTop>20 || document.documentElement.scrollTop>20)
  {
    arrow.style.display="block";
  }
  else{
    arrow.style.display="none";
  }
}

const up=()=>
{
  document.body.scrollTop=0;
  document.documentElement.scrollTop=0;
}