'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

export function NavLinks({dark}: {dark?: boolean}) {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  let timeoutRef = useRef<number | null>(null)

  return [
    ['About us', '/about'],
    ['Programs', '/programs'],
    ['Support', '/support'],
    ['Contact', '/contact'],
    // ['대표인사', '/#ceo-message'],
    // ['연혁', '/#company-history'],
    // ['논문', '/#docs'],
  ].map(([label, href], index) => (
    <Link
      key={label}
      href={href}
      className={`relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm font-semibold 
        ${dark ? 'text-white' : 'text-gray-900'}
        transition-colors delay-150 
        hover:text-gray-900
        hover:delay-0`}
      onMouseEnter={() => {
        if (timeoutRef.current) {
          window.clearTimeout(timeoutRef.current)
        }
        setHoveredIndex(index)
      }}
      onMouseLeave={() => {
        timeoutRef.current = window.setTimeout(() => {
          setHoveredIndex(null)
        }, 200)
      }}
    >
      <AnimatePresence>
        {hoveredIndex === index && (
          <motion.span
            className={`absolute inset-0 rounded-lg ${dark ? 'bg-ainblue-800' : 'bg-gray-200'}`}
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15 },
            }}
          />
        )}
      </AnimatePresence>
      <span className="relative z-10">{label}</span>
    </Link>
  ))
}
