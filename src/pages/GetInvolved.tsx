import React from 'react';
import { motion } from 'motion/react';
import { Heart, Users, Globe, Mail, ArrowRight, CheckCircle2, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const GetInvolved = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-24 pb-20">
      <section className="bg-accent-600 text-white py-20 mb-16">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl mb-6">{t('involved.hero.title')}</h1>
            <p className="text-xl text-accent-100 max-w-3xl mx-auto">
              {t('involved.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {/* Volunteer Section */}
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
            <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center mb-8">
              <Users className="w-8 h-8" />
            </div>
            <h2 className="text-3xl mb-6">{t('involved.volunteer.title')}</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              {t('involved.volunteer.description')}
            </p>
            <ul className="space-y-4 mb-10">
              {Array.isArray(t('involved.volunteer.items', { returnObjects: true })) && (t('involved.volunteer.items', { returnObjects: true }) as string[]).map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-500" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn-primary w-full text-center block">{t('involved.volunteer.cta')}</Link>
          </div>

          {/* Partner Section */}
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
            <div className="w-14 h-14 bg-accent-100 text-accent-600 rounded-2xl flex items-center justify-center mb-8">
              <Globe className="w-8 h-8" />
            </div>
            <h2 className="text-3xl mb-6">{t('involved.partner.title')}</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              {t('involved.partner.description')}
            </p>
            <ul className="space-y-4 mb-10">
              {Array.isArray(t('involved.partner.items', { returnObjects: true })) && (t('involved.partner.items', { returnObjects: true }) as string[]).map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn-accent w-full text-center block">{t('involved.partner.cta')}</Link>
          </div>
        </div>

        {/* Other Ways to Help */}
        <div className="bg-slate-900 text-white p-12 rounded-[3rem] shadow-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">{t('involved.more.title')}</h2>
            <p className="text-slate-400">{t('involved.more.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-6 h-6 text-primary-400" />
              </div>
              <h4 className="font-bold mb-2">{t('involved.more.fundraiser.title')}</h4>
              <p className="text-sm text-slate-400">{t('involved.more.fundraiser.description')}</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-6 h-6 text-accent-400" />
              </div>
              <h4 className="font-bold mb-2">{t('involved.more.word.title')}</h4>
              <p className="text-sm text-slate-400">{t('involved.more.word.description')}</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-6 h-6 text-green-400" />
              </div>
              <h4 className="font-bold mb-2">{t('involved.more.newsletter.title')}</h4>
              <p className="text-sm text-slate-400">{t('involved.more.newsletter.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
