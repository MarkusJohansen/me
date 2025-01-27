<script>
	import Panel from "../Atoms/Panel.svelte";
    import Profile from "../../img/profile.png";
    import clsx from "clsx";
    </script>

<div 
    id="profile"
    class={clsx(
        "opacity-0",
        "col-span-3 xl:col-span-2",
        "row-span-3 xl:row-span-4",
    )}
>
    <Panel className="bg-lime h-full overflow-hidden" noPadding colorChanger>
        <img src={Profile} alt="Markus Johansen" class="object-cover w-full h-full pt-6"/>
    </Panel>
</div>