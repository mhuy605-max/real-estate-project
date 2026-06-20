import { useEffect, useRef, ReactNode } from "react";

interface WpRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function WpReveal({ children, className = "", delay = 0 }: WpRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("is-visible"), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`wp-reveal ${className}`}>
      {children}
    </div>
  );
}
