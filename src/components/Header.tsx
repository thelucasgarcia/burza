'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from '../assets/logo-white.png';
import cover from '../assets/cover.jpg';

const MENUS = [
  {
    label: 'Tour Dates',
    link: '/tour-dates',
    index: 1,
  },
  {
    label: 'Music',
    link: '/music',
    index: 2,
  },
  {
    label: 'Photos',
    link: '/photos',
    index: 3,
  },
  {
    label: 'Shop',
    link: 'https://loja.burza.com/',
    target: '_blank',
    index: 4,
  },
  {
    label: 'Booking',
    link: '/booking',
    index: 5,
  },
  {
    label: 'Contato',
    link: '/contact',
    index: 6,
  }
]

const SOCIALS = [
  {
    label: 'Instagram',
    link: 'https://instagram.com/burza'
  },
  {
    label: 'Youtube',
    link: 'https://youtube.com/burza'
  },
  {
    label: 'Spotify',
    link: 'https://spotify.com/burza'
  },
  {
    label: 'Soundcloud',
    link: 'https://soundcloud.com/burza'
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/burza'
  },
]

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  
  useEffect(() => {
    document.addEventListener('keyup', e => {
      if (e.key === 'Escape') setShowMenu(false)
    })
    return () => {
      document.removeEventListener('keyup', () => {
        setShowMenu(false)
      })
    }
  }, []);

  return (
    <nav className="fixed z-10 py-5 flex flex-row w-full bg-neutral-800 md:bg-transparent">
      <div className="flex justify-between items-center container">
        <Link href={'/'}>
          <Image
            src={logo}
            alt="burza logo"
            width={120}
          />
        </Link>
        <button onClick={() => setShowMenu(state => !state)}>
          <FiMenu size={30} color="white" />
        </button>

        <menu className={`${showMenu ? 'flex' : 'hidden'} flex-col absolute top-0 left-0 w-screen h-screen bg-green-900 overflow-auto z-50`}>
          <div className="flex justify-end p-10">
            <button onClick={() => setShowMenu(state => !state)}>
              <FiX size={30} color="white" />
            </button>
          </div>
          <div className="flex flex-1 items-center grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 w-full container">
            <div className="order-2 md:order-1 mx-auto md:ml-auto md:mr-10">
              <Image
                src={cover}
                alt="cover"
                width={300}
                className="rounded-xl"
              />
            </div>
            <div className="order-1 md:order-2 mx-10 md:ml-10">
              <ul className="list-none flex flex-col gap-10" >
                {MENUS.sort(e => e.index).map(menu => (
                  <li key={menu.index + menu.label} className="border-b-2 w-full pb-3">
                    <Link href={menu.link} className="font-bold uppercase  text-4xl text-white" target={menu.target}>
                      {menu.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ul className="list-none flex flex-row flex-wrap justify-center items-center gap-x-5 my-10">
            {SOCIALS.map((social) => (
              <li key={social.label}>
                <Link className="text-white font-bold uppercase underline" href={social.link} target="_blank">{social.label}</Link>
              </li>
            ))}
          </ul>

        </menu>
      </div>
    </nav>
  )
}