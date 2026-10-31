'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import BackgroundMotion from '@/components/background-motion';

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center px-6">
      <BackgroundMotion />
      
      <div className="max-w-xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm font-bold tracking-[0.2em] text-white/40 uppercase mb-4 block">
            Error 404
          </span>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter">
            Lost in <br /> Space.
          </h1>
          <p className="text-lg text-white/60 mb-12 leading-relaxed">
            The page you are looking for has been moved or doesn&apos;t exist. 
            Let&apos;s get you back to scaling your brand.
          </p>
          
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-all active:scale-95"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Agency
          </Link>
        </motion.div>
      </div>
      
      <div className="fixed bottom-12 left-1/2 -translate-x-1/2 text-[10px] font-bold tracking-widest text-white/20 uppercase">
        QC Marketing Agency • Digital Growth Studio
      </div>
    </main>
  );
}
