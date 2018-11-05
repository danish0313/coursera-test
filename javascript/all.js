



document.addEventListener("DOMContentLoader", function(event){
	

document.querySelector("button").addEventListener("click",function (){



// call sever to get name;


$ajaxutils.sendGetRequest("data\name.json",function (res){


var message= res.firstname+""+ res.lastname;

if(res.likeschinesefood){
	
message += "likes chinese food";

}

else{
	
message +="does not like chinese food";

}

message+="and uses";
message+=res.numberofdisplays;
message+="display for coding";


document.querySelector("#two").innerHTML="<h2>"+message+"</h2>";




});




	
});
	
});

