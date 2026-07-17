document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 1.2s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 200);
});

document.querySelectorAll('.card').forEach(el => {
    el.addEventListener('mouseenter', () => {
        el.style.transition = 'transform 0.4s ease, box-shadow 0.4s ease';
        el.style.transform = 'translateY(-6px)';
        el.style.boxShadow = '0 40px 80px -20px rgba(183, 140, 250, 0.08)';
    });
    el.addEventListener('mouseleave', () => {
        el.style.transform = 'translateY(0)';
        el.style.boxShadow = 'none';
    });
});