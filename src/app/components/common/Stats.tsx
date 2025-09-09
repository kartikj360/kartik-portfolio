'use client';
import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';

type StatCardProps = {
  value: string; // e.g., "10+ TB", "90%"
  label: string;
};

function parseValue(raw: string): { target: number; prefix: string; suffix: string } {
  const match = raw.match(/^([^\d]*?)?(\d+)(.*)$/);
  const target = Number((match && match[2]) || 0);
  const prefix = ((match && match[1]) || '').trim();
  const suffix = ((match && match[3]) || '').trim();
  return { target, prefix, suffix };
}

function formatValue(prefix: string, value: number, suffix: string): string {
  return `${prefix ? prefix + ' ' : ''}${value}${suffix ? ' ' + suffix : ''}`.trim();
}

export function StatCard({ value, label }: StatCardProps) {
  const [observedEl, setObservedEl] = useState<HTMLElement | null>(null);
  const ref = (node: HTMLElement | null) => setObservedEl(node);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [display, setDisplay] = useState(value);
  const { target, prefix, suffix } = useMemo(() => parseValue(value), [value]);

  // Create IntersectionObserver only on client when element is available
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!observedEl || hasAnimated) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(observedEl);
    return () => observer.disconnect();
  }, [observedEl, hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;
    let rafId = 0;
    const durationMs = 900;
    const start = performance.now();

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(1, elapsed / durationMs);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      setDisplay(formatValue(prefix, current, suffix));
      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [hasAnimated, prefix, suffix, target]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 text-center bg-white dark:bg-gray-900"
    >
      <div className="text-2xl font-semibold text-primary-600 dark:text-primary-500">{display}</div>
      <div className="mt-1 text-xs text-gray-600 dark:text-gray-400">{label}</div>
    </motion.div>
  );
}


