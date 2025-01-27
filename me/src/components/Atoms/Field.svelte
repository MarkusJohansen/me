<script>
    import Panel from "./Panel.svelte";
    export let title = "";
    export let value = "";
    export let id = "";
</script>

<Panel id={id} className="bg-dark-100 opacity-0 flex flex-col lg:justify-center">
    <h3 class="text-slate-500 text-sm font-bold fontColorChanger">{title}</h3>
    <p>{value}</p>
</Panel>