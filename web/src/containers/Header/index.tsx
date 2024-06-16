import { memo } from 'react';

import Avatar from './Avatar';
import Profile from './Profile';
import Icons from './Icons';

const Header = memo(function Header() {
  return (
    <header className="lg:sticky lg:top-12 w-full lg:w-[270px]">
      <Avatar />
      <Profile />
      <Icons />
      <hr className="my-8" />
    </header>
  )
});

export default Header;
