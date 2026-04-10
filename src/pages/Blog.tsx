import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Blog = () => {
  const { t } = useTranslation();
  
  const postsRaw = t('blog.posts', { returnObjects: true });
  const posts = Array.isArray(postsRaw) ? postsRaw : [];

  return (
    <div className="pt-24 pb-20">
      <section className="container-custom mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl mb-6"
          >
            {t('blog.hero.title')}
          </motion.h1>
          <p className="text-xl text-slate-600">
            {t('blog.hero.subtitle')}
          </p>
        </div>
      </section>

      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {posts.map((post, i) => (
            <motion.article 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col group"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary-600 uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center space-x-4 text-xs text-slate-400 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-3 h-3" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">
                  {post.excerpt}
                </p>
                <Link to="#" className="text-primary-600 font-bold text-sm flex items-center space-x-2 group-hover:space-x-3 transition-all">
                  <span>{t('blog.featured.cta')}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Pagination Placeholder */}
        <div className="mt-16 flex justify-center space-x-2">
          <button className="w-10 h-10 rounded-full bg-primary-600 text-white font-bold">1</button>
          <button className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-600 font-bold hover:bg-slate-50">2</button>
          <button className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-600 font-bold hover:bg-slate-50">3</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
