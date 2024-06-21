document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('.secondary-nav ul li a');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            // 移除所有链接的active类
            navLinks.forEach(function(navLink) {
                navLink.classList.remove('active');
            });

            // 给被点击的链接添加active类
            this.classList.add('active');
            // 阻止链接默认的导航行为
            event.preventDefault();
        });
    });
});