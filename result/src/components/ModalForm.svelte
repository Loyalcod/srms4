<script>

let  email;
let regNo;

</script>

<h4>Check Result</h4><br>
<form action="">
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

<p>{email}</p>
<p>{regNo}</p>