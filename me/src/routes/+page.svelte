<script>
	import gsap from 'gsap';
	import Panel from '../components/Atoms/Panel.svelte';
	import { onMount } from 'svelte';
	import About from '../components/Molecules/About.svelte';
	import Projects from '../components/Molecules/Projects.svelte';
	import Measures from '../components/Molecules/Measures.svelte';
	import VerticalStack from '../components/Atoms/VerticalStack.svelte';
	import Profile from '../components/Molecules/Profile.svelte';
	import clsx from 'clsx';
	import SocialButtons from '../components/Molecules/SocialButtons.svelte';
	import Namebadge from '../components/Molecules/Namebadge.svelte';

	onMount(() => {
		//Moving containers
		let containerTimeline = gsap.timeline({
			defaults: {
				duration: 0.6,
				delay: 0.5,
				ease: 'power.in',
				y: 0,
				x: 0
			}
		});

		containerTimeline
			.fromTo(
				'#profile',
				{
					y: -100
				},
				{
					opacity: 1
				}
			)
			.fromTo(
				'#intro',
				{
					x: -100
				},
				{
					opacity: 1
				}
			)
			.fromTo(
				'#m1',
				{
					duration: 0.1,
					y: 100
				},
				{
					opacity: 1,
					duration: 0.2
				}
			)
			.fromTo(
				'#m2',
				{
					y: 100
				},
				{
					delay: 0.1,
					opacity: 1,
					duration: 0.2
				}
			)
			.fromTo(
				'#m3',
				{
					y: 100
				},
				{
					delay: 0.1,
					duration: 0.2,
					opacity: 1
				}
			)
			.fromTo(
				'#f1',
				{
					x: 100
				},
				{
					duration: 0.2,
					opacity: 1
				}
			)
			.fromTo(
				'#f2',
				{
					x: 100
				},
				{
					duration: 0.2,
					delay: 0.1,
					opacity: 1
				}
			)
			.fromTo(
				'#f3',
				{
					x: 100
				},
				{
					duration: 0.2,
					delay: 0.1,
					opacity: 1
				}
			)
			.to('#sb1', { opacity: 1, display: 'block', delay: 0.1, duration: 0.2 })
			.to('#sb2', { opacity: 1, display: 'block', delay: 0.1, duration: 0.2 })
			.to('#sb3', { opacity: 1, display: 'block', delay: 0.1, duration: 0.2 })
			.fromTo(
				'#Projects',
				{
					y: 100 // start fromTo 100px above
				},
				{
					opacity: 1
				}
			)
			.fromTo(
				'#About',
				{
					x: 100
				},
				{
					opacity: 1
				}
			);
		containerTimeline.play();

		//Background Color Changer
		let colorChangerTimeline = gsap.timeline({
			repeat: -1,
			yoyo: true,
			yoyoEase: true,
			defaults: {
				duration: 7
			}
		});
		colorChangerTimeline
			.to('.colorChanger', {
				backgroundColor: '#a7c957' //Cactus
			})
			.to('.colorChanger', {
				backgroundColor: '#FFA800' //yellow
			})
			.to('.colorChanger', {
				backgroundColor: '#EC6A37' //tangerine
			})
			.to('.colorChanger', {
				backgroundColor: '#D2665A' //Terracotta
			})
			.to('.colorChanger', {
				backgroundColor: '#C5BAFF' //violet light
			})
			.to('.colorChanger', {
				backgroundColor: '#B1F0F7' //sky
			});
		colorChangerTimeline.play();

		//Font Color Changer
		let fontColorChangerTimeline = gsap.timeline({
			repeat: -1,
			yoyo: true,
			yoyoEase: true,
			defaults: {
				duration: 7
			}
		});

		fontColorChangerTimeline
			.to('.fontColorChanger', {
				color: '#a7c957' //Cactus
			})
			.to('.fontColorChanger', {
				color: '#FFA800' //yellow
			})
			.to('.fontColorChanger', {
				color: '#EC6A37' //tangerine
			})
			.to('.fontColorChanger', {
				color: '#D2665A' //Terracotta
			})
			.to('.fontColorChanger', {
				color: '#C5BAFF' //violet light
			})
			.to('.fontColorChanger', {
				color: '#B1F0F7' //sky
			});
		fontColorChangerTimeline.play();
	});
</script>

<div
	class={clsx(
		'bg-dark-base text-gray-100',
		'h-fit w-screen xl:h-screen',
		'gap-4 p-6',
		'grid grid-cols-12 xl:grid-rows-8'
	)}
>
	<Namebadge />
	<Profile />
	<VerticalStack />
	<Measures />
	<SocialButtons />
	<Projects />
	<About />
</div>
