<<<<<<< HEAD
!function(){const t=document.querySelectorAll(".wp-block-lfdb-mega-menu__toggle");class e{constructor(t,e){this.toggleButton=t,this.menu=e,this.toggleButton.addEventListener("click",(()=>this.toggleMenu())),document.addEventListener("click",(t=>{console.log(t.target),this.closeMenuOnClickOutside(t)}))}toggleMenu(){this.menu.classList.toggle("is-active")}closeMenuOnClickOutside(t){this.menu.contains(t.target)||t.target===this.toggleButton||this.menu.classList.remove("is-active")}}t.forEach((t=>{const n=document.getElementById(t.getAttribute("data-lfdb-section-menu-target"));new e(t,n)}))}();
=======
var __webpack_exports__ = {};
/*!************************************!*\
  !*** ./src/lfdb-mega-menu/view.js ***!
  \************************************/
(function () {
  "use-strict";

  const megaMenuMenuItems = document.querySelectorAll(".wp-block-lfdb-mega-menu__toggle");
  class MenuToggle {
    constructor(toggleButtonId, menuId) {
      this.toggleButton = toggleButtonId;
      this.menu = menuId;

      // Attach event listener
      this.toggleButton.addEventListener("click", () => this.toggleMenu());

      // Close the menu when clicking outside
      document.addEventListener("click", event => this.closeMenuOnClickOutside(event));
    }
    toggleMenu() {
      // Toggle the "hidden" class on the menu
      this.toggleButton.classList.toggle("is-active");
      this.menu.classList.toggle("is-active");
    }
    closeMenuOnClickOutside(event) {
      // Close the menu if clicking outside of it
      if (!this.menu.contains(event.target) && event.target !== this.toggleButton) {
        this.toggleButton.classList.remove("is-active");
        this.menu.classList.remove("is-active");
      }
    }
  }
  megaMenuMenuItems.forEach(menuItem => {
    const itemTarget = document.getElementById(menuItem.getAttribute("data-lfdb-section-menu-target"));
    const megaMenuItem = new MenuToggle(menuItem, itemTarget);
  });
})();

//# sourceMappingURL=view.js.map
>>>>>>> 82096cc9ecff279cf5c3883ef42a509cf4619c6a
