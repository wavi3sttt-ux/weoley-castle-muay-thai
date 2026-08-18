"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

export default function ImageWithFallback({
  alt,
  fallbackLabel,
  fallbackClassName = "",
  onError,
  ...props
}: ImageProps & { fallbackLabel: string; fallbackClassName?: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-[#1A1A1A] text-green-bright font-display text-center tracking-wide px-4 ${fallbackClassName}`}
      >
        {fallbackLabel}
      </div>
    );
  }

  return (
    <Image
      alt={alt}
      {...props}
      onError={(e) => {
        onError?.(e);
        setFailed(true);
      }}
    />
  );
}
