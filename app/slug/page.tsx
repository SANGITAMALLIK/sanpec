// app/[[...slug]]/page.tsx

// YE LINE CHANGE KARO - apne folder structure ke according
import SidebarMenu from '../../components/SidebarMenu';
// Agar ElectricPower folder mein hai to: '../../components/ElectricPower/SidebarMenu'

export default function Page() {
  return <SidebarMenu />;
}

// Ye function sare URLs ko valid bana deta hai
export async function generateStaticParams() {
  return [
    { slug: ['electric-tower', 'transmission', 'design-engineering'] },
    { slug: ['transmission', 'tower-testing'] },
    { slug: ['transmission', 'electrical-testing'] },
    { slug: ['transmission', 'type-testing'] },
    { slug: ['manufacturing', 'failure-analysis'] },
    { slug: ['manufacturing', 'quality-controls'] },
    { slug: ['manufacturing', 'operational-resilience'] },
    { slug: ['strategic', 'material-sourcing'] },
    { slug: ['strategic', 'yard-management'] },
    { slug: ['strategic', 'inventory-reporting'] },
    { slug: ['constructability', 'logistic-construction'] },
    { slug: ['resiliency', 'grid-hardening'] },
    { slug: ['resiliency', 'substation-hardening'] },
    { slug: ['resiliency', 'distribution-hardening'] },
    { slug: [] }, // Home page ke liye
  ];
}