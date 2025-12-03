'use client'
import { useEffect } from 'react'
import Lenis from 'lenis'

export default function SmoothScroll() {
  useEffect(() => {
    // 스크롤 물리 엔진 설정 (수치를 조절해 느낌을 바꿀 수 있음)
    const lenis = new Lenis({
      duration: 1.2, // 스크롤 속도 (클수록 부드럽고 느림)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // 감속 곡선
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return null // 화면엔 아무것도 안 보이고 기능만 작동함
}