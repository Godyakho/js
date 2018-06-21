var index = 0;
var dot = document.querySelectorAll('.dotBox');
var li = dot[0].getElementsByTagName('li');
var move = document.getElementsByClassName('slide-carousel-move')[0]
var left = document.getElementById('left');
var right = document.getElementById('right');
var stop =document.getElementsByClassName('slide')[0];

function CarouselMove(e){
	if(!e||e.target.id === 'right'){
		index++;
		if(index === li.length) {
			index = 0
		}
	} else {
		index--;
		if(index < 0) {
			index = li.length - 1
		}
	}
	move.style.left = -740*index+ 'px';
	move.style.transition='left 1s';
	for(var i =0;i<li.length;i++){
		li[i].className = ''
	}
	li[index].className = 'now'
}

dot[0].addEventListener('click',function(e){
    var event = e || window.event;
    var target = event.target;
    if(target.nodeName === 'LI'){
        for(var i =0;i<li.length;i++){
                li[i].index = i;
                li[i].className = ''
        }
        target.className = 'now';
        index = target.index;
        move.style.left = -(740*index)+ 'px';
        move.style.transition='left 1s';
    }
});
left.addEventListener('click',CarouselMove);
right.addEventListener('click',CarouselMove);
var timer = setInterval(function(){
    CarouselMove()
},3000)
stop.addEventListener('mouseover',function(){
    clearInterval(timer)
});
stop.addEventListener('mouseout',function(){
    timer = setInterval(function(){
        CarouselMove()
    },3000)
})