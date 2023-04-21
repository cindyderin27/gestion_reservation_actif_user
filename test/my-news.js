
$(document).ready(function() {
    $.ajax({
        url: "https://booking-asset-production.up.railway.app/user/all"
    }).then(function(data) {

        console.log(data.data) ;
        
        for (i = 0; i < data.data.length; i++) {
            $('#news').append("<ul><li>"+data.data[i].ID_USER+"</li></ul>");
          $('#news').append("<ul><li>"+data.data[i].NOM_USER+"</li></ul>");
          $('#news').append("<ul><li>"+data.data[i].LOGIN+"</li></ul>");
        }
        
    });
});