'use client';
import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

type SafeImageProps = Omit<ImageProps, 'src' | 'alt'> & {
  src: string;
  alt: string;
  fallbackSrc?: string;
};

export default function SafeImage({ src, alt, fallbackSrc = '/file.svg', ...rest }: SafeImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <Image
      {...rest}
      src={currentSrc}
      alt={alt || 'Image'}
      onError={() => setCurrentSrc(fallbackSrc)}
    />
  );
}




