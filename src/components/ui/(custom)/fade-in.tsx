'use client'

import { motion } from 'framer-motion'
import type React from 'react'

interface FadeInProps {
  children: React.ReactNode
  direction: 'up' | 'down' | 'right' | 'left' | undefined
  className?: string
  delay?: number
  threshold?: number
}

/**
 * FadeIn component to animate the appearance of its children.
 *
 * @param {React.ReactNode} children - The content to be animated.
 * @param {'up' | 'down' | 'right' | 'left' | undefined} direction - The direction of the animation.
 * @param {string} [className] - Additional class names for the motion div.
 * @param {number} [delay=0] - The delay before the animation starts.
 * @param {number} [threshold=5] - The threshold to adjust the delay.
 * @returns {JSX.Element} The animated component.
 */
export const FadeIn = ({
  children,
  direction,
  className,
  delay = 0,
  threshold = 5,
}: FadeInProps): JSX.Element => {
  const adjustedDelay = delay < threshold ? delay * 0.07 : delay * 0.01

  const transition = {
    duration: 0.4,
    delay: adjustedDelay,
    ease: [0.42, 0, 0.58, 1],
  }

  const variants = {
    undefined: {
      visible: { opacity: 1, scale: 1, transition },
      hidden: { opacity: 0, scale: 0, transition },
    },
    up: {
      visible: { y: 0, opacity: 1, transition },
      hidden: { y: 24, opacity: 0, transition },
    },
    down: {
      visible: { y: 0, opacity: 1, transition },
      hidden: { y: -24, opacity: 0, transition },
    },
    right: {
      visible: { x: 0, opacity: 1, transition },
      hidden: { x: -24, opacity: 0, transition },
    },
    left: {
      visible: { x: 0, opacity: 1, transition },
      hidden: { x: 24, opacity: 0, transition },
    },
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={transition}
      variants={direction ? variants[direction] : variants.undefined}
    >
      {children}
    </motion.div>
  )
}
