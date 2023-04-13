<script>
	import Header from "../components/Header.svelte";
	import Footer from "../components/Footer.svelte";
	import Modal from "../components/Modal.svelte";
	import ModalForm from "../components/ModalForm.svelte";

	
	let showModal = false;

	let src = "./images/result2.jpeg"

	const toggleModal = ()=>{
		showModal = !showModal
	}

	const prepareResult =(e)=>{
		// console.log(e.detail)
		let email = e.detail.email
		let regNo = e.detail.regNo

		if((email === undefined || email == '') || (regNo === undefined || regNo == null)){
			alert("please fill in the missing field")
		}else{
			window.location.assign(window.location.href + `result/${email}/${regNo}`)
		}
	}
</script>

<Header on:click={toggleModal}/>

<Modal {showModal} on:click = {toggleModal} >
	<ModalForm on:resultInput={prepareResult}/>
</Modal>

<img src={src} alt="Result Checker"/>

<Footer/>

<style>
	img{
		display: block;
		width: 100%;
		height: 75vh;
		object-fit: cover;
	}
</style>