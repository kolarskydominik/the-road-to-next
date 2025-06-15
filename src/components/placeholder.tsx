import { LucideMessageSquareWarning } from 'lucide-react';
import { cloneElement } from 'react';

type PlaceholderProps = {
  label: string;
  icon?: React.ReactElement<React.SVGProps<SVGSVGElement>, 'svg'>;
  button?: React.ReactElement<React.ComponentProps<'button'>, 'button'>;
};

export const Placeholder = ({
  label,
  icon = <LucideMessageSquareWarning />,
  button = <div />,
}: PlaceholderProps) => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-y-2 self-center">
      {cloneElement(icon, {
        className: 'size-16 ',
      })}
      <h3 className="text-xl">{label}</h3>
      {cloneElement(button, {
        className: 'h-10',
      })}
    </div>
  );
};
