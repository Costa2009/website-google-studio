'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  TrendingUp, 
  Zap, 
  Settings, 
  Calendar, 
  MessageCircle, 
  Plus,
  Target,
  Sparkles,
  ShieldCheck,
  Mail,
  ExternalLink
} from 'lucide-react';
import Navbar from '@/components/navbar';
import BackgroundMotion from '@/components/background-motion';
import WhatsAppButton from '@/components/whatsapp-button';
import FAQItem from '@/components/faq-item';
import ContactForm from '@/components/contact-form';
import Breadcrumbs from '@/components/breadcrumbs';
import CurrentYear from '@/components/current-year';

const services = [
  {
    id: "meta-ads",
    title: "META ADS MANAGEMENT",
    shortDesc: "Reach potential customers through strategic Facebook and Instagram advertising.",
    fullDesc: "We help businesses plan, launch, and manage Meta advertising campaigns with a focus on reaching relevant audiences and encouraging meaningful enquiries.",
    approach: "Our approach starts with understanding your offer, your ideal customer, and the action you want people to take.",
    icon: TrendingUp,
    image: "/images/service_marketing_1793116558969.jpg",
    cta: "Discuss Your Advertising Goals",
    features: [
      "Campaign strategy and planning",
      "Audience research and targeting",
      "Ad copy and creative planning",
      "Performance reporting"
    ]
  },
  {
    id: "web-dev",
    title: "WEBSITE DEVELOPMENT",
    shortDesc: "Professional websites designed to present your business clearly and make it easier for customers to contact you.",
    fullDesc: "Your website should explain what your business offers, communicate credibility, and guide visitors toward taking action.",
    approach: "We develop modern, responsive business websites tailored to your services, audience, and goals.",
    icon: Globe,
    image: "/images/service_web_dev_1793116558967.jpg",
    cta: "Discuss Your Website",
    features: [
      "Responsive desktop and mobile layouts",
      "Service and landing pages",
      "WhatsApp contact integration",
      "Clear calls to action"
    ]
  }
];

const processSteps = [
  {
    step: "01",
    title: "Discover",
    desc: "We learn about your business, your current challenges, your ideal customers, and what you want to achieve."
  },
  {
    step: "02",
    title: "Plan",
    desc: "We identify relevant opportunities and recommend an approach suited to your needs."
  },
  {
    step: "03",
    title: "Build and Launch",
    desc: "We develop the agreed website or prepare and launch the agreed advertising campaigns."
  },
  {
    step: "04",
    title: "Review and Improve",
    desc: "We review available performance information, communicate our findings, and recommend appropriate next steps."
  }
];

const portfolio = [
  {
    title: "Business Website Concept",
    category: "WEB DEVELOPMENT",
    desc: "A modern, responsive website for a fictional cleaning company in Nairobi. This demo shows how we design and develop professional websites.",
    objective: "Showcase responsive design and modern UX for local service businesses.",
    tools: "Next.js, Tailwind CSS, Framer Motion",
    label: "DEMO PROJECT",
    image: "/images/portfolio_website_concept_1793214583394.jpg",
    cta: "View Website Demo",
    href: "#contact"
  },
  {
    title: "Meta Ads Campaign Concept",
    category: "DIGITAL MARKETING",
    desc: "Sample Facebook and Instagram ads for a fictional cleaning company. These creatives show how we create engaging ads.",
    objective: "Demonstrate high-converting ad concepts for local businesses.",
    tools: "Meta Ads Manager, Canva, Photo Editing",
    label: "DEMO PROJECT",
    image: "/images/portfolio_ads_concept_1793214584711.jpg",
    cta: "View Ad Concepts",
    href: "#contact"
  }
];

const faqs = [
  {
    q: "What services do you offer?",
    a: "We offer Meta Ads Management and Website Development. We can discuss which service best fits your business goals."
  },
  {
    q: "Can you build a website without managing our ads?",
    a: "Yes. Website development is available as a standalone service."
  },
  {
    q: "Can you manage ads if we already have a website?",
    a: "Yes. We can review your current website and discuss whether it supports your advertising objectives or whether improvements may be useful."
  },
  {
    q: "Do you work with businesses in Kenya?",
    a: "Yes. We focus on helping businesses in Kenya and can discuss your business needs during an initial conversation."
  },
  {
    q: "How long does a website take to build?",
    a: "Timelines depend on the website's scope, required features, content availability, feedback, and integrations. We will agree on a realistic timeline after understanding the project."
  },
  {
    q: "How soon can advertising produce results?",
    a: "Advertising performance varies depending on the offer, audience, budget, creative, competition, and follow-up process. We monitor performance and use available data to guide improvements, but we cannot guarantee a particular outcome."
  },
  {
    q: "Do you guarantee leads or sales?",
    a: "No specific number of leads, sales, or revenue can be guaranteed. Our focus is on implementing an appropriate strategy, measuring performance, and making informed improvements."
  },

  {
    q: "How do we get started?",
    a: "Contact us on WhatsApp, submit the enquiry form, or book a discovery call. We'll learn about your business and discuss the next step."
  },
  {
    q: "Do you display fixed prices on your website?",
    a: "No. We discuss project requirements first and provide a tailored proposal based on the agreed scope."
  }
];

export default function Home() {
  return (
    <main className="relative min-h-screen text-white selection:bg-emerald-accent selection:text-midnight">
      <BackgroundMotion />
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative pt-48 pb-32 px-6 md:px-12 max-w-7xl mx-auto min-h-[90vh] flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl"
        >
          <div className="flex items-center gap-3 mb-8 text-[10px] font-black tracking-[0.4em] text-emerald-accent uppercase">
            <span>Digital Marketing</span>
            <span className="w-4 h-px bg-white/20" />
            <span>Website Development</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-10 leading-[0.95] text-wrap-balance">
            Your Business Deserves More Than Just an <br className="hidden lg:block" />
            <span className="text-emerald-accent/80 italic">Online Presence.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/60 mb-12 max-w-3xl leading-relaxed font-medium">
            We help Kenyan businesses build a stronger digital presence through strategic Meta advertising and professional websites designed around their business goals.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 mb-16">
            <WhatsAppButton 
              className="w-full sm:w-auto px-10 py-5 text-lg bg-emerald-accent text-midnight hover:bg-white"
              label="Let's Talk on WhatsApp"
            />
            <Link 
              href="#services"
              className="w-full sm:w-auto px-10 py-5 bg-charcoal border border-white/10 text-white font-bold rounded-full hover:border-emerald-accent/50 transition-all flex items-center justify-center gap-2 group"
            >
              Explore Our Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-x-12 gap-y-6 text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase border-t border-white/5 pt-12">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-4 h-4 text-emerald-accent" />
              Practical digital solutions
            </div>
            <div className="flex items-center gap-3">
              <MessageCircle className="w-4 h-4 text-emerald-accent" />
              Clear communication
            </div>
            <div className="flex items-center gap-3">
              <Target className="w-4 h-4 text-emerald-accent" />
              A focus on your goals
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
            Digital Solutions Built Around Your Business
          </h2>
          <p className="text-white/60 text-xl leading-relaxed">
            Every business has different goals. We help you identify the right digital solutions to strengthen your online presence, reach potential customers, and create clearer paths for enquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col overflow-hidden rounded-[2rem] bg-charcoal/90 border border-white/5 backdrop-blur-sm"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0 opacity-40 group-hover:opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
                <div className="absolute top-8 left-8">
                  <div className="p-4 rounded-2xl bg-midnight border border-white/10">
                    <service.icon className="w-6 h-6 text-emerald-accent" />
                  </div>
                </div>
              </div>
              
              <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{service.title}</h3>
                <p className="text-white/80 font-bold mb-4">{service.shortDesc}</p>
                <p className="text-white/60 mb-6 leading-relaxed text-sm">{service.fullDesc}</p>
                
                <div className="mt-auto space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3 text-[11px] font-bold text-white/50 uppercase tracking-wider">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-accent shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <WhatsAppButton 
                    label={service.cta}
                    message={`Hi! I'm interested in discussing ${service.title.toLowerCase()} for my business.`}
                    className="w-full py-5 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-emerald-accent hover:text-midnight hover:border-emerald-accent transition-all"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-[10px] font-black tracking-[0.4em] text-emerald-accent uppercase mb-8">About QC Marketing Agency</div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tighter leading-none">
              A Digital Partner Focused on Your <span className="text-emerald-accent italic">Business Goals</span>
            </h2>
            <div className="space-y-6 text-lg text-white/70 leading-relaxed max-w-xl">
              <p>We are an independent digital marketing and website development team helping businesses improve how they present themselves online and connect with potential customers.</p>
              <p>Our work focuses on understanding each business, identifying practical opportunities, and recommending digital solutions that support its objectives.</p>
              <p>From advertising campaigns to professional websites, we aim to make digital marketing more understandable, purposeful, and aligned with the businesses we work with.</p>
            </div>
            <div className="mt-12">
              <WhatsAppButton label="Let's Discuss Your Business" className="px-10 py-5 bg-emerald-accent text-midnight hover:bg-white" />
            </div>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 bg-midnight/50 group backdrop-blur-md"
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-full h-full"
              >
                <Image
                  src="/images/about_mockup.jpg"
                  alt="QC Marketing Agency Mockup"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Watermark */}
                <div className="absolute top-8 left-8 opacity-30">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 relative">
                      <Image
                        src="/images/qc_logo_1793116556289.jpg"
                        alt="QC Logo Watermark"
                        fill
                        className="object-contain grayscale brightness-200"
                      />
                    </div>
                    <span className="text-[8px] font-black tracking-widest text-white uppercase">QC Marketing Agency</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            <div className="absolute -bottom-10 -right-10 bg-charcoal/90 backdrop-blur-md border border-white/10 p-8 rounded-3xl shadow-2xl max-w-xs">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-emerald-accent/10 flex items-center justify-center">
                  <Plus className="w-6 h-6 text-emerald-accent" />
                </div>
                <div>
                  <div className="text-white font-bold">Independent Team</div>
                  <div className="text-white/40 text-xs">Serving Kenya</div>
                </div>
              </div>
              <p className="text-white/60 text-xs leading-relaxed">
                Our team focuses on personalized attention for every client, ensuring your specific business needs are met.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section id="process" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
            A Clear Process From First Conversation to Launch
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative p-10 bg-charcoal/90 backdrop-blur-sm border border-white/10 rounded-[2rem] group hover:border-emerald-accent/30 transition-colors"
            >
              <div className="text-5xl font-black text-white/5 mb-8 transition-colors group-hover:text-emerald-accent/20">{step.step}</div>
              <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
              
              {idx < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-white/10" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Work Section */}
      <section id="work" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
              Explore Our Work
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              Explore website concepts, sample advertising creatives, and digital experiences that demonstrate our approach to design and marketing.
            </p>
          </div>
          <div className="flex items-center gap-4 text-[10px] font-bold tracking-[0.4em] text-emerald-accent uppercase">
            <span>Portfolio</span>
            <span className="w-12 h-px bg-white/20" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {portfolio.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col bg-charcoal/90 backdrop-blur-sm border border-white/10 rounded-[2rem] overflow-hidden"
            >
              <div className="relative aspect-video bg-midnight overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1.5 bg-midnight rounded-full text-[10px] font-black tracking-[0.2em] text-emerald-accent uppercase border border-white/10">
                    {project.label}
                  </span>
                </div>
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <span className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase mb-4">{project.category}</span>
                <h3 className="text-2xl font-black text-white mb-6 tracking-tight group-hover:text-emerald-accent transition-colors">{project.title}</h3>
                <p className="text-white/60 text-sm mb-6 leading-relaxed">{project.desc}</p>
                <div className="space-y-3 mb-10 border-t border-white/5 pt-6">
                  <div className="flex gap-3">
                    <span className="text-[10px] font-black text-white/20 uppercase tracking-widest shrink-0">Objective:</span>
                    <span className="text-[10px] font-bold text-white/50">{project.objective}</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[10px] font-black text-white/20 uppercase tracking-widest shrink-0">Stack:</span>
                    <span className="text-[10px] font-bold text-white/50">{project.tools}</span>
                  </div>
                </div>
                <Link 
                  href={project.href}
                  className="mt-auto py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-bold hover:bg-emerald-accent hover:text-midnight hover:border-emerald-accent transition-all flex items-center justify-center gap-2 group"
                >
                  {project.cta}
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center text-white/20 text-[9px] font-bold uppercase tracking-widest">
          * Clearly labeled concept work and demonstrations used for portfolio showcase.
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto bg-midnight">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter italic">
            &quot;What Great Collaboration Should Feel Like&quot;
          </h2>
          <div className="w-20 h-1 bg-emerald-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            "Clear communication and a well-organized process make it easier for businesses to understand their digital options.",
            "A professional website should make your services clear and help potential customers understand what to do next.",
            "Good advertising starts with understanding the audience, the offer, and the action a business wants customers to take."
          ].map((quote, idx) => (
            <div key={idx} className="relative p-10 bg-charcoal/90 backdrop-blur-sm border border-white/10 rounded-[2rem] flex flex-col justify-between italic">
              <MessageCircle className="w-8 h-8 text-emerald-accent/20 absolute top-8 left-8" />
              <p className="text-white/70 text-lg leading-relaxed relative z-10 pt-8 mb-10">
                &quot;{quote}&quot;
              </p>
              <div className="text-[9px] font-black tracking-[0.2em] text-emerald-accent/40 uppercase">
                Client Perspective
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Conversion Section */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-charcoal/80 backdrop-blur-lg rounded-[3rem] md:rounded-[5rem] p-12 md:p-32 text-white border border-white/5 relative overflow-hidden"
        >
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-10 leading-[0.95]">
              Ready to Take the <br /> <span className="text-emerald-accent italic">Next Step?</span>
            </h2>
            <p className="text-white/60 text-xl md:text-2xl mb-16 max-w-2xl mx-auto font-medium leading-relaxed">
              Tell us about your business, what you want to improve, and the challenges you&apos;re facing. We&apos;ll discuss your goals and help you explore which digital solution may be appropriate.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <WhatsAppButton 
                label="Let's Talk on WhatsApp" 
                className="w-full md:w-auto px-12 py-6 bg-emerald-accent text-midnight hover:bg-white" 
              />
              <Link 
                href="#contact"
                className="w-full md:w-auto px-12 py-6 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white hover:text-midnight transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5 text-emerald-accent" />
                Book a Discovery Call
              </Link>
            </div>
            
            <div className="mt-12">
              <Link href="#contact" className="text-emerald-accent/40 font-bold underline hover:text-emerald-accent transition-colors uppercase tracking-widest text-[10px]">
                Or Send Us an Enquiry
              </Link>
            </div>
          </div>
          
          <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-emerald-accent blur-[120px] rounded-full opacity-10" />
          <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 bg-emerald-accent blur-[120px] rounded-full opacity-10" />
        </motion.div>
      </section>

      {/* Booking Placeholder Section */}
      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-black text-white mb-6 tracking-tight">Book a Discovery Call</h2>
        <p className="text-white/60 text-lg mb-12">
          Let&apos;s discuss your business, understand your current challenges, and explore potential next steps.
        </p>
        <div className="p-12 bg-charcoal/90 backdrop-blur-sm border border-dashed border-white/10 rounded-3xl">
          <Calendar className="w-12 h-12 text-emerald-accent/20 mx-auto mb-6" />
          <Link 
            href="#contact" 
            className="inline-block px-10 py-5 bg-white text-midnight font-black rounded-full hover:bg-emerald-accent transition-all active:scale-95"
          >
            Choose a Time
          </Link>
          <p className="text-white/20 text-[10px] mt-6 uppercase tracking-widest font-bold">
            Configuration Required: Connect Calendly or Booking Provider
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">
              Let&apos;s Talk About Your <span className="text-emerald-accent italic">Business</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-12">
              Whether you need a professional website or help with Meta advertising, we&apos;d like to understand what you&apos;re working toward.
            </p>
            
            <div className="space-y-8">
              <WhatsAppButton 
                label="Let's Talk on WhatsApp" 
                className="w-full justify-start py-6 bg-emerald-accent text-midnight hover:bg-white"
              />
              
              <div className="p-8 bg-charcoal/90 backdrop-blur-sm border border-white/10 rounded-3xl">
                <div className="text-[10px] font-black tracking-[0.4em] text-emerald-accent uppercase mb-4">Direct Contact</div>
                <a 
                  href="mailto:costalual33@gmail.com" 
                  className="text-xl font-bold text-white mb-2 flex items-center gap-3 hover:text-emerald-accent transition-colors group"
                >
                  <Mail className="w-5 h-5 text-emerald-accent group-hover:scale-110 transition-transform" />
                  costalual33@gmail.com
                </a>
                <p className="text-white/40 text-xs mt-2">Mon - Fri: 9:00 AM - 6:00 PM EAT</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 px-6 md:px-12 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
            Frequently Asked Questions
          </h2>
        </div>
        
        <div className="space-y-2">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 md:px-12 border-t border-white/5 bg-charcoal/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20">
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 relative rounded-xl bg-midnight border border-white/10">
                  <Image
                    src="/images/qc_logo_1793116556289.jpg"
                    alt="QC Marketing Agency Logo"
                    fill
                    className="object-contain scale-150"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-xl font-black text-white tracking-tight">QC Marketing Agency</span>
              </Link>
              <p className="text-white/60 text-sm leading-relaxed">
                We help businesses strengthen their digital presence through Meta advertising and professional websites.
              </p>
            </div>
            
            <div>
              <h4 className="text-xs font-black tracking-[0.4em] text-emerald-accent uppercase mb-8">Quick Links</h4>
              <ul className="space-y-4 text-sm font-bold text-white/40">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="#about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="#work" className="hover:text-white transition-colors">Our Work</Link></li>
                <li><Link href="#process" className="hover:text-white transition-colors">Our Process</Link></li>
                <li><Link href="#faq" className="hover:text-white transition-colors">FAQs</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xs font-black tracking-[0.4em] text-emerald-accent uppercase mb-8">Our Services</h4>
              <ul className="space-y-4 text-sm font-bold text-white/60">
                <li><Link href="#services" className="hover:text-white transition-colors">Meta Ads Management</Link></li>
                <li><Link href="#services" className="hover:text-white transition-colors">Website Development</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xs font-black tracking-[0.4em] text-emerald-accent uppercase mb-8">Let&apos;s Connect</h4>
              <div className="space-y-6">
                <WhatsAppButton label="WhatsApp Contact" className="w-full py-4 text-xs bg-emerald-accent text-midnight" />
                <div className="flex gap-4">
                  <a href="https://wa.me/254746386377" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-midnight border border-white/10 hover:border-emerald-accent/50 transition-colors">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </a>
                  <Link href="/" className="p-3 rounded-full bg-midnight border border-white/10 hover:border-emerald-accent/50 transition-colors">
                    <Globe className="w-4 h-4 text-white" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5 text-[10px] font-bold tracking-widest text-white/20 uppercase">
            <div className="flex gap-8">
              <Link href="#contact" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#contact" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
            <div>
              © <span><CurrentYear /></span> QC Marketing Agency. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
