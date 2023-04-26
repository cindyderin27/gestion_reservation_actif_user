( function ( $ ) {
    'use strict';

jQuery.fn.scrollCenter = function(elem, speed) {

  var active = jQuery(this).find(elem);
  var activeWidth = active.width() / 2;
  var pos = active.position().left + activeWidth;
  var elpos = jQuery(this).scrollLeft();
  var elW = jQuery(this).width();
  pos = pos + elpos - elW / 2;

  jQuery(this).animate({
    scrollLeft: pos
  }, speed === undefined ? 1000 : speed);
  return this;
};

jQuery.fn.scrollCenterORI = function(elem, speed) {
  jQuery(this).animate({
    scrollLeft: jQuery(this).scrollLeft() - jQuery(this).offset().left + jQuery(elem).offset().left
  }, speed === undefined ? 1000 : speed);
  return this;
};




//- Droped menu

$.puerto_droped = function( prtclick, prtlist = "ul.pt-drop" ){
	$(prtclick).livequery('click', function(){
		var ul = $(this).parent();
		if( ul.find(prtlist).hasClass('open') ){
			ul.find(prtlist).removeClass('open');
			$(this).removeClass('active');
			if(prtclick == ".pl-mobile-menu") $('body').removeClass('active');
		} else {
			$("ul.pt-drop").parent().find(".active").removeClass('active');
			$("ul.pt-drop").removeClass('open');
			ul.find(prtlist).addClass('open');
			$(this).addClass('active');
			if(prtclick == ".pl-mobile-menu") $('body').addClass('active');
		}
		return false;
	});
	$("html, body").livequery('click', function(){
		$("ul.pt-drop").parent().find(".active").removeClass('active');
		$("ul.pt-drop").removeClass('open');
		if(prtclick == ".pl-mobile-menu") $('body').removeClass('active');
	});
}

$.puerto_droped(".pt-notyshow");
$.puerto_droped(".pt-options-link");

// arbre assistant 
$(".assistant").parent().css( "border-top", "1px solid black" );

html2canvas(document.querySelector("#div")).then(canvas => {
                //console.log(canvas.toDataURL());
                const urlParams = new URLSearchParams(window.location.search);
                console.log(urlParams);
                const view=urlParams.get('view');
                if(view == 1){
                    $('body').empty() ;
                    document.body.appendChild(canvas)
                }
               
            });
$(document).ready(function(){
       /* html2canvas(document.querySelector("#div")).then(canvas => {
                //console.log(canvas.toDataURL());
                const urlParams = new URLSearchParams(window.location.search);
                console.log(urlParams);
                const view=urlParams.get('view');
                if(view == 1){
                    $('body').empty() ;
                    document.body.appendChild(canvas)
                }
               
            });*/
    	if(!window.location.hash) {
		window.location = window.location + '#loaded';
			$.get(path+"/ajax.php?pg=changelang&id=2", function(puerto){
			window.location.reload();
	});
	}
	
	$('input[type=checkbox]').removeAttr('checked');


	if($(".pt-sm .active").length){
		$(".pt-sm").scrollCenter(".active", 300);
	}
});

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

$.puerto_confirm = function( tit, aler, col) {
  "use strict";
	$.confirm({
			icon: ( col == 'green' ? 'far fa-laugh-wink' : 'far fa-surprise'),
			theme: 'modern',
			closeIcon: true,
			animation: 'scale',
			type: col,
			title: tit,
			content: aler,
			buttons: false
	});
}

 function alignModal(){
    
        var modalDialog = $("#dateModal");
        
        // Applying the top margin on modal to align it vertically center
         $("#dateModal").css("margin-top", Math.max(0, ($(window).height() - $("#dateModal").height()) / 2));
    }


// tree zooming specifiations 
    //var imagesize = $('img').width();
    
    $('.zoomout').on('click', function(){
       // zoom arriere
  var zoom = $(".person").css("zoom");
         $(".person").css("zoom", zoom*0.9) ;
    
                
    });
    
    $('.zoomin').on('click', function(){
        var zoom2 = $(".person").css("zoom");
         $(".person").css("zoom", zoom2*1.2) ;
       
                
    });
    
// datepicker modal 

        $('#dateModal').on('shown.bs.modal', function () {
      
          $('#myInput').trigger('focus') ;
        })
        
        // save the date 
        $(".save-date" ,".modalDate").on("click",  function (e) {
     
     // $("[name='mariagedate']").value("10/10/2002");
    // window.alert( $("[name='mariagedate']").value() ) ;
});

// header onblur profil-menu 
$(".sub-menu-user").blur(function(){
   
   
  this.css( 'display' , 'none') ;
});

// Close the dropdown menu if the user clicks outside of it

window.onclick = function(event) {
  
   
   $(".sub-menu-user").css( 'display' , 'none') ;
   
   $(".wcs_button_label").css("display", "none");
   

}

$("#bbirthday").click(function () {
        
           var name = $("#bbirthday").attr("name");

          
            
            $(".titre").html(name);
            
        
            
           
            
            
});
$("#bdeathdate").click(function () {
        
           var name = $("#bdeathdate").attr("name");

       
            
            $(".titre").html(name);
            
});
$("#bmariagedate").click(function () {
        
           var name = $("#bmariagedate").attr("name");

          
            
            $(".titre").html(name);
            
          
});


$(".save-data").click(function () {
        
            var day = $("#day").val(); 
           
         
           
           var month =  $("#month").val(); 
           
          
           
           var year = $("#year").val(); 
           
          var madate = year+'/'+month+'/'+day ;
          
       var libelle =  $(".titre").text();
       
       if(libelle == "mariage"){
           $("#inputmariage").val(madate)  ;
         
       }  else if (libelle == "birthday") 
       {
            $("#inputbirthday").val(madate)  ;
          
       } else if (libelle == "deathdate")  {
            $("#inputdeath").val(madate)  ;
          
       } ;
            
            $('#dateModal').hide() ;
            
           
            
});




$("input[name=search]").on('keyup keydown change', function(){
	var th = $(this);
	var vl = $(this).val();

	$.post(path+"/ajax.php?pg=search", {search:vl}, function(puerto){
		$(".sresults").html(puerto);
		th.parent().find('ul').addClass("open");
	});
});

$('.profile-avatar').livequery('click', function(){
    
	$('.sub-menu-user').toggle();

	return false;
});

$('.login-link').livequery('click', function(){
	var th =  $(this);
	$('#send-login').show();
	$('#send-user').hide();
	if(!th.hasClass("active")) {
		th.addClass("active");
		$('.register-link').removeClass("active");
	}
	return false;
});

$('.register-link').livequery('click', function(){
	var th =  $(this);
	$('#send-login').hide();
	$('#send-user').show();
	if(!th.hasClass("active")) {
		th.addClass("active");
		$('.login-link').removeClass("active");
	}
	return false;
});

$('#show-chart').livequery('click', function(){
    $('.list-member-chart').hide('slow');
	$('.c-chart .pt-tree').show('slow');
	
	return false;
});

$('#show-list').livequery('click', function(){
	$('.c-chart .pt-tree').hide('slow');
	$('.list-member-chart').show('slow');
	return false;
});

$('#show-dash-general').livequery('click', function(){
    $('.dash-footer-section').hide('slow');
	$('.pt-sendsettings').show('slow');
	
	return false;
});

$('#show-dash-footer').livequery('click', function(){
	$('.pt-sendsettings').hide('slow');
	$('.dash-footer-section').show('slow');
	return false;
});

$('.login-link').livequery('click', function(){
	var th =  $(this);
	$('#send-login2').show();
	$('#send-user2').hide();
	if(!th.hasClass("active")) {
		th.addClass("active");
		$('.register-link').removeClass("active");
	}
	return false;
});

$('.l_register_email').livequery('click', function(){
	$(this).css('color','#2ecc71');
	$('.l_register_phone').css('color','#000');
	$('.register-phone').hide("slow");
	$('.register-phone').html("<div></div>")
	$('.register-email').html('<i class="far fa-envelope"></i><input type="text" name="email" id="email" placeholder="Email">');
	$('.register-email').show("slow");

	return false;
});

// start zooming in and out 
     var imagesize = $('.tree').width();
    
    $('.zoomout').livequery('click', function(){
       
        imagesize = imagesize - 5;
        $('.tree').width() * 0.5 ;
         $('.tree').height() * 0.5 ;
    });
    
    
    $('.zoomin').on('click', function(){
        
        imagesize = imagesize + 5;
      $('.tree').width() * 1.8 ;
         $('.tree').height() * 1.8;
    });

// end zooming 

$('.l_register_phone').livequery('click', function(){
	$(this).css('color','#2ecc71');
	$('.l_register_email').css('color','#000');
	$('.register-email').hide("slow");
	$('.register-email').html("<div></div>");
	$('.register-phone').html('<div><select id="country_code" name="country_code">'+
    '<option value="213">+213</option>'+
    '<option value="244">+244</option>'+
    '<option value="229">+229</option>'+
    '<option value="267">+267</option>'+
    '<option value="226">+226</option>'+
    '<option value="257">+257</option>'+
    '<option value="237" selected>+237</option>'+
    '<option value="238">+238</option>'+
    '<option value="236">+236</option>'+
    '<option value="235"> +235</option>'+
    '<option value="269">+269</option>'+
    '<option value="242">+242</option>'+
    '<option value="242">+242</option>'+
    '<option value="225">+225</option>'+
    '<option value="253">+253</option>'+
    '<option value="20">+20</option>'+
    '<option value="240">+240</option>'+
    '<option value="291">+291</option>'+
    '<option value="251">+251</option>'+
    '<option value="241">+241</option>'+
    '<option value="220">+220</option>'+
    '<option value="233">+233</option>'+
    '<option value="224">+224</option>'+
    '<option value="245">+245</option>'+
    '<option value="254">+254</option>'+
    '<option value="266">+266</option>'+
    '<option value="231">+231</option>'+
    '<option value="218">+218</option>'+
    '<option value="261">+261</option>'+
    '<option value="265">+265</option>'+
    '<option value="223">+223</option>'+
    '<option value="222">+222</option>'+
    '<option value="230">+230</option>'+
    '<option value="269">+269</option>'+
    '<option value="212">+212</option>'+
    '<option value="258">+258</option>'+
    '<option value="264">+264</option>'+
    '<option value="227">+227</option>'+
    '<option value="234">+234</option>'+
    '<option value="262">+262</option>'+
    '<option value="250">+250</option>'+
    '<option value="290">+290</option>'+
    '<option value="239">+239</option>'+
    '<option value="221">+221</option>'+
    '<option value="248">+248</option>'+
    '<option value="232">+232</option>'+
    '<option value="252">+252</option>'+
    '<option value="27">+27</option>'+
    '<option value="211">+211</option>'+
    '<option value="249">+249</option>'+
    '<option value="268">+268</option>'+
    '<option value="255">+255</option>'+
    '<option value="228">+228</option>'+
    '<option value="216">+216</option>'+
    '<option value="256">+256</option>'+
    '<option value="212">+212</option>'+
    '<option value="260">+260</option>'+
    '<option value="263">+263</option></select></div><div><input type="text" name="phone" id="phone" placeholder="Numéro de téléphone"></div>');
	$('.register-phone').show("slow");

	return false;
});

$('.register-link').livequery('click', function(){
	var th =  $(this);
	$('#send-login2').hide();
	$('#send-user2').show();
	if(!th.hasClass("active")) {
		th.addClass("active");
		$('.login-link').removeClass("active");
	}
	return false;
});

$('.nav-tabs a').livequery('click', function(){
	var th =  $(this).parent();
	if(!th.hasClass("active")) {
		$('.nav-tabs a').parent().removeClass("active");
		th.addClass("active");
	}
});

$('[rel=prof]').livequery('click', function(){
	var th =  $(this);
	$('.comp, .inter, .bio, .photos').hide();
	$('.prof').show();
	if(!th.hasClass("active")) {
		th.addClass("active");
		$('[rel=comp], [rel=inter], [rel=bio], [rel=photos]').removeClass("active");
	}
	return false;
});
$('[rel=comp]').livequery('click', function(){
	var th =  $(this);
	$('.prof, .inter, .bio, .photos').hide();
	$('.comp').show();
	if(!th.hasClass("active")) {
		th.addClass("active");
		$('[rel=prof], [rel=inter], [rel=bio], [rel=photos]').removeClass("active");
	}
	return false;
});
$('[rel=inter]').livequery('click', function(){
	var th =  $(this);
	$('.prof, .comp, .bio, .photos').hide();
	$('.inter').show();
	if(!th.hasClass("active")) {
		th.addClass("active");
		$('[rel=prof], [rel=comp], [rel=bio], [rel=photos]').removeClass("active");
	}
	return false;
});
$('[rel=bio]').livequery('click', function(){
	var th =  $(this);
	$('.prof, .comp, .inter, .photos').hide();
	$('.bio').show();
	if(!th.hasClass("active")) {
		th.addClass("active");
		$('[rel=prof], [rel=comp], [rel=inter], [rel=photos]').removeClass("active");
	}
	return false;
});
$('[rel=photos]').livequery('click', function(){
	var th =  $(this);
	$('.prof, .comp, .inter, .bio').hide();
	$('.photos').show();
	if(!th.hasClass("active")) {
		th.addClass("active");
		$('[rel=prof], [rel=comp], [rel=inter], [rel=bio]').removeClass("active");
	}
	return false;
});

$('#send-newmember').livequery('submit', function(){
	var id = $('[name=parent]').val();
	var nid = $('[name=nid]').val();
	var rl = $('[rel=item-'+id+']');
	var ul = rl.parent();

	var formData = new FormData($(this)[0]);
    


    

$.ajax({
			url: path+'/ajax.php?pg=send-newmember',
			type: 'POST',
			data: formData,
			async: false,
			success: function (data) {
					$('#myModal').modal('hide');
					location.reload();
			},
			cache: false,
			contentType: false,
			processData: false
	});
	$('#send-newmember [name=id]').val('');
	return false;
});

$('#copy-newmember').livequery('submit', function(){
	var id = $('[name=parent]').val();
	var nid = $('[name=nid]').val();
	var rl = $('[rel=item-'+id+']');
	var ul = rl.parent();

	var formData = new FormData($(this)[0]);

	$.ajax({
			url: path+'/ajax.php?pg=send-newmember',
			type: 'POST',
			data: formData,
			async: false,
			success: function (data) {
					$('#myModal').modal('hide');
					location.reload();
			},
			cache: false,
			contentType: false,
			processData: false
	});
	$('#send-newmember [name=id]').val('');
	return false;
});

$('#send-vpass').livequery('submit', function(){
	var th =  $(this);
	$.post(path+"/ajax.php?pg=vpass-send", $(this).serialize(), function(puerto){
		th.find('hr').before($(puerto.msg).hide().fadeIn());
		setTimeout(function(){ th.find('.alert').fadeOut(function(){ $(this).remove(); }); }, 4000);
		if(puerto.type == 'success') {
			setTimeout(function(){ location.reload(); }, 4000);
		}
	}, 'json');

	return false;
});

$('#send-newheritage').livequery('submit', function(){

	$.post(path+"/ajax.php?pg=newheritage", $(this).serialize(), function(puerto){
		if(puerto.type == 'success') {
			setTimeout(function(){ location.reload(); }, 2500);
			$.puerto_confirm( lang.success, puerto.msg, "green");
		} else {
			$.puerto_confirm( lang.error, puerto.msg, "red");
		}
	}, 'json');

	return false;
});

$('#send-bind').livequery('submit', function(event){

   
    
	$.post(path+"/ajax.php?pg=newbind", $(this).serialize(), function(puerto){

		$('#testbind').html(puerto);

		if(puerto.type == 'success') {
			setTimeout(function(){ location.reload(); }, 2500);
			$.puerto_confirm( lang.success, puerto.msg, "green");
		} else {
			$.puerto_confirm( lang.error, puerto.msg, "red");
		}
	}, 'json');

	return false;
});

$('#send-footer').livequery('submit', function(){
 	$.post(path+"/ajax.php?pg=sendfooter", $(this).serialize(), function(puerto){

		if(puerto.type == 'success') {
			$.puerto_confirm( lang.success, puerto.msg, "green");
		} else {
			$.puerto_confirm( lang.error, puerto.msg, "red");
		}
	}, 'json');

	return false;
});

$(".delete-coupon").livequery("click", function(){
	event.preventDefault();
    var id = $(this).attr('rel');
	if(confirm("are you sure you want to delete?")){
		$.get(path+"/ajax.php?pg=delete-coupon&id="+id, function(puerto){
			location.reload();
		});
	}
	return false;
});

$(".delete-category-faq").livequery("click", function(){
	event.preventDefault();
    var id = $(this).attr('rel');;
	if(confirm("are you sure you want to delete?")){
		$.get(path+"/ajax.php?pg=delete-category-faq&id="+id, function(puerto){
			location.reload();
		});
	}
	return false;
});

$(".delete-faq").livequery("click", function(){
	event.preventDefault();
    var id = $(this).attr('rel');;
	if(confirm("are you sure you want to delete?")){
		$.get(path+"/ajax.php?pg=delete-faq&id="+id, function(puerto){
			location.reload();
		});
	}
	return false;
});

$(".tree-om-momo").livequery("click", function(){
   event.preventDefault()
	var id = $(this).attr('rel');
	var v1 = '';
	var v2 = '';
	var id2 = parseInt(id) + 1;
	if(id > 5){
	     v1 = '2 familles';
	     v2 = '4 familles';
	    
	}else{
	     v1 = '10 membres';
	     v2 = '20 membres';
	}
	var html = '<div style="display:flex; justify-content:space-around;"><div style="display:flex; padding:8px; border:2px solid #0056b3; border-radius:10px"><svg fill="#0056b3" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 20 20">'+
 '<path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />'+
'</svg><a href="'+ path +'/additional.php?id='+ parseInt(id)+'" >'+ v1 +'</a></div>'+
                '<div style="display:flex; padding:8px; border:2px solid #0056b3; border-radius:10px"><svg fill="#0056b3" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 20 20">'+
  '<path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />'+
'</svg><a href="'+ path +'/additional.php?id='+ id2 +'" >'+ v2 +'</a></div></div>';
    $('#ommomo .modal-body').html(html);
    $('#ommomo').modal('show');
    $("#addnewtree").modal('hide');
	return false;
});

$('.toggle-coupon').livequery('click', function(){
    event.preventDefault();
    $('#send-coupon [name=entitled]').val('');
    $('#send-coupon [name=value]').val('');
    $('#send-coupon [name=expiration_date]').val('');
    $('#send-coupon [name=edit]').val(0);
    $('#addcoupon').modal('show');
});

$('.toggle-commercial').livequery('click', function(){
    event.preventDefault();
    
    $('#modalCommercial').modal('show');
});

$('.toggle-category-faq').livequery('click', function(){
    event.preventDefault();
    $('#send-category-faq [name=name]').val('');

    $('#addcategoryfaq').modal('show');
});

$('.edit-category-faq').livequery('click', function(){
    event.preventDefault();
   var id = $(this).attr('rel');
	$.get(path+"/ajax.php?pg=get-category-faq&id="+id, function(data){
	    
	    var html = '<div class="form-form-groups">'+
					'<label>Name <small class="text-danger">*</small></label>'+
					'<input type="text" name="name" value="'+data.name+'" placeholder="Category name">'+
					'<input type="hidden" name="edit" value="'+data.id+'" />'+
				'</div>';
	    $('#addcategoryfaq .modal-title').text('Edit Category')
        $('#addcategoryfaq .modal-body').html(html);
        $('#addcategoryfaq').modal('show');
	}, 'json');
});

$('.edit-coupon').livequery('click', function(){
    event.preventDefault();
   var id = $(this).attr('rel');
	$.get(path+"/ajax.php?pg=get-coupon&id="+id, function(data){
	    
	    var html = '<div class="form-form-groups">'+
					'<label>Intitulé <small class="text-danger">*</small></label>'+
					'<input type="text" name="entitled" value="'+data.entitled+'" placeholder="Entrez l\'intitulé du coupon">'+
				'</div>'+
                '<div class="form-groups">'+
						'<label>Valeur <small class="text-danger">*</small></label>'+
						'<input type="number" value="'+data.value+'" name="value" placeholder="Entrez la valeur du coupon en %">'+
					'</div>'+
				'<div class="form-groups">'+
					'<label>Date d\'éxpiration <small class="text-danger">*</small></label>'+
					'<input type="date" name="expiration_date" value="" placeholder="00/00/0000" />'+
					'<input type="hidden" name="edit" value="'+data.id+'" />'+
				'</div>';
	    $('#addcoupon .modal-title').text('Edit Coupon')
        $('#addcoupon .modal-body').html(html);
        $('#addcoupon').modal('show');
	}, 'json');
});

$('#send-coupon').livequery('submit', function(){
	$.post(path+"/ajax.php?pg=newcoupon" , $(this).serialize(), function(puerto){
		if(puerto.type == 'success') {
			setTimeout(function(){ location.reload(); }, 2500);
			$.puerto_confirm( lang.success, puerto.msg, "green");
		} else {
			$.puerto_confirm( lang.error, puerto.msg, "red");
		}
	}, 'json');

	return false;
});

$('#send-category-faq').livequery('submit', function(){
    $.post(path+"/ajax.php?pg=newcategory-faq" , $(this).serialize(), function(puerto){
			location.reload(); 
	}, 'json');

	return false;
});
$('#send-faq').livequery('submit', function(){
	$.post(path+"/ajax.php?pg=newfaq" , $(this).serialize(), function(puerto){
		if(puerto.type == 'success') {
			setTimeout(function(){ $(location).attr('href', path+'/dashboard/faqs'); }, 2500);
			
			$.puerto_confirm( lang.success, puerto.msg, "green");
		} else {
			$.puerto_confirm( lang.error, puerto.msg, "red");
		}
	}, 'json');

	return false;
});


$(".coupon").on("input", function() {
    $(".coupon").val($(this).val());
});

$('.verif-coupon').livequery('click', function(){
    var c = $(".coupon").val();
   $.get(path+"/ajax.php?pg=checkcoupon&c="+c, function(data){
		
        if(data == '0'){
            $(".coupon").css('border', '2px solid red');
			$("#span-price").text(parseInt($("#true_p").val()));
			$("#f_price").val(parseInt($("#true_p").val()));
			$("#c_ok").val(0)
			$.puerto_confirm( lang.error, '<div class="alert alert-danger">Coupon non Valide</div>', "red");
            
        }else if(data == 'x'){
            $(".coupon").css('border', '2px solid red');
			$("#span-price").text(parseInt($("#true_p").val()));
			$("#f_price").val(parseInt($("#true_p").val()));
			$("#c_ok").val(0)
			$.puerto_confirm( lang.error, '<div class="alert alert-danger">Coupon Expiré</div>', "red");
        }else{
			$(".coupon").css('border', '2px solid #2ecc71');
			if($("#c_ok").val() == '0'){
			    var r = ((parseInt($("#f_price").val()) * parseInt(data)) / 100);
    			var p = (parseInt($("#f_price").val())) - r;
    			$("#span-reduc").text('-'+ r);
    			$("#span-price").text(p);
    			$("#f_price").val(p)
    			$("#c_ok").val(1)
    			$.puerto_confirm( lang.success, '<div class="alert alert-success">Coupon Valide</div>', "green");
			}
		} 
	});
   
	return false;
});

$('#manage-bind').livequery('submit',  function(){
  
	var member = $('#manage-bind [name=member]').val();
	 
	var type = $('#manage-bind [name=type]').val();
	var notif =  $("#notif").val() ;
	if(type == 5){
	    if(confirm("Voulez-vous lier en remplaçant toutes les informations du membre ?")){
	        var data  = {member: member, type: type, notif: notif, d: 1};
	    }else{
	        var data  = {member: member, type: type, notif: notif, d: 2};
	    }
	}else{
	    var data  = {member: member, type: type, notif: notif, d: 0};
	}

	$.post(path+"/ajax.php?pg=managebind", data, function(puerto){
        console.log(puerto );
		$('#content-manage-bind').html(puerto);

	
			setTimeout(function(){ location.reload(); }, 2500);
			$.puerto_confirm( lang.success, puerto.msg, "green");
			
				if(puerto.type == 'success') {
            		    
            		} else {
            			$.puerto_confirm( lang.error, puerto.msg, "red");
            		}
	}, 'json');
	
		setTimeout(function(){ location.reload(); }, 2500);
			$.puerto_confirm( lang.success, "Effectue avec succes", "green");

	return false;
});

function CreatePDFfromHTML(title) {
    var HTML_Width = $("#div").width();
    var HTML_Height = $("#div").height();
    var top_left_margin = 15;
    var PDF_Width = HTML_Width + (top_left_margin * 2);
    var PDF_Height = (PDF_Width * 1.5) + (top_left_margin * 2);
    var canvas_image_width = HTML_Width;
    var canvas_image_height = HTML_Height;

    var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;

    html2canvas($("#div")[0]).then(function (canvas) {
        var imgData = canvas.toDataURL("image/jpeg", 1.0);
        var pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
        pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);
        for (var i = 1; i <= totalPDFPages; i++) {
            pdf.addPage(PDF_Width, PDF_Height);
            pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height*i)+(top_left_margin*4),canvas_image_width,canvas_image_height);
        }
        pdf.save(title+".pdf");
        $(".html-content").hide();
    });
}

$('.pdf-download').on('click', function(){
    $(".person").css("zoom", 1) ;
	var title = $(this).data("name");
	CreatePDFfromHTML(title);
	return false;
});

if($("#div").length){
const element = document.getElementById('div')
const panzoom = Panzoom(element, {

});
const parent = element.parentElement;
parent.addEventListener('wheel', panzoom.zoomWithWheel);
}

$('.tree-add-fams').on('click', function(){
	$("#send-newheritage input[name=member]").val($(this).attr('rel'));

});

$('.tree-add-bind').livequery('click', function(){
    $("#send-bind input[name=member]").val($(this).attr('rel'));
    $('#bindM').modal('show');
    return false;
});

$('.tree-manage-bind').on('click', function(){
   
    $("#notif").val($(this).attr('rel')) ;
	$(".delete-bind").attr('rel', ($(this).attr('rel')));
	
	
});


if($('.colorpicker-popup').length){
$(".colorpicker-popup").spectrum({
		showInput: true,
    allowEmpty:true,
		preferredFormat: "hex",
		change: function(rr){
			$('[name=pg_bg_v]').val(rr.toHexString());
		}
});
}

$('.tree-edit').livequery('click', function(){
	var id = $(this).attr('rel');
	
	$.get(path+"/ajax.php?pg=get-my-mother&id="+id, function(data){
	    $('#child-mother').html(data);
	});
function alignDate(dte ) {
   var dteSplit = dte.split("/");
  var yr = dteSplit[2] ; //special yr format, take last 2 digits
     var   month = dteSplit[1];
       var day = dteSplit[0];
        var result = yr + '/' + month + '/' + day ;
      
            return result ;
}
	$('#send-newmember [name=id]').val(id);
	$.get(path+"/ajax.php?pg=tree-edit&id="+id, function(data){
		$('[name=firstname]').val(data.firstname);
		$('[name=lastname]').val(data.lastname);
		$('[name=birthdate]').val( alignDate( data.birthdate ));
		$('[name=mariagedate]').val( alignDate( data.mariagedate) );
		$('[name=deathdate]').val( alignDate(data.deathdate) );
		$('[name=photo]').val(data.photo);
		$('[name=email]').val(data.email);
		$('[name=site]').val(data.site);
		$('[name=tel]').val(data.tel);
		$('[name=mobile]').val(data.mobile);
		$('[name=birthplace]').val(data.birthplace);
		$('[name=deathplace]').val(data.deathplace);
		$('[name=profession]').val(data.profession);
		$('[name=activity_area]').val(data.activity_area);
		$('[name=company]').val(data.company);
		$('[name=interests]').val(data.interests);
		$('[name=bio]').val(data.bio);
		$('[name=type]').val(data.type);
		$('[name=mother]').val(data.mother);
		$('[name=instagram]').val(data.instagram);
		$('[name=facebook]').val(data.facebook);
		$('[name=twitter]').val(data.twitter);
		$('[name=user]').val(data.user);
		$('input[name="user"]').amsifySuggestags({
			suggestionsAction : {
				url: path+'/sug.php',
			}
		}, 'refresh');

		if(!data.useredit){
			$('.link-u').hide();
		}

		$("select[name='type'] option[value='4']").attr("disabled", true);

		$('[name=gender][value='+data.gender+']').prop('checked',true);
		$('[name=death]').prop('checked',(data.death==1?true:false));
		$('#myModal').modal('show');
	}, 'json');

	return false;
});

$('.tree-copy-m').livequery('click', function(){
    var d = $(this).attr('rel');
    var data = d.split('-');
    $('#copyMember [name=firstname]').val(data[0]);
    $('#copyMember [name=lastname]').val(data[1]);
    $('#copyMember [name=profession]').val(data[2]);
    $('#copyMember [name=photo]').val(data[3]);
    $('#copyMember').modal('show');
});

$('.tree-add').livequery('click', function(){
	var id = $(this).attr('rel');
	var nid = ($(this).attr('id') ? $(this).attr('id').replace('nid','') : '');

	$('#send-newmember input[type=text], #send-newmember textarea').val('');
	$('#send-newmember [name=parent]').val(id);
	$('#send-newmember [name=nid]').val(nid);
	
	$.get(path+"/ajax.php?pg=get-mother&id="+id, function(data){
	    $('#child-mother').html(data);
	});

	$.get(path+"/ajax.php?pg=tree-addpar&id="+id, function(puerto){
		if(puerto != 0){
			$("select[name='type'] option[value='4']").attr("disabled", true);
		} else {
			$("select[name='type'] option[value='4']").attr("disabled", false);
		}
		$('.link-u').show();
		$('#myModal').modal('show');
	});
	
	if($("#send-newmember [name=type]").val() != 1 ){
	    $('#child-mother').hide("slow");
	    $("#send-newmember [name=mother]").val(0);
	}

	return false;
});

$("#send-newmember [name=type]").livequery('change', function(){
	if($("select[name='type']").val() != 1 ){
	    $('#child-mother').hide("slow");
	    $("#send-newmember [name=mother]").val(0);
	}else{
	    $('#child-mother').show("slow")
	}
});

$( ".tree-family-link" )
  .mouseenter(function() {
    $( this ).find( ".etiq" ).show();
  })
  .mouseleave(function() {
    $( this ).find( ".etiq" ).hide();
  });

$('.tree-family-link').livequery('click', function(){
  	var id = $(this).attr('rel');

  	$.get(path+"/ajax.php?pg=family-link&id="+id, function(data){
		  $('#content-link-tree').html(data);
	});
	  
	$('#familyLink').modal('show');
	return false;
});

$('.tree-mother-child').livequery('click', function(){
  	var id = $(this).attr('rel');
  	$('#mom').text($(this).attr('name'));

    $.get(path+"/ajax.php?pg=mother-child&id="+id, function(data){
		  $('#content-mother-child-tree').html(data);
	});
	  
	$('#motherChildLink').modal('show');

	return false;
});

$('.send-withdrawal').livequery('click', function(){

    var phone = '';
    var type = '';

    if($('.desc-pay-om').is(":visible")){
        phone = $('.desc-pay-om [name=phone]').val();
        type = $('.desc-pay-momo [name=type]').val();
    }else{
        phone = $('.desc-pay-momo [name=phone]').val();
        type = $('.desc-pay-momo [name=type]').val();
    }
    if(phone == '' || type == '' ){
        $.puerto_confirm( lang.error, '<div class="alert alert-danger">Veillez renseignez les champs requis</div>', "red");
    }else{
        $.post(path+"/ajax.php?pg=sendwithdrawal", {phone:phone, type:type}, function(puerto){
		if(puerto.type == 'success') {
		    $('#withdrawal').modal('hide');
			$.puerto_confirm( lang.success, puerto.msg, "green");
		} else {
			$.puerto_confirm( lang.error, puerto.msg, "red");
		}
	}, 'json');
    }	  

	return false;
});

$("#content-l-m .tree-mother-child").mouseover(function(){
    $("#content-l-m .tree-mother-child").css('margin-left','-10px');
  $("#content-l-m .tree-mother-child").text($(".tree-mother-child").val() + ' enfant (s)')
  $('#content-l-m .tree-family-link').hide('slow');
  
});
$(".tree-mother-child").mouseleave(function(){
    $("#content-l-m .tree-mother-child").text($(".tree-mother-child").val());
    $("#content-l-m .tree-mother-child").css('margin-left','10px');
  $('.tree-family-link').show('slow');  
});

$('.tree-delete').livequery('click', function(){
	var id = $(this).attr('rel');
	if(confirm(lang.alerts.de_mem)){
		$.get(path+"/ajax.php?pg=tree-delete&id="+id, function(){
			location.reload();
		});
	}

	return false;
});




$('.inputfile').livequery('change', function(){
	$(this).parent().find('label').html('<i class="fa fa-upload"></i> '+event.target.files[0].name);
	return false;
});

$('.title-footer').livequery('click', function(){
    event.preventDefault();
    
    
    if($(this).next('.link-footer').is(":visible")){
        $(this).next('.link-footer').hide('slow');

    }else{
        $(this).next('.link-footer').show('slow');
    }
    
    return false;
});

/*$('.go-community').livequery('click', function(){
    var d = $(this).attr('rel');
    var data = d.split('-');
    location.href = "http://test6.haurizon.com/?com_u="+data[0]+"&com_p="+data[1];
});*/

$('[rel^=faq-]').livequery('click', function(){
    event.preventDefault();
    $('[rel^=faq-]').next('ul').hide('slow')
    
    var ul = $(this).next('ul');
    if(ul.is(":visible")){
        ul.hide('slow');
        $(this).next('.svg-top').hide("slow");
        $(this).next('.svg-down').show("slow");
    }else{
        ul.show('slow');
        $(this).next('.svg-top').show("slow");
        $(this).next('.svg-down').hide("slow");
    }
    
    return false;
});

  // fonction qui retourne le nom d'une societe
  
   function tableElement( value) {
           var tab = value.split(",");
           return tab ; 
   }
   
$('[rel^=item-]').livequery('click', function(){
    
    
	var id = $(this).attr('rel').replace('item-', '');
	$.get(path+"/ajax.php?pg=tree-edit&id="+id, function(data){
	    
		var html = '<div class="pt-item-details'+(data.gender == 1?' female':'')+'">'
			+'<div class="thumb"><img src="'+path+'/'+data.photo+'" onerror="this.src=\''+nophoto+'\'"></div>'
			+'<div class="pt-item-body">'
				+'<a class="pt-name">'+data.firstname+' '+(data.lastname ? data.lastname : '')+' <i class="fas fa-'+(data.gender == 1?'female" title="'+lang.newmember.female+'':'male" title="'+lang.newmember.male+'')+'"></i></a>'
				+(data.birthdate == "01/01/0001" ? "<p class='pt-born'>  "+ lang.newmember.bdate +" : " + lang.newmember.unknown + "  </p> " : '<p class="pt-born">'+ lang.newmember.bornat +' '+data.birthdate+(data.birthplace ? ' '+lang.newmember.bornin+' <b>'+data.birthplace+'</b>' : '')+'</p>' )
				+(data.death == 0 && data.deathdate ?'<p class="pt-born">'+lang.newmember.ddate+' '+data.deathdate+(data.deathplace ? ' '+lang.newmember.bornin+' <b>'+data.deathplace+'</b>' : '')+'</p>':'')
				+(data.mariagedate == "01/01/0001" ? "<p class='pt-born'> "+ lang.newmember.mdate  +" : " + lang.newmember.unknown + " </p>  " : '<p class="pt-born">'+lang.newmember.marriageat+' '+data.mariagedate+'</b></p>')
				+'<p class="pt-links">'
					+(data.site?'<a href="'+data.site+'" target="_blank" title="'+data.site+'"><i class="fas fa-link"></i></a>':'')
					+(data.email?'<a href="mailto:'+data.email+'" title="'+data.email+'"><i class="far fa-envelope"></i></a>':'')
					+(data.tel ? '<a title="tel:'+data.tel+'"><i class="fas fa-phone-alt"></i></a>' : '')
					+(data.mobile?'<a title="tel:'+data.mobile+'"><i class="fas fa-mobile-alt"></i></a>':'')
					+(data.facebook ?'<a href="https://www.facebook.com/'+data.facebook+'" title="'+data.facebook+'"><i class="fab fa-facebook"></i></a>':'')
					+(data.twitter ?'<a href="https://www.twitter.com/'+data.twitter+'" title="'+data.twitter+'"><i class="fab fa-twitter"></i></a>':'')
					+(data.instagram ?'<a href="https://www.instagram.com/'+data.instagram+'" title="'+data.instagram+'"><i class="fab fa-instagram"></i></a>':'')
				+'</p>'
			+'</div>'
		+'<div class="pt-page-nav">'+
			(data.profession ? '<b rel="prof" class="active">'+lang.newmember.profession+'</b>' : '')+
			(data.company ? '<b rel="comp">'+lang.newmember.company+'</b>' : '')+
			(data.interests ? '<b rel="inter">'+lang.newmember.interests+'</b>' : '')+
			(data.bio ? '<b rel="bio">'+lang.newmember.bio+'</b>' : '')+
			(data.photos ? '<b rel="photos">'+lang.newmember.photos+'</b>' : '')+
			'</div>'
		+'<p class="prof active">'+data.profession+'</p>'
		 +'<p class="  d-flex" >' ;
		
		
		if (data.company_name!=' ' ) {
		    
		    
		    '<b rel="comp">'+  tableElement(data.company_name.substring(2, data.company_name.length) ).forEach( el => (
		   
		            html = html +  ' <span class=" sub-comp  btn  m-1 rounded  d-inline-block font-weight-bold align-middle justify-content flex-row ">' + el + '</span> '
		       
		    ) ) +'</b>'
		    
		}    else {
		    html = html + lang.organizationpage.no_enterprise.replaceAll ("\\", '')  ;
		   
		}
		    
		    
	  html = html +   '</p>'
	  +'<p class="inter">'+data.interests+'</p>'
		+'<p class="bio">'+data.bio+'</p>'
		+'<div class="photos">'+data.photos+'</div>'
		+(!data.profession && !data.company && !data.interests && !data.bio && !data.photos ? '<div class="text-center">'+lang.alerts.nodata+'</div>' : '')
	+'</div>';
		$('#myTree .modal-body').html(html);
		$('#myTree').modal('show');
		
	}, 'json');



	return false;
});

if($('input[name="planets"]').length){
$('input[name="planets"]').amsifySuggestags({
	suggestionsAction : {
		url: path+'/sug.php',
	},
	tagLimit: 5
});
}
if($('input[name="user"]').length){
$('input[name="user"]').amsifySuggestags({
	suggestionsAction : {
		url: path+'/sug.php',
	},
	tagLimit: 1
});
}
if($('input[name="heritage"]').length){
$('input[name="heritage"]').amsifySuggestags({
	suggestionsAction : {
		url: path+'/sugfamily.php',
	},
	tagLimit: 1
});
}

if($('input[name="bind"]').length){
	$('input[name="bind"]').amsifySuggestags({
		suggestionsAction : {
			url: path+'/sugfamily.php',
		},
		tagLimit: 1
	});
}

if($('input[name="commerciallist"]').length){
	$('input[name="commerciallist"]').amsifySuggestags({
		suggestionsAction : {
			url: path+'/sugcommercial.php',
		},
		tagLimit: 1
	});
	
}

if($('input[name="company"]').length){
	$('input[name="company"]').amsifySuggestags({
		suggestionsAction : {
			url: path+'/sugpage.php',
		},
		tagLimit: 5
	});
}


$(".pt-newlang").on("click", function(){
	$.get(path+"/ajax.php?pg=newlang", function(puerto){
		location.reload();
	});

	return false;
});


$(".pt-changelang").on("click", function(){
	var th = $(this).attr("rel");
	$.get(path+"/ajax.php?pg=changelang&id="+th, function(puerto){
		location.reload();
	});

	return false;
});

// ** Register

$('#send-user').livequery('submit', function(e){
    
      
	var th =  $(this);
	



  

	$.post(path+"/ajax.php?pg=user-send", $(this).serialize(), function(puerto){
	    console.log(puerto);
		if(puerto.type == 'success') {
			$.puerto_confirm( lang.success, puerto.msg, "green");
			setTimeout(function(){
				$('.pt-index-right').find('a').removeClass("active");
				$('.login-link').addClass("active");
				$('#send-login').show();
				$('#send-user').hide();
				$("#send-login input[name=name]").val($("#send-user input[name=name]").val());
				$("#send-login input[name=pass]").val($("#send-user input[name=pass]").val());
					
				if($('.pt-pagedashboard').length){
					location.reload();
				}
			}, 2000);
		} else {
			$.puerto_confirm( lang.error, puerto.msg, "red");
		}
	}, 'json');

	return false;
});

// register commercial 

$('#send-commercial').livequery('submit', function(e){
  
    e.preventDefault() ;
      
	var th =  $(this);

   

  

	$.post(path+"/ajax.php?pg=user-send", $(this).serialize(), function(puerto){
	    console.log(puerto);
		if(puerto.type == 'success') {
			$.puerto_confirm( lang.success, puerto.msg, "green");
			setTimeout(function(){
				$('.pt-index-right').find('a').removeClass("active");
				$('.login-link').addClass("active");
				$('#send-login').show();
				$('#send-user').hide();
				$("#send-login input[name=name]").val($("#send-user input[name=name]").val());
				$("#send-login input[name=pass]").val($("#send-user input[name=pass]").val());
				if($('.pt-pagedashboard').length){
					location.reload();
				}
			}, 2000);
		} else {
			$.puerto_confirm( lang.error, puerto.msg, "red");
		}
	}, 'json');

	return false;
});

$('.modaCommercial').livequery('submit', function(e){
 
    e.preventDefault() ;
      
	var th =  $(this);

  

  

	$.post(path+"/ajax.php?pg=user-send", $(this).serialize(), function(puerto){
	    console.log(puerto);
		if(puerto.type == 'success') {
			$.puerto_confirm( lang.success, puerto.msg, "green");
			setTimeout(function(){
				$('.pt-index-right').find('a').removeClass("active");
				$('.login-link').addClass("active");
				$('#send-login').show();
				$('#send-user').hide();
				$("#send-login input[name=name]").val($("#send-user input[name=name]").val());
				$("#send-login input[name=pass]").val($("#send-user input[name=pass]").val());
				if($('.pt-pagedashboard').length){
					location.reload();
				}
			}, 2000);
		} else {
			$.puerto_confirm( lang.error, puerto.msg, "red");
		}
	}, 'json');

	return false;
});

// ** send affiliate link

$('#send-affiliate-link').livequery('submit', function(){
	var th =  $(this);
	$.post(path+"/ajax.php?pg=send-affiliate-link", $(this).serialize(), function(puerto){
		if(puerto.type == 'success') {
			$.puerto_confirm( lang.success, puerto.msg, "green");
		} else {
			$.puerto_confirm( lang.error, puerto.msg, "red");
		}
	}, 'json');

	return false;
});

// ** Send Login

$('#send-login').livequery('submit', function(){
	var th =  $(this);
	$.post(path+"/ajax.php?pg=login-send", $(this).serialize(), function(puerto){
		if(puerto.type == 'success') {
		    //localStorage.u = $('#send-login [name=name]').val();
		    //localStorage.p =  $('#send-login [name=pass]').val();
			setTimeout(function(){ $(location).attr('href', path); }, 2500);
			$.puerto_confirm( lang.success, puerto.msg, "green");
			
		} else {
			$.puerto_confirm( lang.error, puerto.msg, "red");
		}
	}, 'json');

	return false;
});

$('#send-login2').livequery('submit', function(){
	var th =  $(this);
	$.post(path+"/ajax.php?pg=login-send", $(this).serialize(), function(puerto){
		if(puerto.type == 'success') {
			setTimeout(function(){ $(location).attr('href', path+'/plans.php'); }, 2500);
			$.puerto_confirm( lang.success, puerto.msg, "green");
		} else {
			$.puerto_confirm( lang.error, puerto.msg, "red");
		}
	}, 'json');

	return false;
});


// ** Logout

$('.logout').on('click', function(){
	if(confirm(lang.alerts.logout)){
		$.get(path+"/ajax.php?pg=logout", function(){
			$(location).attr('href', path);
		});
	}
	return false;
});

// ** Logout

$('li.read-notifi').on('click', function(){
	var th = $(this), ii = 0;
	var rl = $(this).attr("rel");
	if(th.hasClass("read-notifi")){
		$.get(path+"/ajax.php?pg=read-not&id="+rl, function(puerto){
			ii = parseInt(th.parent().parent().find("a b").text()) - 1;
			th.parent().parent().find("a b").text(ii);
			th.removeAttr("class");
		});
	}
});


// ** Family Details

$('#send-family-details').livequery('submit', function(){
	var th =  $(this);
	$.post(path+"/ajax.php?pg=family-details", $(this).serialize(), function(puerto){
		if(puerto.type == 'success') {
			setTimeout(function(){ location.reload(); }, 4000);
			$.puerto_confirm( lang.success, puerto.msg, "green");
		} else {
			$.puerto_confirm( lang.error, puerto.msg, "red");
		}
	}, 'json');

	return false;
});

// ** Chart Details

$('#send-chart-details').livequery('submit', function(){
	var th =  $(this);
	$.post(path+"/ajax.php?pg=family-details", $(this).serialize(), function(puerto){
		if(puerto.type == 'success') {
			setTimeout(function(){ location.reload(); }, 4000);
			$.puerto_confirm( lang.success, puerto.msg, "green");
		} else {
			$.puerto_confirm( lang.error, puerto.msg, "red");
		}
	}, 'json');

	return false;
});

// ** Page Details

$('#send-page-details').livequery('submit', function(){
	var th =  $(this);
	
	var formData = new FormData($(this)[0]);

	$.ajax({
			url: path+'/ajax.php?pg=page-details',
			type: 'POST',
			data: formData,
			async: false,
			success: function (data) {
					setTimeout(function(){ location.reload(); }, 4000);
			        $.puerto_confirm( lang.success, data.msg, "green");
			},
			error: function(data){
			        $.puerto_confirm( lang.error, puerto.msg, "red");
			},
			cache: false,
			contentType: false,
			processData: false
	});

	return false;
});

$(".pt-edit").on("click", function(){
	var id = $(this).attr("rel");
	$.get(path+"/ajax.php?pg=family-edit&id="+id, function(puerto){
		var ass = JSON.parse(puerto);
		if(ass.name){
			$("input[name=name]").val(ass.name);
			$("input[name=planets]").val(ass.moderators);
			$("input[name=vpass]").val(ass.vpassword);
			$("input[name=famid]").val(ass.id);
			$('input[name="planets"]').amsifySuggestags({
				suggestionsAction : {
					url: path+'/sug.php',
				}
			}, 'refresh');
			$('#addnewtree').modal('show');
		}
	});
	return false;
});

$(".page-edit").on("click", function(){
	var id = $(this).attr("rel");
	$.get(path+"/ajax.php?pg=page-edit&id="+id, function(puerto){
		var ass = JSON.parse(puerto);
		if(ass.name){
			$("input[name=pagetitle]").val(ass.name);
			$("input[name=pagecategory]").val(ass.category);
			$("textarea[name=pagedescription]").append(ass.description);
			$("input[name=pamid]").val(ass.id);
			$('#addnewpage').modal('show');
		}
	});
	return false;
});


$('#addnewtree').on('hidden.bs.modal', function () {
	$("input[name=name]").val("");
	$("input[name=planets]").val("");
	$("input[name=vpass]").val("");
	$("input[name=famid]").val("");
	$('input[name="planets"]').amsifySuggestags({
		suggestionsAction : {
			url: path+'/sug.php',
		}
	}, 'refresh');
})


/** File Upload **/
if($("#images").length){
$("#images").fileinput({
		language: 'en',
    uploadAsync: false,
		showZoom: false,
    uploadUrl: path+"/ajax.php?pg=upload",
		allowedFileExtensions: ["jpg", "jpeg", "bmp", "png", "gif"],
		actionZoom: false
});

$('#images').on('fileuploaded', function(event, data) {

});

$('#images').on('filebatchuploadsuccess', function(event, data, previewId, index) {
		var dataUploaded = data.response.file_output;
		var i;
		for(i=0;i<dataUploaded.length;i++){
			if(dataUploaded[i].success === true){
				$('#images').after('<input type="hidden" name="images_tmp[]" value="'+dataUploaded[i].path+'" placeholder="'+dataUploaded[i].name+'"/>');
			}
		}
});


}

$('#datepicker').datepicker();


$(".pl-share-button").livequery("click", function(){
	var ul = $(this).parent().find('ul');
	if(ul.hasClass('open')){
		ul.removeClass('open');
	} else {
		ul.addClass('open')
	}
});



$.barChart = function(ChartID, DataLabelss, DataCnts, DataClrs, DataTitle){
	new Chart(document.getElementById(ChartID), {
	    type: 'bar',
	    data: {
	      labels: DataLabelss,
	      datasets: [
	        {
	          label: DataTitle,
	          backgroundColor: DataClrs,
	          data: DataCnts
	        }
	      ]
	    },
	    options: {
	      legend: { display: false },
	      title: {
	        display: true,
	        text: DataTitle
	      }
	    }
	});
}

$.lineChart = function(DataLabelss, DataCnts, DataTitle){
	new Chart(document.getElementById("line-chart"), {
		type: 'line',
		data: {
			labels: DataLabelss,
			datasets: [{
					data: DataCnts,
					label: false,
					borderColor: "#5f90fa",
					backgroundColor: 'rgba(95, 144, 250, 0.65)'
				}
			]
		},
		options: {
			legend: {
					display: false
			},
			title: {
				display: true,
				text: DataTitle
			},
			scales: {
					xAxes: [{
							ticks: {
									autoSkip: true,
									maxRotation: 40,
									minRotation: 40
							}
					}]
			}
	}
	});
}



if($(".pt-adminstats").length){
	$.get(path+"/ajax.php?pg=adminstats&request=daily", function(puerto) {
		var ass = JSON.parse(puerto);
		var DataLabelss = ass.labels;
		var DataCnts = ass.data;
		var DataTitle = ass.title;
		$.lineChart(DataLabelss,DataCnts,DataTitle);

	});

	$.get(path+"/ajax.php?pg=adminstatsbars&request=daily", function(puerto) {
		var ass = JSON.parse(puerto);
		var DataLabelss = ass.labels;
		var DataCnts = ass.data;
		var DataTitle = ass.title;
		var DataClrs = ass.colors;

		$.barChart("bar-chart", DataLabelss, DataCnts, DataClrs, DataTitle);

	});


	$(".pt-adminlines a").on("click", function(){
		var t = $(this).attr('href').replace('#','');
		var ids = $(this).attr('rel');
		$.get(path+"/ajax.php?pg=adminstats&request="+t, function(puerto) {
			var ass = JSON.parse(puerto);
			var DataLabelss = ass.labels;
			var DataCnts = ass.data;
			var DataTitle = ass.title;

			$.lineChart(DataLabelss,DataCnts, DataTitle);
		});
		return false;
	});


	$(".pt-adminbars a").on("click", function(){
		var t = $(this).attr('href').replace('#','');
		var ids = $(this).attr('rel');
		$.get(path+"/ajax.php?pg=adminstatsbars&request="+t, function(puerto) {
			var ass = JSON.parse(puerto);
			var DataLabelss = ass.labels;
			var DataCnts = ass.data;
			var DataTitle = ass.title;
			var DataClrs = ass.colors;

			$.barChart("bar-chart", DataLabelss, DataCnts, DataClrs, DataTitle);

		});
		return false;
	});
}

//####################################
//#####                          #####
//#####     6) User Details      #####
//#####                          #####
//####################################


$('#chooseFile').bind('change', function () {
  var filename = $("#chooseFile").val();
  
  
  
  if (/^\s*$/.test(filename)) {
    $(".file-upload").removeClass('active');
    $("#noFile").text(lang.alerts.nofile);
  }
  else {
    $(".file-upload").addClass('active');
    $("#noFile").text(filename.replace("C:\\fakepath\\", ""));
  }
});


//- Image Upload

$('#dropZone').imageUploader({
  fileField: '#chooseFile',
  urlField: '#url',
  hideFileField: false,
  hideUrlField: false,
  url: path+'/ajax.php?pg=imageupload',
  thumbnails: {
    div: '#thumbnails',
    crop: 'zoom',
    width: 150,
    height: 150
  },
  afterUpload: function (data) { console.log('after upload', data); $("[name=reg_photo]").val(data); },
  onFileAdded: function(file)        { console.log(file); },
  onFilesSelected: function()        { console.log('file selected'); },
  onUrlSelected: function()          { console.log('url selected'); },
  onDragStart: function(event)       { console.log(event); },
  onDragEnd: function(event)         { console.log(event); },
  onDragEnter: function(event)       { console.log(event); },
  onDragLeave: function(event)       { console.log(event); },
  onDragOver: function(event)        { console.log(event); },
  onDrop: function(event)            { console.log(event); },
  onUploadProgress: function(event)  { console.log(event); },
  beforeUpload: function()           { console.log('before upload'); $("#thumbnails").html(""); return true; },
  error: function(msg) { alert(msg); },
});

$('#user-send-details').livequery('submit', function(){
	var th =  $(this);
	$.post(path+"/ajax.php?pg=user-send-details", $(this).serialize(), function(puerto){
	    console.log(puerto);
		if(puerto.type == 'success') {
			$.puerto_confirm( lang.success, puerto.msg, "green");
		} else {
			$.puerto_confirm( lang.error, puerto.msg, "red");
		}
	}, 'json');

	return false;
});

$('#send-reset-password').on('submit', function(){
	var th =  $(this);
	$.post(path+"/ajax.php?pg=resetpassword", $(this).serialize(), function(puerto){
		if(puerto.type == 'success') {
			setTimeout(function(){ $(location).attr('href',path+'/index.php'); }, 3000);
			$.puerto_confirm( lang.success, puerto.alert, "green");
		} else {
			$.puerto_confirm( lang.error, puerto.alert, "red");
		}
	}, 'json');
	return false;
});

$('#password-reset').on('submit', function(){
	var th =  $(this);
	$.post(path+"/ajax.php?pg=sendpassword", $(this).serialize(), function(puerto){
		if(puerto.type == 'success') {
			setTimeout(function(){ $(location).attr('href',path+'/index.php'); }, 3000);
			$.puerto_confirm( lang.success, puerto.alert, "green");
		} else {
			$.puerto_confirm( lang.error, puerto.alert, "red");
		}
	}, 'json');
	return false;
});


$(".pt-sendsettings").on("submit", function(){
    var formData = new FormData($(this)[0]);

	$.ajax({
			url: path+'/ajax.php?pg=sendsettings',
			type: 'POST',
			data: formData,
			async: false,
			success: function (data) {
					$.puerto_confirm(lang.success, data.alert, "green");
			},
			error: function (data) {
					$.puerto_confirm(lang.error, data.alert, "red");
			},
			cache: false,
			contentType: false,
			processData: false
	});
	/*$.post(path+"/ajax.php?pg=sendsettings", $(this).serialize(), function(puerto){
		if(puerto.type == 'success'){
			$.puerto_confirm(lang.success, puerto.alert, "green");
		} else {
			$.puerto_confirm(lang.error, puerto.alert, "red");
		}
	}, 'json');*/
	return false;
});

$(".pt-sendlanguage").on("submit", function(){
	$.post(path+"/ajax.php?pg=sendlanguage", $(this).serialize(), function(puerto){
		console.log(puerto);
		if(puerto.type == 'success'){
			$.puerto_confirm(lang.success, puerto.alert, "green");
		} else {
			$.puerto_confirm(lang.error, puerto.alert, "red");
		}
	}, 'json');
	return false;
});


$(".pt-sendpage").livequery("submit", function(){
	$.post(path+"/ajax.php?pg=sendpage", $(this).serialize(), function(puerto){
		if(puerto.type == 'success'){
			$.puerto_confirm(lang.success, puerto.alert, "green");
		} else {
			$.puerto_confirm(lang.error, puerto.alert, "red");
		}
	}, 'json');
	return false;
});

$("#sendplans").livequery("submit", function(){
	$.post(path+"/ajax.php?pg=sendplans", $(this).serialize(), function(puerto){
		if(puerto.type == 'success'){
			$.puerto_confirm(lang.success, puerto.alert, "green");
		} else {
			$.puerto_confirm(lang.error, puerto.alert, "red");
		}
	}, 'json');
	return false;
});

$(".sendpaypalplan").livequery("submit", function(){
	$.post(path+"/ajax.php?pg=sendpaypalplan", $(this).serialize(), function(puerto){
		if(puerto.type == 'success'){
			$.puerto_confirm(lang.success, puerto.alert, "green");
			$(location).attr('href', puerto.url);
		} else {
			$.puerto_confirm(lang.error, puerto.alert, "red");
		}
	}, 'json');
	return false;
});

$("#btn-om").livequery("click", function(){
    $('#btn-momo .superpo').css('opacity', '0');
    $('#btn-cash .superpo').css('opacity', '0');
    $('#btn-paypal .superpo').css('opacity', '0');
    if($('#btn-om .superpo').css('opacity') == '0.5'){
        $('#btn-om .superpo').css('opacity', '0');
    }else{
        $('#btn-om .superpo').css('opacity', '0.5');
    }
    
    $('.desc-pay-momo').hide("slow");
    $('.desc-pay-paypal').hide("slow");
    $('.desc-pay-cash').hide("slow");
    $('.desc-pay-om').toggle("slow");
	return false;
});
$("#btn-momo").livequery("click", function(){
    $('#btn-om .superpo').css('opacity', '0');
    $('#btn-cash .superpo').css('opacity', '0');
    $('#btn-paypal .superpo').css('opacity', '0');
    if($('#btn-momo .superpo').css('opacity') == '0.5'){
        $('#btn-momo .superpo').css('opacity', '0');
    }else{
        $('#btn-momo .superpo').css('opacity', '0.5');
    }
    
    $('.desc-pay-cash').hide("slow");
    $('.desc-pay-om').hide("slow");
    $('.desc-pay-paypal').hide("slow");
    $('.desc-pay-momo').toggle("slow");
	return false;
});
$("#btn-cash").livequery("click", function(){
    $('#btn-om .superpo').css('opacity', '0');
    $('#btn-momo .superpo').css('opacity', '0');
    $('#btn-paypal .superpo').css('opacity', '0');
    if($('#btn-cash .superpo').css('opacity') == '0.5'){
        $('#btn-cash .superpo').css('opacity', '0');
    }else{
        $('#btn-cash .superpo').css('opacity', '0.5');
    }
    
    $('.desc-pay-om').hide("slow");
    $('.desc-pay-momo').hide("slow");
    $('.desc-pay-paypal').hide("slow");
    $('.desc-pay-cash').toggle("slow");
	return false;
});

$("#btn-paypal").livequery("click", function(){
    $('#btn-om .superpo').css('opacity', '0');
    $('#btn-momo .superpo').css('opacity', '0');
    $('#btn-cash .superpo').css('opacity', '0');
    if($('#btn-paypal .superpo').css('opacity') == '0.5'){
        $('#btn-paypal .superpo').css('opacity', '0');
    }else{
        $('#btn-paypal .superpo').css('opacity', '0.5');
    }
    
    $('.desc-pay-cash').hide("slow");
    $('.desc-pay-om').hide("slow");
    $('.desc-pay-momo').hide("slow");
    $('.desc-pay-paypal').toggle("slow");
	return false;
});

$(".send-payment").livequery("click", function(){
    var price = $("#f_price").val();
    var payment_id = "";
    var payer_name = "";
    var plan = "";
    var payment_type = "";
    var commercial = "";
    var additional = "";
	    if((window.location.href).includes('additional')){
	        var additional = "additional";
        }
    if($('.desc-pay-cash').is(":visible")){
        plan = $('.desc-pay-cash [name=plan]').val();
        payment_type = $('.desc-pay-cash [name=payment_type]').val();
        commercial = $('.desc-pay-cash [name=commerciallist]').val();
        payment_type = $('.desc-pay-cash [name=payment_type]').val();
        if(payment_type == '' || plan == '' || commercial == '' || !$('#condgene').is(':checked') || price == ''){
        $.puerto_confirm( lang.error, '<div class="alert alert-danger">Veillez renseignez les champs requis</div>', "red");
        }else{
            $.post(path+"/ajax.php?pg=sendpaymentcash", {commercial:commercial, payer_name:payer_name, plan:plan, payment_type:payment_type, price:price, additional:additional}, function(puerto){
    		if(puerto.type == 'success') {
            	setTimeout(function(){ $(location).attr('href', path+'/payment.php'); }, 2500);
    			$.puerto_confirm( lang.success, puerto.msg, "green");
        		} else {
        			$.puerto_confirm( lang.error, puerto.msg, "red");
        		}
        	}, 'json');
        }   
    }else{
        if($('.desc-pay-om').is(":visible")){
        
        payment_id = $('.desc-pay-om [name=payment_id]').val();
        payer_name = $('.desc-pay-om [name=payer_name]').val();
        plan = $('.desc-pay-om [name=plan]').val();
        payment_type = $('.desc-pay-om [name=payment_type]').val();
        
    }else{
        
        payment_id = $('.desc-pay-momo [name=payment_id]').val();
        payer_name = $('.desc-pay-momo [name=payer_name]').val();
        plan = $('.desc-pay-momo [name=plan]').val();
        payment_type = $('.desc-pay-momo [name=payment_type]').val();
        
    }
    if(payment_id == '' || payment_type == '' || plan == '' || payer_name == '' || !$('#condgene').is(':checked') || price == ''){
        $.puerto_confirm( lang.error, '<div class="alert alert-danger">Veillez renseignez les champs requis</div>', "red");
    }else{
        $.post(path+"/ajax.php?pg=sendpayment", {payment_id:payment_id, payer_name:payer_name, plan:plan, payment_type:payment_type, price:price, additional:additional}, function(puerto){
		if(puerto.type == 'success') {
			setTimeout(function(){ $(location).attr('href', path+'/payment.php'); }, 2500);
			$.puerto_confirm( lang.success, puerto.msg, "green");
		} else {
			$.puerto_confirm( lang.error, puerto.msg, "red");
		}
	}, 'json');
    }
}
   return false; 
});

$(".send-validation-pay").livequery("click", function(){
    var id = $(this).attr('rel');
    var plan = $(this).attr('name');
    if(confirm("are you sure you want to validate?")){
		$.get(path+"/ajax.php?pg=validation-pay&id="+id+"&plan="+plan, function(puerto){
			setTimeout(function(){ location.reload(); }, 2500);
			$.puerto_confirm( lang.success, puerto.msg, "green");
		});
	}
	return false;
});



$(".send-validation-page").livequery("click", function(){
    var id = $(this).attr('rel');
    if(confirm("are you sure you want to validate?")){
		$.get(path+"/ajax.php?pg=validation-page&id="+id, function(puerto){
		    		  
			setTimeout(function(){ location.reload(); }, 2500);
			$.puerto_confirm( lang.success, puerto.msg, "green");
		});
	}
	return false;
});

$(".valid-withdrawal").livequery("click", function(){
    var id = $(this).attr('rel');
    if(confirm("are you sure you want to validate?")){
		$.get(path+"/ajax.php?pg=validation-withdrawal&id="+id, function(puerto){
			setTimeout(function(){ location.reload(); }, 2500);
			$.puerto_confirm( lang.success, puerto.msg, "green");
		});
	}
	return false;
});

// confirmation du paiement par un commercial

function validatePay (id ) {
   
        
       
    
    
        
    if(confirm("are you sure you want to confirmation?")){
		$.get(path+"/ajax.php?pg=confirmation-pay&id="+id, function(puerto){
			setTimeout(function(){ location.reload(); }, 2500);
			$.puerto_confirm( lang.success, puerto.msg, "green");
		});
	}
	return false;
}


$(".send-confirmation-pay-form").livequery("submit", function(e){
    
    var id = $(this).attr('rel');
        
       
    
  validatePay(id);
});

$(".send-confirmation-pay-text").livequery("submit", function(e){
    
    var id = $(this).attr('rel');
        
       
    
  validatePay(id);
});


$(".send-confirmation-pay").livequery("click", function(){
    var id = $(this).attr('rel');
        
       
        
    if(confirm("are you sure you want to confirmation?")){
		$.get(path+"/ajax.php?pg=confirmation-pay&id="+id, function(puerto){
			setTimeout(function(){ location.reload(); }, 2500);
			$.puerto_confirm( lang.success, puerto.msg, "green");
		});
	}
	return false;
});



$(".send-annulation-pay").livequery("click", function(){
    var id = $(this).attr('rel');
    
    if(confirm("are you sure you want to Annulate?")){
		$.get(path+"/ajax.php?pg=annulation-pay&id="+id, function(puerto){
			setTimeout(function(){ location.reload(); }, 2500);
			$.puerto_confirm( lang.success, puerto.msg, "green");
		});
	}
});

$('li').prev('br').remove();
$('li').next('br').remove();

//- Wysibb Editor
if($("#wysibb-editor").length){
	var textarea = document.getElementById('wysibb-editor');
	sceditor.create(textarea, {
		format: 'bbcode',
		style: path+'/js/minified/themes/content/default.min.css',
		emoticonsRoot: path+'/js/minified/',
		height: 400,
		toolbarExclude: 'indent,outdent,email,date,time,ltr,rtl,print,subscript,superscript,table,code,quote,emoticon',
		icons: 'material'
	});
	var body = sceditor.instance(textarea).getBody();
	sceditor.instance(textarea).keyUp(function(e) {
		var val = sceditor.instance(textarea).val();
		sceditor.instance(textarea).updateOriginal();
	});
}

$(".userstatus").on("change", function(){
	var mm = !$(this).is(":checked") ? "are you sure you want to disaprove/banned this user?": "are you sure you want to approve this user?";
	var pr = $(this).val() ? true : false;

	if(confirm(mm)){
		$.post(path+"/ajax.php?pg=userstatus", {status: $(this).is(":checked"), value: $(this).val() }, function(puerto){
		});
	} else {
		$(this).prop('checked',pr);
	}

});

$(".familystatus").on("change", function(){

	$.post(path+"/ajax.php?pg=familystatus", {status: $(this).is(":checked"), value: $(this).val() }, function(puerto){

	});

});

$(".pt-delete").on("click", function(){
	var th = $(this),
			table = $(this).data("request");
	if(confirm("are you sure you want to delete?")){
		$.get(path+"/ajax.php?pg=delete&id="+$(this).data("id")+"&request="+$(this).data("request"), function(puerto){
			if(table == "languages") location.reload();
			th.parent().parent().parent().parent().fadeOut();
		});
	}
	return false;
});

// *** Copy Affiliate Link
$("#btn-copy-affiliate-link").on("click", function(){
	var btn = $(this);
    var input = $("#input-copy-affiliate-link").val();
    navigator.clipboard.writeText(input);
    btn.text('Good');
	return false;
});

$('.delete-bind').livequery('click', function(){
	var id = $(this).attr('rel');

	if(confirm(lang.alerts.de_mem)){
		$.get(path+"/ajax.php?pg=delete-bind&id="+id, function(d){
			// alert(d);
			location.reload();
		});
	}

	return false;
});



if($('.my').length){
 $('.my').iconpicker({placement: 'bottom'});
}


if((window.location.href).includes('/index/affiliate')){
    var th =  $('.register-link');
	$('#send-login').hide();
	$('#send-user').show();

	$('.register-link').addClass("active");
	$('.login-link').removeClass("active");

}

} ( jQuery ) )
