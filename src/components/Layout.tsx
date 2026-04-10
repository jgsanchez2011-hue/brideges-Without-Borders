import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Globe, ShieldCheck, Info, BookOpen, Users, Mail, FileText, Languages } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { useTranslation } from 'react-i18next';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(nextLang);
  };

  const navLinks = [
    { name: t('nav.home'), path: '/', icon: Globe },
    { name: t('nav.about'), path: '/about', icon: Info },
    { name: t('nav.programs'), path: '/programs', icon: BookOpen },
    { name: t('nav.impact'), path: '/impact', icon: Users },
    { name: t('nav.getInvolved'), path: '/get-involved', icon: Heart },
    { name: t('nav.transparency'), path: '/transparency', icon: ShieldCheck },
    { name: t('nav.contact'), path: '/contact', icon: Mail },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
              <Globe className="text-white w-6 h-6" />
            </div>
            <span className={cn(
              "font-display font-bold text-xl tracking-tight",
              !scrolled && location.pathname === '/' ? "text-white" : "text-slate-900"
            )}>
              {t('nav.brand')}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary-600",
                  !scrolled && location.pathname === '/' ? "text-white/90 hover:text-white" : "text-slate-600",
                  location.pathname === link.path && (scrolled || location.pathname !== '/' ? "text-primary-600" : "text-white font-bold")
                )}
              >
                {link.name}
              </Link>
            ))}
            
            <button 
              onClick={toggleLanguage}
              className={cn(
                "flex items-center space-x-1 text-sm font-bold px-3 py-1 rounded-full border transition-all",
                !scrolled && location.pathname === '/' 
                  ? "text-white border-white/30 hover:bg-white/10" 
                  : "text-slate-600 border-slate-200 hover:bg-slate-50"
              )}
            >
              <Languages className="w-4 h-4" />
              <span>{i18n.language.toUpperCase()}</span>
            </button>

            <Link to="/donate" className="btn-accent py-2 px-6 text-sm">
              {t('nav.donate')}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-4 md:hidden">
            <button 
              onClick={toggleLanguage}
              className={cn(
                "flex items-center space-x-1 text-xs font-bold px-2 py-1 rounded-full border",
                !scrolled && location.pathname === '/' ? "text-white border-white/30" : "text-slate-600 border-slate-200"
              )}
            >
              <Languages className="w-3 h-3" />
              <span>{i18n.language.toUpperCase()}</span>
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "p-2 rounded-md",
                !scrolled && location.pathname === '/' ? "text-white" : "text-slate-900"
              )}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-primary-600 rounded-lg"
                >
                  <link.icon className="w-5 h-5" />
                  <span>{link.name}</span>
                </Link>
              ))}
              <div className="pt-4 px-3">
                <Link 
                  to="/donate" 
                  onClick={() => setIsOpen(false)}
                  className="w-full btn-accent flex justify-center items-center py-3"
                >
                  {t('nav.donate')}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <Globe className="text-primary-400 w-8 h-8" />
              <span className="font-display font-bold text-xl text-white">{t('nav.brand')}</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors cursor-pointer">
                <Globe className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors cursor-pointer">
                <Globe className="w-4 h-4" />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">{t('footer.quickLinks')}</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-primary-400 transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/programs" className="hover:text-primary-400 transition-colors">{t('nav.programs')}</Link></li>
              <li><Link to="/impact" className="hover:text-primary-400 transition-colors">{t('nav.impact')}</Link></li>
              <li><Link to="/transparency" className="hover:text-primary-400 transition-colors">{t('nav.transparency')}</Link></li>
              <li><Link to="/blog" className="hover:text-primary-400 transition-colors">{t('nav.blog')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{t('footer.getInvolved')}</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/donate" className="hover:text-primary-400 transition-colors">{t('nav.donate')}</Link></li>
              <li><Link to="/get-involved" className="hover:text-primary-400 transition-colors">{t('nav.getInvolved')}</Link></li>
              <li><Link to="/contact" className="hover:text-primary-400 transition-colors">{t('nav.contact')}</Link></li>
              <li><Link to="/contact" className="hover:text-primary-400 transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{t('footer.newsletter')}</h4>
            <p className="text-sm mb-4">{t('footer.newsletterDesc')}</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder={t('footer.placeholder')} 
                className="bg-slate-800 border-none rounded-l-lg px-4 py-2 w-full focus:ring-2 focus:ring-primary-500 outline-none text-sm"
              />
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-r-lg transition-colors">
                {t('footer.join')}
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>{t('footer.legal')}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white">{t('footer.privacy')}</Link>
            <Link to="/terms" className="hover:text-white">{t('footer.terms')}</Link>
            <Link to="/transparency" className="hover:text-white">{t('footer.disclosures')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
