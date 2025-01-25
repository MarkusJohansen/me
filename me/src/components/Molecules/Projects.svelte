<script>
	import Panel from "../Atoms/Panel.svelte";
	import Project from "../Atoms/Project.svelte";
    import DagensOrd from "../../img/dagens-ord.png";
    import Vr4vet from "../../img/vr4vet.png";
    import ChimeraCSS from "../../img/chimeracss.png";
	import Button from "../Atoms/Button.svelte";
</script>

<Panel id="Projects" className="grid col-span-3 row-span-2 grid-rows-4 bg-dark-100 p-6 opacity-0">
    <div class="flex justify-between items-center">
        <div>
            <h2 id="projectsText" class="text-3xl font-bold">Featured Projects</h2>
            <p id="projectsText">This is some of the latest projects i have worked on</p>
        </div>
        <Button text="See more" href="/projects" />
    </div>
    <div class="grid grid-cols-3 gap-4 row-span-3">
        <Project 
            text="Dagens ord" 
            img={DagensOrd} 
            desc="A webpage that allows you to explore funny words and sayings in the norwegian language"
        />
        <Project 
            text="VR4VET" 
            img={Vr4vet} 
            desc="A VR experience, helping young unemployed people to get back into the workforce - by simulating a job environment"
        />
        <Project 
            text="ChimeraCSS" 
            img={ChimeraCSS} 
            desc="A classless CSS framework, that allows you to create beautiful websites without writing a single line of CSS"
        />
    </div>
</Panel>