


const url = "http://localhost:5000" ;

$(document).ready(function() {

   
    // debut code ajax 


    




    // code pour ajout d'un actif a partir du formulaire 

    $('#ajout-actif').livequery('click', function(e){

      e.preventDefault() ; 
    
      let numero = $('#numero').val() ;
      let libelle = $('#libelle').val() ;
      let categorie = $('#categorie').val() ;
      let description = $('#description').val() ;
      let quantite = $('#quantite').val() ;
      let dateachat = $('#dateachat').val() ;
      let garantie = $('#garantie').val() ;
      let prix = $('#prix').val() ;
      let etat = $('#etat').val() ;
      let disponible = $('#disponible').val() ;

      // variable des donnees 
       // let data = "{\n\t\"numero\" : \"VG022\"\n , \"description\": \"video projecteur LG \"  , \n\t\"libelle\" : \" vga et hdmi \",  \n\t\"disponibilite\" : \"1\" , \n\t\"etat\" : \"bon\" , \n\t\"dateAchat\"  : \"24/04/2023\", \n\t\"duree_garantie\" : \"6 mois\" ,\n\t\"num_type_actif\"  : \"1\"\n}" ;
       
       /* let data = new FormData() ;

        data.set("numero" , numero ) ;
        data.set("libelle" , libelle ) ;
        data.set("categorie" , categorie ) ;
        data.set("description" , description ) ;
        data.set("quantite" , quantite ) ;
        data.set("dateachat" , dateachat ) ;
        data.set("garantie" , garantie ) ;
        data.set("prix" , prix ) ;
        
        // affichate du formData 
        for (const value of data.values()) {
          console.log(value);
        }
*/

        var data2  = {
          numero: numero, 
          libelle: libelle, 
          categorie: categorie ,
          description : description ,
          quantite : quantite ,
          dateachat : dateachat ,
          garantie : garantie ,
          prix : prix ,
           etat : etat ,
           disponible : disponible 

        };

        // methode 1
 // creer un materiel
        $.post("http://localhost:5000/article/new", data2, function(puerto){

        //console.log(puerto) ;
      //  console.log(" produit ajoute avec succes ") ;
       }, 'json');

       
              
        /*const settings = {
                      "async": true,
                      "crossDomain": true,
                      "url": url + "/article/new",
                      "method": "POST",
                      
                      "processData": false,
                      "data": data2
                    };
                    
                    $.ajax(settings).done(function (response) {
                      console.log(response);
                    });
                    */
    
      return false;
    });




    // liste des actifs 

    /*
    const liste = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:5000/article/all",
        "method": "GET",
        
        "processData": false,
        "data": ""
      };
      
      $.ajax(liste).done(function (response) {
        console.log(response.data);
      });

*/
      // fin liste 




    //fin ajax

});


// fonction pour la liste des materiaux 
function listemateriaux() {

  // liste des utilisateurs


$.ajax({
  url: url+ "/article/all"  
}).then(function(data) {

  //console.log(data.data) ;
  
  let tab =
  `<tr>
      <th>numero</th>
  <th>libelle</th>
      <th>prix</th>
      <th>quantite</th>
      <th>disponibilité</th>
      <th>etat</th>
      <th>description</th>
      <th>garantie</th>
      <th>Options</th>
      <th>date Achat</th>
      <th>categorie</th>
  </tr>`;

// Loop to access all rows
 for (let r of data.data) {
  tab += `<tr>
  <td>${r.num} </td>      
<td>${r.libelle} </td>
<td>${r.prix}</td>
<td>${r.quantite} </td>
<td>${r.disponible} </td>
<td>${r.etat} </td>
<td>${r.description} </td>
<td>${r.duree_garantie} </td>




     
  <td><ul class="list-inline m-0">
                    
  <li class="list-inline-item">
    <button class="btn btn-success btn-sm " type="button" data-toggle="modal" data-target="#editerStock" data-placement="top" title="Edit"
      style="margin-bottom: 10px; vertical-align: baseline;"><i class="bi bi-pencil-square"></i>Editer</button>
  </li>
  <li class="list-inline-item">
    <button class="btn btn-danger btn-sm " type="button" data-toggle="tooltip" data-placement="top"
      title="Delete"><i class="bi bi-trash"></i>Supprimer</button>
  </li>
  <li class="list-inline-item" data-toggle="modal" data-target="#plusinfo"  >
    <button type="button" class="btn btn-warning btn-sm">Voire plus</button>
  </li>
</ul></td> 

<td>${r.dateAchat} </td>
<td>${r.categorie} </td>



</tr>`;
}

// Setting innerHTML as tab variable
document.getElementById("listeactif").innerHTML = tab;
  
});


}