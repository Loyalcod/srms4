<script>
	import Outer from "./Outer.svelte";

	let name = "how are you doing you are welcome";
	let count = 0;
	const handleCount = ()=>{
		count += 1
	}
	let loggedIn = false;
	const toggle = ()=>{
		loggedIn = !loggedIn
	}
	
</script>


<Outer word = {name} />

<button on:click= {handleCount} >count {count} </button>

{#if loggedIn}
<button on:click={toggle}>login</button>
{:else}
<button on:click={toggle}>logout</button>
{/if}

