import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
}

function Reveal({ children, className = '' }: RevealProps) {
  return <div className={className}>{children}</div>
}

export default Reveal
