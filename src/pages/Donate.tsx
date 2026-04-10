import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, ShieldCheck, CreditCard, Lock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Donate = () => {
  const { t } = useTranslation();
  const [amount, setAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState('');
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once');

  const tiers = [
    { value: 25, label: '$25', impact: t('donate.tiers.25') },
    { value: 50, label: '$50', impact: t('donate.tiers.50') },
    { value: 100, label: '$100', impact: t('donate.tiers.100') },
    { value: 250, label: '$250', impact: t('donate.tiers.250') },
  ];

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Emotional Reinforcement */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-4xl md:text-5xl mb-6">{t('donate.hero.title')}</h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {t('donate.hero.description')}
              </p>
            </motion.div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="bg-primary-100 p-3 rounded-xl">
                  <ShieldCheck className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">{t('donate.transparency.title')}</h4>
                  <p className="text-sm text-slate-600">{t('donate.transparency.description')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="bg-accent-100 p-3 rounded-xl">
                  <Heart className="w-6 h-6 text-accent-600" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">{t('donate.tax.title')}</h4>
                  <p className="text-sm text-slate-600">{t('donate.tax.description')}</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000" 
                alt="Impact" 
                className="w-full h-64 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Column: Donation Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100"
          >
            <div className="mb-8">
              <div className="flex bg-slate-100 p-1 rounded-xl mb-8">
                <button 
                  onClick={() => setFrequency('once')}
                  className={`flex-1 py-3 rounded-lg font-bold transition-all ${frequency === 'once' ? 'bg-white text-primary-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                  {t('donate.form.once')}
                </button>
                <button 
                  onClick={() => setFrequency('monthly')}
                  className={`flex-1 py-3 rounded-lg font-bold transition-all ${frequency === 'monthly' ? 'bg-white text-primary-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                  {t('donate.form.monthly')}
                </button>
              </div>

              <h3 className="text-xl font-bold mb-6">{t('donate.form.amountTitle')}</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {tiers.map((tier) => (
                  <button
                    key={tier.value}
                    onClick={() => { setAmount(tier.value); setCustomAmount(''); }}
                    className={`p-4 rounded-xl border-2 transition-all text-left ${amount === tier.value ? 'border-primary-600 bg-primary-50' : 'border-slate-100 hover:border-primary-200'}`}
                  >
                    <p className="text-2xl font-bold mb-1">{tier.label}</p>
                    <p className="text-xs text-slate-500 leading-tight">{tier.impact}</p>
                  </button>
                ))}
              </div>

              <div className="relative mb-8">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                <input 
                  type="number" 
                  placeholder={t('donate.form.customPlaceholder')}
                  value={customAmount}
                  onChange={(e) => { setCustomAmount(e.target.value); setAmount(null); }}
                  className="w-full pl-8 pr-4 py-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-primary-600 focus:ring-0 outline-none font-bold text-lg"
                />
              </div>

              <button className="w-full btn-accent py-5 text-lg flex items-center justify-center space-x-3 mb-6">
                <Heart className="w-6 h-6" />
                <span>{t('donate.form.cta')}</span>
              </button>

              <div className="flex items-center justify-center space-x-6 text-slate-400">
                <div className="flex items-center space-x-1">
                  <Lock className="w-4 h-4" />
                  <span className="text-xs font-medium uppercase tracking-wider">{t('donate.form.secure')}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CreditCard className="w-4 h-4" />
                  <span className="text-xs font-medium uppercase tracking-wider">{t('donate.form.cards')}</span>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-100">
              <p className="text-xs text-slate-500 text-center leading-relaxed">
                {t('donate.form.footer')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
