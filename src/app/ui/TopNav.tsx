import Logo from '@/app/assets/yaadigo.webp'
import Image from "next/image";
import SearchBar from './SearchBar';

export default function TopNav() {
  return (
    <>
      <header className=''>
        <div className='py-3 px-20 flex justify-between border-b border-b-gray-300 items-center'>
          <Image src={Logo} alt="Yaadigo" width={60} />
          <SearchBar placeholder='Search for Destination'/>
          <div className='flex items-center gap-5 font-[500]'>
            <select>
              <option>IND</option>
              <option>USA</option>
              <option>JPN</option>
            </select>
            <button className='font-color'>
              <h4 className='font-[500]'>Login</h4>
            </button>
          </div>
        </div>
      </header>
    </>
  )
}