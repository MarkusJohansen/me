<script>
	import Panel from "./Panel.svelte";
    export let text = "This is a project";
    export let img = "";
    export let desc = "This is a project desc";
</script>


<div>
    <Panel className="h-full overflow-hidden relative" noPadding>
        <Panel className="opacity-0 duration-200 hover:opacity-80 hover:bg-black h-full w-full absolute top-0">
            <h2 class="text-xl">{text}</h2>
            <p class="text-sm">{desc}</p>
        </Panel>
        <img src={img} alt={text} class="object-cover w-full h-full "/>
    </Panel>
</div>
