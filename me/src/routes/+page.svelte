<script>
	import gsap from 'gsap';
	import Panel from '../components/Panel.svelte';
	import { onMount } from 'svelte';
	import About from '../components/About.svelte';
	import Projects from '../components/Projects.svelte';
	import Measures from '../components/Measures.svelte';
	import VerticalStack from '../components/VerticalStack.svelte';
	import Profile from '../components/Profile.svelte';

	onMount(() => {
		//Moving containers
		let containerTimeline = gsap.timeline({
			defaults: {
				duration: 0.7,
				delay: 1,
				ease: 'power.in',
				opacity: 0 // start from fully transparent
			}
		});

		containerTimeline
			.from('#profile', {
				y: -100 // start from 100px above
			})
			.from('#Intro', {
				x: -100 // start from 100px above
			})
			.from('#m1', {
				duration: 0.25,
				y: 100 // start from 100px above
			})
			.from('#m2', {
				delay: 0.1,
				duration: 0.25,
				y: 100 // start from 100px above
			})
			.from('#m3', {
				delay: 0.1,
				duration: 0.25,
				y: 100 // start from 100px above
			})
			.from('#Projects', {
				y: 100 // start from 100px above
			})
			.from('#f1', {
				duration: 0.25,
				x: 100 // start from 100px above
			})
			.from('#f2', {
				delay: 0.1,
				duration: 0.25,
				x: 100 // start from 100px above
			})
			.from('#f3', {
				delay: 0.1,
				duration: 0.25,
				x: 100 // start from 100px above
			})
			.from('#About', {
				x: 100 // start from 100px above
			})
			.from('#sb1', { delay: 0.1, duration: 0.25, display: 'none' })
			.from('#sb2', { delay: 0.1, duration: 0.25, display: 'none' })
			.from('#sb3', { delay: 0.1, duration: 0.25, display: 'none'})
		containerTimeline.play();

		//Background Color Changer
		let colorChangerTimeline = gsap.timeline({
			repeat: -1,
			yoyo: true,
			yoyoEase: true,
			defaults: {
				duration: 7,
			}
		});
		colorChangerTimeline
			.to('.colorChanger', {
				backgroundColor: '#EC6A37' //tangerine
			})
			.to('.colorChanger', {
				backgroundColor: '#FFA800' //yellow
			})
			.to('.colorChanger', {
				backgroundColor: '#D2665A', //Terracotta
			})
            .to('.colorChanger', {
				backgroundColor: '#C5BAFF', //violet light  
			})
            .to('.colorChanger', {
				backgroundColor: '#B1F0F7', //sky
			})
            .to('.colorChanger', {
				backgroundColor: '#a7c957', //Cactus
			});
		colorChangerTimeline.play();

		//Font Color Changer
		let fontColorChangerTimeline = gsap.timeline({
			repeat: -1,
			yoyo: true,
			yoyoEase: true,
			defaults: {
				duration: 7,
			}
		});

		fontColorChangerTimeline
        .to('#fontColorChanger', {
				color: '#EC6A37' //tangerine
			})
			.to('#fontColorChanger', {
				color: '#FFA800' //yellow
			})
			.to('#fontColorChanger', {
				color: '#D2665A', //Terracotta
			})
            .to('#fontColorChanger', {
				color: '#C5BAFF', //violet light  
			})
            .to('#fontColorChanger', {
				color: '#B1F0F7', //sky
			})
            .to('#fontColorChanger', {
				color: '#a7c957', //Cactus
			});
		fontColorChangerTimeline.play();
	});
</script>

<div class="grid h-screen w-screen grid-cols-5 grid-rows-4 gap-4 bg-gray-900 p-6 text-gray-100">
	<Panel id="Intro" className="bg-gray-800 col-span-3">
		<h1 id="mainHeading" class="text-6xl font-bold">
			Im <span id="fontColorChanger" class="text-lime"> Markus Aleksander</span> - Software Developer
		</h1>
	</Panel>
	<Profile />
	<VerticalStack />
	<Measures />
	<Projects />
	<About />
</div>
