import React from 'react';
import { HeaderWrapper } from './styles';
import { Cart } from '../Cart';
import {Logo} from '../Logo';
import { Search } from '../Search';
import { Link } from 'gatsby';

export function Header() {
  return (
    <HeaderWrapper>
      <Link to="/">
        <Logo/>
      </Link>
      <Search />
      <Cart />
    </HeaderWrapper>
  );
}