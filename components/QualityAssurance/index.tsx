'use client';

import { useState, useEffect } from 'react';
import { 
  CheckCircle, Shield, Award, Users, Target, TrendingUp, 
  FileCheck, Zap, Eye, Settings, TestTube2, Hammer,
  ChevronRight, Menu, X, Download, FileText, ClipboardList,
  BarChart, AlertTriangle, MessageSquare, UsersIcon, Brain,
  GitMerge, Search, Filter, PieChart, Clock, TrendingDown,
  Star, ThumbsUp, HelpCircle, Calendar, Wrench, CheckSquare,
  FileBarChart, Cpu, GitBranch, Layers, Zap as Lightning,
  Cloud, Server, Database, Cctv, HardHat, Wrench as Tool,
  Building, Factory, Globe, Truck, Package, Shield as Protection,
  Battery, Power as PowerIcon, Grid as GridIcon, RadioTower as TowerIcon, 
  Link as CableIcon, CircuitBoard as CircuitIcon
} from 'lucide-react';

export default function QualityAssurancePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFramework, setActiveFramework] = useState('classical');
  const primaryColor = "#101631";
  const secondaryColor = "#CD091B";

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Quality Framework Tabs from image
  const frameworkTabs = [
    {
      id: 'classical',
      title: 'CLASSICAL ASSURANCE',
      icon: FileText,
      description: 'Basic quality management system components',
      color: primaryColor,
      points: [
        { 
          title: 'Procedures', 
          description: 'Standard operating procedures for consistent execution across all transmission projects',
          icon: ClipboardList,
          benefits: ['Standardization', 'Repeatability', 'Compliance']
        },
        { 
          title: 'Work Instructions', 
          description: 'Detailed step-by-step guidance for tower fabrication, welding, and assembly processes',
          icon: FileCheck,
          benefits: ['Clarity', 'Error Prevention', 'Training']
        },
        { 
          title: 'Records', 
          description: 'Comprehensive documentation of material tests, weld inspections, and quality checks',
          icon: FileBarChart,
          benefits: ['Traceability', 'Audit Trail', 'Data Analysis']
        },
        { 
          title: 'Policies', 
          description: 'Organizational policies for quality standards, safety protocols, and compliance requirements',
          icon: Shield,
          benefits: ['Governance', 'Accountability', 'Strategic Direction']
        }
      ]
    },
    {
      id: 'quality',
      title: 'QUALITY ASSURANCE',
      icon: Shield,
      description: 'Systematic quality verification processes',
      color: secondaryColor,
      points: [
        { 
          title: 'Internal Audits', 
          description: 'Regular self-assessment of fabrication facilities and field operations',
          icon: Search,
          benefits: ['Self-Improvement', 'Gap Analysis', 'Process Validation']
        },
        { 
          title: 'External Audits', 
          description: 'Third-party certification audits for ISO, AISC, and industry standards',
          icon: CheckSquare,
          benefits: ['Certification', 'Credibility', 'Market Access']
        },
        { 
          title: 'Compliance', 
          description: 'Adherence to ASCE, IEEE, and other transmission industry regulations',
          icon: Award,
          benefits: ['Regulatory Safety', 'Legal Protection', 'Industry Standards']
        },
        { 
          title: 'Process Checks', 
          description: 'Continuous monitoring of fabrication processes and material quality',
          icon: CheckCircle,
          benefits: ['Real-time Control', 'Early Detection', 'Quality Assurance']
        }
      ]
    },
    {
      id: 'improvement',
      title: 'PROCESS IMPROVEMENT',
      icon: TrendingUp,
      description: 'Continuous enhancement methodologies',
      color: primaryColor,
      points: [
        { 
          title: 'Quality Plan', 
          description: 'Strategic quality roadmap for transmission projects and maintenance',
          icon: Target,
          benefits: ['Strategic Alignment', 'Resource Planning', 'Goal Setting']
        },
        { 
          title: 'Test Plan', 
          description: 'Comprehensive testing strategy for materials, welds, and structures',
          icon: TestTube2,
          benefits: ['Systematic Testing', 'Risk Coverage', 'Validation']
        },
        { 
          title: 'Resource Allocation', 
          description: 'Optimal deployment of inspectors, engineers, and testing equipment',
          icon: Users,
          benefits: ['Efficiency', 'Cost Control', 'Skill Matching']
        },
        { 
          title: 'Schedule', 
          description: 'Timeline management for quality activities and project milestones',
          icon: Calendar,
          benefits: ['Timely Delivery', 'Milestone Tracking', 'Progress Monitoring']
        }
      ]
    },
    {
      id: 'metrics',
      title: 'PERFORMANCE METRICS',
      icon: BarChart,
      description: 'Quality measurement and analysis',
      color: secondaryColor,
      points: [
        { 
          title: 'KPI Monitoring', 
          description: 'Key Performance Indicators for quality, safety, and delivery metrics',
          icon: TrendingUp,
          benefits: ['Performance Tracking', 'Goal Measurement', 'Decision Making']
        },
        { 
          title: 'Defect Density', 
          description: 'Measurement of defects per unit in tower fabrication and assembly',
          icon: TrendingDown,
          benefits: ['Quality Assessment', 'Improvement Tracking', 'Benchmarking']
        },
        { 
          title: 'Cycle Time', 
          description: 'Monitoring of fabrication, inspection, and delivery cycles',
          icon: Clock,
          benefits: ['Efficiency Analysis', 'Bottleneck Identification', 'Process Speed']
        },
        { 
          title: 'Trend Analysis', 
          description: 'Statistical analysis of quality data to identify patterns and improvements',
          icon: PieChart,
          benefits: ['Predictive Insights', 'Pattern Recognition', 'Proactive Actions']
        },
        { 
          title: 'Reporting', 
          description: 'Automated quality reports for stakeholders and management',
          icon: FileBarChart,
          benefits: ['Transparency', 'Communication', 'Accountability']
        }
      ]
    }
  ];

  // Power Transmission Elements
  const transmissionElements = [
    { icon: TowerIcon, title: 'Transmission Towers', description: 'Lattice towers, monopoles, and H-frame structures' },
    { icon: CableIcon, title: 'Conductors & OPGW', description: 'ACSR conductors, OPGW cables, and accessories' },
    { icon: CircuitIcon, title: 'Substation Equipment', description: 'Transformers, circuit breakers, and switchgear' },
    { icon: GridIcon, title: 'Grid Components', description: 'Insulators, hardware, and protection systems' },
    { icon: Factory, title: 'Fabrication Shops', description: 'Steel fabrication, welding, and galvanizing facilities' },
    { icon: HardHat, title: 'Field Installation', description: 'Erection, foundation, and commissioning services' }
  ];

  // Original content (unchanged)
  const qualityStandards = [
    {
      icon: Shield,
      title: "ISO 9001:2015",
      description: "Quality Management System certified for excellence in manufacturing and service delivery"
    },
    {
      icon: Award,
      title: "ISO 14001:2015",
      description: "Environmental Management System ensuring sustainable operations"
    },
    {
      icon: FileCheck,
      title: "ISO 45001:2018",
      description: "Health & Safety Management System for worker protection"
    },
    {
      icon: Target,
      title: "AISC Certified",
      description: "American Institute of Steel Construction certification"
    }
  ];

  const qaServicesList = [
    {
      icon: "🔍",
      title: "Plant Audit & Inspections",
      description: "Comprehensive QA/QC inspections at manufacturing facilities for transmission materials"
    },
    {
      icon: "✓",
      title: "Source Inspections",
      description: "On-site inspections at manufacturing facilities ensuring quality compliance"
    },
    {
      icon: "🔬",
      title: "Material Testing",
      description: "Metallurgical and mechanical testing with material sampling protocols"
    },
    {
      icon: "⚡",
      title: "Weld Inspections (NDT)",
      description: "Non-destructive testing techniques for weld quality verification"
    },
    {
      icon: "📊",
      title: "ITP Implementation",
      description: "Inspection and Test Plans for comprehensive quality oversight"
    },
    {
      icon: "🔍",
      title: "Failure Analysis",
      description: "Root cause analysis for structural failures and defect identification"
    }
  ];

  const qualityProcess = [
    {
      step: "01",
      title: "Pre-fabrication Planning",
      description: "Comprehensive review of specifications, standards compliance, and quality requirements",
      icon: TestTube2
    },
    {
      step: "02",
      title: "Material Verification",
      description: "Rigorous testing and certification of raw materials before production begins",
      icon: FileCheck
    },
    {
      step: "03",
      title: "In-Process Monitoring",
      description: "Continuous inspection during fabrication, welding, and finishing processes",
      icon: Eye
    },
    {
      step: "04",
      title: "Final Certification",
      description: "Complete testing and quality certification before delivery",
      icon: Award
    }
  ];

  const stats = [
    { number: "99.8%", label: "Quality Success Rate", icon: TrendingUp },
    { number: "500+", label: "Quality Tests Monthly", icon: FileCheck },
    { number: "50+", label: "Quality Professionals", icon: Users },
    { number: "Zero", label: "Compromise Policy", icon: Shield }
  ];

  const qaCapabilities = [
    "Transmission Steel Structures QA",
    "Lattice Tower Fabrication Inspection",
    "Steel Pole Manufacturing Oversight",
    "Substation Support Structure QC",
    "Conductor & OPGW Quality Verification",
    "Hardware Assembly Inspection",
    "Galvanizing Process Monitoring",
    "Shop Fabrication Audits",
    "Field Inspection Services",
    "Pre-fabrication Quality Planning"
  ];

  const industriesServed = [
    "Power Transmission & Distribution",
    "Renewable Energy Infrastructure",
    "Substation Construction",
    "Grid Modernization Projects"
  ];

  const activeTab = frameworkTabs.find(tab => tab.id === activeFramework);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(${primaryColor} 2px, transparent 2px), linear-gradient(90deg, ${primaryColor} 2px, transparent 2px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Animated Circles */}
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full opacity-20 animate-pulse" 
             style={{ backgroundColor: secondaryColor, filter: 'blur(80px)' }}></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full opacity-20 animate-pulse" 
             style={{ backgroundColor: primaryColor, filter: 'blur(100px)', animationDelay: '1s' }}></div>

        {/* Content */}
        <div className={`relative z-10 text-center px-4 max-w-6xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-6">
            <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
              <Shield className="w-5 h-5 text-white" />
              <span className="text-white font-semibold uppercase tracking-wider text-sm">Quality Assurance Excellence</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight">
            ENSURING STRUCTURAL<br />
            INTEGRITY FOR THE<br />
            <span style={{ color: secondaryColor }}>POWER GRID</span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
            From plant audits to field inspections, our comprehensive quality assurance services ensure every transmission structure meets the highest standards of safety and reliability
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                    style={{ backgroundColor: secondaryColor }}>
              Explore QA Services
            </button>
            <button className="group px-8 py-4 rounded-xl font-bold border-2 border-white text-white hover:bg-white transition-all duration-300 hover:scale-105">
              <span className="group-hover:text-[#101631] transition-colors duration-300">Download Quality Standards</span>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Power Transmission Elements Section */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4" style={{ color: primaryColor }}>
              POWER TRANSMISSION <span style={{ color: secondaryColor }}>ELEMENTS</span>
            </h2>
            <div className="w-20 h-1.5 mx-auto rounded-full mb-6" style={{ backgroundColor: secondaryColor }}></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive quality assurance for all critical components of power transmission infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {transmissionElements.map((element, index) => {
              const Icon = element.icon;
              return (
                <div 
                  key={index}
                  className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-transparent overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1" style={{ 
                    backgroundColor: index % 3 === 0 ? secondaryColor : 
                                   index % 3 === 1 ? primaryColor : secondaryColor 
                  }}></div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                           style={{ 
                             backgroundColor: index % 3 === 0 ? `${secondaryColor}15` : 
                                            index % 3 === 1 ? `${primaryColor}15` : `${secondaryColor}15`
                           }}>
                        <Icon className="w-7 h-7" style={{ 
                          color: index % 3 === 0 ? secondaryColor : 
                                index % 3 === 1 ? primaryColor : secondaryColor 
                        }} />
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-2" style={{ color: primaryColor }}>
                        {element.title}
                      </h3>
                      <p className="text-gray-600">
                        {element.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Framework Tabs Section */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4" style={{ color: primaryColor }}>
              QUALITY MANAGEMENT <span style={{ color: secondaryColor }}>FRAMEWORK</span>
            </h2>
            <div className="w-20 h-1.5 mx-auto rounded-full mb-6" style={{ backgroundColor: secondaryColor }}></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive quality systems covering all aspects of transmission infrastructure assurance
            </p>
          </div>

          {/* Tabs Navigation */}
          <div className="mb-8 md:mb-12">
            <div className="flex flex-wrap gap-2 justify-center">
              {frameworkTabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveFramework(tab.id)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-xl transition-all duration-300 ${
                      activeFramework === tab.id 
                        ? 'shadow-lg transform -translate-y-1' 
                        : 'hover:bg-gray-100'
                    }`}
                    style={{
                      backgroundColor: activeFramework === tab.id ? tab.color : 'white',
                      color: activeFramework === tab.id ? 'white' : tab.color,
                      border: `2px solid ${activeFramework === tab.id ? tab.color : '#e5e7eb'}`
                    }}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-semibold">{tab.title.split(' ')[0]}</span>
                    {activeFramework === tab.id && (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Tab Content */}
          {activeTab && (
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="p-6 md:p-8 border-b border-gray-200" style={{ backgroundColor: `${activeTab.color}05` }}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: activeTab.color }}>
                      <activeTab.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold" style={{ color: primaryColor }}>
                        {activeTab.title}
                      </h3>
                      <p className="text-gray-600 mt-1">{activeTab.description}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {activeTab.points.map((point, index) => {
                    const PointIcon = point.icon;
                    return (
                      <div 
                        key={index}
                        className="group relative bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex items-start gap-4">
                          <div 
                            className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center mt-1"
                            style={{ backgroundColor: `${activeTab.color}15` }}
                          >
                            <PointIcon className="w-6 h-6" style={{ color: activeTab.color }} />
                          </div>
                          
                          <div className="flex-1">
                            <h4 className="text-lg font-bold mb-2" style={{ color: primaryColor }}>
                              {point.title}
                            </h4>
                            
                            <p className="text-gray-600 mb-4">
                              {point.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-2">
                              {point.benefits.map((benefit, idx) => (
                                <span 
                                  key={idx}
                                  className="px-3 py-1 text-xs font-medium rounded-full"
                                  style={{ 
                                    backgroundColor: `${activeTab.color}10`,
                                    color: activeTab.color
                                  }}
                                >
                                  {benefit}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black mb-6" style={{ color: primaryColor }}>
                WHY QUALITY ASSURANCE <span style={{ color: secondaryColor }}>MATTERS</span>
              </h2>
              <div className="w-24 h-1.5 rounded-full mb-6" style={{ backgroundColor: secondaryColor }}></div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Transmission structures built with rigorous quality assurance last longer and perform better. SANPEC's expertise in transmission line engineering, fabrication oversight, and structural inspection ensures your infrastructure assets meet the highest industry standards.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our comprehensive QA program covers everything from material verification and weld inspections to full-scale testing and failure analysis, minimizing field issues and maximizing asset reliability.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" style={{ color: secondaryColor }} />
                  <span className="font-semibold text-gray-800">Plant Audits & ITP</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" style={{ color: secondaryColor }} />
                  <span className="font-semibold text-gray-800">NDT Weld Inspections</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" style={{ color: secondaryColor }} />
                  <span className="font-semibold text-gray-800">Material Testing</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl opacity-20" 
                   style={{ background: `linear-gradient(135deg, ${secondaryColor}, ${primaryColor})`, filter: 'blur(40px)' }}></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-200">
                <h3 className="text-2xl font-bold mb-6" style={{ color: primaryColor }}>Our QA Services Deliver:</h3>
                <ul className="space-y-4">
                  {[
                    "Enhanced structural reliability and safety",
                    "Compliance with ASCE, AISC standards",
                    "Reduced field issues and rework costs",
                    "Extended asset lifecycle performance",
                    "Risk mitigation throughout fabrication"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1"
                           style={{ backgroundColor: `${secondaryColor}20` }}>
                        <CheckCircle className="w-4 h-4" style={{ color: secondaryColor }} />
                      </div>
                      <span className="text-gray-700 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: `${primaryColor}05` }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: primaryColor }}>
              QUALITY BY THE <span style={{ color: secondaryColor }}>NUMBERS</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} 
                     className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-b-4"
                     style={{ borderColor: index % 2 === 0 ? secondaryColor : primaryColor }}>
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center"
                         style={{ backgroundColor: index % 2 === 0 ? `${secondaryColor}15` : `${primaryColor}15` }}>
                      <Icon className="w-8 h-8" style={{ color: index % 2 === 0 ? secondaryColor : primaryColor }} />
                    </div>
                  </div>
                  <h3 className="text-4xl font-black mb-2 text-center" style={{ color: primaryColor }}>
                    {stat.number}
                  </h3>
                  <p className="text-gray-600 text-center font-semibold">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core QA Services */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4" style={{ color: primaryColor }}>
              COMPREHENSIVE QA <span style={{ color: secondaryColor }}>SERVICES</span>
            </h2>
            <div className="w-24 h-1.5 mx-auto rounded-full mb-6" style={{ backgroundColor: secondaryColor }}></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              End-to-end quality assurance for transmission line structures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qaServicesList.map((service, index) => (
              <div key={index} 
                   className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-transparent overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                     style={{ background: `linear-gradient(135deg, ${secondaryColor}10, ${primaryColor}10)` }}></div>
                
                <div className="relative z-10">
                  <div className="text-4xl mb-6">{service.icon}</div>
                  
                  <h3 className="text-xl font-bold mb-4" style={{ color: primaryColor }}>
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4" style={{ color: primaryColor }}>
              CERTIFIED <span style={{ color: secondaryColor }}>EXCELLENCE</span>
            </h2>
            <div className="w-24 h-1.5 mx-auto rounded-full mb-6" style={{ backgroundColor: secondaryColor }}></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment validated by international certifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityStandards.map((standard, index) => {
              const Icon = standard.icon;
              return (
                <div key={index} 
                     className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-t-4"
                     style={{ borderColor: secondaryColor }}>
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto transition-all duration-300 group-hover:scale-110"
                       style={{ backgroundColor: `${secondaryColor}15` }}>
                    <Icon className="w-10 h-10" style={{ color: secondaryColor }} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: primaryColor }}>
                    {standard.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-center">
                    {standard.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QA Process */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: primaryColor }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              OUR QA <span style={{ color: secondaryColor }}>PROCESS</span>
            </h2>
            <div className="w-24 h-1.5 mx-auto rounded-full mb-6" style={{ backgroundColor: secondaryColor }}></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Systematic approach ensuring excellence at every stage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

            {qualityProcess.map((process, index) => {
              const Icon = process.icon;
              return (
                <div key={index} className="relative">
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full flex items-center justify-center border-4 bg-white relative z-10"
                           style={{ borderColor: secondaryColor }}>
                        <Icon className="w-8 h-8" style={{ color: primaryColor }} />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-black text-white z-20"
                           style={{ backgroundColor: secondaryColor }}>
                        {process.step}
                      </div>
                      <div className="absolute inset-0 rounded-full animate-ping opacity-20"
                           style={{ backgroundColor: secondaryColor }}></div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 h-full">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {process.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QA Capabilities */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4" style={{ color: primaryColor }}>
              COMPREHENSIVE <span style={{ color: secondaryColor }}>CAPABILITIES</span>
            </h2>
            <div className="w-24 h-1.5 mx-auto rounded-full mb-6" style={{ backgroundColor: secondaryColor }}></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Full-spectrum quality assurance for transmission infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qaCapabilities.map((capability, index) => (
              <div key={index} 
                   className="group flex items-center gap-4 bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-l-4"
                   style={{ borderColor: index % 2 === 0 ? secondaryColor : primaryColor }}>
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                       style={{ backgroundColor: index % 2 === 0 ? `${secondaryColor}15` : `${primaryColor}15` }}>
                    <CheckCircle className="w-6 h-6" style={{ color: index % 2 === 0 ? secondaryColor : primaryColor }} />
                  </div>
                </div>
                <span className="font-semibold text-gray-800 text-lg">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4" style={{ color: primaryColor }}>
              INDUSTRIES <span style={{ color: secondaryColor }}>WE SERVE</span>
            </h2>
            <div className="w-24 h-1.5 mx-auto rounded-full mb-6" style={{ backgroundColor: secondaryColor }}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industriesServed.map((industry, index) => (
              <div key={index} 
                   className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 text-center">
                <div className="w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                     style={{ backgroundColor: `${secondaryColor}15` }}>
                  <Zap className="w-8 h-8" style={{ color: secondaryColor }} />
                </div>
                <h3 className="font-bold text-lg" style={{ color: primaryColor }}>
                  {industry}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 relative overflow-hidden" style={{ backgroundColor: secondaryColor }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(white 2px, transparent 2px), linear-gradient(90deg, white 2px, transparent 2px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Ready to Ensure Quality Excellence?
          </h2>
          <p className="text-lg text-white/90 mb-10">
            Partner with SANPEC for comprehensive quality assurance that safeguards your transmission infrastructure investments
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                    style={{ color: secondaryColor }}>
              Request QA Consultation
            </button>
            <button className="group px-8 py-4 border-2 border-white rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:bg-white">
              <span className="text-white group-hover:text-[#CD091B] transition-colors duration-300">Download QA Brochure</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}