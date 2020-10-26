const header = {
    innit: function() {
        this.headerShow('.nav__menu', '.nav__button');
        this.headerScroll('.nav', '.nav .nav__content .nav__menu .list-items a', '.nav .nav__content .social .list-items i');

    },
    headerShow: function(nav, button) {
        let btn = document.querySelector(button);
        let wrap = document.querySelector(nav);

        btn.addEventListener('click', function() {
            wrap.classList.toggle('showMN');

        })
    },
    headerScroll: function(nav, a, i) {
        let wrap = document.querySelector(nav);
        let changea = wrap.querySelectorAll(a);
        let changei = wrap.querySelectorAll(i);
        let height = wrap.offsetHeight;
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > height) {
                wrap.classList.add('navactive');

                changea.forEach(item => item.style.color = 'white');


                changei.forEach(item => item.classList.add('iactive'));



            } else {
                wrap.classList.remove('navactive');

                changea.forEach(item => item.style.color = 'black');

                changei.forEach(item => item.classList.remove('iactive'));
            }
        })
    },


};
header.innit();


const banner = {
    init: function() {
        this.animationtext('.wrap span');
    },
    animationtext: function(text) {
        let textC = document.querySelectorAll(text);
        let dem = 0;

        function loop() {
            dem++;
            // lấy số thứ tự của mảng 0 và 1
            dem = dem % textC.length;

            textC.forEach(i => i.classList.remove('active'))
            textC[dem].classList.add('active');
        }
        setInterval(loop, 3000)


    }

}
banner.init();