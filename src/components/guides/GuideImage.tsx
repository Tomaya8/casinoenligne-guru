"use client";

import { useState } from "react";
import Image from "next/image";

export default function GuideImage({
  src,
  alt,
  topic,
  className = "",
  hero = false,
}: {
  src: string;
  alt: string;
  topic?: string;
  className?: string;
  hero?: boolean;
}) {
  const [imgError, setImgError] = useState(false);

  const isExternal = src?.startsWith("http");

  if (!isExternal || imgError) {
    // Gradient fallback
    const gradients: Record<string, string> = {
      "live-casino": "from-red-600 via-pink-600 to-rose-500",
      "casino-mobile": "from-blue-600 via-cyan-600 to-sky-500",
      "crypto-casino": "from-amber-600 via-orange-500 to-yellow-500",
      "slots-avance": "from-purple-600 via-indigo-600 to-violet-500",
      "securite-casino": "from-emerald-600 via-teal-600 to-green-500",
    };
    const gradient = topic ? gradients[topic] || "from-accent-primary to-accent-secondary" : "from-accent-primary to-accent-secondary";

    return (
      <div className={`relative overflow-hidden bg-gradient-to-br ${gradient} flex items-center justify-center ${className}`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-4 w-32 h-32 rounded-full bg-white/20 blur-2xl" />
          <div className="absolute bottom-4 right-4 w-48 h-48 rounded-full bg-black/10 blur-3xl" />
        </div>
        {hero && (
          <p className="relative text-sm font-medium text-white/70 max-w-xs mx-auto text-center px-6">{alt}</p>
        )}
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes={hero ? "(max-width: 768px) 100vw, 1280px" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
        onError={() => setImgError(true)}
      />
    </div>
  );
}
