document.addEventListener('scroll', function() {
    const circle = document.querySelector('.circle');
    const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    const dashoffset = 150.796 * (1 - scrollPercentage);
    circle.style.strokeDashoffset = dashoffset;
});


$(document).ready(function() {      
    // $(document).mouseup(function(e) {
    // for (let index = 0; index < 10; index+0) {
        $(document).mousemove(function(e) {
            $('#dot').css({
            left: (e.clientX) + 'px',
            top: (e.clinetY) + 'px'
            });
        });
        
    // }
    // })

        // var dot = $('#dot');
        // var mouseX = 0, mouseY = 0;

        // $(document).mousemove(function(e) {
        //     mouseX = e.pageX;
        //     mouseY = e.pageY;
        // });

        // function moveDot() {
        //     dot.css({
        //         left: mouseX + 'px',
        //         top: mouseY + 'px'
        //     });
        //     requestAnimationFrame(moveDot);
        // }

        // moveDot();
      


});














// $(".single-cat").mouseenter(function(){
//     $(".CEOs .par-ul").stop(true, true).slideDown(300).;
//     console.log("kk");
// });

// $(".single-cat").mouseleave(function() {
//     $(".CEOs .par-ul").stop(true, true).slideUp(300);
// });

