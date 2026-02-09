import TypeTesting from '@/components/ElectricPower/TransmissionAndDistribution/TypeTesting';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Type Testing | Electric Power',
  description: 'Type testing and certification services',
};

export default function TypeTestingPage() {
  return <TypeTesting />;
}