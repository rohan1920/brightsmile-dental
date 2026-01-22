"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { stats } from "@/lib/brand";
import { Card } from "@/components/ui/Card";

function useInViewOnce<T extends Element>(options?: IntersectionObserverInit) {
  const ref = React.useRef<T | null>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    if (!ref.current || inView) return;
    const el = ref.current;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) setInView(true);
    }, options);
    obs.observe(el);
    return () => obs.disconnect();
  }, [inView, options]);

  return { ref, inView } as const;
}

function AnimatedNumber({ value }: { value: number }) {
  const [n, setN] = React.useState(0);
  const raf = React.useRef<number | null>(null);

  React.useEffect(() => {
    const start = performance.now();
    const duration = 900;
    function tick(t: number) {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * value));
      if (p < 1) raf.current = requestAnimationFrame(tick);
    }
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [value]);

  return <span>{n.toLocaleString()}</span>;
}

export function StatsCounters() {
  const { ref, inView } = useInViewOnce<HTMLDivElement>({ threshold: 0.25 });

  return (
    <div ref={ref} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s, idx) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: idx * 0.05 }}
        >
          <Card className="p-5">
            <div className="text-2xl font-semibold tracking-tight">
              {inView ? <AnimatedNumber value={s.value} /> : "—"}
              <span className="text-[color:var(--color-primary)]">
                {s.suffix}
              </span>
            </div>
            <div className="mt-1 text-sm text-[color:var(--color-muted)]">
              {s.label}
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

