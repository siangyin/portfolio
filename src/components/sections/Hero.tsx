export default function Hero() {
  return (
    <section className="py-20 max-w-4xl">
      <h1 className="text-4xl font-bold leading-tight">
        I build practical web tools
        <br />
        for real-world problems.
      </h1>

      <p className="text-muted mt-4 max-w-xl">
        Frontend / Product Engineer focused on building clean, usable, and
        production-ready applications.
      </p>

      {/* Terminal card */}
      <div className="mt-10 border rounded-xl p-6 bg-card text-sm font-mono">
        <pre>
          {`{
  "name": "Siangyin",
  "role": "Frontend Engineer",
  "stack": ["React", "TypeScript"],
  "building": ["Finance App", "OTA Platform"]
}`}
        </pre>
      </div>
    </section>
  )
}
