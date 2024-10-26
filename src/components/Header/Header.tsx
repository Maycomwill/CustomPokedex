import MWLogo from '../../assets/logo.svg';

export function Header() {
  return (
    <div className="flex w-full items-center justify-between px-12 py-4">
      <div>
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
