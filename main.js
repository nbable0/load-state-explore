/*Loader below here */
  anime({
    targets: ['.loader-div-1'],
    //translateX: [
      //{ value: 250, duration: 1000, delay: 500 },
      //{ value: 0, duration: 1000, delay: 500 }
    //],
    translateY: [
      { value: -20, duration: 500 },
      //{ value: 40, duration: 500, delay: 1000 },
      { value: 0, duration: 500, delay: 1000 }
    ],
    //scaleX: [
      //{ value: 1.5, duration: 100, delay: 500, easing: 'easeOutExpo' },
      //{ value: 1, duration: 900 },
      //{ value: 1.5, duration: 100, delay: 500, easing: 'easeOutExpo' },
      //{ value: 1, duration: 900 }
    //],
    scaleY: [
      { value: [1, 1.25], duration: 200 },
      //{ value: 2, duration: 50, delay: 1000, easing: 'easeOutExpo' },
      { value: 1, duration: 450 },
      //{ value: 1.25, duration: 50, delay: 1000, easing: 'easeOutExpo' },
      //{ value: 1, duration: 450 }
    ],
    //easing: 'easeOutElastic(1, .8)',
    loop: true,
    //backgroundColor: '#FFF',
    //delay: anime.stagger(100, {direction: 'reverse'})
    delay: anime.stagger(300, {easing: 'easeOutQuad'})
  });

  const colorsExamples = anime.timeline({
    endDelay: 200,
    easing: 'easeInOutQuad',
    direction: 'alternate',
    loop: true,
    delay: anime.stagger(200, {easing: 'easeOutQuad'})
  })
  .add({ targets: '.loader-div-1',  background: ['#0077DB'] }, 0)
      
  //#38A4FF