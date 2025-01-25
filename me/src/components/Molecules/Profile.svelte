<script>
	import Panel from "../Atoms/Panel.svelte";
    import Profile from "../../img/profile.png";
    </script>

<div id="profile" class="row-span-2 opacity-0">
    <Panel className="bg-lime h-full overflow-hidden" noPadding colorChanger>
        <img src={Profile} alt="Markus Johansen" class="object-cover w-full h-full pt-6"/>
    </Panel>
</div>