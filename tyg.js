let ar =document.querySelector('.ete')
document.addEventListener('keydown' , function(evt){
	if(evt.keyCode === 32){
	let p = 0;
for(var i =1; i < 100 ; i++ ){
	p= p + i;
	var o = ar.style.animation;
		o = p +'s linear 0s normal none infinite running rot';
		console.log(ar.style.animation);
	
		return p;
	
}
}
}
)