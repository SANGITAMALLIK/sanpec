import { Menu } from "@/types/menu";

export const menuData = {
  // Top menu items
  topMenuItems: [
    { id: 1, title: "About", path: "/about", newTab: false },
    { id: 2, title: "Engineering Excellence", path: "/careers", newTab: false },
    { id: 3, title: "Resources", path: "/contact", newTab: false },
    { id: 4, title: "Contact", path: "/news", newTab: false }
  ],

  // Main navigation items
  navigationItems: [
    { id: 1, title: "Home", path: "/", newTab: false },
    { 
      id: 2,
      title: "Electric Power", 
      path: "/electric-power",
      newTab: false,
      hasDropdown: true,
      megaMenu: {
        tabs: [
          {
            id: 'transmission',
            title: 'Transmission and Distribution',
            image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=250&fit=crop',
            items: [
              {
                title: 'Design and engineering',
                desc: 'Transmission, Engineering Excellence, Structure Optimization, Robust Transmission Line',
                image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=192&fit=crop',
                link: '/transmission/design-engineering'
              },  
              {
                title: 'Tower Testing',
                desc: 'T Line Structures Testing, Source Inspections At Manufacturing facilities',
                image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=300&h=185&fit=crop',
                link: '/electric-tower/transmission-and-distribution/#e-n-tab-title-2072638982'
              },
              {
                title: 'Electrical Testing',
                desc: 'Corona/RIV and others',
                image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300&h=223&fit=crop',
                link: '/electric-tower/transmission-and-distribution/#e-n-tab-title-2072638983'
              },
              {
                title: 'Type Testing',
                desc: 'Conductor/OPGW/Hardware',
                image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=300&h=192&fit=crop',
                link: '/electric-tower/transmission-and-distribution/#e-n-tab-title-2072638984'
              }
            ]
          },
          {
            id: 'manufacturing',
            title: 'Manufacturing and Operations',
            image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=250&fit=crop',
            items: [
              {
                title: 'Failure/root cause analysis',
                desc: 'Plant Audit, Inspections (QA/QC), ITP',
                image: 'https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=276&h=207&fit=crop',
                link: '/electric-tower/manufacturing-and-operations/'
              },
              {
                title: 'Quality Controls',
                desc: 'Testing, Source Inspections At Manufacturing facilities, Field Inspections Using Drones',
                image: 'https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?w=300&h=188&fit=crop',
                link: '/electric-tower/manufacturing-and-operations/#e-n-tab-title-1362584222'
              },
              {
                title: 'Operational Resilience',
                desc: 'Quality Management System, Innovation Management, Change Management',
                image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300&h=199&fit=crop',
                link: '/electric-tower/manufacturing-and-operations/#e-n-tab-title-1362584223'
              }
            ]
          },

        {
            id: 'strategic',
            title: 'Strategic Project Management',
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop',
            items: [
              {
                title: 'Material Sourcing',
                desc: 'Material and Project Management',
                image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=300&h=150&fit=crop',
                link: '/electric-tower/strategic-project-management/#e-n-tab-title-1345677481'
              },
              {
                title: 'Yard Management',
                desc: 'Material & Yard Management',
                image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=300&h=174&fit=crop',
                link: '/electric-tower/strategic-project-management/#e-n-tab-title-1345677482'
              },
              {
                title: 'INVENTORY REPORTING',
                desc: 'INVENTORY REPORTING AND MATERIAL DOCUMENTATION',
                image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=188&fit=crop',
                link: '/electric-tower/strategic-project-management/#e-n-tab-title-1345677483'
              }
            ]
          },
          {
            id: 'constructability',
            title: 'Constructability Review',
            image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=250&fit=crop',
            items: [
              {
                title: 'Logistic and Construction Support',
                desc: 'Follow up logistics planning from vendors',
                image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=245&h=300&fit=crop',
                link: '/electric-tower/constructability-review/'
              }
            ]
          },
           {
            id: 'resiliency',
            title: 'Resiliency Planning',
            image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=250&fit=crop',
            items: [
              {
                title: 'Grid Hardening',
                desc: 'Reinforcing the T&D infrastructure to prevent or reduce the damage from extreme weather events',
                image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=300&h=200&fit=crop',
                link: '/electric-tower/resiliency-planning/#e-n-tab-title-1363998291'
              },
              {
                title: 'Substation Hardening',
                desc: 'Flooding can create tremendous issues for transmission substations',
                image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=300&h=188&fit=crop',
                link: '/electric-tower/resiliency-planning/#e-n-tab-title-1363998292'
              },
              {
                title: 'Distribution Line Hardening',
                desc: 'Fire Prevention and Detection',
                image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300&h=241&fit=crop',
                link: '/electric-tower/resiliency-planning/#e-n-tab-title-1363998293'
              }
            ]
          }
          // Add other tabs here...
        ]
      }
    },
    { id: 3, title: "Research and Innovation", path: "/research-and-innovation", newTab: false },
    { id: 4, title: "Projects", path: "https://news.sanpec-excellence.com/td-projects/", newTab: true },
    { id: 5, title: "Why SANPEC", path: "/why-sanpec", newTab: false },
    { id: 6, title: "Resilience", path: "/resilience-and-sustainabilty", newTab: false },
    { id: 7, title: "Blog", path: "/blog", newTab: false }
  ]
};