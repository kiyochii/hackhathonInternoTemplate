// src/Header.tsx
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Header = () => {
  return (
    <header style={{ display: 'flex', padding: '10px 20px' }}>
      <ConnectButton />
    </header>
  );
};

export default Header;
