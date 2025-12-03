'use client';

import Spline from '@splinetool/react-spline';
import { useScroll, useTransform, motion, Variants } from 'framer-motion';
import { useRef } from 'react';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const earthY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const cardVariants: Variants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 0.8 }
    }
  };

  return (
    <div ref={containerRef} className="relative bg-black h-[300vh]">
      
      {/* 1. 배경 지구 */}
      <div className="fixed inset-0 w-full h-screen z-0">
        <motion.div style={{ y: earthY }} className="w-full h-full">
          <Spline scene="https://prod.spline.design/hCHg1FCOJnI4QL6G/scene.splinecode" />
        </motion.div>
      </div>

      {/* 2. 콘텐츠 */}
      <div className="relative z-10 pointer-events-none">
        
        {/* Hero Section */}
        <section className="h-screen flex flex-col items-center justify-center">
          <motion.div style={{ opacity: textOpacity }} className="text-center z-10">
            <h1 className="text-7xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-300 to-blue-600 mb-4 tracking-tighter">
              Earth Up.
            </h1>
            <p className="text-white/70 text-2xl font-light">지구를 더 나은 방향으로</p>
          </motion.div>
        </section>

        {/* Bento Grid Section (어스업 내용 반영됨!) */}
        <section className="min-h-screen flex flex-col items-center justify-center p-6 md:p-10">
          <div className="max-w-6xl w-full">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-20 text-center tracking-tight"
            >
              우리가 만드는 <span className="text-blue-500">변화의 물결</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pointer-events-auto">
              
              {/* 카드 1: 어스업 플랫폼 & 딜리버리 허브 (메인) */}
              <motion.div 
                initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.3 }} variants={cardVariants}
                className="md:col-span-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-[2rem] p-12 hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="h-full flex flex-col justify-between gap-10">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-4">Smart Delivery Hub</h3>
                    <p className="text-white/80 text-xl font-light leading-relaxed">
                      지역 내 <strong>무인 매장</strong>을 물류 허브로 활용합니다.<br/>
                      가장 가까운 곳에서 시작되는 효율적인 배달,<br/>
                      어스업 플랫폼이 연결합니다.
                    </p>
                  </div>
                  {/* 시각적 장식 */}
                  <div className="h-40 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-2xl flex items-center justify-center border border-white/10 group-hover:scale-[1.02] transition-transform duration-500">
                    <span className="text-white/70 font-mono text-lg">Hub-based Logistics System</span>
                  </div>
                </div>
              </motion.div>

              {/* 카드 2: 폐기물 수거 (Reverse Logistics) */}
              <motion.div 
                initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.3 }} variants={cardVariants}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[2rem] p-10 hover:bg-white/15 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                    <div className="text-5xl mb-6">♻️</div>
                    <h3 className="text-2xl font-bold text-white mb-3">Eco-Return</h3>
                    <p className="text-white/70 text-lg font-light leading-relaxed">
                    배달만 하지 않습니다.<br/>
                    문 앞의 <strong>폐기물을 수거</strong>하여<br/>
                    자원으로 되돌립니다.
                    </p>
                </div>
              </motion.div>

              {/* 카드 3: 지역 문제 해결 */}
              <motion.div 
                 initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.3 }} variants={cardVariants}
                 className="bg-blue-900/30 backdrop-blur-md border border-blue-500/30 rounded-[2rem] p-10 hover:bg-blue-900/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                    <div className="text-5xl mb-6">🤝</div>
                    <h3 className="text-2xl font-bold text-blue-100 mb-3">Local Value</h3>
                    <p className="text-blue-200/70 text-lg font-light leading-relaxed">
                    지역의 문제를<br/>
                    기술과 물류로 해결하며<br/>
                    함께 성장합니다.
                    </p>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="h-screen flex flex-col items-center justify-center pointer-events-auto">
           <h2 className="text-5xl md:text-7xl font-bold text-white text-center mb-10 tracking-tight leading-tight">
             Ready to <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Earth Up?</span>
           </h2>
           <button className="bg-white text-black px-12 py-5 rounded-full text-2xl font-bold hover:bg-blue-50 transition-all hover:scale-105 shadow-[0_0_50px_rgba(255,255,255,0.3)]">
             지금 시작하기
           </button>
        </section>

      </div>
    </div>
  );
}