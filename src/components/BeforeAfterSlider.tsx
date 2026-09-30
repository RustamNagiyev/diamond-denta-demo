import React, { useState, useRef, useCallback, useEffect } from 'react';
import { ChevronsLeftRight } from 'lucide-react';
import { onImageFallbackError } from '../data/clinicData';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  beforeLabel?: string;
  afterLabel?: string;
  tagline?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeAlt = 'Əvvəl',
  afterAlt = 'Sonra',
  beforeLabel = 'ƏVVƏL',
  afterLabel = 'SONRA',
  tagline = 'Keramik Vinir • Təbii ağlıq və düzülüş',
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;
    if (position < 0) position = 0;
    if (position > 100) position = 100;
    setSliderPosition(position);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  }, [handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    handleMove(e.clientX);
  }, [handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Slider Container */}
      <div
        ref={containerRef}
        onMouseDown={(e) => {
          setIsDragging(true);
          handleMove(e.clientX);
        }}
        onTouchStart={(e) => {
          setIsDragging(true);
          if (e.touches.length > 0) {
            handleMove(e.touches[0].clientX);
          }
        }}
        className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] rounded-xl overflow-hidden cursor-ew-resize select-none border border-[#C9A96E]/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-[#141418]"
      >
        {/* Layer 1: After Image (Background full) */}
        <img
          src={afterImage}
          alt={afterAlt}
          onError={onImageFallbackError}
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* After Label badge top-right */}
        <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-black/70 backdrop-blur-md border border-white/20 rounded text-[11px] font-medium tracking-widest text-[#F5F1EA]">
          {afterLabel}
        </div>

        {/* Layer 2: Before Image (Clipped overlay) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeImage}
            alt={beforeAlt}
            onError={onImageFallbackError}
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
            style={{
              width: containerRef.current
                ? `${containerRef.current.clientWidth}px`
                : '100%',
              height: '100%',
            }}
          />

          {/* Before Label badge top-left */}
          <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/70 backdrop-blur-md border border-white/20 rounded text-[11px] font-medium tracking-widest text-[#E5E1E4]">
            {beforeLabel}
          </div>
        </div>

        {/* Divider Bar */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-[#C9A96E] z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Centered Circular Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#18181C] border-2 border-[#C9A96E] shadow-[0_0_20px_rgba(201,169,110,0.6)] flex items-center justify-center text-[#C9A96E]">
            <ChevronsLeftRight className="w-5 h-5 text-[#C9A96E]" />
          </div>
        </div>
      </div>

      {/* Caption info below */}
      <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A8A39A] px-2 gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C9A96E] inline-block animate-pulse"></span>
          <span>{tagline}</span>
        </div>
        <div className="flex items-center gap-1 text-[#C9A96E] font-light">
          <ChevronsLeftRight className="w-3.5 h-3.5" />
          <span>Müqayisə üçün sürüşdürün</span>
        </div>
      </div>
    </div>
  );
};
