import ThemeToggle from "../ui/ThemeToggle"

const navItems = [
  { label: "01. Home", href: "#home" },
  { label: "02. About", href: "#about" },
  { label: "03. Projects", href: "#projects" },
  { label: "04. Skills", href: "#skills" },
  { label: "05. Contact", href: "#contact" },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-(--bg)/80 backdrop-blur-md dark:border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 font-mono text-base font-bold tracking-tight"
        >
          <span className="text-green-500">&gt;_</span>
          <span>siangyin.dev</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-10 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-green-500"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border md:hidden"
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  )
}
