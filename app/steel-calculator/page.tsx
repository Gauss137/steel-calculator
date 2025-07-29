import { Metadata } from 'next';
import SteelCalculator from '../../components/SteelCalculator';
import AdSense from '../../components/AdSense';

export const metadata: Metadata = {
  title: 'Calculadora de Acero - CSW Ingeniería Civil',
  description: 'Calculadora profesional para diseño de acero estructural. Herramienta especializada para ingenieros civiles y estructurales.',
  keywords: ['calculadora acero', 'diseño estructural', 'ingeniería civil', 'acero construcción', 'vigas acero'],
  authors: [{ name: 'CSW Ingeniería Civil' }],
  openGraph: {
    title: 'Calculadora de Acero - CSW Ingeniería Civil',
    description: 'Calculadora profesional para diseño de acero estructural',
    url: 'https://steelcalculator.cswingenieriacivil.com',
    siteName: 'CSW Ingeniería Civil',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculadora de Acero - CSW Ingeniería Civil',
    description: 'Calculadora profesional para diseño de acero estructural',
  },
  alternates: {
    canonical: 'https://steelcalculator.cswingenieriacivil.com',
  },
};

export default function SteelCalculatorPage() {
  return (
    <div className="pt-4 pb-4">
      {/* AdSense Banner - Top */}
      <div className="max-w-4xl mx-auto px-6 mb-4">
        <AdSense 
          adSlot="5673056477" 
          adType="banner"
          className="mb-4"
        />
      </div>
      
      <SteelCalculator />
      
      {/* AdSense Banner - Bottom */}
      <div className="max-w-4xl mx-auto px-6 mt-4">
        <AdSense 
          adSlot="8378061114" 
          adType="inferior"
          className="mt-2"
        />
      </div>
    </div>
  );
} 