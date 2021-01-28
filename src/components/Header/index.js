import React from 'react';
import { HeaderWrapper } from './styles';
import { Cart } from '../Cart';
import { Logo } from '../Logo';
import about from '../about';
import { Search } from '../Search';
import { Link } from 'gatsby';

export function Header() {
  return (
    <HeaderWrapper>
      <div>
        <Link to="/">
          <Logo />
        </Link>
         <Link
        to={`/about/`}>
          about
        </Link>
         </div>
      <Search />
      <Cart />
    </HeaderWrapper>
  );
}