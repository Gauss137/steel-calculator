"use client";

import { useEffect } from 'react';

interface AdSenseProps {
  adSlot: string;
  adFormat?: 'auto' | 'fluid';
  style?: React.CSSProperties;
  className?: string;
  adType?: 'banner' | 'lateral' | 'inferior';
}

export function AdSense({ adSlot, adFormat = 'auto', style, className, adType = 'banner' }: AdSenseProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  // Estilos específicos según el tipo de anuncio
  const getAdStyle = () => {
    switch (adType) {
      case 'banner':
        return { display: 'inline-block', width: '728px', height: '90px' };
      case 'lateral':
        return { display: 'inline-block', width: '300px', height: '250px' };
      case 'inferior':
        return { display: 'inline-block', width: '728px', height: '90px' };
      default:
        return { display: 'block' };
    }
  };

  return (
    <div className={`ad-container ${className || ''}`} style={style}>
      <ins
        className="adsbygoogle"
        style={getAdStyle()}
        data-ad-client="ca-pub-8687657389733151"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      />
    </div>
  );
}

export default AdSense;