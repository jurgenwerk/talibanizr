
// for the first 5 seconds try to rename link texts because each 
// iframe asynchronously takes undetermined time to load their content

var freq = 500; 
var count_p = 0;
renameLinks_p();

function renameLinks_p() {
   
    myInterval = setInterval("renameLinks()", freq);  // run
}

function renameLinks(){

	 if(count_p == 10) 
    	clearInterval(myInterval);  // stop

    jQuery(("a:contains('LJATASIGORTA')")).each 
			( function(sth){  
         	var x = jQuery(this).text(); 
         	x = x.replace('LJATASIGORTA', 'TALIBANI'); 
         	jQuery(this).text(x) });

	count_p++;
}