<script>
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";

</script>

<Header/>
    <div class="container result-area">
        <h4>Student Result Details</h4>
        <hr>

        <p><strong>Student Name: </strong> victor</p>
        <p><strong>Student Reg. No.: </strong> 767887</p>
        <p><strong>Student class: </strong> Grade 6</p>

        <table class="table table-bordered table-strip">
            <thead>
                <tr>
                    <th>S/N</th>
                    <th>Subject</th>
                    <th>Mark</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Mathematics</td>
                    <td>89</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>English Language</td>
                    <td>97</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Pratical Chemistry</td>
                    <td>92</td>
                </tr>

                <tr>
                    <td colspan='2'><strong>Total Score:</strong></td>
                    <td><strong>400</strong> out of <strong>700</strong></td>
                </tr>
                <tr>
                    <td colspan='2'><strong>Percentage:</strong></td>
                    <td><strong>60%</strong></td>
                </tr>
            </tbody>
        </table>
    </div>
<Footer/>