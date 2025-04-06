<script>
	import Button from "./Button.svelte";
	import Panel from "./Panel.svelte";
    export let text = "This is a project";
    export let img = "";
    export let desc = "This is a project description";
    export let visit = "";
    export let github = "";
</script>


<div>
    <Panel className="h-full overflow-hidden relative" noPadding>
        <Panel className="opacity-0 duration-200 hover:opacity-90 hover:bg-black h-full w-full absolute top-0 flex flex-col justify-between">
            <div>
                <h2 class="text-xl fontColorChanger">{text}</h2>
                <p class="text-sm">{desc}</p>
            </div>
            <div>
                {#if visit}
                    <Button link href={visit}>Visit</Button>
                {/if}
                <Button link href={github}>Github</Button>
            </div>
        </Panel>
        <img src={img} alt={text} class="object-cover w-full h-full "/>
    </Panel>
</div>
