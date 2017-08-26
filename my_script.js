$("#modal_trigger").leanModal({
		top: 100.0,
		overlay: 0.6,
		closeButton: ".modal_close"
});

//show div
 $("#modal_trigger").click();

  function getinfo(){
  
      mynumtel=$("#mynumtel").val();
	  code=$("#mycode").val();

  var valuesapi='{"username":"my username","nom":"my lastname","prenom":"my firstname","email":"myemail@gmail.com","tel":"0554433454"}';
   mydata = JSON.parse(valuesapi);
	  
    if(mydata!="no_data"){

	$("input[name='nom']").val(mydata.nom);
	$("input[name='prenom']").val(mydata.prenom);
	$( "input[name*='username']" ).val( mydata.username);    
	$( "input[name*='mail']" ).val( mydata.email);//name contient le mot mail
	$("input[name*='phone']").val(mydata.tel);
    $('.modal_close').click();
}
else {
alert('data not existe');
 
}
    

}
