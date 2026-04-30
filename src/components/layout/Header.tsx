import { useEffect, useState } from "react"
import { CgMenuRightAlt, CgClose } from "react-icons/cg"

import ThemeToggle from "../ui/ThemeToggle"

const navItems = [
  { label: "01. Home", href: "#home" },
  { label: "02. About", href: "#about" },
  { label: "03. Projects", href: "#projects" },
  { label: "04. Skills", href: "#skills" },
  { label: "05. Contact", href: "#contact" },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  useEffect(() => {
    if (!isMobileMenuOpen) return

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header className="sticky top-0 z-50 bg-(--bg)/80 backdrop-blur-md dark:border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5  border-b border-black/10 dark:border-white/10">
          {/* Logo */}
          <a
            href="#home"
            onClick={closeMobileMenu}
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
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="flex h-9 w-9 items-center justify-center text-3xl md:hidden"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <CgClose /> : <CgMenuRightAlt />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div
            className={`
    absolute left-0 top-full z-50 w-full px-4 pt-4 md:hidden
    transition-all duration-300 ease-out
    ${isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}
  `}
          >
            <div className="rounded-2xl border bg-card shadow-xl shadow-black/10 dark:shadow-black/40">
              <nav className="flex flex-col divide-y divide-black/5 dark:divide-white/10">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="px-4 py-4 text-sm font-medium transition hover:bg-black/5 hover:text-green-500 dark:hover:bg-white/10"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        )}
      </header>
      {isMobileMenuOpen && (
        <div
          onClick={closeMobileMenu}
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
        />
      )}
    </>
  )
}
