function hola(){
	var search = document.getElementById("filter").value.toUpperCase();
	var items = document.getElementsByClassName("table_item");
  	// console.log(items);

  	for (var i = 0; i < items.length; i++) {

  		var values = items[i].getElementsByTagName('a')[0];
  		// console.log(values.innerHTML);
  		var found_value = values.innerHTML.toUpperCase().indexOf(search);
  		// console.log(found_value);

  		// console.log(found_value == 'A1');  // TRUE - FALSE

  		if( found_value > -1){	
  			items[i].style.display = '';
  		}else{
  			items[i].style.display = 'none';
  		}
  	}
}