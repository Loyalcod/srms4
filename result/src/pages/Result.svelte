<script>
  import { onMount } from "svelte/internal";
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import Modal from "../components/Modal.svelte";
  import ModalForm from "../components/ModalForm.svelte";
  import SingleResult from "../components/SingleResult.svelte";

  export let urlparam;
  let email = urlparam.email;
  let regNo = urlparam.regNo;
  let result = [];

  let score = 0;
  let totalScore = 0;
  let percentage = 0;

  const prepareResult = (e)=>{
    let email = e.detail.email
    let regNo = e.detail.regNo

    if((email === undefined || email.length === 0) || (regNo === undefined || regNo.length === 0)){
        alert("please feel in the missing spaces")
    }else{
        let newUrl = new URL(window.location.href + `result/${email}/${regNo}`)
        let origin = newUrl.origin
        window.location.assign(origin + `/result/${email}/${regNo}`)
    }
  }


  onMount(async () => {
    try {
      const response = await fetch(
        `http://localhost:9000/result/${email}/${regNo}`
      );
      const data = await response.json();
      result = data;
      console.log(result);
      if(result[0].resultId.length !== 0){

        result[0].resultId.forEach(singleResult => {
            totalScore += 100;
            score += singleResult.mark;          
        })
        percentage = (score/totalScore * 100).toFixed(2)
      }
    } catch (error) {
      console.log(error);
    }
  });

  let showModal = false;
  const toggleModal = () => {
    showModal = !showModal;
  };
</script>

<Header on:click={toggleModal} />
<Modal {showModal} on:click={toggleModal}>
  <ModalForm on:resultInput={prepareResult}/>
</Modal>

<div class="container result-area">
  <h4 class="my-2 py-2 text-center">Student Result Details</h4>
  <hr />

  {#if result.length !== 0}
  {#if result !== "Result not Found"}
    <p class="my-1"><strong>Student Name: </strong> {result[0]?.fullname}</p>
    <p class="my-1"><strong>Student Reg. No.: </strong> {result[0]?.regNo}</p>
    <p class="my-1">
      <strong>Student class: </strong>
      {result[0]?.studentClassId.className}
    </p>

    {#if result[0]?.resultId.length !== 0}
    <table class="table table-bordered table-striped my-4 text-center">
      <thead>
        <tr>
          <th>S/N</th>
          <th>Subject</th>
          <th>Mark</th>
        </tr>
      </thead> 

      <tbody>
        {#each result[0]?.resultId as singleResult, i}
        <SingleResult {singleResult} {i}/>
        {/each}

        <tr>
          <td colspan="2"><strong>Total Score:</strong></td>
          <td><strong>{score}</strong> out of <strong>{totalScore}</strong></td>
        </tr>
        <tr>
          <td colspan="2"><strong>Percentage:</strong></td>
          <td><strong>{percentage}</strong>%</td>
        </tr>

        <tr colspan="3" class=""
          ><a
            class="text-decoration-none link-center px-4"
            href="#"
            on:click={() => window.print()}>Print</a
          ></tr
        >
      </tbody>
    </table>
    {:else}
        <h2 class="h3 text-center lead text-muted">student have no recomended result for this level</h2>
        {/if}
  {:else}
    <h4 class="text-center lead me-lg-4 my-5">No Result was found here</h4>
  {/if}
  {:else}
  <h1 class="h3">result is empty</h1>
  {/if}

  <h1 class="h6">
    <a href="/" class=" text-decoration-none link-dark">Back Home</a>
  </h1>
</div>

<Footer />

<style>
  .container {
    width: 100%;
    height: 90vh;
    background: white;
    margin: 5% auto;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
  }
  p {
    padding: 0px;
    margin: 0px;
  }
</style>
