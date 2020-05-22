document.addEventListener('DOMContentLoaded', () => {
  let controller = new ScrollMagic.Controller();

  let timeline1 = new TimelineMax();
  timeline1
  .to('.sectioned', 4, {
    x : '-150px',
    ease: Power1.easeInOut
  })

  .to('.unsectioned', 4, {
    x : '-150px',
    ease: Power1.easeInOut
  }, '-=4')

  .to('.unsectioned', 6, {
    autoAlpha: 0
  })

  .from('.blades', 6, {
    autoAlpha: 0
  })
  .from('.labels', 6, {
    autoAlpha: 0
  })

  // .to('.section_1_01', 5, {
  //   x : -200,
  //   ease: Power1.easeInOut
  // })
  //
  // .to('.section_1_02', 5, {
  //   x : -200,
  //   ease: Power1.easeInOut
  // }, '-=5')
  //
  // .to('.section_1_03', 5, {
  //   x : -200,
  //   ease: Power1.easeInOut
  // }, '-=5')
  //
  // .from('.fade-in', 6, {
  //   autoAlpha: 0
  // })


  let scene1 = new ScrollMagic.Scene({
    triggerElement: '.first-section',
    duration: '150%',
    triggerHook: 0,
    // offset: '40'
  })
  .addIndicators()
	.setTween(timeline1)
  .setPin('.first-section')
	.addTo(controller);


})
