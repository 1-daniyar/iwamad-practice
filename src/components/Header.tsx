import type { HeaderProps } from '../types';

function Header({ title }: HeaderProps) {
  return (
    <header className="text-center py-6">
      <h1>{title}</h1>
    </header>
  );
}

export default Header;