(function() {
    var divId1 = 'left', divId2 = 'right',
        div1 = document.getElementById(divId1), div2 = document.getElementById(divId2),
        scrolled = window.pageYOffset || document.documentElement.scrollTop,
        clientHeight = document.documentElement.clientHeight,
        coordinateDiv1 = div1.getBoundingClientRect(), coordinateDiv2 = div2.getBoundingClientRect();


    window.onscroll = function () {
        var tempScroll = window.pageYOffset || document.documentElement.scrollTop;

        if(tempScroll > scrolled){
            console.log("Страница прокручивается вниз" + "scrolled " + scrolled + " " + tempScroll);
            if(tempScroll >= coordinateDiv2.height - clientHeight && !(div2.classList.contains('fixed'))){
                div2.classList.add('fixed');
                div2.style.left = coordinateDiv2.left + "px";
                div2.style.top = - (coordinateDiv2.height - clientHeight) + "px";
            }
        }else{
            console.log("Страница прокручивается вверх" + "scrolled " + scrolled + " " + tempScroll);

            if(tempScroll <= coordinateDiv2.height - clientHeight && (div2.classList.contains('fixed'))){
                div2.classList.remove('fixed');
            }
        }

        scrolled = tempScroll;
    };
})();