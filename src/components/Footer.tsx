'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaInstagram, FaYoutube, FaSpotify, FaSoundcloud, FaTwitter, FaTiktok } from "react-icons/fa";
import logo from '../assets/logo-white.png';
import cover from '../assets/cover.jpg';


const SOCIALS = [
  {
    label: 'Instagram',
    link: 'https://instagram.com/burza',
    icon: <FaInstagram />
  },
  {
    label: 'Youtube',
    link: 'https://youtube.com/burza',
    icon: <FaYoutube />
  },
  {
    label: 'Spotify',
    link: 'https://spotify.com/burza',
    icon: <FaSpotify />
  },
  {
    label: 'Soundcloud',
    link: 'https://soundcloud.com/burza',
    icon: <FaSoundcloud />
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/burza',
    icon: <FaTwitter />
  },
  {
    label: 'Tiktok',
    link: 'https://tiktok.com/burza',
    icon: <FaTiktok />
  },
]

export default function Footer() {
  return (
    <footer className="p-4 bg-white sm:p-6 bg-neutral-900">
      <div className="container">

        <div className="mt-10 flex flex-col justify-center items-center gap-5">
          <h2 className="text-white font-bold uppercase">Follow me</h2>

          <div className="flex mt-4 gap-5 justify-center sm:items-center flex-wrap">
            {SOCIALS.map(social => (
              <a key={social.label} href={social.link} className="text-neutral-500 text-4xl hover:text-green-500" target="_blank">
                {social.icon}
                <span className="sr-only">{social.label}</span>
              </a>
            ))}
          </div>
        </div>


        <div className="mt-20 grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a href="https://flowbite.com/" className="hover:underline">Flowbite</a>
              </li>
              <li>
                <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
              </li>
              <li>
                <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a href="#" className="hover:underline">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Terms &amp; Conditions</a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex justify-center">
          <span className="text-sm text-gray-500 text-center dark:text-gray-400">© {new Date().getFullYear()} Burza DJ. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>

  )
}