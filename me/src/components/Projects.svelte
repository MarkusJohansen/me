<script>

	import Panel from "./Panel.svelte";

</script>

<Panel id="Projects" className="grid col-span-3 row-span-2 grid-rows-3 bg-gray-800 p-6">
    <div>
        <h2 id="projectsText" class="text-4xl font-bold">Featured Projects</h2>
        <p id="projectsText">This is some of the latest projects i have worked on</p>
    </div>
    <div class="grid grid-cols-3 gap-4 row-span-3">
        <Panel className="bg-lime" colorChanger></Panel>
        <Panel className="bg-lime" colorChanger></Panel>
        <Panel className="bg-lime" colorChanger></Panel>
    </div>
</Panel>