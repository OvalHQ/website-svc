"use client";

import { Pane } from 'evergreen-ui';
import Navbar from '../navbar';
import Wrapper from './main.styles';
import Footer from '../footer';

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <Wrapper>
      <Navbar />
      <Pane className="font-primary">
        {children}
      </Pane>
      <Footer/>
    </Wrapper>
  )
};

export default MainLayout;