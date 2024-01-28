'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useMediaQuery, useToggle } from 'usehooks-ts';
import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const [isMenuOpen, toggleMenu] = useToggle(false);
  const [isShowCoursesDropdown, toggleCoursesDropdown] = useToggle(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const onToggleCoursesDropdown = () => {
    if (!isMobile) {
      return;
    }

    toggleCoursesDropdown();
  };

  const onScrollTo = (anchor: string) => {
    if (isMobile) {
      toggleMenu();
    }

    setTimeout(() => {
      const element = document.querySelector(`#${anchor}`);
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  return (
    <header className="w-full flex flex-wrap items-center justify-center py-2 px-3 md:p-4 md:h-[100px] h-auto">
      <div className="h-full max-w-[1200px] w-full flex flex-wrap items-center justify-between gap-x-4">
        <Image src="https://placehold.co/200x55" width={200} height={55} alt="Logo"/>
        <button
          className="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Відкрити меню</span>
          <HamburgerMenuIcon className={cn(
            'font-bold h-6 w-6 text-black',
            isMenuOpen && 'hidden',
          )}/>
          <Cross1Icon className={cn(
            'font-bold h-6 w-6 text-black',
            !isMenuOpen && 'hidden',
          )}/>
        </button>
        <nav className={cn(
          'hidden md:block w-full md:w-auto',
          isMenuOpen && 'block',
        )}>
          <ul className="w-full flex flex-col md:flex-row items-center justify-center gap-x-1 pt-2 md:pt-0">
            <li className="relative w-full text-center group">
              <Button
                variant="link"
                onClick={onToggleCoursesDropdown}
              >
                IT Курси
              </Button>
              <div className={cn(
                'hidden md:group-hover:block bg-white text-base z-10 list-none divide-y divide-gray-100 rounded w-full md:pt-2 md:w-44 md:absolute',
                isShowCoursesDropdown && 'block',
              )}>
                <div className="md:shadow-[0_0_7px_0_rgba(0,0,0,.2)]">
                  <ul className="md:py-1">
                    <li>
                      <Button
                        asChild
                        variant="link"
                        className="hover:bg-gray-100 w-full"
                      >
                        <Link href="#" className="text-sm text-gray-700 block px-4 py-2">Project Manager</Link>
                      </Button>
                    </li>
                    <li>
                      <Button
                        asChild
                        variant="link"
                        className="hover:bg-gray-100 w-full"
                      >
                        <Link href="#" className="text-sm text-gray-700 block px-4 py-2">QA Engineer</Link>
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <Button
                variant="link"
                onClick={() => onScrollTo('free-events')}
              >
                Безкоштовні події
              </Button>
            </li>
            <li>
              <Button
                variant="link"
                onClick={() => onScrollTo('mentors')}
              >
                Викладачі
              </Button>
            </li>
            <li>
              <Button
                variant="link"
                asChild
              >
                <Link href="/">
                  Розклад
                </Link>
              </Button>
            </li>
            <li>
              <Button
                variant="link"
                asChild
              >
                <Link href="/">
                  Блог
                </Link>
              </Button>
            </li>
            <li>
              <Button
                variant="link"
                asChild
              >
                <Link href="/">
                  Відгуки
                </Link>
              </Button>
            </li>
            <li>
              <Button
                variant="link"
                asChild
              >
                <Link href="/">
                  Контакти
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
