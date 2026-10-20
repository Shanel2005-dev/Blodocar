import { Link, type LinkProps } from 'react-router-dom'
import type { ReactNode } from 'react'

type ButtonProps = Omit<LinkProps, 'to'> & {
  children: ReactNode
  to: string
  variant?: 'primary' | 'secondary'
}

const variantClasses = {
  primary:
    'bg-brand-orange text-brand-night hover:bg-brand-blue hover:text-white focus-visible:outline-brand-orange',
  secondary:
    'border border-white/30 bg-white/5 text-white hover:border-white/60 hover:bg-white/10 focus-visible:outline-orange-300',
}

function Button({
  children,
  className = '',
  to,
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <Link
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-6 py-3 font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variantClasses[variant]} ${className}`}
      to={to}
      {...props}
    >
      {children}
    </Link>
  )
}

export default Button
