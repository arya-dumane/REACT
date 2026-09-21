import { memo } from 'react';

const Footer = () => {
  return (
    <footer className="bg-cyan-900 flex items-center justify-center py-4">
      <p className="text-lg font-medium">
        This is Footer
      </p>
    </footer>
  );
};

export default memo(Footer);