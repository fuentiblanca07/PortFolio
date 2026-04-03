import React from 'react'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

const buttonVariants = {
  default: 'bg-blue-600 text-white hover:bg-blue-700',
  outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
  secondary: 'bg-gray-600 text-white hover:bg-gray-700',
  ghost: 'hover:bg-gray-100',
  destructive: 'bg-red-600 text-white hover:bg-red-700',
  link: 'text-blue-600 underline hover:text-blue-800',
}

const buttonSizes = {
  default: 'px-4 py-2 text-sm',
  sm: 'px-3 py-1 text-xs',
  lg: 'px-6 py-3 text-lg',
  xl: 'px-8 py-4 text-4xl',
  icon: 'p-2',
}

export const Button = React.forwardRef(
  ({ className = '', variant = 'default', size = 'default', ...props }, ref) => {
    const variantClass = buttonVariants[variant] || buttonVariants.default
    const sizeClass = buttonSizes[size] || buttonSizes.default
    
    return (
      <button
        ref={ref}
        className={twMerge(clsx(
          `inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed`,
          variantClass,
          sizeClass,
          className  // ← className now properly overrides everything above
        ))}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'