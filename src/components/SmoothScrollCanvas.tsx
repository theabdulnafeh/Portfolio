'use client';

import { useEffect, useRef, useState } from 'react';

const TOTAL_FRAMES = 192;
const SCROLL_HEIGHT_VH = 580; // Total height of the scroll container in vh

export default function SmoothScrollCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [loadedCount, setLoadedCount] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  
  // Store image objects in ref to avoid re-renders during animation
  const imagesRef = useRef<HTMLImageElement[]>([]);
  
  // Animation state refs
  const currentFrameRef = useRef<number>(0);
  const targetFrameRef = useRef<number>(0);
  const animFrameIdRef = useRef<number | null>(null);
  const isAnimatingRef = useRef<boolean>(false);

  // 1. Preload all frame images
  useEffect(() => {
    let isMounted = true;
    const loadedImages: HTMLImageElement[] = [];
    let count = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameIndex = 1999 + i; // 2000 to 2191
      img.src = `/bg/My Video${frameIndex}.jpg`;

      img.onload = () => {
        if (!isMounted) return;
        count++;
        setLoadedCount(count);
        if (count === TOTAL_FRAMES) {
          setIsLoaded(true);
        }
      };

      img.onerror = () => {
        if (!isMounted) return;
        count++;
        setLoadedCount(count);
        if (count === TOTAL_FRAMES) {
          setIsLoaded(true);
        }
      };

      loadedImages.push(img);
    }

    imagesRef.current = loadedImages;

    return () => {
      isMounted = false;
    };
  }, []);

  // Draw a frame onto canvas maintaining 'cover' aspect ratio
  const drawFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const images = imagesRef.current;
    const clampedIndex = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(frameIndex)));
    const img = images[clampedIndex];

    if (!img || !img.complete || img.naturalWidth === 0) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;

    // Calculate aspect ratio cover positioning
    const scale = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
    const drawWidth = imgWidth * scale;
    const drawHeight = imgHeight * scale;
    const offsetX = (canvasWidth - drawWidth) / 2;
    const offsetY = (canvasHeight - drawHeight) / 2;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Resize canvas to match display size & DPI ratio
  const updateCanvasSize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2); // Cap at 2 for performance
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    }

    drawFrame(currentFrameRef.current);
  };

  // Animation Loop with Linear Interpolation (LERP) for extreme smoothness
  const startAnimationLoop = () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    const loop = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;

      // Lerp factor 0.1 ensures smooth fluid motion while following user scroll accurately
      if (Math.abs(diff) > 0.001) {
        currentFrameRef.current += diff * 0.1;
        drawFrame(currentFrameRef.current);
        animFrameIdRef.current = requestAnimationFrame(loop);
      } else {
        currentFrameRef.current = targetFrameRef.current;
        drawFrame(currentFrameRef.current);
        isAnimatingRef.current = false;
        animFrameIdRef.current = null;
      }
    };

    animFrameIdRef.current = requestAnimationFrame(loop);
  };

  // Scroll handler
  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    
    if (maxScroll <= 0) return;

    const scrollFraction = Math.max(0, Math.min(1, scrollTop / maxScroll));
    targetFrameRef.current = scrollFraction * (TOTAL_FRAMES - 1);

    startAnimationLoop();
  };

  // Setup listeners after preloading is finished
  useEffect(() => {
    if (!isLoaded) return;

    updateCanvasSize();
    drawFrame(0);

    const onScroll = () => handleScroll();
    const onResize = () => updateCanvasSize();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [isLoaded]);

  const progressPercent = Math.round((loadedCount / TOTAL_FRAMES) * 100);

  return (
    <>
      {/* Loading Overlay */}
      {!isLoaded && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white font-sans transition-opacity duration-500">
          <div className="w-48 h-1 bg-zinc-800 rounded-full overflow-hidden mb-4">
            <div
              className="h-full bg-white transition-all duration-150 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="text-xs uppercase tracking-widest text-zinc-400 font-mono">
            Loading Frames {progressPercent}%
          </span>
        </div>
      )}

      {/* Fixed Fullscreen Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 bg-black"
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.6s ease-in-out',
        }}
      />

      {/* Virtual Scroll Container to provide smooth scroll height */}
      <div
        style={{ height: `${SCROLL_HEIGHT_VH}vh` }}
        className="relative w-full pointer-events-none"
      />
    </>
  );
}
