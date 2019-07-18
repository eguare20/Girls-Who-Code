alert ("Welcome to my website");

function changecolor (color,id)
{
  var element = document.getElementById(id)
  element.style.color = color;
}

function showcontent(id)
{
  var element = document.getElementById(id);
  element.style.display = 'block';
}
