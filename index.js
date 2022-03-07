const box = document.getElementById('box');
const circle = document.getElementById('circle');
const triangle = document.getElementById('triangle');

box.addEventListener('mouseover', function handleMouseOver() {
  box.style.color = 'black';
});

box.addEventListener('mouseout', function handleMouseOut() {
  box.style.color = 'white';
});

circle.addEventListener('mouseover', function handleMouseOver() {
    circle.style.color = 'black';
  });

circle.addEventListener('mouseout', function handleMouseOut() {
    circle.style.color = 'white';
  });
  
triangle.addEventListener('mouseover', function handleMouseOver() {
    circle.style.color = 'black';
});

triangle.addEventListener('mouseout', function handleMouseOut() {
    circle.style.color = 'white';
  });

document.getElementById('.text-muted').style.color = 'black';

