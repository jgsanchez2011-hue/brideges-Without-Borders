import React from 'react';
import { motion } from 'motion/react';
import { Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  const heroTitle = t('about.hero.title');
  const hasAmpersand = heroTitle.includes('&');
  const titleParts = hasAmpersand ? heroTitle.split('&') : [heroTitle, ''];

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="container-custom mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl md:text-6xl mb-6">
              {titleParts[0]} {hasAmpersand && '&'} <span className="text-primary-600">{titleParts[1]}</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              {t('about.hero.description')}
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden">
                    <Users className="w-full h-full p-2 text-slate-400" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-bold text-slate-500">{t('about.hero.volunteers')}</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1000" 
              alt="Team" 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -right-10 bg-accent-500 text-white p-8 rounded-3xl shadow-xl hidden md:block max-w-xs">
              <p className="text-lg font-bold italic">{t('about.hero.quote')}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl mb-6">{t('about.why.title')}</h2>
            <p className="text-lg text-slate-600">
              {t('about.why.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold mb-4">{t('about.why.us.title')}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t('about.why.us.description')}
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold mb-4">{t('about.why.ecuador.title')}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t('about.why.ecuador.description')}
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold mb-4">{t('about.why.commitment.title')}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t('about.why.commitment.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl text-center mb-16">{t('about.leadership.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                name: t('about.leadership.president.name'), 
                role: t('about.leadership.president.role'), 
                bio: t('about.leadership.president.bio'),
                image: "/president.jpg"
              },
              { name: t('about.leadership.treasurer.name'), role: t('about.leadership.treasurer.role'), bio: t('about.leadership.treasurer.bio') },
              { name: t('about.leadership.secretary.name'), role: t('about.leadership.secretary.role'), bio: t('about.leadership.secretary.bio') },
            ].map((leader, i) => (
              <div key={i} className="text-center group">
                <div className="w-48 h-48 bg-slate-100 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-lg group-hover:border-primary-500 transition-all">
                  {leader.image ? (
                    <img 
                      src={leader.image} 
                      alt={leader.name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        // Fallback if image fails to load
                        (e.target as HTMLImageElement).style.display = 'none';
                        (e.target as HTMLImageElement).parentElement?.querySelector('.fallback-icon')?.classList.remove('hidden');
                      }}
                    />
                  ) : null}
                  <Users className={cn(
                    "w-full h-full p-10 text-slate-300 fallback-icon",
                    leader.image ? "hidden" : ""
                  )} />
                </div>
                <h4 className="text-2xl font-bold mb-2">{leader.name}</h4>
                <p className="text-primary-600 font-bold mb-4">{leader.role}</p>
                <p className="text-slate-600 text-sm">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const cn = (...inputs: any[]) => inputs.filter(Boolean).join(' ');

export default About;
