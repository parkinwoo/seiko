function afterLoading(){
		var gnbWrap = document.querySelector('#gnb-nav');
		var mainMenu = document.querySelectorAll('#gnb-nav > ul > li > a');

		for (var i in mainMenu){
			mainMenu[i].onmouseover = mainMenu[i].onfocus = mainMenuHandler;
		}
		function mainMenuHandler(){
			gnbWrap.setAttribute('class','on');
		}
		gnbWrap.onmouseleave = gnbMouseleaveHandler;

		function gnbMouseleaveHandler(){
			gnbWrap.setAttribute('class','');
		}
	}
	if (window.addEventListener){
	  window.addEventListener('load',afterLoading);
	} else {
	  window.addEventListener('onload',afterLoading);
	} 
