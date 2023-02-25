'use strict';
let images = ['images/karo_kahkejian.jpg', 'images/monte_melkonyan.jpg', 'images/petros_ghevondyan.jpg', 'images/tatul_krpeyan.jpg', 'images/vardan_stepanyan.jpg', 'images/vazgen_sargsyan.jpg'];
let block = document.getElementById('block');

for (let i = 0; i < images.length; i++) {
  let div = document.createElement('div');
  let img = document.createElement('img');
  img.src = images[i];
  showImage(img);
  div.append(img);
  block.append(div)
}

document.querySelector('#zoom > span.close').addEventListener('click', function() {
  document.getElementById('zoom').style.display = 'none';
})

function showImage (img) {
  img.addEventListener('click', function () {
    document.getElementById('zoom').style.display = 'block';
    document.querySelector('#zoom > img').src = img.src;
  })
}
