document.addEventListener('DOMContentLoaded', () => {
  let controller = new ScrollMagic.Controller();

  let timeline1 = new TimelineMax();
  timeline1
  .to('.section_1_03', 4, {
    y : 150,
    ease: Power1.easeInOut
  })

  .to('.section_1_02', 4, {
    y : -130,
    ease: Power1.easeInOut
  }, '-=4')

  .to('.section_1_01', 5, {
    x : -200,
    ease: Power1.easeInOut
  })

  .to('.section_1_02', 5, {
    x : -200,
    ease: Power1.easeInOut
  }, '-=5')

  .to('.section_1_03', 5, {
    x : -200,
    ease: Power1.easeInOut
  }, '-=5')

  .from('.fade-in', 6, {
    autoAlpha: 0
  })


  let scene1 = new ScrollMagic.Scene({
    triggerElement: '.first-section',
    duration: '100%',
    triggerHook: 0,
    // offset: '40'
  })
  .addIndicators()
	.setTween(timeline1)
  .setPin('.first-section')
	.addTo(controller);


})
