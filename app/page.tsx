'use client';

import Spline from '@splinetool/react-spline';
// [수정 1] Variants 라는 이름표를 꺼내옵니다.
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

  // [수정 2] : Variants 라고 명찰을 딱 붙여줍니다. (이게 핵심!)
  const cardVariants: Variants = {
    offscreen: { 
      y: 50, 
      opacity: 0 
    },
    onscreen: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 0.8 }
    }
  };

  return (
    <div ref={containerRef} className="relative bg-black h-[300vh]">
      
      {/* [LAYER 1] 3D Earth */}
      <div className="fixed inset-0 w-full h-screen z-0">
        <motion.div style={{ y: earthY }} className="w-full h-full">
          {/* 고객님이 픽스하신 그 주소 그대로입니다 */}
          <Spline scene="https://prod.spline.design/hCHg1FCOJnI4QL6G/scene.splinecode" />
        </motion.div>
      </div>

      {/* [LAYER 2] 콘텐츠 영역 */}
      <div className="relative z-10 pointer-events-none">
        
        {/* 섹션 1: Hero */}
        <section className="h-screen flex flex-col items-center justify-center">
          <motion.div style={{ opacity: textOpacity }} className="text-center z-10">
            <h1 className="text-7xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-300 to-blue-600 mb-4 tracking-tighter">
              Earth Up.
            </h1>
            <p className="text-white/70 text-2xl font-light">지구를 더 나은 방향으로</p>
          </motion.div>
        </section>

        {/* 섹션 2: Bento Grid */}
        <section className="min-h-screen flex flex-col items-center justify-center p-6 md:p-10">
          <div className="max-w-6xl w-full">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-16 text-center"
            >
              우리가 만드는 <span className="text-blue-500">변화의 물결</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pointer-events-auto">
              
              {/* 카드 1 */}
              <motion.div 
                initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.3 }} variants={cardVariants}
                className="md:col-span-2 bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-colors group"
              >
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-4">Hyper-Local Logistics</h3>
                    <p className="text-white/60 text-lg leading-relaxed">
                      동네 기반의 촘촘한 물류망으로<br/>
                      불필요한 탄소 배출을 획기적으로 줄입니다.
                    </p>
                  </div>
                  <div className="mt-10 h-40 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl flex items-center justify-center border border-white/5 group-hover:scale-[1.02] transition-transform duration-500">
                    <span className="text-white/40 font-mono text-sm">Interactive Map Visualization</span>
                  </div>
                </div>
              </motion.div>

              {/* 카드 2 */}
              <motion.div 
                initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.3 }} variants={cardVariants}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-2xl mb-6">
                  ♻️
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Zero Waste</h3>
                <p className="text-white/60">
                  버려지는 자원을<br/>다시 가치있게 만듭니다.
                </p>
              </motion.div>

              {/* 카드 3 */}
              <motion.div 
                 initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.3 }} variants={cardVariants}
                 className="bg-blue-600/20 backdrop-blur-lg border border-blue-500/30 rounded-3xl p-8 hover:bg-blue-600/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-blue-500/40 flex items-center justify-center text-2xl mb-6">
                  🤝
                </div>
                <h3 className="text-2xl font-bold text-blue-100 mb-2">Community</h3>
                <p className="text-blue-200/60">
                  지역 사회와 함께<br/>성장하고 나아갑니다.
                </p>
              </motion.div>

            </div>
          </div>
        </section>

        {/* 섹션 3: 피날레 */}
        <section className="h-screen flex flex-col items-center justify-center pointer-events-auto">
           <h2 className="text-5xl md:text-7xl font-bold text-white text-center mb-10 tracking-tight leading-tight">
             Ready to <br/> <span className="text-blue-500">Earth Up?</span>
           </h2>
           <button className="bg-white text-black px-12 py-5 rounded-full text-2xl font-bold hover:bg-blue-50 transition-all hover:scale-105 shadow-[0_0_50px_rgba(255,255,255,0.3)]">
             지금 시작하기
           </button>
        </section>

      </div>
    </div>
  );
}