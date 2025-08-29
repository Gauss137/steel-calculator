import { Metadata } from 'next';
import SteelCalculator from '../components/SteelCalculator';

export const metadata: Metadata = {
  title: 'Calculadora de Acero - CSW Ingeniería Civil',
  description: 'Calculadora para diseño de acero estructural. Herramienta para ingenieros civiles y estructurales.',
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
    description: 'Calculadora profesional para diseño de acero estructural.',
  },
  alternates: {
    canonical: 'https://steelcalculator.cswingenieriacivil.com',
  },
};

export default function SteelCalculatorPage() {
  return (
    <div className="pt-4 pb-4">
      <SteelCalculator />
    </div>
  );
} 