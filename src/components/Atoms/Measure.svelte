<script>
    import Panel from "./Panel.svelte";

    export let heading = "";
    export let value = "";
    export let id = "";
</script>

<Panel id={id} className="bg-lime text-black flex flex-col items-center justify-center text-center opacity-0" colorChanger>
    <h3 class="xl:text-xl font-bold">{heading}</h3>
    <p class="font-extrabold text-4xl lg:text-6xl">{value}</p>
</Panel>