import { LucideLoaderCircle } from 'lucide-react';

const Loader = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center self-center">
      <LucideLoaderCircle className="size-12 animate-spin" />
    </div>
  );
};

export default Loader;
