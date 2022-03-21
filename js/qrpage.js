let pictureset = document.querySelectorAll(".slideshow-pictureset");

let i = 0;
        
document.querySelector('.forward').addEventListener('click', ()=> {

    pictureset[i].classList.add('hidden')
    i++

    if (i >= pictureset.length) {
      i = 0;
    }

    pictureset[i].classList.remove('hidden')

});


document.querySelector('.back').addEventListener('click', ()=>{	


  pictureset[i].classList.add('hidden')

  if (i === 0) {
    i = pictureset.length -1
  }
  else {
    i--
  }

  pictureset[i].classList.remove('hidden')

  
});

