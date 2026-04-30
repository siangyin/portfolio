import { useEffect, useState } from "react"
import { CiLight } from "react-icons/ci"
import { MdDarkMode } from "react-icons/md"

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark")
      setIsDark(true)
    }
  }, [])

  const handleToggleTheme = () => {
    const nextIsDark = !isDark

    document.documentElement.classList.toggle("dark", nextIsDark)
    localStorage.setItem("theme", nextIsDark ? "dark" : "light")
    setIsDark(nextIsDark)
  }

  return (
    <button
      type="button"
      onClick={handleToggleTheme}
      className="flex h-9 w-16 items-center rounded-full border border-black/20 bg-white p-1 transition dark:border-white/20 dark:bg-slate-900"
      aria-label="Toggle theme"
    >
      <span
        className={`flex h-7 w-7 items-center justify-center rounded-full bg-black text-xs text-white transition-transform dark:bg-white dark:text-black ${
          isDark ? "translate-x-7" : "translate-x-0"
        }`}
      >
        {isDark ? <MdDarkMode /> : <CiLight />}
      </span>
    </button>
  )
}
