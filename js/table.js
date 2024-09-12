var myArray = [
    {'name':'Barath', 'age':'30', 'birthdate':'01/29/2003'},
    {'name':'Parames', 'age':'32', 'birthdate':'08/1/1999'},
    {'name':'Guru', 'age':'29', 'birthdate':'04/14/2001'},
    {'name':'Subu', 'age':'25', 'birthdate':'12/29/2002'},
    {'name':'Jeeva', 'age':'27', 'birthdate':'03/12/1998'},
    {'name':'Sanjay', 'age':'24', 'birthdate':'07/54/2000'},
]
// let emptyHTMLContent="";
// for(let row=0;row<myArray.length;row++)
// {
//     emptyHTMLContent=emptyHTMLContent+`<tr>

//                         <td>${myArray[row].name}</td>
//                         <td>${myArray[row].age}</td>
//                         <td>${myArray[row].birthdate}</td>
    
//                          </tr>`;
// }

// let element=document.getElementById("myTable")
// element.innerHTML=emptyHTMLContent;
function renderTable(array) {
    let emptyHTMLContent = "";
    for (let row = 0; row < array.length; row++) {
        emptyHTMLContent += `<tr>
            <td>${array[row].name}</td>
            <td>${array[row].age}</td>
            <td>${array[row].birthdate}</td>
        </tr>`;
    }
    let element = document.getElementById("myTable");
    element.innerHTML = emptyHTMLContent;
}

function filterTable() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let filteredArray = myArray.filter(item => item.name.toLowerCase().includes(input));
    renderTable(filteredArray);
}

renderTable(myArray);

document.getElementById('searchInput').addEventListener('input', filterTable);