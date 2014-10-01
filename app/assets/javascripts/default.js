function toggleSideNav(x){
	if(x == 0){
		$('nav#left').toggleClass('open-leftn');
		$('body').toggleClass(' open-leftb');
	}else if(x == 1){
		$('nav#right').toggleClass('open-rightn');
		$('body').toggleClass(' open-rightb');
	}
}