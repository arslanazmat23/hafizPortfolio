
import * as React from 'react';
import { cn } from '@/lib/utils';

const Kbd = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => {
  return (
    <kbd
      ref={ref}
      className={cn(
        'pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-neutral-700 bg-neutral-800 px-1.5 font-mono text-[10px] font-medium text-neutral-400 opacity-100',
        className
      )}
      {...props}
    />
  );
});
Kbd.displayName = 'Kbd';

export { Kbd };
