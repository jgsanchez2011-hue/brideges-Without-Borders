import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Users, FileText, CheckCircle2, Scale, Info } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Transparency = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20 mb-16">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl mb-6">{t('transparency.hero.title')}</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {t('transparency.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Governance Structure */}
            <section>
              <div className="flex items-center space-x-3 mb-6">
                <Scale className="w-8 h-8 text-primary-600" />
                <h2 className="text-3xl">{t('transparency.governance.title')}</h2>
              </div>
              <p className="text-lg text-slate-600 mb-8">
                {t('transparency.governance.description')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <h4 className="font-bold mb-3">{t('transparency.governance.oversight.title')}</h4>
                  <p className="text-sm text-slate-600">{t('transparency.governance.oversight.description')}</p>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <h4 className="font-bold mb-3">{t('transparency.governance.conflict.title')}</h4>
                  <p className="text-sm text-slate-600">{t('transparency.governance.conflict.description')}</p>
                </div>
              </div>
            </section>

            {/* Financial Accountability */}
            <section>
              <div className="flex items-center space-x-3 mb-6">
                <ShieldCheck className="w-8 h-8 text-primary-600" />
                <h2 className="text-3xl">{t('transparency.finance.title')}</h2>
              </div>
              <p className="text-lg text-slate-600 mb-8">
                {t('transparency.finance.description')}
              </p>
              <div className="bg-primary-50 p-8 rounded-3xl border border-primary-100">
                <h4 className="font-bold text-primary-900 mb-4">{t('transparency.finance.oversight.title')}</h4>
                <ul className="space-y-4">
                  {Array.isArray(t('transparency.finance.oversight.items', { returnObjects: true })) && (t('transparency.finance.oversight.items', { returnObjects: true }) as any[]).map((item, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-primary-600 mt-0.5" />
                      <span className="text-slate-700">{item.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Board Members */}
            <section>
              <div className="flex items-center space-x-3 mb-6">
                <Users className="w-8 h-8 text-primary-600" />
                <h2 className="text-3xl">Board of Trustees</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { name: t('about.leadership.president.name'), role: t('transparency.board.roles.president') },
                  { name: t('about.leadership.treasurer.name'), role: t('transparency.board.roles.treasurer') },
                  { name: t('about.leadership.secretary.name'), role: t('transparency.board.roles.secretary') },
                ].map((member, i) => (
                  <div key={i} className="text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <div className="w-20 h-20 bg-slate-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-10 h-10 text-slate-400" />
                    </div>
                    <h4 className="font-bold text-lg">{member.name}</h4>
                    <p className="text-sm text-primary-600 font-semibold">{member.role}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar: Documents & Disclosures */}
          <div className="space-y-8">
            <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-xl font-bold mb-6 flex items-center space-x-2">
                <FileText className="w-5 h-5 text-primary-400" />
                <span>{t('transparency.docs.title')}</span>
              </h3>
              <div className="space-y-4">
                {Array.isArray(t('transparency.docs.items', { returnObjects: true })) && (t('transparency.docs.items', { returnObjects: true }) as any[]).map((doc, i) => (
                  <button key={i} className="w-full flex items-center justify-between p-3 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors text-sm text-left">
                    <span>{doc.title}</span>
                    <FileText className="w-4 h-4 text-slate-500" />
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-accent-50 p-8 rounded-3xl border border-accent-100">
              <h3 className="text-xl font-bold text-accent-900 mb-4 flex items-center space-x-2">
                <Info className="w-5 h-5" />
                <span>Legal Disclosure</span>
              </h3>
              <p className="text-sm text-accent-800 leading-relaxed">
                Bridges Without Borders is a New Jersey Nonprofit Corporation. We do not engage in any political activity or lobbying. Our mission is strictly humanitarian and educational.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transparency;
