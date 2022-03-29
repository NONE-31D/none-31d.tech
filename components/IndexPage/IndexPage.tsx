import CustomContainer from '@components/CustomContainer';
import Menubar from '@components/Menubar';
import headerImg from '@img/header.jpg';
import Image from 'next/image';
import { useRef, useState } from 'react';

const IndexPage = (props) => {
  return (
    <>
      <CustomContainer>
        <Image src={headerImg} layout="responsive" />
        <Menubar />
      </CustomContainer>
    </>
  );
};

export default IndexPage;
