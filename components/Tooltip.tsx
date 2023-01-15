import { ReactNode } from 'react';
import * as RadixTooltip from '@radix-ui/react-tooltip';

interface TooltipProps {
  content: string;
  side?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
  defaultOpen?: boolean;
  sideOffset?: number;
  children: ReactNode;
}

export default function Tooltip({
  content,
  side = 'top',
  className,
  children,
  sideOffset = 10,
  defaultOpen = false,
}: TooltipProps) {
  return (
    <RadixTooltip.Provider delayDuration={100}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            className={`rounded-md bg-black/80 px-2 py-3 text-xs font-semibold leading-none tracking-wide text-orange shadow-md transition-all data-[side='left']:animate-slide-left data-[side='bottom']:animate-slide-down data-[side='top']:animate-slide-up data-[side='right']:animate-slide-right dark:bg-white ${className}`}
            sideOffset={sideOffset}
            side={side}
          >
            {content}
            <RadixTooltip.Arrow className="fill-gray-700 dark:fill-white" />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}
