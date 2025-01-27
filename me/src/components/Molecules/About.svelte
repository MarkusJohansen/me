<script>
	import clsx from "clsx";
	import Button from "../Atoms/Button.svelte";


	import Panel from "../Atoms/Panel.svelte";

</script>

<Panel 
    id="About"
    className={clsx(
        "bg-dark-100 grid grid-rows-4 gap-4 p-4 opacity-0",
        "col-span-12 lg:col-span-5",
        "xl:row-span-4"
    )}
>
    <div class="flex justify-between">
        <h2 id="aboutHeading" class="text-3xl font-bold">Who am I?</h2>
        <Button>Download CV</Button>
    </div>
    <div class="row-span-3 text-sm">
        <p>
            Im Markus. I am currently pursuing a Masters degree in Informatics at NTNU Trondheim. In my free time I enjoy fly-fishing, Alpine skiing and playing the guitar and bass. 
            I am a huge music nerd so i also collect vinyl records and love going to concerts.
        </p>
        <br>
        <p>
            I am currently working part-time as a Software Developer/Prompt engineer at Consigli, a scale-up company that specializes in AI driven analysis and optimization in the construction industry.
            At Consigli I help develop the company's core product, a web-based platform that helps construction companies optimize
            their projects. I also build new services, heavily built on prompt engineering. 
        </p>
    </div>
</Panel>