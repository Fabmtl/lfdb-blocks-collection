(()=>{const e=document.getElementById("slide-search"),t=document.getElementById("slide-search-send"),l=document.getElementById("s"),d=document.getElementById("lfdb-search-block");window.getComputedStyle(d,null);let n="200";var o,u;function i(e){l.style.maxWidth=e,o=e}n+="px",o=window.getComputedStyle(l).maxWidth,t.addEventListener("click",(t=>(clearTimeout(u),"0px"==o?(t.preventDefault(),i("200px"),void(u=setTimeout(i,4e3,"0px"))):""==l.value?(t.preventDefault(),void i("0px")):(console.log(o),console.log(l.value),void e.submit()))),!1),l.addEventListener("input",(e=>{clearTimeout(u),u=null,""==e.target.value&&(u=setTimeout(i,4e3,"0px"))}))})();