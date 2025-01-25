<script>
	import { onMount } from "svelte";
    import gsap from "gsap";
    import Panel from "./Panel.svelte";

    export let heading = "";
    export let value = "";
    export let id = "";
</script>

<Panel id={id} className="bg-lime text-black text-center opacity-0" colorChanger>
    <h3 class="text-xl font-bold">{heading}</h3>
    <p class="font-extrabold text-6xl">{value}</p>
</Panel>