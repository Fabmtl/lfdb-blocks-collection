( function(){

    'use-strict';

    const hamburgerOpen= document.querySelector(".wp-block-lfdb-lfdb-hamburger");
    const blockNavigationMobile = document.getElementById("lfdb-section-menu-mobile");
    const body = document.body;

    hamburgerOpen.addEventListener("click",function(){    
        if( hamburgerOpen.classList.contains("is-active") ) {
            hamburgerOpen.classList.remove("is-active");
            blockNavigationMobile.classList.remove("is-active");
            body.classList.remove("menu-mobile-is-active");

            return;
        }
        hamburgerOpen.classList.add("is-active");
        blockNavigationMobile.classList.add("is-active");
        body.classList.add("menu-mobile-is-active");

    });
})()