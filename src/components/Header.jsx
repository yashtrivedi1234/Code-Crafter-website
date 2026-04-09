import PillNav from "./ui/PillNav";
import StaggeredMenu from "./ui/StaggeredMenu"; // Make sure this path is correct
import logo from "../assets/cc-logo.webp";

const navItems = [
  { label: "What We Do", href: "/what-we-do" },
  { label: "Our Work", href: "/our-work" },
  { label: "Case Study", href: "/case-study" },
  { label: "Resource", href: "/resource" },
  { label: "The Company", href: "/company" },
  { label: "Join Us", href: "/join-us" },
  { label: "Contact Us", href: "/contact" },
];

// StaggeredMenu expects 'link' instead of 'href', so we map the array here
const mobileMenuLinks = navItems.map(item => ({
  label: item.label,
  link: item.href
}));

export default function Header() {
  return (
    <header className="relative w-full h-24">
      
      {/* =========================================
          DESKTOP VIEW (PillNav)
          'hidden md:block' -> Mobile pe hide, Desktop pe show
      ========================================= */}
      <div className="hidden md:block">
        <PillNav
          logo={logo}
          logoAlt="Webmind Apps Logo"
          items={navItems}
          activeHref="/"
          ease="power2.easeOut"
          baseColor="rgb(23, 94, 117)"
          pillColor="#ffffff"
          pillTextColor="rgb(23, 94, 117)"
          hoveredPillTextColor="#ffffff"
          theme="light"
          initialLoadAnimation
        />
      </div>

      {/* =========================================
          MOBILE VIEW (Staggered Hamburger Menu)
          'block md:hidden' -> Mobile pe show, Desktop pe hide
      ========================================= */}
      <div className="block md:hidden">
        <StaggeredMenu
          items={mobileMenuLinks}
          logoUrl={logo}
          position="right"
          // Pre-layers animation colors matching your teal theme
          colors={['#e0f2f7', '#88c5d8', 'rgb(23, 94, 117)']}
          accentColor="rgb(23, 94, 117)"      // Text hover color
          menuButtonColor="rgb(23, 94, 117)"  // Hamburger button color
          openMenuButtonColor="#000000"       // 'Close' text color when menu is open
          isFixed={true}                      // Makes the menu overlay the entire screen
          displayItemNumbering={true}
          displaySocials={false}              // Set to true if you pass socialItems
        />
      </div>

    </header>
  );
}