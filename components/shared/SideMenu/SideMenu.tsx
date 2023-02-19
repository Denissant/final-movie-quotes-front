import { Camera, House, SelfProfilePicture } from 'components';
import { MutableRefObject } from 'react';
import { useSideMenu } from './useSideMenu';
import Link from 'next/link';

const SideMenu = (props: {
  sideMenuIsOpen: boolean;
  sideMenuRef: MutableRefObject<null>;
  username: string;
}) => {
  const router = useSideMenu();

  return (
    <aside
      className={
        'fixed top-0 w-[87vw] h-screen pt-11 bg-brand-article text-white rounded-r-xl ' +
        'lg:block lg:static lg:w-[28vw] lg:bg-transparent lg:pt-0 lg:px-0 z-50 shrink-0 animate-grow-x origin-left lg:animate-none' +
        (props.sideMenuIsOpen ? '' : ' hidden')
      }
      ref={props.sideMenuRef}
    >
      <button
        className='flex w-full gap-5 text-left px-11 lg:pl-17.5 lg:pr-0 hover:bg-brand-lightmodal'
        onClick={() => router.push('/profile')}
      >
        <SelfProfilePicture
          size={60}
          classNames={
            'w-15 h-15 my-1.5' +
            (router.pathname === '/profile' ? ' border-2 border-brand-red' : '')
          }
        />
        <div className='lg:pr-11'>
          <div className='text-xl lg:text-2xl'>{props.username}</div>
          <div className='text-sm text-brand-pale lg:text-base lg:mt-2'>
            Edit your profile
          </div>
        </div>
      </button>
      <nav className='text-xl'>
        <Link
          className={
            'flex pl-11 lg:pl-19.5 py-3.5 gap-7.5 lg:gap-11.5 items-center mt-10 lg:bg-transparent hover:bg-brand-lightmodal ' +
            (router.pathname === '/home' ? 'bg-brand-lightmodal' : '')
          }
          href='/home'
        >
          <House isActive={router.pathname === '/home'} /> News feed
        </Link>
        <Link
          className={
            'flex pl-11 lg:pl-19.5 py-3.5 gap-7.5 lg:gap-11.5 items-center mt-4 lg:bg-transparent hover:bg-brand-lightmodal ' +
            (router.pathname === '/movies' ? 'bg-brand-lightmodal' : '')
          }
          href='/movies'
        >
          <Camera isActive={router.pathname === '/movies'} /> List of movies
        </Link>
      </nav>
    </aside>
  );
};

export default SideMenu;
