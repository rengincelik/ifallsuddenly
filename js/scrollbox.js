import { t, onLangChange } from "./i18n.js";

export function initScrollBoxes() {
	const boxes = document.querySelectorAll(".scroll-box");
	const states = [];

	boxes.forEach((box) => {
		const button = document.querySelector(
			`[data-scroll-toggle="${box.id}"]`
		);

		if (!button) return;

		let expanded = false;
		let scrollTimer;

		function updateButton() {
			button.hidden = !expanded &&
				box.scrollHeight <= box.clientHeight + 1;

			button.textContent = expanded
				? t("scrollBox.collapse")
				: t("scrollBox.expand");

			button.setAttribute("aria-expanded", String(expanded));
		}

		button.addEventListener("click", () => {
			expanded = !expanded;

			box.classList.toggle("is-expanded", expanded);
			updateButton();
		});

		box.addEventListener("scroll", () => {
			box.classList.add("is-scrolling");

			clearTimeout(scrollTimer);

			scrollTimer = setTimeout(() => {
				box.classList.remove("is-scrolling");
			}, 800);
		}, { passive: true });

		// İçerik değişirse butonun gerekliliğini yeniden kontrol et.
		const observer = new MutationObserver(updateButton);

		observer.observe(box, {
			childList: true,
			subtree: true,
			characterData: true,
		});

		states.push(updateButton);
		updateButton();
	});

	// Pencere boyutu değişince taşma durumunu tekrar hesapla.
	window.addEventListener("resize", () => {
		states.forEach(update => update());
	});

	// Dil değişince buton metinlerini güncelle.
	onLangChange(() => {
		states.forEach(update => update());
	});
}