import ElectricalTesting from '@/components/ElectricPower/TransmissionAndDistribution/ElectricalTesting';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Electrical Testing | Electric Power',
  description: 'Comprehensive electrical testing solutions',
};

export default function ElectricalTestingPage() {
  return <ElectricalTesting />;
}