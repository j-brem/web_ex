'use client'

import Link from 'next/link'
import { Popover } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'

function MenuIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronUpIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavLink(
  props: Omit<
    React.ComponentPropsWithoutRef<typeof Popover.Button<typeof Link>>,
    'as' | 'className'
  >,
) {
  return (
    <Popover.Button
      as={Link}
      className="block text-base leading-7 tracking-tight text-ainblue-600"
      {...props}
    />
  )
}

export function Header() {
  return (
    <header>
      <nav>
        <Container className="z-50 fixed w-full flex justify-between py-8 bg-ainbg-primary">
          <div className="relative z-10 flex items-center gap-16">
            <Link href="/" aria-label="Home">
              <Logo className="h-6 w-auto" />
            </Link>
            <div className="hidden lg:flex lg:gap-10">
              <NavLinks dark={true} />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-100 p-2 hover:bg-ainblue-600 hover:stroke-ainblue-600 active:stroke-ainblue-600 ui-not-focus-visible:outline-none"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <ChevronUpIcon className="h-6 w-6" />
                      ) : (
                        <MenuIcon className="h-6 w-6" />
                      )
                    }
                  </Popover.Button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <Popover.Overlay
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                        />
                        <Popover.Panel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-ainbg-primary px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
                        >
                          <div className="space-y-4">
                            <MobileNavLink href="/about">
                              About us
                            </MobileNavLink>
                            <MobileNavLink href="/programs">
                              Programs
                            </MobileNavLink>

                            <MobileNavLink href="/manualt">
                              매뉴얼
                            </MobileNavLink>

                            <MobileNavLink href="/paper">
                              논문
                            </MobileNavLink>

                            
                            <MobileNavLink href="/cbct">
                              CBCT 촬영법
                            </MobileNavLink>

                            <MobileNavLink href="/contact">
                              Contact
                            </MobileNavLink>
                            {/* <MobileNavLink href="/#ceo-message">
                              대표인사
                            </MobileNavLink>
                            <MobileNavLink href="/#company-history">
                              연혁
                            </MobileNavLink>
                            <MobileNavLink href="/#docs">
                              논문
                            </MobileNavLink> */}
                          </div>
                          <div className="mt-8 flex flex-col gap-4">
                            <Button href="/login" variant="outline" color='cyan'>
                              로그인
                            </Button>
                          </div>
                        </Popover.Panel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
            {/* <Button href="/login" variant="outline" className="hidden lg:block"> */}
            {/* <Button href="#" variant="outline" className="hidden lg:block">
              Log in
            </Button> */}
            <Button href="/login" variant="outline" color='cyan' className="hidden lg:block">
              로그인
            </Button>
          </div>
        </Container>
      </nav>
    </header>
  )
}
