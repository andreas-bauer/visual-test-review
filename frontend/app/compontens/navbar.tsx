'use client'
import { LuGithub, LuClipboardCheck } from 'react-icons/lu'

export default function Navbar() {
  const navItems: { id: number; text: string; link: string }[] = [
    { id: 1, text: 'Link 1', link: '/link1' },
    { id: 2, text: 'Link 2', link: '/link2' },
    { id: 3, text: 'Link 3', link: '/link3' },
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
              <a onClick={() => console.log('nav to ' + item.link)}>
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className='navbar-end'>
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
