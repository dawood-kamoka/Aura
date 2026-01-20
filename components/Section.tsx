
import React, { useEffect, useRef, useState } from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${className}`}
    >
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-light mb-4 tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-slate-500 dark:text-slate-400 text-lg font-light max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
        <div className="h-1 w-12 bg-accent-dark mt-6 rounded-full"></div>
      </div>
      {children}
    </section>
  );
};

export default Section;
