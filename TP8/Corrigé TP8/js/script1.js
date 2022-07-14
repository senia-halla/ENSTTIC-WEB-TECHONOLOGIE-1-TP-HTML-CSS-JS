function createTable(n){
  var multTable = "<table>"+"\n"+"</tbody>";
  for(let i=1;i<=10;i++){
    multTable += '<tr><td>'+n+' x '+i+'</td><td> = '+n*i+'</td></tr>'+"\n";
  }
  multTable += '</tbody>'+"\n"+'</table>';
  return multTable;
}

document.write("Bienvenue sur ma page web :)");
document.write(createTable(3));
