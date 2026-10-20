type SectionHeadingProps = {
  label: string
  title: string
  description?: string
  id: string
  inverted?: boolean
  wide?: boolean
}

function SectionHeading({
  label,
  title,
  description,
  id,
  inverted = false,
  wide = false,
}: SectionHeadingProps) {
  return (
    <div className={wide ? 'max-w-none' : 'max-w-3xl'}>
      <p
        className={`text-sm font-bold uppercase tracking-[0.18em] ${
          inverted ? 'text-brand-orange' : 'text-brand-blue'
        }`}
      >
        {label}
      </p>
      <h2
        className={`mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl ${
          inverted ? 'text-white' : 'text-brand-night'
        }`}
        id={id}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 ${wide ? 'max-w-none' : 'max-w-2xl'} text-base leading-7 sm:text-lg ${
            inverted ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
