<script>
    export let singleResult;
    export let i;
</script>

<tr>
  <td>{i +1}</td>
  <td>{singleResult.subjectId.subjectName} ({singleResult.subjectId.subjectCode})</td>
  <td >{singleResult.mark}</td>
</tr>
