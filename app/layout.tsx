import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "./SmoothScroll"; // [추가됨] 스크롤 부품 불러오기

export const metadata: Metadata = {
  title: "Earth Up",
  description: "지구를 더 나은 방향으로",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased bg-black text-white selection:bg-blue-500 selection:text-white">
        
        {/* [추가됨] 스크롤 엔진 가동 */}
        <SmoothScroll />

        {/* HEADER */}
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-black/10 border-b border-white/5">
          <div className="text-xl font-bold tracking-tighter cursor-pointer hover:text-blue-400 transition-colors">
            earth up
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-medium text-white/70">
            <a href="#" className="hover:text-white transition-colors">회사 소개</a>
            <a href="#" className="hover:text-white transition-colors">솔루션</a>
            <a href="#" className="hover:text-white transition-colors">ESG 경영</a>
          </nav>

          <button className="bg-white/10 hover:bg-white/20 px-5 py-2 rounded-full text-xs font-bold transition-all border border-white/10 hover:border-white/30">
            문의하기
          </button>
        </header>

        {/* BODY */}
        <main>
          {children}
        </main>

        {/* FOOTER */}
        <footer className="relative z-10 bg-black py-20 px-6 md:px-12 border-t border-white/10 text-sm">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">earth up</h3>
              <p className="text-white/40 leading-relaxed">
                우리는 기술을 통해<br/>
                지구의 내일을 바꿉니다.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-10 md:gap-20 text-white/40">
              <div>
                <h4 className="font-bold text-white mb-4">Contact</h4>
                <p>hello@earthup.com</p>
                <p>044-000-0000</p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4">Address</h4>
                <p>세종특별자치시</p>
                <p>어스업 캠퍼스 101호</p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4">Legal</h4>
                <p className="hover:text-white cursor-pointer transition-colors">개인정보처리방침</p>
                <p className="hover:text-white cursor-pointer transition-colors">이용약관</p>
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-white/5 text-center md:text-left text-white/20 text-xs">
            © 2025 Earth Up Inc. All rights reserved.
          </div>
        </footer>

      </body>
    </html>
  );
}