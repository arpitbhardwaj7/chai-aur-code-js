let containerVar = document.getElementById('container');

window.addEventListener('keydown', function (e) {
    containerVar.innerHTML = `<table border = "1">
    <tr>
        <th> Key </th>
        <th> Key Code </th>
        <th> Code </th>
    </tr>
    <tr>
        <td> ${e.key == " " ? "Space" : e.key} </td>
        <td> ${e.keyCode} </td>
        <td> ${e.key} </td>
    </tr>
</table>`;
});