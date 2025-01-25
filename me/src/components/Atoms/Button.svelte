<script>
	import clsx from 'clsx';
	import exp from 'constants';
	// Accept all props as $$restProps which will be forwarded to the <button>
	export let onClick = () => {};
	export let link = false;
	export let href = '';
  export let id = "";
  export let className = "";
</script>

{#if link}
	<a
    id={id}
    href={href}
    target="_blank"
    class={clsx(
			'bg-lime colorChanger rounded-md text-black',
			'h-fit w-fit p-2 font-semibold duration-100',
			'hover:scale-105 hover:brightness-125',
			'active:scale-100 active:brightness-90',
      className
		)}
	>
		<slot></slot>
	</a>
{:else}
	<button
    id={id}
		class={clsx(
			'bg-lime colorChanger rounded-md text-black',
			'h-fit w-fit p-2 font-semibold duration-100',
			'hover:scale-105 hover:brightness-125',
			'active:scale-100 active:brightness-90',
      className
		)}
		on:click={onClick}
	>
		<slot></slot>
	</button>
{/if}
