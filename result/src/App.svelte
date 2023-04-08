<script>
	import page from "page";
	import Home from "./pages/Home.svelte";
	import Result from "./pages/Result.svelte";

	let current;
	let urlparam;

	page ('/', ()=> (current = Home))

	page('/result/:email/:regNo', (paramgeter, next)=>{
		urlparam = paramgeter.params
		next()
	},
	()=>(current = Result)
	)
	page.start()
</script>

<main>
	<svelte:component this={current} urlparam = {urlparam}/>
</main>

