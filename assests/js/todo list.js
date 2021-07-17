//check off selected todo by clicking
$("ul").on("click", "li" ,function(){
   $(this).toggleClass("completed");
});
//deleting the existing todo
$("ul").on("click" ,"span" ,function(){
   $(this).parent().fadeOut(500,function(){
      $(this).remove();
   });
   event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
   if(event.which === 13){
      //grabbing new todos from input
   var todotext =  $(this).val();
   $(this).val("");
   //create a new li and add to ul
   $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todotext + "</li>");
   }
});
$(".fa-plus").click(function(){
   $("input[type='text']").fadeToggle();
});