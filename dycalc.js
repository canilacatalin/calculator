
$(document).ready(function(){
 
	$(".openBracket").click(function(){
		$(".myOutput").append("<div class='openBracket '></div>");
	myArray.push({type:"operator", value: "("});
		
	});
	$(".closedBracket").click(function(){
		$(".myOutput").append("<div class='closedBracket'></div>");
		myArray.push({type:"operator", value: ")"});
	});
	$(".plus").click(function(){
		$(".myOutput").append("<div class='plus'></div>");
		myArray.push({type:"operator", value: "+"});
	});
	
	$(".divide").click(function(){
		$(".myOutput").append("<div class='divide'></div>");
		myArray.push({type:"operator", value: "/"});
	});
	$(".multiply").click(function(){
		$(".myOutput").append("<div class='multiply'></div>");
		myArray.push({type:"operator", value: "*"});
	});
	$(".minus").click(function(){
		$(".myOutput").append("<div class='minus'></div>");
		myArray.push({type:"operator", value: "-"});
	});
	$(".inputSign").click(function(){
		$(".myOutput").append("<div class ='bgimg '><input class='reRunCalculation	' id='number" + contor + "'  type='text'/><div>");
		myArray.push({type:"input", value:"number" + contor});
		contor++;
	});
	$(".equal").click(function(){
		$(".myOutput").append("<div class='equalsClass'><div class='bgimg equal '></div><div id='afterE'></div></div>");
		returnResult();
	});
	$(document).on("change", ".reRunCalculation", function (){
	returnResult();
    });
	
$(".clear").click(function(){	
		$(".clear").click(function(){
		clearEverything();	
		$('.myOutput').html('');
		});
	});
	
	$('body').keyup(function(e){
   if(e.keyCode == 8 &&  e.target.tagName != 'INPUT' && e.target.tagName != 'TEXTAREA')
   {
	   e.preventDefault();
	   if($('.myOutput').children().last().attr('class') !== 'equalsClass')
			{
			clear();
			}
			$('.myOutput').children().last().remove();
   }
   });
   
	$(".howToUse").click(function(){
        $(".panel").slideToggle("slow");
    });
	
	$('body').keyup(function(e){
	if(e.keyCode == 13 &&  e.target.tagName != 'INPUT' && e.target.tagName != 'TEXTAREA')
	{
	   e.preventDefault();
	$(".myOutput").append("<div class ='bgimg '><input class='reRunCalculation	' id='number" + contor + "'  type='text'/><div>");
		myArray.push({type:"input", value:"number" + contor});
		contor++;
	}
	});
	
	$('body').keyup(function(e){
	if(e.keyCode == 107 &&  e.target.tagName != 'INPUT' && e.target.tagName != 'TEXTAREA')
	{
	   e.preventDefault();
	   $(".myOutput").append("<div class='plus'></div>");
		myArray.push({type:"operator", value: "+"});
	}
	});
	$('body').keyup(function(e){
	if(e.keyCode == 109 &&  e.target.tagName != 'INPUT' && e.target.tagName != 'TEXTAREA')
	{
	   e.preventDefault();
		$(".myOutput").append("<div class='minus'></div>");
		myArray.push({type:"operator", value: "-"});
	}
	});
	$('body').keyup(function(e){
	if(e.keyCode == 111 &&  e.target.tagName != 'INPUT' && e.target.tagName != 'TEXTAREA')
	{
	   e.preventDefault();
	   $(".myOutput").append("<div class='divide'></div>");
		myArray.push({type:"operator", value: "/"});
	}
	});
	$('body').keyup(function(e){
	if(e.keyCode == 106 &&  e.target.tagName != 'INPUT' && e.target.tagName != 'TEXTAREA')
	{
	   e.preventDefault();
	   $(".myOutput").append("<div class='multiply'></div>");
		myArray.push({type:"operator", value: "*"});
	}
	});
});	

 
var contor = 0;

var myArray = [];

var clear = function()
{	
	myArray.pop();
	contor-= 1;
}
var clearEverything = function()
{
	myString = "";
	contor = 0;
	myArray = [];
}

var returnResult = function()
{
	var myString = "";
	for(var position in myArray)
{
	var element = myArray[position];
	if(element.type === "operator")
	{
		myString+=element.value;
	}
	else
	{
	myString+=document.getElementById(element.value).value;
	}
}
var result = nerdamer(myString).evaluate();
document.getElementById('getResult').innerHTML = result.text();
var forEqual = document.getElementById('getResult').innerHTML = result.text();
document.getElementById('afterE').innerHTML = forEqual;
return result.text();
}


