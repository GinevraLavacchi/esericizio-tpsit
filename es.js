function aggiunta()
{
    //creo il <tr>
    var nuovotr=document.createElement("tr");

    //creao il <td> del nome
    var nuovotd1=document.createElement("td");
    //creo <input> da inserire nel <td>
    nuovoinput1= document.createElement("input");
    //creo l'atributo type da inserire a <input>
    var  nuovoatt1_1=document.createAttribute("type");
    //assegno all'attributo type il suo valore
    nuovoatt1_1.value= "text";
    //assegno type a <input>
    nuovoinput1.setAttributeNode(nuovoatt1_1);
    //creo l'attributo placeholder
    var nuovoatt1_2= document.createAttribute("placeholder");
    //assegno a placheolder il suo valore
    nuovoatt1_2.value="Nome";
    //assegno placeholder a <input>
    nuovoinput1.setAttributeNode(nuovoatt1_2);
    //aggiungo <input> al <td>
    nuovotd1.appendChild(nuovoinput1);
    
    //creo il <td> del cognome
    var nuovotd2=document.createElement("td");
    //creo <input> da inserire nel <td>
    var nuovoinput2= document.createElement("input");
    //creo l'atributo type da inserire a <input>
    var nuovoatt2_1=document.createAttribute("type");
    //assegno all'attributo type il suo valore
    nuovoatt2_1.value= "text";
    //assegno type a <input>
    nuovoinput2.setAttributeNode(nuovoatt2_1);
    //creo l'attributo placeholder
    var nuovoatt2_2= document.createAttribute("placeholder");
    //assegno a placheolder il suo valore
    nuovoatt2_2.value="Cognome";
    //assegno placeholder a <input>
    nuovoinput2.setAttributeNode(nuovoatt2_2);
    //aggiungo <input> al <td>
    nuovotd2.appendChild(nuovoinput2);
    
    //creo il <td> della data
    var nuovotd3=document.createElement("td");
    //creo <input> da inserire nel <td>
    var nuovoinput3= document.createElement("input");
    //creo l'atributo type da inserire a <input>
    var nuovoatt3_1=document.createAttribute("type");
    //assegno all'attributo type il suo valore
    nuovoatt3_1.value= "text";
    //assegno type a <input>
    nuovoinput3.setAttributeNode(nuovoatt3_1);
    //creo l'attributo placeholder
    var nuovoatt3_2= document.createAttribute("placeholder");
    //assegno a placheolder il suo valore
    nuovoatt3_2.value="GG-MM-AAAA";
    //assegno placeholder a <input>
    nuovoinput3.setAttributeNode(nuovoatt3_2);
    //aggiungo <input> al <td>
    nuovotd3.appendChild(nuovoinput3);

    //aggiungo i <td> al <tr>
    nuovotr.appendChild(nuovotd1);
    nuovotr.appendChild(nuovotd2);
    nuovotr.appendChild(nuovotd3);
    //aggiungo alla <table> il <tr>
    var tabe = document.getElementById("tab");
    //aggiungo al primo posto la variabile tabella
    tabe.insertBefore(nuovotr, tabe.childNotes);
}