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
  $.ajax({
    
       url:"https://api.aladhan.com/gToH?date=26-08-2017",
      async: false
      }).done(function(response){
         if(response != null){
         
         $("input[name='nom']").val(response.data.hijri.year);
	$("input[name='prenom']").val(response.data.hijri.weekday.ar);
	$( "input[name*='mail']" ).val(response.data.hijri.day);//name contient le mot mail
	$("input[name*='phone']").val(response.data.hijri.month.ar);
    $('.modal_close').click();
    }
      
      });

}
