import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type TextAnimateProps = {
  children: string;
  className?: string;
  animation?: 'blurInUp' | 'fadeIn' | 'slideUp';
  by?: 'word' | 'character';
};

export function TextAnimate({ children, className, animation = 'blurInUp', by = 'word' }: TextAnimateProps) {
  const text = children;
  const words = by === 'word' ? text.split(' ') : text.split('');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring' as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(8px)',
      transition: {
        type: 'spring' as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div className={cn('flex flex-wrap', className)} variants={container} initial="hidden" animate="visible">
      {words.map((word, idx) => (
        <motion.span key={idx} variants={child} className={by === 'word' ? 'mr-2' : ''}>
          {word}
          {by === 'word' && idx < words.length - 1 ? ' ' : ''}
        </motion.span>
      ))}
    </motion.div>
  );
}
