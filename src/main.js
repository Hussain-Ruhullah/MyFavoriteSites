chayns.ready.then(()=> {
	sites.init();
});

(function (sites, chayns, window, undefined) {

	'use strict';
	let $text = "pizza";
	let $tNum = 4;
	let $name=null;
	let $postAdresse=null;
	let $eMailAdresse=null;
	let $msg=null;
	let $resultBody=null;
	let $temp = null;
	let $timeout = 0;
	let $status=null;

	sites.init = function init(data) {
        
		//Form Values
		$name = document.querySelector("#name").value;
		$postAdresse = document.querySelector("#postAdresse").value;
		$eMailAdresse = document.querySelector("#eMailAdresse").value;
        $msg = document.querySelector("#msg").value;
        

		// start

		getJson(text)//könte function sein
        .then(data=>displayResult(data)).catch((err)=>console.error(err))

	// ES8 getJson function
	async function getJson(text){

		try{
        let response = await fetch('https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=' + $text	+ '&Skip=0&Take=' + $tNum)
        let json = await response.json();
		return json.Data
		}catch (error) {
		console.error(`readFile failed: ${error}`);
			}	
		}

		//search 
		document.querySelector('.search').addEventListener("keypress", ()=>{
			chayns.showWaitCursor()
			clearTimeout($timeout);			
			$timeout = setTimeout(()=>{
				$tNum=4;
				text= document.querySelector(".search").value;
				getJson(text).then(data=>displayResult(data))
				chayns.hideWaitCursor()
				.catch(()=>chayns.dialog.alert("No Result Found"));
			},500);
			
		});

		//loadmore
		document.querySelector("#load").addEventListener("click", ()=> {
			$tNum+=4
				getJson(text)
				.then(data=>displayResult(data))
		}, true);
	};
	// content

	function displayResult(result){
		$resultBody = document.querySelector("#accordionBody");
				var results = "";
				for (var i = 0; i < result.length; i++) {

					$temp = `<a href="https://chayns.net/${result[i].siteId}" target="_blank">
												<div class="ListItem ListItem--clickable">
													<div class="ListItem__head">
													<div class="ListItem__Image"><img  display="inline" style="width:40px" src="https://sub60.tobit.com/l/${result[i].siteId}"></div>
														<div class="ListItem__Title">
															<p class="ListItem__Title--headline" display="inline">${result[i].appstoreName}</p>
															<p class="ListItem__Title--description" display="inline"></p>
														</div>
													</div>
												</div>
											</a>`
					results += $temp;
				}
				$resultBody.innerHTML = results;
				
	}



		document.querySelector("#sendButton").addEventListener("click", ()=>{
		   $name = document.querySelector( "#name" ).value;
		   $postAdresse = document.querySelector( "#postAdresse" ).value;
		   $eMailAdresse = document.querySelector( "#eMailAdresse" ).value;
		   $msg = document.querySelector( "#msg" ).value;
		   $status=document.querySelector('#status');

		if ($name==""||$postAdresse==""||($eMailAdresse==""&&($eMailAdresse!="@"))||$msg==""){
			$status.innerHTML = "please complete the registration form"; //how to alert
		}else{
		  comment();
		}
		})

})((window.sites = {}), chayns, window);
