<script>
    // Accept all props as $$restProps which will be forwarded to the <button>
    export let loading = false;
    export let text = "Button";
  </script>
  
  <button
    {...$$restProps}        
    disabled={loading || $$restProps.disabled}  
    class="colorChanger p-3 h-5"
  >
    {text}
  </button>
  