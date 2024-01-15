import React from 'react';
import Image, { ImageProps } from 'next/image';

type Props = Omit<ImageProps, 'src'>;

export const LogoWithText = ({ ...rest }: Props) => {
  return <Image {...rest} src={'/images/graph-logo-full.svg'} width={115} alt="Graph logo" />;
};

export const Logo = ({ ...rest }: Props) => {
  return <Image {...rest} src={'/images/graph-logo.svg'} width={50} height={50} alt="Graph logo" />;
};
