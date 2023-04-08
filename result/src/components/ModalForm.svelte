<script>
    import {createEventDispatcher} from 'svelte'
    let  email;
    let regNo;

    let dispatcher = createEventDispatcher();
    const requestResult =()=>{
        let form_input = {email, regNo}
        dispatcher('resultInput',form_input)
    }
</script>

<h4>Check Result</h4><br>
<form on:submit|preventDefault={requestResult}>
    <div class="form-group">
        <label for="">Email Address</label>
        <input type="email" class="form-control" bind:value={email} placeholder="Enter your emaill address">
    </div><br>

    <div class="form-group">
        <label for="">Registration No.</label>
        <input type="number" placeholder="Enter your Reg. No. " bind:value={regNo} class="form-control">
    </div><br>

    <button type="submit" class="btn btn-primary">submit</button>
</form>
