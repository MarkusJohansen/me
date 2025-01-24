<script>
	import Panel from "./Panel.svelte";
    export let alt = "";
    export let icon = "";
    export let href = "";
    export let id = "";
</script>

<a id={id} href={href} target="_blank" rel="noopener noreferrer">
    <Panel className="bg-lime flex items-center justify-center hover:scale-110 active:scale-90 duration-150" colorChanger>
        <img src={icon} alt={alt}/>
    </Panel>
</a>
