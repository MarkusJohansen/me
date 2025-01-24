<script>

	import Field from "./Field.svelte";
	import SocialButtons from "./SocialButtons.svelte";

</script>

<div id="VerticalStack" class="row-span-2 grid grid-rows-4 gap-4">
    <Field id="f1" title="Name:" value="Markus Johansen" />
    <Field id="f2" title="Employer:" value="Consigli" />
    <Field id="f3" title="Position:" value="Software Dev" />
    <SocialButtons />
</div>