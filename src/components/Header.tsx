
import { ToggleTheme } from './ToggleTheme';
import { Navbar } from './Navbar';
import { jetBrains } from '@/app/fonts';

export default function Header() {
  return (
    <header className="w-full flex justify-center">
      <div className=" fixed z-50 top-4 py-2 w-5/6  max-w-screen-md flex items-center gap-6 justify-between px-3 dark:bg-black/20 bg-gray-500/30 backdrop-blur-[8px] border-[0.1px] border-gray-500/40 bg-blend-soft-light rounded-full">
        <div className=" flex items-center gap-6">
          <ToggleTheme />
          <span className={`${jetBrains.className} cursor-default `}>
            marco tortolani
          </span>
        </div>
        <Navbar />
      </div>
    </header>
  );
}
