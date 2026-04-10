import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Globe, Users, ArrowRight, Home, School, Droplets, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Programs = () => {
  const { t } = useTranslation();

  const usProgramsRaw = t('programs.us.items', { returnObjects: true });
  const usPrograms = Array.isArray(usProgramsRaw) ? usProgramsRaw : [];
  
  const ecuadorProgramsRaw = t('programs.ecuador.items', { returnObjects: true });
  const ecuadorPrograms = Array.isArray(ecuadorProgramsRaw) ? ecuadorProgramsRaw : [];

  const usIcons = [BookOpen, Users, ShieldCheck];
  const ecuadorIcons = [School, Droplets, TrendingUp];

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-primary-900 text-white py-20 mb-16">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl mb-6">{t('programs.hero.title')}</h1>
            <p className="text-xl text-primary-200 max-w-3xl mx-auto">
              {t('programs.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container-custom space-y-24">
        {/* US Programs */}
        <section>
          <div className="flex items-center space-x-4 mb-12">
            <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center">
              <Home className="w-6 h-6" />
            </div>
            <h2 className="text-3xl md:text-4xl">{t('programs.us.title')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {usPrograms.map((program, i) => {
              const Icon = usIcons[i];
              return (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col"
                >
                  <Icon className="w-10 h-10 text-primary-600 mb-6" />
                  <h3 className="text-xl font-bold mb-4">{program.title}</h3>
                  <div className="space-y-4 flex-grow">
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{t('programs.labels.problem')}</p>
                      <p className="text-sm text-slate-600">{program.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-1">{t('programs.labels.intervention')}</p>
                      <p className="text-sm text-slate-600">{program.intervention}</p>
                    </div>
                    <div className="pt-4 border-t border-slate-50">
                      <p className="text-xs font-bold text-green-600 uppercase tracking-wider mb-1">{t('programs.labels.outcome')}</p>
                      <p className="text-sm text-slate-600">{program.outcome}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Ecuador Programs */}
        <section>
          <div className="flex items-center space-x-4 mb-12">
            <div className="w-12 h-12 bg-accent-100 text-accent-600 rounded-xl flex items-center justify-center">
              <Globe className="w-6 h-6" />
            </div>
            <h2 className="text-3xl md:text-4xl">{t('programs.ecuador.title')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ecuadorPrograms.map((program, i) => {
              const Icon = ecuadorIcons[i];
              return (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col"
                >
                  <Icon className="w-10 h-10 text-accent-600 mb-6" />
                  <h3 className="text-xl font-bold mb-4">{program.title}</h3>
                  <div className="space-y-4 flex-grow">
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{t('programs.labels.problem')}</p>
                      <p className="text-sm text-slate-600">{program.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-accent-600 uppercase tracking-wider mb-1">{t('programs.labels.intervention')}</p>
                      <p className="text-sm text-slate-600">{program.intervention}</p>
                    </div>
                    <div className="pt-4 border-t border-slate-50">
                      <p className="text-xs font-bold text-green-600 uppercase tracking-wider mb-1">{t('programs.labels.outcome')}</p>
                      <p className="text-sm text-slate-600">{program.outcome}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Action CTA */}
        <section className="bg-slate-50 p-12 rounded-[3rem] text-center border border-slate-200">
          <h2 className="text-3xl mb-6">{t('programs.cta.title')}</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            {t('programs.cta.description')}
          </p>
          <Link to="/donate" className="btn-primary inline-flex items-center space-x-2">
            <span>{t('programs.cta.button')}</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </section>
      </div>
    </div>
  );
};

const ShieldCheck = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
);

export default Programs;
