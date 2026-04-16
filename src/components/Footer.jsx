import logo from "../assets/cc-logo.webp";

const quickLinks = [
  { label: "What We Do", href: "#" },
  { label: "Our Work", href: "#" },
  { label: "Case Study", href: "#" },
  { label: "Resource", href: "#" },
];

const companyLinks = [
  { label: "The Company", href: "#" },
  { label: "Join Us", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

const socialLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "X / Twitter", href: "#" },
  { label: "YouTube", href: "#" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#eff5f7] text-slate-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-20 h-72 w-72 rounded-full bg-[#175E75]/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-20 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 py-14 sm:px-10 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div className="space-y-5">
            <img src={logo} alt="Code Crafter" className="h-12 w-auto" />
            <p className="max-w-sm text-sm leading-7 text-slate-700">
              We build digital products that look bold, load fast, and convert better. From strategy to launch, we craft experiences that move businesses forward.
            </p>

            <div className="rounded-2xl border border-[#175E75]/15 bg-white/80 p-4 shadow-sm backdrop-blur-sm">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#175E75]">Email us</p>
              <a
                href="mailto:hello@codecrafter.com"
                className="mt-2 inline-block text-sm font-semibold text-slate-900 transition hover:text-[#175E75]"
              >
                hello@codecrafter.com
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#175E75]">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-700 transition hover:text-[#175E75]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#175E75]">Company</h3>
            <ul className="space-y-3 text-sm">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-700 transition hover:text-[#175E75]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#175E75]">Follow</h3>
            <ul className="space-y-3 text-sm">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-700 transition hover:text-[#175E75]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-[#175E75]/15 pt-6 text-sm text-slate-600 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Code Crafter. All rights reserved.</p>
          <p>Designed with strategy, crafted with precision.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;