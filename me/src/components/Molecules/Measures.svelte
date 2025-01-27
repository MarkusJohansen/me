<script>
	import clsx from "clsx";


	import Measure from "../Atoms/Measure.svelte";

</script>
<div id="Measures" class={clsx(
    "gap-4 grid grid-cols-3",
    "col-span-6 xl:col-span-7",
    "row-span-1 xl:row-span-2",
)}>
    <Measure id="m1" heading="Public Projects" value="14"/>
    <Measure id="m2" heading="Commits (2025)" value="2+" />
    <Measure id="m3" heading="Stars" value="42" />
</div>