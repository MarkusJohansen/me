<script>
	import SocialButton from "../Atoms/SocialButton.svelte";
    import github from "../../img/icons8-github.svg";
    import linkedin from "../../img/icons8-linkedin.svg";
    import instagram from "../../img/icons8-instagram.svg";
    import snapchat from "../../img/icons8-snapchat.svg";
	import clsx from "clsx";
</script>

<div 
    class={clsx(
        "flex items-center justify-evenly gap-4 flex-row",
        "row-span-1 col-span-1 lg:col-span-6 xl:col-span-3 "
    )}
>
<SocialButton id="sb1" alt="Github" icon={github} href="https://github.com/MarkusJohansen"/>
<SocialButton id="sb2" alt="Linkedin" icon={linkedin} href="https://www.linkedin.com/in/markus-a-r-johansen-64625b208/"/>
<SocialButton id="sb2" alt="Instagram" icon={instagram} href="https://www.instagram.com/markusaleksanderr/"/>
<SocialButton id="sb1" alt="Snapchat" icon={snapchat} href="https://github.com/MarkusJohansen"/>
</div>