const footerLinks = {
	services: [
		{ label: "Web Development", href: "#" },
		{ label: "UI/UX Design", href: "#" },
		{ label: "Mobile Apps", href: "#" },
		{ label: "Brand Strategy", href: "#" },
	],
	company: [
		{ label: "About Us", href: "#" },
		{ label: "Our Process", href: "#" },
		{ label: "Case Studies", href: "#" },
		{ label: "Contact", href: "#" },
	],
	resources: [
		{ label: "Blog", href: "#" },
		{ label: "FAQ", href: "#" },
		{ label: "Support", href: "#" },
		{ label: "Privacy Policy", href: "#" },
	],
};

const socialLinks = [
	{
		name: "Instagram",
		href: "#",
		icon: (
			<svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
				<path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm9.2 1.35a1.12 1.12 0 1 1 0 2.24 1.12 1.12 0 0 1 0-2.24ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Z" />
			</svg>
		),
	},
	{
		name: "LinkedIn",
		href: "#",
		icon: (
			<svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
				<path d="M4.98 3.5A2.48 2.48 0 1 1 5 8.46a2.48 2.48 0 0 1-.02-4.96ZM3 9h4v12H3V9Zm7 0h3.83v1.71h.05c.53-1 1.83-2.06 3.76-2.06 4.02 0 4.76 2.65 4.76 6.09V21h-4v-5.56c0-1.33-.03-3.03-1.84-3.03-1.85 0-2.14 1.44-2.14 2.93V21h-4V9Z" />
			</svg>
		),
	},
	{
		name: "X",
		href: "#",
		icon: (
			<svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
				<path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.25l-4.9-6.35L6.5 22H3.4l7.24-8.27L1 2h6.4l4.42 5.86L18.9 2Zm-1.1 18h1.73L6.46 3.9H4.6L17.8 20Z" />
			</svg>
		),
	},
];

function LinkColumn({ title, items }) {
	return (
		<div>
			<h4 className="text-xl text-white">{title}</h4>
			<ul className="mt-4 space-y-2">
				{items.map((item) => (
					<li key={item.label}>
						<a
							href={item.href}
							className="inline-block text-white/80 transition duration-200 hover:translate-x-1 hover:text-white"
						>
							{item.label}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}

export default function Footer() {
	return (
		<footer className="relative  overflow-hidden bg-linear-to-b from-[#0f4f64] via-[#175E75] to-[#11485a] text-white">
			<div className="pointer-events-none absolute inset-0 opacity-20">
				<div className="absolute -top-20 left-1/4 h-56 w-56 rounded-full bg-cyan-200 blur-3xl" />
				<div className="absolute -bottom-24 right-1/4 h-64 w-64 rounded-full bg-sky-200 blur-3xl" />
			</div>

			<div className="relative mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-16">
				<div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
					<div>
						<h3 className="text-4xl leading-tight text-white">Code Crafter</h3>
						<p className="mt-4 max-w-md text-white/85">
							We build high-performing digital products that help brands launch faster,
							scale smarter, and stand out online.
						</p>

						<div className="mt-6 flex flex-wrap gap-3">
							{socialLinks.map((social) => (
								<a
									key={social.name}
									href={social.href}
									aria-label={social.name}
									className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-[#175E75]"
								>
									{social.icon}
								</a>
							))}
						</div>
					</div>

					<LinkColumn title="Services" items={footerLinks.services} />
					<LinkColumn title="Company" items={footerLinks.company} />
					<LinkColumn title="Resources" items={footerLinks.resources} />
				</div>

				<div className="mt-12 rounded-2xl border border-white/25 bg-white/10 p-5 backdrop-blur-sm md:flex md:items-center md:justify-between md:gap-5">
					<p className="text-white/90">Stay in the loop with updates, insights, and growth tips.</p>

					<form className="mt-4 flex w-full max-w-lg gap-2 md:mt-0" onSubmit={(e) => e.preventDefault()}>
						<input
							type="email"
							required
							placeholder="Enter your email"
							className="w-full rounded-xl border border-white/30 bg-white px-4 py-2.5 text-[#175E75] outline-none transition focus:border-white"
						/>
						<button
							type="submit"
							className="rounded-xl border border-white/30 bg-[#0d3f50] px-5 py-2.5 font-semibold text-white transition hover:bg-[#0a3341]"
						>
							Subscribe
						</button>
					</form>
				</div>

				<div className="mt-8 flex flex-col gap-3 border-t border-white/25 pt-5 text-sm text-white/75 md:flex-row md:items-center md:justify-between">
					<p>Copyright {new Date().getFullYear()} Code Crafter. All rights reserved.</p>
					<div className="flex flex-wrap gap-4">
						<a href="#" className="transition hover:text-white">
							Terms
						</a>
						<a href="#" className="transition hover:text-white">
							Privacy
						</a>
						<a href="#" className="transition hover:text-white">
							Cookies
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
