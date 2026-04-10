import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-24 pb-20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl mb-6"
            >
              {t('contact.hero.title')}
            </motion.h1>
            <p className="text-xl text-slate-600">
              {t('contact.hero.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h4 className="font-bold mb-1">{t('contact.info.email.title')}</h4>
              <p className="text-sm text-slate-600">info@bridgeswithoutborders.org</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center">
              <div className="w-12 h-12 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h4 className="font-bold mb-1">{t('contact.info.phone.title')}</h4>
              <p className="text-sm text-slate-600">+1 (555) 123-4567</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="font-bold mb-1">{t('contact.info.location.title')}</h4>
              <p className="text-sm text-slate-600">New Jersey, USA</p>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-slate-100"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">{t('contact.form.name')}</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-primary-600 focus:ring-0 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">{t('contact.form.email')}</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-primary-600 focus:ring-0 outline-none transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">{t('contact.form.subject')}</label>
                <select className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-primary-600 focus:ring-0 outline-none transition-all appearance-none">
                  {(t('contact.form.subjects', { returnObjects: true }) as string[]).map((subject, i) => (
                    <option key={i}>{subject}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">{t('contact.form.message')}</label>
                <textarea 
                  rows={5}
                  placeholder={t('contact.form.messagePlaceholder')}
                  className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-primary-600 focus:ring-0 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button className="w-full btn-primary py-5 text-lg flex items-center justify-center space-x-3">
                <span>{t('contact.form.cta')}</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
