const video = document.querySelector('video');
window.addEventListener('load',function(){
    console.log('Video is loaded.');
});

window.addEventListener('unload',function(){
    console.log('Video is unloaded.');
});
window.addEventListener('scroll',function(){
    console.log('Window is scrolling.');
});
window.addEventListener('resize',function(){
    const width = window.outerWidth;
    const height = window.outerHeight;
    console.log(`height: ${height}, width:${width}`);
});
video.addEventListener('canplay',function(){
    console.log('canplay');
});
video.addEventListener('play',function(){
    console.log('play');
});
video.addEventListener('pause',function(){
    console.log('pause');
});
video.addEventListener('playing',function(){
    console.log('playing');
});
video.addEventListener('ended',function(){
    console.log('Thanks for watching.');
});
video.addEventListener('volumechange',function(){
    console.log('Volume Changed.');
});

const details = document.querySelector('details');
details.addEventListener('toggle', function(e){
    console.log(e.target.open);
})
