document.addEventListener('DOMContentLoaded',() => {
	const controller = new ScrollMagic.Controller();

	const timeline1 = new TimelineMax();
	timeline1
	.to('.top .image-container', 8, {
		height:0
	});

	const scene1 = new ScrollMagic.Scene({
		triggerElement: '.first-section',
		triggerHook: 0,
		duration: '500',
		offset: '50px'
	})
	// .addIndicators()
	.setTween(timeline1)
	.setPin('.first-section')
	.addTo(controller);

	// let timeline2 = new TimelineMax();
	// timeline2
	// .to('.top .image-container', 4, {
	// 		height: 0
	// });
	//
	// let scene2 = new ScrollMagic.Scene({
	// 		triggerElement: '.second-section',
	// 		duration: '100%',
	// 		triggerHook: 0,
	// 		offset: '100'
	// })
	// .setTween(timeline2)
	// .setPin('.second-section')
	// .addTo(controller);

})
