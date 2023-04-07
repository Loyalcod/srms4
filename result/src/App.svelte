<script>
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import Modal from "./components/Modal.svelte";
	import ModalForm from "./components/ModalForm.svelte";

	
	let showModal = false;

	let src = "./images/result2.jpeg"

	const toggleModal = ()=>{
		showModal = !showModal
	}
</script>

<Header on:click={toggleModal}/>

<Modal {showModal} on:click = {toggleModal} >
	<ModalForm/>
</Modal>

<img src={src} alt="Result Checker image"/>

<Footer/>

<style>
	img{
		display: block;
		width: 100%;
		height: 75vh;
		object-fit: cover;
	}
</style>