/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

// This can be used to set the Particles Effects. Check README for more details!
function getRandomColor()
{
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++)
  {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;

}
document.addEventListener('DOMContentLoaded',
  function ()
  {
    particleground(document.getElementById('particles'),
    {
      dotColor: getRandomColor(),
      lineColor: getRandomColor(),
    });
    var intro = document.getElementById('intro');
    intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
   }, false)
