<script>
	import Field from './Field.svelte';
	import clsx from 'clsx';
</script>

<div
	id="VerticalStack"
	class={clsx(
		'grid gap-4 grid-cols-1 grid-rows-3',
        'col-span-3',
		'row-span-3',
	)}
>
	<Field id="f1" title="Employer:" value="Consigli AS" />
	<Field id="f2" title="Education:" value="Bsc Informatics from NTNU" />
	<Field id="f3" title="Speciality:" value="Prompt driven document analysis" />
</div>
