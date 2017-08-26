$("#modal_trigger").leanModal({
		top: 100.0,
		overlay: 0.6,
		closeButton: ".modal_close"
});

 $("#modal_trigger").click();

  function getinfo(){
  
      mynumtel=$("#mynumtel").val();
	  code=$("#mycode").val();

    $.getJSON("http://localhost/my_api/get_infos.php?",{numtel: mynumtel,code:code  , ajax: 'true'},function(mydata){
   
    if(mydata!="no_data"){

	$("input[name='nom']").val(mydata.nom);
	$("input[name='prenom']").val(mydata.prenom);
	//$("input[name='email']").val(mydata.email);	
	$( "input[name*='mail']" ).val( mydata.email);//name contient le mot mail
	$("input[name*='phone']").val(mydata.tel);
    $('.modal_close').click();
}
else {
alert('data not existe');
 
}
    });

}
