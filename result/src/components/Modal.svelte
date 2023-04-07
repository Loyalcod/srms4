<script>
    import {fade} from 'svelte/transition';
    export let showModal;
</script>

{#if showModal}
<div on:click|self transition:fade class="back-drop">
    <div class="mainModal">
        <slot></slot>
    </div>
</div>
{/if}

<style>
    .back-drop{
        width: 100%;
        height: 100%;
        position: absolute;
        background: rgba(0,0,0,0.8);
    }
    .mainModal{
        max-width: 400px;
        background: white;
        padding: 10px;
        margin: 10% auto;
        border-radius: 10px;
    }
</style>