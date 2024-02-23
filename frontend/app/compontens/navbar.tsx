'use client'
import Link from 'next/link'
import { LuGithub, LuClipboardCheck } from 'react-icons/lu'
import getConfig from '@/next.config.mjs'

export default function Navbar() {
  const { publicRuntimeConfig } = getConfig

  const navItems: { id: number; text: string; link: string }[] = [
    { id: 1, text: 'Home', link: '/' },
    { id: 3, text: 'About', link: '/about' },
  ]

  return (
    <div className='navbar bg-base-200 rounded-md'>
      <div className='navbar-start hidden md:flex'>
        <span className='text-xl px-4'>
          <b>Visual Test Review</b>
        </span>
        <LuClipboardCheck className='h-6 w-6' />
      </div>
      <div className='navbar-center'>
        <ul className='menu menu-horizontal px-1'>
          {navItems.map((item) => (
            <li key={item.id}>
              <Link href={item.link}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='navbar-end'>
        <span className='px-4'>v{publicRuntimeConfig?.version}</span>
        <a
          target='_blank'
          href='https://github.com/andreas-bauer/visual-test-review'
        >
          <button className='btn btn-ghost'>
            <LuGithub className='h-6 w-6' />
          </button>
        </a>
      </div>
    </div>
  )
}
