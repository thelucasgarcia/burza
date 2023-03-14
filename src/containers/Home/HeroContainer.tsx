import Link from 'next/link'
import { FiArrowDown } from 'react-icons/fi';

export default function HeroContainer() {
  return (
    <header className="grid h-screen bg-cover bg-center bg-hero-cover before:bg-gradient-to-tr from-black/75 to-green-500/20 before:h-full before:w-full before:top-0 before:left-0 before:absolute">
      <div className="container">
        <div className="h-full relative flex flex-col items-center justify-end text-center">
          <div className="flex flex-col mb-20 gap-5">
            <h1 className="uppercase text-7xl font-bold text-white">Feel Storm</h1>
            <button className="uppercase cursor-pointer bg-white rounded p-2 ">
              Ouvir Agora
            </button>
          </div>
          <div className='flex flex-col items-center justify-center text-center my-5'>
            <p className='text-white mb-5 uppercase text-xs'>Rolar para baixo</p>
            <Link href={'#about'}>
              <FiArrowDown className='text-white' />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
