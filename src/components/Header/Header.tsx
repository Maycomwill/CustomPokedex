import MWLogo from '../../assets/logo.svg';
import { SidebarTrigger } from '../ui/sidebar';

export function Header() {
  return (
    <div className="flex w-full items-center justify-between px-8 py-4 md:px-12">
      <div className="flex items-center justify-center md:hidden">
        <SidebarTrigger />
      </div>
      <div className="flex flex-1 items-center justify-center md:justify-start">
        <a href="/">
          <img
            alt="PokeApi Logo"
            width={100}
            height={40}
            src={
              'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'
            }
          />
        </a>
      </div>

      <div>
        <a rel="noopener" href="https://github.com/maycomwill" target="_blank">
          <img alt="Maycom Willams Logo" width={50} src={MWLogo} />
        </a>
      </div>
    </div>
  );
}
