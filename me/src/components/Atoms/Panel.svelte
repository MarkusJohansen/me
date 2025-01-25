<script>
	import clsx from 'clsx';
	export let className = '';
	export let colorChanger = false;
	export let id = '';
	export let noPadding = false;
</script>

<div
	{id}
	class={clsx(
		'rounded-md',
		noPadding ? 'p-0' : 'p-6',
		colorChanger ? 'colorChanger' : '',
		className,
	)}
>
	<slot></slot>
</div>
