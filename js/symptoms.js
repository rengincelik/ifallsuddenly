// Belirti akışı (Narkolepsi bölümü).
// narcolepsy.symptoms.* verisini #symptoms içine çizer, dil değişince yeniden çizer.
// Veri yoksa (items dizi değil ya da boş) bölüm gizli kalır.
// Metinler textContent ile eklenir, innerHTML kullanılmaz.
//
// HTML kancaları (#symptoms içinde): .symptoms-title, .symptoms-lead, [data-symptom-list], .symptoms-note
// Dil anahtarları: narcolepsy.symptoms = { title, lead?, items: [{ image?, alt?, when?, title, body }], note? }
//   image: görsel yolu (ör. "assets/symptoms/eds.webp"). Yoksa ya da dosya yüklenemezse yer tutucu görünür.
//   alt:   görselin açıklaması (yer tutucu süs olduğu için ekran okuyucudan gizlenir). Süs görseli için "" ver.
import { t, get, onLangChange } from "./i18n.js";

// Görsel boyutu (oran 4:3). CSS'teki .symptom-media aspect-ratio ile aynı olmalı, sayfa kaymasını önler.
const IMG_W = 400;
const IMG_H = 300;
const SVG_NS = "http://www.w3.org/2000/svg";

function node(tag, className, text) {
	const el = document.createElement(tag);
	if (className) el.className = className;
	el.textContent = text;
	return el;
}

// Yer tutucu: görsel gelene kadar kartın üstünde boş bir çerçeve (resim simgesi). Süstür, ekran okuyucudan gizli.
function placeholder() {
	const box = document.createElement("div");
	box.className = "symptom-media is-placeholder";
	box.setAttribute("aria-hidden", "true");

	const svg = document.createElementNS(SVG_NS, "svg");
	svg.setAttribute("viewBox", "0 0 24 24");
	svg.setAttribute("width", "36");
	svg.setAttribute("height", "36");
	svg.setAttribute("fill", "none");
	svg.setAttribute("stroke", "currentColor");
	svg.setAttribute("stroke-width", "1.5");
	svg.setAttribute("stroke-linecap", "round");
	svg.setAttribute("stroke-linejoin", "round");
	for (const [tag, attrs] of [
		["rect", { x: 3, y: 4, width: 18, height: 16, rx: 2 }],
		["circle", { cx: 9, cy: 10, r: 1.6 }],
		["path", { d: "m21 16-5-5-8 9" }],
	]) {
		const el = document.createElementNS(SVG_NS, tag);
		for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
		svg.appendChild(el);
	}
	box.appendChild(svg);
	return box;
}

// Görsel alanı: image varsa <img>, yüklenemezse yer tutucuya döner.
function media(item) {
	if (typeof item.image !== "string" || !item.image) return placeholder();

	const box = document.createElement("div");
	box.className = "symptom-media";

	const img = document.createElement("img");
	img.src = item.image;
	img.alt = typeof item.alt === "string" ? item.alt : "";
	img.width = IMG_W;
	img.height = IMG_H;
	img.loading = "lazy";
	img.decoding = "async";
	img.addEventListener("error", () => box.replaceWith(placeholder()), { once: true });

	box.appendChild(img);
	return box;
}

// İsteğe bağlı metin: yoksa eleman gizlenir (t() eksik anahtarda yolu döndürdüğü için get() kullanılır)
function setOptional(el, path) {
	const value = get(path);
	const has = typeof value === "string" && value.length > 0;
	el.textContent = has ? value : "";
	el.hidden = !has;
}

export function initSymptoms() {
	const root = document.getElementById("symptoms");
	if (!root) return;

	const title = root.querySelector(".symptoms-title");
	const lead = root.querySelector(".symptoms-lead");
	const list = root.querySelector("[data-symptom-list]");
	const note = root.querySelector(".symptoms-note");

	const render = () => {
		const items = get("narcolepsy.symptoms.items");
		if (!Array.isArray(items) || !items.length) {
			root.hidden = true;
			return;
		}
		root.hidden = false;

		title.textContent = t("narcolepsy.symptoms.title");
		setOptional(lead, "narcolepsy.symptoms.lead");
		setOptional(note, "narcolepsy.symptoms.note");

		// --p: kartın akıştaki konumu (0% gündüz → 100% gece), CSS renk geçişini buradan alır
		const last = items.length - 1;
		list.replaceChildren(
			...items.map((item, i) => {
				const li = document.createElement("li");
				li.className = "symptom";
				li.style.setProperty("--p", `${last ? Math.round((i / last) * 100) : 0}%`);
				li.append(media(item));
				if (item.when) li.append(node("span", "symptom-when", item.when));
				li.append(node("h4", "symptom-title", item.title), node("p", "symptom-body", item.body));
				return li;
			})
		);
	};

	render();
	onLangChange(render);
}
