import { CaretUp } from 'phosphor-react';

function handleScrollTop(e: any) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function BackToTop() {
  return (
    <div
      className="md:active:opaticy-40 fixed bottom-4 right-[2%] z-20 flex size-16 cursor-pointer items-center justify-center rounded-full bg-gray-600 p-1 opacity-40 ring ring-transparent transition-all duration-200 ease-in-out hover:bg-gray-500 active:opacity-60 active:ring-emerald-500 md:bottom-0 md:opacity-20 lg:size-24"
      onClick={(e) => handleScrollTop(e)}
    >
      <CaretUp size={48} />
    </div>
  );
}
