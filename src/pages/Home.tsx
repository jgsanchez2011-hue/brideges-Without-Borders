import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Heart, Globe, BookOpen, ShieldCheck, Users, CheckCircle2, TrendingUp, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1524069290683-0457abfe42c3?auto=format&fit=crop&q=80&w=2000" 
            alt="Community and Education" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-transparent"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <span className="inline-block px-4 py-1 bg-accent-500/20 text-accent-400 rounded-full text-sm font-bold mb-6 backdrop-blur-sm border border-accent-500/30">
              {t('hero.tag')}
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-slate-200 mb-10 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/donate" className="btn-accent text-center flex items-center justify-center space-x-2 group">
                <span>{t('hero.ctaPrimary')}</span>
                <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Link>
              <Link to="/about" className="btn-outline border-white text-white hover:bg-white/10 text-center">
                {t('hero.ctaSecondary')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl mb-6">{t('problem.title')}</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {t('problem.description')}
              </p>
              <div className="space-y-4">
                {Array.isArray(t('problem.items', { returnObjects: true })) && (t('problem.items', { returnObjects: true }) as string[]).map((item, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="mt-1 bg-red-100 p-1 rounded-full">
                      <X className="w-4 h-4 text-red-600" />
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000" 
                alt="Impact" 
                className="rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary-600 text-white p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="text-4xl font-bold mb-1">{t('problem.statValue')}</p>
                <p className="text-sm opacity-90">{t('problem.statLabel')}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl mb-6">{t('solution.title')}</h2>
            <p className="text-lg text-slate-600">
              {t('solution.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100"
            >
              <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center mb-8">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-2xl mb-4">{t('solution.us.title')}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {t('solution.us.description')}
              </p>
              <ul className="space-y-3 mb-8">
                {Array.isArray(t('solution.us.items', { returnObjects: true })) && (t('solution.us.items', { returnObjects: true }) as string[]).map((item, i) => (
                  <li key={i} className="flex items-center space-x-2 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-primary-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/programs" className="text-primary-600 font-bold flex items-center space-x-2 hover:space-x-3 transition-all">
                <span>{t('solution.us.cta')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100"
            >
              <div className="w-14 h-14 bg-accent-100 text-accent-600 rounded-2xl flex items-center justify-center mb-8">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-2xl mb-4">{t('solution.ecuador.title')}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {t('solution.ecuador.description')}
              </p>
              <ul className="space-y-3 mb-8">
                {Array.isArray(t('solution.ecuador.items', { returnObjects: true })) && (t('solution.ecuador.items', { returnObjects: true }) as string[]).map((item, i) => (
                  <li key={i} className="flex items-center space-x-2 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-accent-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/programs" className="text-accent-600 font-bold flex items-center space-x-2 hover:space-x-3 transition-all">
                <span>{t('solution.ecuador.cta')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Snapshot */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: t('stats.families'), value: "500+", icon: Users },
              { label: t('stats.programs'), value: "12", icon: BookOpen },
              { label: t('stats.projects'), value: "8", icon: Globe },
              { label: t('stats.funds'), value: "92%", icon: ShieldCheck },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <stat.icon className="w-8 h-8 text-primary-400 mx-auto mb-4" />
                <p className="text-4xl font-display font-bold mb-2">{stat.value}</p>
                <p className="text-sm text-primary-200 uppercase tracking-wider font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How You Can Help */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl mb-6">{t('help.title')}</h2>
            <p className="text-lg text-slate-600">
              {t('help.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl hover:bg-slate-50 transition-colors">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8" />
              </div>
              <h4 className="text-xl mb-4">{t('help.donate.title')}</h4>
              <p className="text-slate-600 mb-6">{t('help.donate.description')}</p>
              <Link to="/donate" className="text-primary-600 font-bold hover:underline">{t('help.donate.cta')}</Link>
            </div>
            
            <div className="text-center p-8 rounded-2xl hover:bg-slate-50 transition-colors">
              <div className="w-16 h-16 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="text-xl mb-4">{t('help.volunteer.title')}</h4>
              <p className="text-slate-600 mb-6">{t('help.volunteer.description')}</p>
              <Link to="/get-involved" className="text-accent-600 font-bold hover:underline">{t('help.volunteer.cta')}</Link>
            </div>

            <div className="text-center p-8 rounded-2xl hover:bg-slate-50 transition-colors">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h4 className="text-xl mb-4">{t('help.partner.title')}</h4>
              <p className="text-slate-600 mb-6">{t('help.partner.description')}</p>
              <Link to="/contact" className="text-green-600 font-bold hover:underline">{t('help.partner.cta')}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Builders */}
      <section className="py-12 bg-slate-50 border-y border-slate-200">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-6 h-6" />
              <span className="font-bold">{t('trust.pending')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-6 h-6" />
              <span className="font-bold">{t('trust.nonprofit')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-6 h-6" />
              <span className="font-bold">{t('trust.governance')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-accent-600 text-white text-center">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl mb-8">{t('finalCta.title')}</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
            {t('finalCta.subtitle')}
          </p>
          <Link to="/donate" className="bg-white text-accent-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-colors shadow-xl">
            {t('finalCta.button')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
