import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "./SmoothScroll";

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

        <main>
          {children}
        </main>

        {/* [수정됨] FOOTER: 레이아웃 중앙 정렬 및 디자인 개선 */}
        <footer className="relative z-10 bg-black/80 backdrop-blur-md py-20 px-6 md:px-12 border-t border-white/10 text-sm">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-20">
            
            {/* 왼쪽: 로고 및 슬로건 */}
            <div className="md:w-1/3">
              <h3 className="text-3xl font-bold mb-6 text-white tracking-tighter">earth up</h3>
              <p className="text-white/50 leading-relaxed text-base font-light">
                우리는 기술을 통해<br/>
                지구의 내일을 더 나은 방향으로 바꿉니다.
              </p>
            </div>

            {/* 오른쪽: 정보 그리드 */}
            <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8 text-white/50">
              <div>
                <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-xs">Contact</h4>
                <ul className="space-y-2">
                    <li><a href="mailto:hello@earthup.com" className="hover:text-blue-400 transition-colors">hello@earthup.com</a></li>
                    <li>044-000-0000</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-xs">Address</h4>
                <address className="not-italic space-y-2">
                    <p>세종특별자치시</p>
                    <p>어스업 캠퍼스 101호</p>
                </address>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-xs">Legal</h4>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:text-white transition-colors">개인정보처리방침</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">이용약관</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-xs">
            <p>© 2025 Earth Up Inc. All rights reserved.</p>
            <p className="font-mono">Made by You.</p>
          </div>
        </footer>

      </body>
    </html>
  );
}