import { Menu } from "@/types/menu";

export const menuData = {
  // Top menu items
  topMenuItems: [
    { id: 1, title: "About", path: "/about", newTab: false },
    { id: 2, title: "Engineering Excellence", path: "/engineering-excellence", newTab: false },
    { 
      id: 3, 
      title: "RESOURCES", 
      path: "https://news.sanpec-excellence.com/",
      newTab: false,
      hasDropdown: true,
      submenu: [
        {
          id: 1,
          title: "SunZia PROJECT",
          path: "/sunzia-project",
          newTab: false
        },
        {
          id: 2,
          title: "SunZia PROJECT GALLERY",
          path: "/project-gallery",
          newTab: false
        }
      ]
    },
    { id: 4, title: "Contact", path: "/contact", newTab: false },
  ],

  // Main navigation items
  navigationItems: [
    { id: 1, title: "Home", path: "/", newTab: false },
    { 
      id: 2,
      title: "ELECTRIC POWER", 
      path: "/electric-power/transmisson/design-and-engineering",
      newTab: false,
      hasDropdown: true,
      megaMenu: {
        tabs: [
          {
            id: 'transmission',
            title: 'Transmission and Distribution',
            image: '/images/sanpec_2026/15.jpeg',
            items: [
              {
                title: 'Design and engineering',
                desc: 'Transmission, Engineering Excellence, Structure Optimization, Robust Transmission Line',
                image: '/images/home/header_submenu_images/1.webp',
                link: '/electric-power/transmisson/design-and-engineering'
              },  
              {
                title: 'Tower Testing',
                desc: 'T Line Structures Testing, Source Inspections At Manufacturing facilities',
                image: '/images/home/header_submenu_images/2.png',
                link: '/electric-power/transmisson/tower-testing'
             
              },
              {
                title: 'Electrical Testing',
                desc: 'Corona/RIV and others',
                image: '/images/home/header_submenu_images/3.png',
                link: '/electric-power/transmisson/electrical-testing'
              
              },
              {
                title: 'Type Testing',
                desc: 'Conductor/OPGW/Hardware',
                image: '/images/home/header_submenu_images/4.png',
                link: '/electric-power/transmisson/type-testing'
          
              }
            ]
          },
          {
            id: 'manufacturing',
            title: 'Manufacturing and Operations',
            image: '/images/sanpec_2026/23.jpeg',
            items: [
              {
                title: 'Failure/root cause analysis',
                desc: 'Plant Audit, Inspections (QA/QC), ITP',
                image: '/images/home/header_submenu_images/5.jpg',
                link: '/electric-power/manufacturing/failure-analysis'
              },
              {
                title: 'Quality Controls',
                desc: 'Testing, Source Inspections At Manufacturing facilities, Field Inspections Using Drones',
                image: '/images/home/header_submenu_images/6.png',
                link: '/electric-power/manufacturing/quality-controls'
            
              },
              {
                title: 'Operational Resilience',
                desc: 'Quality Management System, Innovation Management, Change Management',
                image: '/images/home/header_submenu_images/7.png',
                link: '/electric-power/manufacturing/operational-resilience'
        
              }
            ]
          },

          {
            id: 'strategic',
            title: 'Strategic Project Management',
            image: '/images/sanpec_2026/1.jpeg',
            items: [
              {
                title: 'Material Sourcing',
                desc: 'Material and Project Management',
                image: '/images/home/header_submenu_images/8.jpg',
                link: '/electric-power/strategic/material-sourcing'
               
              },
              {
                title: 'Yard Management',
                desc: 'Material & Yard Management',
                image: '/images/home/header_submenu_images/9.png',
                link: '/electric-power/strategic/yard-management'
              },
              {
                title: 'INVENTORY REPORTING',
                desc: 'INVENTORY REPORTING AND MATERIAL DOCUMENTATION',
                image: '/images/home/header_submenu_images/11.jpg',
                link: '/electric-power/strategic/inventory-reporting'
              }
            ]
          },
          {
            id: 'constructability',
            title: 'Constructability Review',
            image: '/images/sanpec_2026/47.jpeg',
            items: [
              {
                title: 'Logistic and Construction Support',
                desc: 'Follow up logistics planning from vendors',
                image: '/images/home/header_submenu_images/12.jpg',
                link: '/electric-power/constructability/logistic-construction'
              }
            ]
          },
          {
            id: 'resiliency',
            title: 'Resiliency Planning',
            image: '/images/sanpec_2026/22.jpeg',
            items: [
              {
                title: 'Grid Hardening',
                desc: 'Reinforcing the T&D infrastructure to prevent or reduce the damage from extreme weather events',
                image: '/images/home/header_submenu_images/21.jpg',
                link: '/electric-power/resiliency/grid-hardening'
         
              },
              {
                title: 'Substation Hardening',
                desc: 'Flooding can create tremendous issues for transmission substations',
                image: '/images/home/header_submenu_images/11.jpg',
                link: '/electric-power/resiliency/substation-hardening'
              },
              {
                title: 'Distribution Line Hardening',
                desc: 'Fire Prevention and Detection',
                image: '/images/home/header_submenu_images/15.png',
                link: '/electric-power/resiliency/distribution-hardening'
              }
            ]
          }
        ]
      }
    },
    { id: 3, title: "Research and Innovation", path: "/research-and-innovation", newTab: false },
    { id: 4, title: "Projects", path: "https://news.sanpec-excellence.com/td-projects/", newTab: true },
    { id: 5, title: "Why SANPEC", path: "/why-sanpec", newTab: false },
    { id: 6, title: "Resilience and Sustainability", path: "/resilience-and-sustainabilty", newTab: false },
    { id: 8, title: "Blog", path: "/blog", newTab: false }
  ]
};