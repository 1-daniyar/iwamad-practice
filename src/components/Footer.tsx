import type { FooterProps } from '../types';

function Footer({ text }: FooterProps) {
  return (
    <footer className="text-center text-sm text-gray-500 py-6">
      <p>{text}</p>
    </footer>
  );
}

export default Footer;