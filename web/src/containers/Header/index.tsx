import { memo } from 'react';

import Avatar from './Avatar';
import Profile from './Profile';
import Icons from './Icons';

const Header = memo(function Header() {
  return (
    <header className="sticky top-12 w-[270px]">
      <Avatar />
      <Profile />
      <Icons />
    </header>
  )
});

export default Header;
