import React from 'react';
import { motion } from 'motion/react';
import { Users, Globe, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Impact = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-24 pb-20">
      <section className="bg-slate-900 text-white py-20 mb-16">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl mb-6">{t('impact.hero.title')}</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {t('impact.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container-custom">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {Array.isArray(t('impact.stats', { returnObjects: true })) && (t('impact.stats', { returnObjects: true }) as any[]).map((stat, i) => {
            const icons = [BookOpen, Users, Globe];
            const colors = ["text-primary-600", "text-accent-600", "text-green-600"];
            const Icon = icons[i];
            return (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 text-center">
                <Icon className={cn("w-12 h-12 mx-auto mb-6", colors[i])} />
                <p className="text-5xl font-display font-bold mb-2">{stat.value}</p>
                <p className="text-slate-500 font-semibold uppercase tracking-wider text-sm">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-4 block">Featured Story</span>
            <h2 className="text-3xl md:text-4xl mb-6">A Bridge to Higher Education</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              "When I first arrived in New Jersey, I felt lost. The language barrier felt like a wall I couldn't climb. Bridges Without Borders didn't just give me books; they gave me a mentor who believed in me. Today, I'm the first in my family to attend college."
            </p>
            <p className="font-bold text-slate-900">— Maria, Program Participant</p>
          </motion.div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=1000" 
              alt="Education Impact" 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Data Visualization Placeholder */}
        <div className="bg-primary-50 p-12 rounded-[3rem] border border-primary-100 mb-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Where Your Money Goes</h3>
            <p className="text-slate-600">92% of every dollar donated goes directly to our program services.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                { label: "Education Programs", percent: 45, color: "bg-primary-600" },
                { label: "Humanitarian Aid", percent: 30, color: "bg-accent-500" },
                { label: "Infrastructure", percent: 17, color: "bg-green-500" },
                { label: "Operations", percent: 8, color: "bg-slate-400" },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm font-bold mb-2">
                    <span>{item.label}</span>
                    <span>{item.percent}%</span>
                  </div>
                  <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className={cn("h-full rounded-full", item.color)}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center lg:text-left">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                We take financial stewardship seriously. Our reports are audited annually to ensure compliance with NJ Nonprofit regulations and international fund oversight standards.
              </p>
              <Link to="/transparency" className="btn-outline">View Transparency Report</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const cn = (...inputs: any[]) => inputs.filter(Boolean).join(' ');

export default Impact;
