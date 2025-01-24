<script>
    import Panel from "./Panel.svelte";

    export let title = "";
    export let value = "";
    export let id = "";
</script>

<Panel id={id} className="bg-slate-800">
    <div class="flex justify-between items-center">
        <p class="text-slate-500 text-xs font-medium">{title}</p>
        <p class="text-md">{value}</p>
    </div>
</Panel>