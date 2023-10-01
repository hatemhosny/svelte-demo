/* generated by Svelte v4.0.0 */
import {
	SvelteComponent,
	append,
	append_styles,
	attr,
	detach,
	element,
	init,
	insert,
	listen,
	noop,
	safe_not_equal,
	set_data,
	space,
	src_url_equal,
	text
} from "svelte/internal";

import "svelte/internal/disclose-version";

function add_css(target) {
	append_styles(target, "svelte-b64r4w", ".container.svelte-b64r4w.svelte-b64r4w,.container.svelte-b64r4w button.svelte-b64r4w{text-align:center;font:1em sans-serif}.logo.svelte-b64r4w.svelte-b64r4w{width:150px}");
}

function create_fragment(ctx) {
	let div;
	let h1;
	let t3;
	let img;
	let img_src_value;
	let t4;
	let p;
	let t5;
	let t6;
	let t7;
	let t8;
	let button;
	let mounted;
	let dispose;

	return {
		c() {
			div = element("div");
			h1 = element("h1");
			h1.textContent = `Hello, ${title}!`;
			t3 = space();
			img = element("img");
			t4 = space();
			p = element("p");
			t5 = text("You clicked ");
			t6 = text(/*counter*/ ctx[0]);
			t7 = text(" times.");
			t8 = space();
			button = element("button");
			button.textContent = "Click me";
			attr(img, "class", "logo svelte-b64r4w");
			attr(img, "alt", "logo");
			if (!src_url_equal(img.src, img_src_value = "https://livecodes.io/livecodes/assets/templates/svelte.svg")) attr(img, "src", img_src_value);
			attr(button, "class", "svelte-b64r4w");
			attr(div, "class", "container svelte-b64r4w");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			append(div, h1);
			append(div, t3);
			append(div, img);
			append(div, t4);
			append(div, p);
			append(p, t5);
			append(p, t6);
			append(p, t7);
			append(div, t8);
			append(div, button);

			if (!mounted) {
				dispose = listen(button, "click", /*increment*/ ctx[1]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*counter*/ 1) set_data(t6, /*counter*/ ctx[0]);
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) {
				detach(div);
			}

			mounted = false;
			dispose();
		}
	};
}

let title = "Svelte";

function instance($$self, $$props, $$invalidate) {
	let counter = 0;

	function increment() {
		$$invalidate(0, counter += 1);
	}

	return [counter, increment];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {}, add_css);
	}
}

export default Component;
new Component({ target: document.querySelector("#livecodes-app") || document.body.appendChild(document.createElement('div')) });