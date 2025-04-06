<script>
	import clsx from "clsx";
	import Panel from "../Atoms/Panel.svelte";
</script>
<Panel 
    id="intro"
    className={clsx(
        "bg-dark-100 opacity-0",
        "col-span-12 md:col-span-6 xl:col-span-7",
        "row-span-1 xl:row-span-2"
    )}
    >
	<h1 id="mainHeading" class="text-2xl lg:text-4xl xl:text-6xl font-bold">
		Im <span class="text-lime fontColorChanger"> Markus Aleksander</span> - Software Developer
	</h1>
</Panel>