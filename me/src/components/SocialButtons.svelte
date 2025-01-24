<script>

	import Panel from "./Panel.svelte";
	import SocialButton from "./SocialButton.svelte";
    import github from "../img/icons8-github.svg";
    import linkedin from "../img/icons8-linkedin.svg";
    import instagram from "../img/icons8-instagram.svg";
</script>

<div class="grid grid-cols-3 gap-4">
    <SocialButton id="sb1" alt="Github" icon={github} href="https://github.com/MarkusJohansen"/>
    <SocialButton id="sb2" alt="Linkedin" icon={linkedin} href="https://www.linkedin.com/in/markus-a-r-johansen-64625b208/"/>
    <SocialButton id="sb3" alt="Instagram" icon={instagram} href="https://www.instagram.com/markusaleksanderr/"/>
</div>