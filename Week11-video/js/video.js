let video

/*
function play(){
	console.log("In play")
}

function pause(){
	console.log("In pause")
}
*/


window.addEventListener('load', function() {
	console.log("Page loaded - initializing video");
	
	video = document.querySelector("#player1");
	
	video.autoplay = false;
	video.loop = false;
	
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	
	document.querySelector("#play").addEventListener("click", play);
	document.querySelector("#pause").addEventListener("click", pause);
	document.querySelector("#slower").addEventListener("click", slower);
	document.querySelector("#faster").addEventListener("click", faster);
	document.querySelector("#skip").addEventListener("click", skip);
	document.querySelector("#mute").addEventListener("click", mute);
	document.querySelector("#slider").addEventListener("change", changeVolume);
	document.querySelector("#vintage").addEventListener("click", styled);
	document.querySelector("#orig").addEventListener("click", original);
});

function play() {
	console.log("Play video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
}

function pause() {
	console.log("Pause video");
	video.pause();
}

function slower() {
	video.playbackRate *= 0.9;
	console.log("New speed: " + video.playbackRate);
}

function faster() {
	video.playbackRate *= 1.1;
	console.log("New speed: " + video.playbackRate);
}

function skip() {
	if (video.currentTime + 10 < video.duration) {
		video.currentTime += 10;
	} else {
		video.currentTime = 0;
	}
	console.log("Current time: " + video.currentTime);
}

function mute() {
	if (video.muted) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("Unmuted");
	} else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Muted");
	}
}

function changeVolume() {
	video.volume = document.querySelector("#slider").value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	console.log("Volume: " + video.volume);
}

function styled() {
	video.classList.add("oldSchool");
	console.log("Old School styling applied");
}

function original() {
	video.classList.remove("oldSchool");
	console.log("Original styling restored");
}
