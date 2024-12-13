
import type { FC, PropsWithChildren } from 'react'
import { cn } from '@/lib/utils'
interface GradientTextProps extends PropsWithChildren {
  className?: string
  from?: string
  via?: string
  to?: string
}

export const GradientText: FC<GradientTextProps> = ({
  children,
  className,
  from = 'from-red-400',
  via = 'via-green-400',
  to = 'to-blue-400',
}) => {
  return (
    <span
      className={cn(
        `bg-gradient-to-r ${from} ${via} ${to} bg-clip-text text-transparent`,
        className,
      )}
    >
      {children}
    </span>
  )
}
