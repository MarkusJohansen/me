<script>
	import { onMount } from "svelte";
    import gsap from "gsap";
    import Panel from "./Panel.svelte";

    export let heading = "";
    export let value = "";
    export let id = "";

    onMount(() => {
        console.log("GSAP Animation Triggered");
        gsap.fromTo("#measures", {
            opacity: 0,
        },
        {
            duration: 1,
            opacity: 1,
            ease: "power4.in",
            delay: 2,
        });
    });
</script>

<Panel id={id} className="bg-lime text-black text-center" colorChanger>
    <h3 class="text-xl font-bold">{heading}</h3>
    <p id="measures" class="font-extrabold text-6xl">{value}</p>
</Panel>