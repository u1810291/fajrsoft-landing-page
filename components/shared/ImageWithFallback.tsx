'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
}

export function ImageWithFallback({
  src,
  alt,
  className = '',
  width,
  height,
  fill = false,
  priority = false,
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const fallbackSrc = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23f0f0f0"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="18" fill="%23999"%3EImage%3C/text%3E%3C/svg%3E';

  if (error) {
    if (fill) {
      return (
        <Image
          src={fallbackSrc}
          alt={alt}
          fill
          className={className}
          unoptimized
        />
      );
    }
    return (
      <Image
        src={fallbackSrc}
        alt={alt}
        width={width || 400}
        height={height || 300}
        className={className}
        unoptimized
      />
    );
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={`${className} ${loading ? 'blur-sm' : 'blur-0'} transition-all duration-300`}
        onError={() => setError(true)}
        onLoad={() => setLoading(false)}
        priority={priority}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width || 400}
      height={height || 300}
      className={`${className} ${loading ? 'blur-sm' : 'blur-0'} transition-all duration-300`}
      onError={() => setError(true)}
      onLoad={() => setLoading(false)}
      priority={priority}
    />
  );
}
