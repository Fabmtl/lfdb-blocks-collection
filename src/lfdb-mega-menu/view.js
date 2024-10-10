(function () {
	"use-strict";

	const megaMenuMenuItems = document.querySelectorAll(
		".wp-block-lfdb-mega-menu__toggle",
	);

	class MenuToggle {
		constructor(toggleButtonId, menuId) {
			this.toggleButton = toggleButtonId;
			this.menu = menuId;

			// Attach event listener
			this.toggleButton.addEventListener("click", () => this.toggleMenu());

			// Close the menu when clicking outside
			document.addEventListener("click", (event) =>
				this.closeMenuOnClickOutside(event),
			);
		}

		toggleMenu() {
			// Toggle the "hidden" class on the menu
			this.menu.classList.toggle("is-active");
		}

		closeMenuOnClickOutside(event) {
			// Close the menu if clicking outside of it
			if (
				!this.menu.contains(event.target) &&
				event.target !== this.toggleButton
			) {
				this.menu.classList.remove("is-active");
			}
		}
	}

	megaMenuMenuItems.forEach((menuItem) => {
		const itemTarget = document.getElementById(
			menuItem.getAttribute("data-lfdb-section-menu-target"),
		);
		const megaMenuItem = new MenuToggle(menuItem, itemTarget);
	});
})();
