document.addEventListener('scroll', function() {
    const circle = document.querySelector('.circle');
    const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    const dashoffset = 150.796 * (1 - scrollPercentage);
    circle.style.strokeDashoffset = dashoffset;
});