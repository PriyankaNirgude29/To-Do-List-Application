function newItem(){
//1. Adding a new item to the list of items:
   let Li = $('<li></li>');
   let InputValue = $("#input").val();
   Li.append(InputValue);

   if (InputValue === '') {
     alert("You must write something!");
   } else {
   $('#list').append(Li);
   }

 //2. Crossing out an item from the list of items:
   function crossOut() {
 		Li.toggleClass("strike");
 	}

 	Li.on("dblclick", function crossOut(){
    Li.toggleClass("strike");
  });

 //3(i). Adding the delete button "X":
   let CrossOutButton = $('<crossOutButton></crossOutButton>');
 	CrossOutButton.append(document.createTextNode("X"));
 	Li.append(CrossOutButton);


  CrossOutButton.on("click", deleteListItem);

  function deleteListItem(){
    Li.addClass("delete");
  }

 // 4. Reordering the items:
   $('#list').sortable();

}
