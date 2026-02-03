"use client";

import { useEffect, useRef } from "react";
import Player from "@vimeo/player";

export interface VimeoPlayerProps {
  videoId: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  className?: string;
}

export function VimeoPlayer({
  videoId,
  autoplay = true,
  loop = true,
  muted = true,
  controls = false,
  className = "",
}: VimeoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const player = new Player(containerRef.current, {
      id: videoId,
      autoplay,
      loop,
      muted,
      controls,
      responsive: true,
    });

    return () => {
      player.destroy();
    };
  }, [videoId, autoplay, loop, muted, controls]);

  return <div ref={containerRef} className={className} />;
}
