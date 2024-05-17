'use client'

import React, { useRef, useState } from 'react'

import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'


interface DropdownItem {
  label: string;
  href?: string;
  disable?: boolean; 
}

interface DropdownMenu {
  label: string;
  href?: string;
  dropdownItems: DropdownItem[];
}

export function NavLinks({dark}: {dark?: boolean}) {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  let timeoutRef = useRef<number | null>(null)
 
  const dropdownMenus: DropdownMenu[] = [
    {
      label: 'About us',
      dropdownItems: [
        { label: '대표 인사말', href: '/about' },
        { label: '연혁', href: '/history' },
      ],
    },
    {
      label: 'Programs',
      dropdownItems: [
        { label: 'AICiTi', href: '/programs' },
        { label: 'AI model', href: '/', disable: true },
        { label: 'AI Planning', href: '/', disable: true },
        { label: 'AI Simulator', href: '/', disable: true },
      ],
    },
    {
      label: 'Support',
      dropdownItems: [
        { label: '매뉴얼', href: '/manual' },
        { label: '논문', href: '/paper' },
        { label: 'CBCT 촬영법', href: '/cbct' },
        { label: '특허', href: '/certification' },

      ],
    },
    {
      label: 'Contact',
      dropdownItems: [
        { label: 'Contact Us', href: '/contact' },
        { label: 'FAQ', href: '/', disable: true },
      ],
    },
  ];


  return (
    <>
    {dropdownMenus.map(({ label, href, dropdownItems }, index) => (
      <div key={label} className="relative">
        <div
          className={`relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm font-semibold 
          ${dark ? 'text-white' : 'text-gray-900'}
          transition-colors delay-150 
          hover:text-gray-900
          hover:delay-0`}
          onMouseEnter={() => {
            if (timeoutRef.current) {
              window.clearTimeout(timeoutRef.current);
            }
            setHoveredIndex(index);
          }}
          onMouseLeave={() => {
            timeoutRef.current = window.setTimeout(() => {
              setHoveredIndex(null);
            }, 200);
          }}
        >
        <AnimatePresence>
              {hoveredIndex === index && (
                <motion.div
                  className={`absolute inset-0 rounded-lg ${dark ? 'bg-ainblue-800' : 'bg-gray-200'}`}
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15 },
                  }}
                >
                  <div className="absolute top-full left-0 mt-2 py-2 w-48 bg-ainbg-primary rounded-lg shadow-lg z-10">
                    {dropdownItems.map((item, itemIndex) => (
                      <React.Fragment key={item.label}>
                        <Link href={item.href || '#'}>
                          <div
                            className={`block px-4 py-2 ${
                              item.disable ? 'text-gray-500' : 'text-gray-100'
                            } ${
                              !item.disable ? 'hover:bg-ainblue-800' : ''
                            }`}
                          >
                            {item.label}
                          </div>
                        </Link>
                      </React.Fragment>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <span className="relative z-10">{label}</span>
          </div>
        </div>
      ))}
    </>
  );
}