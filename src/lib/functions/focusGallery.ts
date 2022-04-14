export default function focusGallery(node) {
	const focusGallery = document.querySelector<HTMLInputElement>('.gallery');
	console.log(focusGallery);
	focusGallery.focus();

	return {
		destroy() {
			document.querySelector<HTMLInputElement>('.gallery');
		}
	};
}
