


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
  ``;

// Loop to access all rows
 for (let r of data.data) {
  tab += `<tr>
  <td  scope="row" >${r.num} </td>      
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


// partie gestion de demandes 

// fonction pour la liste des demandes pour responsable et gestionnaire 
function listedemande() {

  // liste des utilisateurs


$.ajax({
  url: url+ "/demande/all"  
}).then(function(data) {

  //console.log(data.data) ;
  
  let tab =
  ``;

// Loop to access all rows
 for (let r of data.data) {

  tab += `<tr ` ;
    
  if( r.statut_confirmation== 1 ) {
    tab += ` class="alert alert-primary" role="alert"  >`;
  } else if( r.statut_validation== 1 ){
    tab += ` class="alert alert-warning" role="alert"  >`;
  } else if( r.statut_rejet== 1 ){
    tab += ` class="alert alert-dark" role="alert"  >`;
  } else
  {
    tab += `>`;
  }



    tab += `
  
  <td  scope="row" >${r.num_demande} </td>      
<td>${r.quantite_demande} </td>
<td>${r.proprietaire}</td>
<td>${r.libelle} </td>
<td>${r.description_demande} </td>
<td>${r.id_responsable} </td>
<td>${r.dateDemande} </td>
<td>${r.dateRetour} </td>




     
  <td><ul class="list-inline m-0">
                    
  <li class="list-inline-item">
  <div class="btn-group btn-sm">
  <button type="button" class="btn btn-success" 
  onClick = "validerdemande(${r.id_demande})"
  ><i class="bi bi-check-circle"></i></button>

  </li>
  <li class="list-inline-item">
  <button type="button" class="btn btn-danger"
  onClick = "rejeterdemande(${r.id_demande})"
  data-toggle="modal" data-target="#motifrejet"><i class="bi bi-x-lg"></i></button>
  </div>
  </li>

</ul></td> 





</tr>`;
}

// Setting innerHTML as tab variable
document.getElementById("listedemande").innerHTML = tab;
  
});


}

// fonction pour la liste des demandes pour responsable et gestionnaire 
function listedemande_user() {

  // liste des utilisateurs


$.ajax({
  url: url+ "/demande/all"  
}).then(function(data) {

  console.log(data.data) ;
  
  let tab =
  ``;

// Loop to access all rows
 for (let r of data.data) {
  tab += `<tr>
  <td  scope="row" >${r.num_demande} </td>      
<td>${r.quantite_demande} </td>
<td>${r.proprietaire}</td>
<td>${r.libelle} </td>
<td>${r.description_demande} </td>
<td>${r.id_responsable} </td>
<td>${r.dateDemande} </td>
<td>${r.dateRetour} </td>




     
  <td><ul class="list-inline m-0">
  
  <li class="list-inline-item">
    <button class="btn btn-success btn-sm " type="button" data-toggle="modal" data-target="#editerStock" data-placement="top" title="Edit"
      style="margin-bottom: 10px; vertical-align: baseline;"><i class="bi bi-pencil-square"></i>Confimer</button>
  </li>
  
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





</tr>`;
}

// Setting innerHTML as tab variable
document.getElementById("listedemande").innerHTML = tab;
  
});


}

 // creer un materiel
 $('#soumettre-demande').livequery('click', function(e){

  e.preventDefault() ; 

  let id_actif = $('#idactif').val() ;
  let quantite = $('#quantite').val() ;
  let libelle = $('#occasion1').val()  ?  $('#occasion1').val()  :  $('#occasion2').val()  ;
 let id_user = $('#user').val()  || "IUC14E";
 let numero = $('#numero').val()  || "d-00-"+Math.floor(Math.random()*100) ;
  let description = $('#description').val() ;
  let proprietaire = $('#user').val()  || "IUC15E";
  
  let dateretrait = $('#dateretrait').val() ;
  let dateretour = $('#dateretour').val() ;

  let responsable = $('#responsable').val() ? $('#responsable').val()  :  $('#responsable').val();
 
 responsable =  responsable ? responsable : "IUCjean" ;


    var data  = {
      id_actif: id_actif, 
      libelle: libelle, 
      quantite: quantite ,
      numero : numero ,
      description : description ,
      datedemande : dateretrait ,
      dateretour : dateretour ,
      id_responsable : responsable ,
      id_user: id_user ,
      proprietaire : proprietaire

    };

    console.log(data) ;
  
// creer une demande
    $.post(url + "/demande/new", data, function(puerto){

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


// validation d'une demande 

$('#valider-demande').livequery('click', function(e){

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

//fonction de validation de la demande 
function validerdemande (id) {
  var data  = {
  id: id

  };

  // methode 1
// creer un materiel
  $.post(url +"/demande/validate", data , function(puerto){
    location.reload(true);
 //console.log(puerto) ;
 //  console.log(" demande valide ") ;
 }, 'json');
}

// fonction pour confirmer une demande
function confirmerdemande (id) {
  var data  = {
  id: id

  };

  // methode 1
// creer un materiel
  $.post(url +"/demande/confirm", data , function(puerto){
    location.reload(true);
  //console.log(puerto) ;
//  console.log(" produit ajoute avec succes ") ;
 }, 'json');
}


// fonction pour rejeter une demande
function rejeterdemande (id) {
  var data  = {
  id: id

  };

  // methode 1
// creer un materiel
  $.post(url +"/demande/rejeter", data , function(puerto){
    location.reload(true);
  //console.log(puerto) ;
//  console.log(" produit ajoute avec succes ") ;
 }, 'json');
}


// confirmation demande
$('#confirm-demande').livequery('click', function(e){

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
    $.post(url+"/article/new", data2, function(puerto){

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