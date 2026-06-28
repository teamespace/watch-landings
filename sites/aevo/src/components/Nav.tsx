'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const links = [
  { label: 'Watches', href: '/watches', img: 'shop.png' },
  { label: 'Straps', href: '/straps', img: 'lookbook.png' },
  { label: 'About', href: '/about', img: 'about_us.png' },
  { label: 'Collabs', href: '/collabs', img: 'contact.png' },
]

export function AevoNav() {
  const toggleRef = useRef<HTMLDivElement>(null)
  const burgerRef = useRef<HTMLDivElement>(null)
  const labelMenuRef = useRef<HTMLParagraphElement>(null)
  const labelCloseRef = useRef<HTMLParagraphElement>(null)
  const shopRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLDivElement>(null)
  const navBodyRef = useRef<HTMLDivElement>(null)
  const navImageRef = useRef<HTMLDivElement>(null)
  const navImageElRef = useRef<HTMLImageElement>(null)
  const backgroundRef = useRef<HTMLDivElement>(null)
  const tlRef = useRef<GSAPTimeline | null>(null)

  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav__link')
    const allChars = document.querySelectorAll('.nav__link span')
    const footerItems = document.querySelectorAll('.nav__footer li')

    navLinks.forEach(link => {
      const text = link.textContent || ''
      link.textContent = ''
      text.split('').forEach(char => {
        const span = document.createElement('span')
        span.textContent = char === ' ' ? '\u00A0' : char
        link.appendChild(span)
      })
    })

    const chars = document.querySelectorAll('.nav__link span')
    const footer = document.querySelectorAll('.nav__footer li')

    gsap.set(chars, { y: '100%', opacity: 0 })
    gsap.set(footer, { y: '100%', opacity: 0 })

    const ease = 'power3.inOut'

    const tl = gsap.timeline({ paused: true })

    tl
      .to(navRef.current, { height: 'auto', duration: 1, ease }, 0)
      .to(backgroundRef.current, { height: '100vh', duration: 1, ease }, 0)
      .to(labelMenuRef.current, { opacity: 0, duration: 0.35 }, 0)
      .to(labelCloseRef.current, { opacity: 1, duration: 0.35 }, 0)
      .to(shopRef.current, { opacity: 0, duration: 0.35 }, 0)
      .to(chars, { y: '0%', opacity: 1, duration: 1, ease, stagger: 0.02 }, 0.2)
      .to(footer, { y: '0%', opacity: 1, duration: 1, ease, stagger: 0.05 }, 0.4)

    tlRef.current = tl

    const handleToggle = () => {
      if (tl.reversed() || tl.progress() === 0) {
        burgerRef.current?.classList.add('header__burger--active')
        tl.play()
      } else {
        burgerRef.current?.classList.remove('header__burger--active')
        tl.reverse()
      }
    }

    toggleRef.current?.addEventListener('click', handleToggle)

    const navBody = navBodyRef.current
    if (navBody) {
      navBody.addEventListener('mouseover', (e) => {
        const link = (e.target as HTMLElement).closest('.nav__link') as HTMLElement | null
        if (!link) return
        const hoveredIndex = link.dataset.index

        navLinks.forEach(other => {
          const otherLink = other as HTMLElement
          const isHovered = otherLink.dataset.index === hoveredIndex
          gsap.to(other, {
            filter: isHovered ? 'blur(0px)' : 'blur(4px)',
            opacity: isHovered ? 1 : 0.6,
            duration: 0.3,
            overwrite: true,
          })
        })

        if (navImageElRef.current && link.dataset.src) {
          navImageElRef.current.src = '/assets/menu/' + link.dataset.src
        }
        gsap.to(navImageRef.current, { opacity: 1, duration: 0.35, overwrite: true })
      })

      navBody.addEventListener('mouseleave', () => {
        gsap.to(navLinks, {
          filter: 'blur(0px)',
          opacity: 1,
          duration: 0.3,
          overwrite: true,
        })
        gsap.to(navImageRef.current, { opacity: 0, duration: 0.35, overwrite: true })
      })
    }

    return () => {
      toggleRef.current?.removeEventListener('click', handleToggle)
      tl.kill()
    }
  }, [])

  return (
    <header className="header">
      <div className="header__bar">
        <a href="/" className="header__logo">aevo</a>

        <div className="header__toggle" ref={toggleRef}>
          <div className="header__burger" ref={burgerRef} />
          <div className="header__label">
            <p className="header__label-text header__label-text--menu" ref={labelMenuRef}>Menu</p>
            <p className="header__label-text header__label-text--close" ref={labelCloseRef}>Close</p>
          </div>
        </div>

        <div className="header__shop" ref={shopRef}>
          <p className="header__shop-label">Shop</p>
          <div className="header__cart">
            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.66602 1.66667H2.75449C2.9595 1.66667 3.06201 1.66667 3.1445 1.70437C3.2172 1.73759 3.2788 1.79102 3.32197 1.85829C3.37096 1.93462 3.38546 2.0361 3.41445 2.23905L3.80887 5M3.80887 5L4.68545 11.4428C4.79669 12.2604 4.85231 12.6692 5.04777 12.977C5.22 13.2481 5.46692 13.4637 5.75881 13.5978C6.09007 13.75 6.50264 13.75 7.32777 13.75H14.4593C15.2448 13.75 15.6375 13.75 15.9585 13.6087C16.2415 13.4841 16.4842 13.2832 16.6596 13.0285C16.8585 12.7397 16.9319 12.3539 17.0789 11.5823L18.1819 5.79141C18.2337 5.51984 18.2595 5.38405 18.222 5.27792C18.1892 5.18481 18.1243 5.1064 18.039 5.05668C17.9417 5 17.8035 5 17.527 5H3.80887ZM8.33268 17.5C8.33268 17.9602 7.95959 18.3333 7.49935 18.3333C7.03911 18.3333 6.66602 17.9602 6.66602 17.5C6.66602 17.0398 7.03911 16.6667 7.49935 16.6667C7.95959 16.6667 8.33268 17.0398 8.33268 17.5ZM14.9993 17.5C14.9993 17.9602 14.6263 18.3333 14.166 18.3333C13.7058 18.3333 13.3327 17.9602 13.3327 17.5C13.3327 17.0398 13.7058 16.6667 14.166 16.6667C14.6263 16.6667 14.9993 17.0398 14.9993 17.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p>Cart(0)</p>
          </div>
        </div>
      </div>

      <div className="nav" ref={navRef}>
        <div className="nav__wrapper">
          <div className="nav__container">
            <div className="nav__body" ref={navBodyRef}>
              {links.map((link, i) => (
                <a key={link.href} href={link.href} className="nav__link" data-index={i} data-src={link.img}>{link.label}</a>
              ))}
            </div>
            <div className="nav__footer">
              <ul><li><span>Designed by:</span> Aevo</li></ul>
              <ul><li><span>Typography:</span> DM Sans</li></ul>
              <ul><li><span>Material:</span> Swedish steel</li></ul>
              <ul>
                <li>Privacy Policy</li>
                <li>Terms &amp; Conditions</li>
              </ul>
            </div>
          </div>
          <div className="nav__image" ref={navImageRef}>
            <img src="/assets/menu/shop.png" alt="preview" ref={navImageElRef} />
          </div>
        </div>
      </div>

      <div className="header__background" ref={backgroundRef} />
    </header>
  )
}
