'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className={`relative rounded-full dark:bg-gray-950 dark:border-none transition-all duration-500 ease-in-out`}
    >
      <Sun
        className={` h-[1.2rem] w-[1.2rem] dark:scale-0 scale-100 `}
      />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] -rotate-90 scale-0 dark:scale-100" />
    </Button>
  );
}
