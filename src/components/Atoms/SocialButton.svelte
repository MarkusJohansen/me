<script>
	import Button from "./Button.svelte";
    export let alt = "";
    export let icon = "";
    export let href = "";
    export let id = "";
</script>

<Button id={id} link href={href} className="bg-lime opacity-0 ">
    <img src={icon} alt={alt}/>
</Button>