<script>
	import Panel from '../Atoms/Panel.svelte';
	import Project from '../Atoms/Project.svelte';
	import DagensOrd from '../../img/dagens-ord.png';
	import Vr4vet from '../../img/vr4vet.png';
	import ChimeraCSS from '../../img/chimeracss.png';
	import Button from '../Atoms/Button.svelte';
	import clsx from 'clsx';
</script>

<Panel 
	id="Projects"
	className={clsx(
		"grid grid-rows-4 gap-4",
		"grid-rows-4 bg-dark-100 opacity-0",
		"col-span-12 lg:col-span-7 xl:row-span-4"
	)}
	>
	<div class="flex justify-between">
		<div>
			<h2 id="projectsText" class="text-3xl font-bold">Featured Projects</h2>
			<p id="projectsText">This is some of the latest projects i have worked on</p>
		</div>
		<Button>See More</Button>
	</div>
	<div class="row-span-3 grid grid-cols-3 gap-4">
		<Project
			text="Dagensord.no"
			img={DagensOrd}
			desc="A webpage that allows you to explore funny words and sayings in the norwegian language"
			visit="https://www.dagensord.no/"
			github="https://github.com/MarkusJohansen/dagens-ord"
		/>
		<Project
			text="VR4VET"
			img={Vr4vet}
			desc="A VR experience, helping young unemployed people to get back into the workforce - by simulating a job environment"
			github="https://github.com/vr4vet/Blue-Sector"
		/>
		<Project
			text="ChimeraCSS"
			img={ChimeraCSS}
			desc="A classless CSS framework, that allows you to create beautiful websites without writing a single line of CSS"
			visit="https://chimera-demo.vercel.app/"
			github="https://github.com/MarkusJohansen/ChimeraCSS"
		/>
	</div>
</Panel>
