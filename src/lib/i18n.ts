import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        brand: "Bridges Without Borders",
        home: "Home",
        about: "About Us",
        programs: "Our Programs",
        impact: "Impact",
        getInvolved: "Get Involved",
        transparency: "Transparency",
        contact: "Contact",
        donate: "Donate",
        blog: "Blog & Updates"
      },
      hero: {
        tag: "NJ Nonprofit Corporation",
        title: "Building Bridges. Creating Opportunity.",
        subtitle: "Empowering immigrant families in New Jersey and transforming communities in Ecuador through education, humanitarian aid, and sustainable development.",
        ctaPrimary: "Donate Now",
        ctaSecondary: "Learn Our Story"
      },
      problem: {
        title: "The Barriers We Face",
        description: "Immigrant families often arrive with dreams but face systemic barriers—language gaps, limited educational access, and economic instability. Meanwhile, in regions like Ecuador, infrastructure and educational deficits continue to limit the potential of entire generations.",
        items: [
          "Educational gaps in underserved immigrant communities",
          "Lack of humanitarian resources in rural Ecuador",
          "Barriers to economic integration and stability",
          "Insufficient infrastructure for community growth"
        ],
        statValue: "65%",
        statLabel: "Education gap in target regions"
      },
      solution: {
        title: "Our Dual-Impact Model",
        description: "We operate across borders to address both the immediate needs of immigrants in the US and the root causes of migration in Ecuador.",
        us: {
          title: "U.S. Immigrant Support",
          description: "Providing educational assistance, community integration programs, and emergency relief to help families thrive in their new environment.",
          items: ["ESL & Literacy Programs", "Legal Resource Navigation", "Community Workshops"],
          cta: "View US Programs"
        },
        ecuador: {
          title: "Ecuador Initiatives",
          description: "Investing in infrastructure, educational development, and humanitarian aid to create sustainable opportunities in local communities.",
          items: ["School Building & Renovation", "Clean Water Projects", "Agricultural Support"],
          cta: "View Ecuador Initiatives"
        }
      },
      stats: {
        families: "Families Served",
        programs: "Programs Delivered",
        projects: "Projects in Ecuador",
        funds: "Funds to Projects",
        students: "Students Supported",
        stabilized: "Families Stabilized"
      },
      help: {
        title: "Join the Movement",
        description: "Your support directly transforms lives. Whether you give, volunteer, or partner, you are building a bridge to a better future.",
        donate: {
          title: "Donate",
          description: "Fuel our programs with a one-time or monthly tax-deductible contribution.",
          cta: "Start Giving"
        },
        volunteer: {
          title: "Volunteer",
          description: "Share your skills and time to support our local NJ or international initiatives.",
          cta: "Join Us"
        },
        partner: {
          title: "Partner",
          description: "Corporate and community partnerships to scale our collective impact.",
          cta: "Partner With Us"
        }
      },
      trust: {
        pending: "501(c)(3) Pending",
        nonprofit: "NJ Nonprofit Corp",
        governance: "Transparent Governance"
      },
      finalCta: {
        title: "Ready to make a difference?",
        subtitle: "Every dollar donated goes directly toward building schools, providing educational materials, and supporting families in need.",
        button: "Donate Now"
      },
      footer: {
        description: "Building bridges of opportunity through education and humanitarian support for immigrant communities in the US and development projects in Ecuador.",
        quickLinks: "Quick Links",
        getInvolved: "Get Involved",
        newsletter: "Newsletter",
        newsletterDesc: "Stay updated on our mission and impact.",
        placeholder: "Your email",
        join: "Join",
        legal: "© 2026 Bridges Without Borders. A NJ Nonprofit Corporation. 501(c)(3) Pending.",
        privacy: "Privacy Policy",
        terms: "Terms of Use",
        disclosures: "Legal Disclosures"
      },
      about: {
        hero: {
          title: "Our Story & Mission",
          description: "Bridges Without Borders was founded on a simple but powerful belief: that geography should not limit opportunity. We are a community of bridge-builders dedicated to empowering the vulnerable and transforming lives across borders.",
          volunteers: "Join 50+ volunteers making an impact",
          quote: "\"We don't just build schools; we build futures.\""
        },
        why: {
          title: "Why Bridges Without Borders?",
          description: "The challenges facing immigrant communities in the US and developing regions in Ecuador are deeply connected. Our dual model addresses both sides of the migration story.",
          us: {
            title: "The US Context",
            description: "In New Jersey, thousands of immigrant families struggle to access the educational resources they need to thrive. We bridge this gap through direct support and community advocacy."
          },
          ecuador: {
            title: "The Ecuador Context",
            description: "In rural Ecuador, the lack of infrastructure and educational opportunity often forces families to make the difficult choice to migrate. We invest in local development to create a future where staying is a viable choice."
          },
          commitment: {
            title: "Our Commitment",
            description: "We are committed to ethical, transparent, and community-led development. We don't impose solutions; we partner with local leaders to empower their own communities."
          }
        },
        leadership: {
          title: "Our Leadership",
          president: {
            name: "Jose Guillermo Sanchez, M.Ed.",
            role: "Founder & Visionary",
            bio: "Dedicated to building sustainable bridges between communities."
          },
          treasurer: {
            name: "Ximena Gonzalez",
            role: "Financial Steward",
            bio: "Ensuring every dollar is used effectively and transparently."
          },
          secretary: {
            name: "Anthony Allen",
            role: "Governance Expert",
            bio: "Maintaining the highest standards of nonprofit compliance."
          }
        }
      },
      programs: {
        hero: {
          title: "Our Programs",
          subtitle: "Focused interventions designed to create lasting change in New Jersey and Ecuador."
        },
        us: {
          title: "United States Initiatives",
          items: [
            {
              title: "Educational Assistance",
              problem: "Language barriers and lack of resources hinder academic success for immigrant children.",
              intervention: "Providing ESL tutoring, school supplies, and literacy programs.",
              outcome: "Improved academic performance and increased confidence for students."
            },
            {
              title: "Community Support",
              problem: "Families struggle to navigate complex social and legal systems in a new country.",
              intervention: "Workshops on legal rights, healthcare access, and community resources.",
              outcome: "Empowered families who can effectively advocate for their needs."
            },
            {
              title: "Emergency Relief",
              problem: "Sudden economic shocks can lead to housing and food insecurity.",
              intervention: "Direct assistance for food, clothing, and temporary housing support.",
              outcome: "Stabilized families during times of crisis, preventing long-term hardship."
            }
          ]
        },
        ecuador: {
          title: "Ecuador Development",
          items: [
            {
              title: "Educational Development",
              problem: "Rural schools lack basic infrastructure and modern learning tools.",
              intervention: "Building classrooms, providing technology, and teacher training.",
              outcome: "Safe, modern learning environments for rural youth."
            },
            {
              title: "Infrastructure Support",
              problem: "Lack of English language education, basic literacy, and digital literacy skills creates learning barriers and restricts opportunities for communities.",
              intervention: "Delivering accessible ESL classes, foundational literacy support, and hands-on digital skills training tailored to local needs.",
              outcome: "Increased English proficiency, stronger reading and writing skills, and improved access to digital tools and online resources for education and employment."
            },
            {
              title: "Community Empowerment",
              problem: "Limited economic opportunities drive migration and community decline.",
              intervention: "Micro-grants for local entrepreneurs and agricultural training.",
              outcome: "Sustainable local economies that allow families to stay together."
            }
          ]
        },
        labels: {
          problem: "The Problem",
          intervention: "Our Intervention",
          outcome: "Expected Outcome"
        },
        cta: {
          title: "Want to support a specific program?",
          description: "You can direct your donation to any of our initiatives. 100% of designated funds go directly to the chosen project.",
          button: "Support Our Programs"
        }
      },
      involved: {
        hero: {
          title: "Get Involved",
          subtitle: "There are many ways to support our mission. Whether you have time, skills, or resources, you can make a difference."
        },
        volunteer: {
          title: "Volunteer Your Time",
          description: "Join our team of dedicated volunteers in New Jersey or support our international projects remotely. We are always looking for passionate individuals to help with:",
          items: [
            "ESL Tutoring & Mentorship",
            "Administrative Support",
            "Event Planning & Fundraising",
            "Translation Services (Spanish/English)",
            "Social Media & Content Creation"
          ],
          cta: "Apply to Volunteer"
        },
        partner: {
          title: "Corporate & Community Partnerships",
          description: "We partner with businesses, schools, and other nonprofits to scale our impact. Partnerships can include:",
          items: [
            "Corporate Sponsorships",
            "Employee Engagement Programs",
            "Matching Gift Programs",
            "In-kind Donations (Supplies/Equipment)",
            "Joint Community Initiatives"
          ],
          cta: "Become a Partner"
        },
        more: {
          title: "More Ways to Support",
          subtitle: "Small actions lead to big changes.",
          fundraiser: {
            title: "Host a Fundraiser",
            description: "Organize a local event or digital campaign to raise funds for our programs."
          },
          word: {
            title: "Spread the Word",
            description: "Follow us on social media and share our stories with your network."
          },
          newsletter: {
            title: "Join Our Newsletter",
            description: "Stay informed about our latest projects and upcoming volunteer opportunities."
          }
        }
      },
      donate: {
        hero: {
          title: "Your generosity builds bridges.",
          description: "When you donate to Bridges Without Borders, you aren't just giving money—you're providing a child with a desk, a family with stability, and a community with hope."
        },
        transparency: {
          title: "100% Transparency",
          description: "We are committed to ethical fund distribution and rigorous oversight of all international projects."
        },
        tax: {
          title: "Tax Deductible",
          description: "Bridges Without Borders is a NJ Nonprofit Corporation. 501(c)(3) status is currently pending/approved."
        },
        form: {
          once: "Give Once",
          monthly: "Give Monthly",
          amountTitle: "Select Amount",
          customPlaceholder: "Custom Amount",
          cta: "Complete Donation",
          secure: "Secure Payment",
          cards: "All Cards Accepted",
          footer: "Bridges Without Borders is a registered NJ Nonprofit Corporation. Your donation is tax-deductible to the fullest extent of the law. 501(c)(3) status is pending approval."
        },
        tiers: {
          25: "Supplies for one student",
          50: "Educational materials for a classroom",
          100: "Family assistance for one month",
          250: "Community project support"
        }
      },
      contact: {
        hero: {
          title: "Get in Touch",
          subtitle: "Have questions about our programs or want to get involved? We'd love to hear from you."
        },
        info: {
          email: "Email Us",
          call: "Call Us",
          location: "Location"
        },
        form: {
          name: "Full Name",
          email: "Email Address",
          subject: "Subject",
          message: "Message",
          placeholder: {
            name: "John Doe",
            message: "How can we help you?"
          },
          cta: "Send Message",
          subjects: [
            "General Inquiry",
            "Volunteer Application",
            "Partnership Opportunity",
            "Donation Question",
            "Media Inquiry"
          ]
        }
      },
      impact: {
        hero: {
          title: "Our Impact",
          subtitle: "Measurable change, human stories. See how your support is transforming lives across borders."
        },
        stats: [
          { label: "Students Supported", value: "200+" },
          { label: "Families Stabilized", value: "500+" },
          { label: "Community Projects", value: "8" }
        ],
        story: {
          tag: "Featured Story",
          title: "A Bridge to Higher Education",
          content: "\"When I first arrived in New Jersey, I felt lost. The language barrier felt like a wall I couldn't climb. Bridges Without Borders didn't just give me books; they gave me a mentor who believed in me. Today, I'm the first in my family to attend college.\"",
          author: "Maria, Program Participant"
        },
        finance: {
          title: "Where Your Money Goes",
          subtitle: "92% of every dollar donated goes directly to our program services.",
          items: ["Education Programs", "Humanitarian Aid", "Infrastructure", "Operations"],
          description: "We take financial stewardship seriously. Our reports are audited annually to ensure compliance with NJ Nonprofit regulations and international fund oversight standards.",
          cta: "View Transparency Report"
        }
      },
      transparency: {
        hero: {
          title: "Transparency & Governance",
          subtitle: "Our commitment to radical transparency ensures that every dollar you donate is used ethically and effectively to fulfill our mission."
        },
        governance: {
          title: "Governance Model",
          description: "Bridges Without Borders is governed by an independent Board of Trustees. Our governance model is designed to ensure accountability, prevent conflicts of interest, and maintain the highest ethical standards in nonprofit management.",
          oversight: {
            title: "Board Oversight",
            description: "The Board meets quarterly to review program impact, financial reports, and strategic direction."
          },
          conflict: {
            title: "Conflict of Interest",
            description: "All board members and officers sign an annual Conflict of Interest disclosure statement."
          }
        },
        finance: {
          title: "Financial Accountability",
          description: "We maintain strict oversight of all funds, particularly for our international projects in Ecuador. Our financial commitment ensures that over 90% of public donations go directly to program services.",
          oversight: {
            title: "International Fund Oversight",
            items: [
              { title: "Direct oversight by US-based leadership on all Ecuador projects" },
              { title: "Rigorous documentation and receipt tracking for all expenditures" },
              { title: "Regular on-site audits and community verification" },
              { title: "Commitment to ethical fund distribution and local empowerment" }
            ]
          }
        },
        board: {
          title: "Board of Trustees",
          roles: {
            president: "Strategic Leadership",
            treasurer: "Financial Oversight",
            secretary: "Governance & Records"
          }
        },
        docs: {
          title: "Public Documents",
          items: [
            { title: "Certificate of Incorporation" },
            { title: "Bylaws" },
            { title: "Conflict of Interest Policy" },
            { title: "IRS 501(c)(3) Determination (Pending)" },
            { title: "Annual Financial Report (Coming Soon)" }
          ]
        },
        legal: {
          title: "Legal Disclosure",
          description: "Bridges Without Borders is a New Jersey Nonprofit Corporation. We do not engage in any political activity or lobbying. Our mission is strictly humanitarian and educational."
        }
      },
      blog: {
        hero: {
          title: "Blog & Updates",
          subtitle: "Stay informed about our latest projects, success stories, and community news."
        },
        labels: {
          readMore: "Read More"
        },
        posts: [
          {
            title: "New School Opening in Rural Ecuador",
            excerpt: "After six months of construction, we are proud to announce the opening of our newest educational facility in the Andes region."
          },
          {
            title: "Supporting Immigrant Families During Tax Season",
            excerpt: "Our community workshops helped over 100 families navigate financial resources and tax filings this month."
          },
          {
            title: "Volunteer Spotlight: Meeting Our NJ Tutors",
            excerpt: "Meet the dedicated individuals who spend their weekends helping students master English and literacy skills."
          }
        ]
      }
    }
  },
  es: {
    translation: {
      nav: {
        brand: "Puentes Sin Fronteras",
        home: "Inicio",
        about: "Sobre Nosotros",
        programs: "Programas",
        impact: "Impacto",
        getInvolved: "Involúcrate",
        transparency: "Transparencia",
        contact: "Contacto",
        donate: "Donar",
        blog: "Blog y Noticias"
      },
      hero: {
        tag: "Corporación sin fines de lucro de NJ",
        title: "Construyendo Puentes. Creando Oportunidades.",
        subtitle: "Empoderando a familias inmigrantes en Nueva Jersey y transformando comunidades en Ecuador a través de la educación, ayuda humanitaria y desarrollo sostenible.",
        ctaPrimary: "Donar Ahora",
        ctaSecondary: "Nuestra Historia"
      },
      problem: {
        title: "Las Barreras que Enfrentamos",
        description: "Las familias inmigrantes suelen llegar con sueños pero enfrentan barreras sistémicas: brechas lingüísticas, acceso educativo limitado e inestabilidad económica. Mientras tanto, en regiones como Ecuador, los déficits de infraestructura y educación continúan limitando el potencial de generaciones enteras.",
        items: [
          "Brechas educativas en comunidades inmigrantes desatendidas",
          "Falta de recursos humanitarios en el Ecuador rural",
          "Barreras para la integración y estabilidad económica",
          "Infraestructura insuficiente para el crecimiento comunitario"
        ],
        statValue: "65%",
        statLabel: "Brecha educativa en regiones objetivo"
      },
      solution: {
        title: "Nuestro Modelo de Doble Impacto",
        description: "Operamos a través de las fronteras para abordar tanto las necesidades inmediatas de los inmigrantes en los EE. UU. como las causas fundamentales de la migración en Ecuador.",
        us: {
          title: "Apoyo a Inmigrantes en EE. UU.",
          description: "Brindando asistencia educativa, programas de integración comunitaria y ayuda de emergencia para ayudar a las familias a prosperar en su nuevo entorno.",
          items: ["Programas de Inglés y Alfabetización", "Navegación de Recursos Legales", "Talleres Comunitarios"],
          cta: "Ver Programas en EE. UU."
        },
        ecuador: {
          title: "Iniciativas en Ecuador",
          description: "Invirtiendo en infraestructura, desarrollo educativo y ayuda humanitaria para crear oportunidades sostenibles en las comunidades locales.",
          items: ["Construcción y Renovación de Escuelas", "Proyectos de Agua Potable", "Apoyo Agrícola"],
          cta: "Ver Iniciativas en Ecuador"
        }
      },
      stats: {
        families: "Familias Servidas",
        programs: "Programas Entregados",
        projects: "Proyectos en Ecuador",
        funds: "Fondos a Proyectos",
        students: "Estudiantes Apoyados",
        stabilized: "Familias Estabilizadas"
      },
      help: {
        title: "Únete al Movimiento",
        description: "Tu apoyo transforma vidas directamente. Ya sea que dones, seas voluntario o socio, estás construyendo un puente hacia un futuro mejor.",
        donate: {
          title: "Donar",
          description: "Impulsa nuestros programas con una contribución única o mensual deducible de impuestos.",
          cta: "Empezar a Dar"
        },
        volunteer: {
          title: "Voluntariado",
          description: "Comparte tus habilidades y tiempo para apoyar nuestras iniciativas locales en NJ o internacionales.",
          cta: "Únete a Nosotros"
        },
        partner: {
          title: "Socio",
          description: "Alianzas corporativas y comunitarias para escalar nuestro impacto colectivo.",
          cta: "Asóciate con Nosotros"
        }
      },
      trust: {
        pending: "501(c)(3) Pendiente",
        nonprofit: "Corp sin fines de lucro NJ",
        governance: "Gobernanza Transparente"
      },
      finalCta: {
        title: "¿Listo para marcar la diferencia?",
        subtitle: "Cada dólar donado se destina directamente a la construcción de escuelas, el suministro de materiales educativos y el apoyo a las familias necesitadas.",
        button: "Donar Ahora"
      },
      footer: {
        description: "Construyendo puentes de oportunidad a través de la educación y el apoyo humanitario para las comunidades inmigrantes en los EE. UU. y proyectos de desarrollo en Ecuador.",
        quickLinks: "Enlaces Rápidos",
        getInvolved: "Involúcrate",
        newsletter: "Boletín",
        newsletterDesc: "Mantente actualizado sobre nuestra misión e impacto.",
        placeholder: "Tu correo electrónico",
        join: "Unirse",
        legal: "© 2026 Bridges Without Borders. Una corporación sin fines de lucro de NJ. 501(c)(3) Pendiente.",
        privacy: "Política de Privacidad",
        terms: "Términos de Uso",
        disclosures: "Divulgaciones Legales"
      },
      about: {
        hero: {
          title: "Nuestra Historia y Misión",
          description: "Bridges Without Borders se fundó sobre una creencia simple pero poderosa: que la geografía no debería limitar las oportunidades. Somos una comunidad de constructores de puentes dedicados a empoderar a los vulnerables y transformar vidas a través de las fronteras.",
          volunteers: "Únete a más de 50 voluntarios que marcan la diferencia",
          quote: "\"No solo construimos escuelas; construimos futuros.\""
        },
        why: {
          title: "¿Por qué Bridges Without Borders?",
          description: "Los desafíos que enfrentan las comunidades inmigrantes en los EE. UU. y las regiones en desarrollo en Ecuador están profundamente conectados. Nuestro modelo dual aborda ambos lados de la historia migratoria.",
          us: {
            title: "El Contexto de EE. UU.",
            description: "En Nueva Jersey, miles de familias inmigrantes luchan por acceder a los recursos educativos que necesitan para prosperar. Cerramos esta brecha mediante el apoyo directo y la defensa comunitaria."
          },
          ecuador: {
            title: "El Contexto de Ecuador",
            description: "En el Ecuador rural, la falta de infraestructura y oportunidades educativas a menudo obliga a las familias a tomar la difícil decisión de migrar. Invertimos en el desarrollo local para crear un futuro donde quedarse sea una opción viable."
          },
          commitment: {
            title: "Nuestro Compromiso",
            description: "Estamos comprometidos con un desarrollo ético, transparente y liderado por la comunidad. No imponemos soluciones; nos asociamos con líderes locales para empoderar a sus propias comunidades."
          }
        },
        leadership: {
          title: "Nuestro Liderazgo",
          president: {
            name: "Jose Guillermo Sanchez, M.Ed.",
            role: "Fundador y Visionario",
            bio: "Dedicado a construir puentes sostenibles entre comunidades."
          },
          treasurer: {
            name: "Ximena Gonzalez",
            role: "Administrador Financiero",
            bio: "Asegurando que cada dólar se utilice de manera efectiva y transparente."
          },
          secretary: {
            name: "Anthony Allen",
            role: "Experto en Gobernanza",
            bio: "Manteniendo los más altos estándares de cumplimiento para organizaciones sin fines de lucro."
          }
        }
      },
      programs: {
        hero: {
          title: "Nuestros Programas",
          subtitle: "Intervenciones enfocadas diseñadas para crear un cambio duradero en Nueva Jersey y Ecuador."
        },
        us: {
          title: "Iniciativas en Estados Unidos",
          items: [
            {
              title: "Asistencia Educativa",
              problem: "Las barreras del idioma y la falta de recursos dificultan el éxito académico de los niños inmigrantes.",
              intervention: "Brindando tutoría de ESL, útiles escolares y programas de alfabetización.",
              outcome: "Mejora del rendimiento académico y mayor confianza para los estudiantes."
            },
            {
              title: "Apoyo Comunitario",
              problem: "Las familias luchan por navegar sistemas sociales y legales complejos en un nuevo país.",
              intervention: "Talleres sobre derechos legales, acceso a la salud y recursos comunitarios.",
              outcome: "Familias empoderadas que pueden abogar eficazmente por sus necesidades."
            },
            {
              title: "Ayuda de Emergencia",
              problem: "Los choques económicos repentinos pueden provocar inseguridad alimentaria y de vivienda.",
              intervention: "Asistencia directa para alimentos, ropa y apoyo de vivienda temporal.",
              outcome: "Familias estabilizadas durante tiempos de crisis, previniendo dificultades a largo plazo."
            }
          ]
        },
        ecuador: {
          title: "Desarrollo en Ecuador",
          items: [
            {
              title: "Desarrollo Educativo",
              problem: "Las escuelas rurales carecen de infraestructura básica y herramientas de aprendizaje modernas.",
              intervention: "Construcción de aulas, suministro de tecnología y capacitación docente.",
              outcome: "Entornos de aprendizaje seguros y modernos para la juventud rural."
            },
            {
              title: "Apoyo a la Infraestructura",
              problem: "La falta de educación en el idioma inglés, alfabetización básica y habilidades de alfabetización digital crea barreras de aprendizaje y restringe las oportunidades para las comunidades.",
              intervention: "Ofrecer clases de ESL accesibles, apoyo de alfabetización fundamental y capacitación práctica en habilidades digitales adaptada a las necesidades locales.",
              outcome: "Aumento de la competencia en inglés, habilidades de lectura y escritura más sólidas y un mejor acceso a herramientas digitales y recursos en línea para la educación y el empleo."
            },
            {
              title: "Empoderamiento Comunitario",
              problem: "Las limitadas oportunidades económicas impulsan la migración y el declive de la comunidad.",
              intervention: "Microcréditos para emprendedores locales y capacitación agrícola.",
              outcome: "Economías locales sostenibles que permiten que las familias permanezcan juntas."
            }
          ]
        },
        labels: {
          problem: "El Problema",
          intervention: "Nuestra Intervención",
          outcome: "Resultado Esperado"
        },
        cta: {
          title: "¿Quieres apoyar un programa específico?",
          description: "Puedes dirigir tu donación a cualquiera de nuestras iniciativas. El 100% de los fondos designados van directamente al proyecto elegido.",
          button: "Apoya Nuestros Programas"
        }
      },
      involved: {
        hero: {
          title: "Involúcrate",
          subtitle: "Hay muchas formas de apoyar nuestra misión. Ya sea que tengas tiempo, habilidades o recursos, puedes marcar la diferencia."
        },
        volunteer: {
          title: "Dona tu Tiempo",
          description: "Únete a nuestro equipo de voluntarios dedicados en Nueva Jersey o apoya nuestros proyectos internacionales de forma remota. Siempre buscamos personas apasionadas para ayudar con:",
          items: [
            "Tutoría y Mentoría de ESL",
            "Apoyo Administrativo",
            "Planificación de Eventos y Recaudación de Fondos",
            "Servicios de Traducción (Español/Inglés)",
            "Redes Sociales y Creación de Contenido"
          ],
          cta: "Postularse como Voluntario"
        },
        partner: {
          title: "Alianzas Corporativas y Comunitarias",
          description: "Nos asociamos con empresas, escuelas y otras organizaciones sin fines de lucro para escalar nuestro impacto. Las alianzas pueden incluir:",
          items: [
            "Patrocinios Corporativos",
            "Programas de Compromiso de los Empleados",
            "Donaciones de Contrapartida",
            "Donaciones en Especie (Suministros/Equipo)",
            "Iniciativas Comunitarias Conjuntas"
          ],
          cta: "Conviértete en Socio"
        },
        more: {
          title: "Más Formas de Apoyar",
          subtitle: "Pequeñas acciones conducen a grandes cambios.",
          fundraiser: {
            title: "Organiza una Recaudación",
            description: "Organiza un evento local o una campaña digital para recaudar fondos para nuestros programas."
          },
          word: {
            title: "Corre la Voz",
            description: "Síguenos en las redes sociales y comparte nuestras historias con tu red."
          },
          newsletter: {
            title: "Únete a nuestro Boletín",
            description: "Mantente informado sobre nuestros últimos proyectos y próximas oportunidades de voluntariado."
          }
        }
      },
      donate: {
        hero: {
          title: "Tu generosidad construye puentes.",
          description: "Cuando donas a Bridges Without Borders, no solo estás dando dinero: le estás brindando a un niño un escritorio, a una familia estabilidad y a una comunidad esperanza."
        },
        transparency: {
          title: "100% Transparencia",
          description: "Estamos comprometidos con la distribución ética de fondos y la supervisión rigurosa de todos los proyectos internacionales."
        },
        tax: {
          title: "Deducible de Impuestos",
          description: "Bridges Without Borders es una corporación sin fines de lucro de NJ. El estado 501(c)(3) está actualmente pendiente/aprobado."
        },
        form: {
          once: "Donar una vez",
          monthly: "Donar mensualmente",
          amountTitle: "Seleccionar Monto",
          customPlaceholder: "Monto Personalizado",
          cta: "Completar Donación",
          secure: "Pago Seguro",
          cards: "Se aceptan todas las tarjetas",
          footer: "Bridges Without Borders es una corporación sin fines de lucro registrada en NJ. Su donación es deducible de impuestos en la medida que lo permita la ley. El estado 501(c)(3) está pendiente de aprobación."
        },
        tiers: {
          25: "Suministros para un estudiante",
          50: "Materiales educativos para un aula",
          100: "Asistencia familiar por un mes",
          250: "Apoyo a proyectos comunitarios"
        }
      },
      contact: {
        hero: {
          title: "Ponte en Contacto",
          subtitle: "¿Tienes preguntas sobre nuestros programas o quieres involucrarte? Nos encantaría saber de ti."
        },
        info: {
          email: "Envíanos un correo",
          call: "Llámanos",
          location: "Ubicación"
        },
        form: {
          name: "Nombre Completo",
          email: "Correo Electrónico",
          subject: "Asunto",
          message: "Mensaje",
          placeholder: {
            name: "Juan Pérez",
            message: "¿Cómo podemos ayudarte?"
          },
          cta: "Enviar Mensaje",
          subjects: [
            "Consulta General",
            "Solicitud de Voluntariado",
            "Oportunidad de Alianza",
            "Pregunta sobre Donaciones",
            "Consulta de Medios"
          ]
        }
      },
      impact: {
        hero: {
          title: "Nuestro Impacto",
          subtitle: "Cambio medible, historias humanas. Mira cómo tu apoyo está transformando vidas a través de las fronteras."
        },
        stats: [
          { label: "Estudiantes Apoyados", value: "200+" },
          { label: "Familias Estabilizadas", value: "500+" },
          { label: "Proyectos Comunitarios", value: "8" }
        ],
        story: {
          tag: "Historia Destacada",
          title: "Un Puente hacia la Educación Superior",
          content: "\"Cuando llegué por primera vez a Nueva Jersey, me sentía perdida. La barrera del idioma se sentía como una pared que no podía escalar. Bridges Without Borders no solo me dio libros; me dieron un mentor que creyó en mí. Hoy, soy la primera de mi familia en asistir a la universidad.\"",
          author: "María, Participante del Programa"
        },
        finance: {
          title: "A Dónde Va Tu Dinero",
          subtitle: "El 92% de cada dólar donado se destina directamente a nuestros servicios del programa.",
          items: ["Programas Educativos", "Ayuda Humanitaria", "Infraestructura", "Operaciones"],
          description: "Nos tomamos en serio la administración financiera. Nuestros informes se auditan anualmente para garantizar el cumplimiento de las regulaciones de organizaciones sin fines de lucro de NJ y los estándares internacionales de supervisión de fondos.",
          cta: "Ver Informe de Transparencia"
        }
      },
      transparency: {
        hero: {
          title: "Transparencia y Gobernanza",
          subtitle: "Nuestro compromiso con la transparencia radical garantiza que cada dólar que donas se utilice de manera ética y efectiva para cumplir nuestra misión."
        },
        governance: {
          title: "Modelo de Gobernanza",
          description: "Bridges Without Borders está gobernado por una Junta de Fideicomisarios independiente. Nuestro modelo de gobernanza está diseñado para garantizar la rendición de cuentas, prevenir conflictos de intereses y mantener los más altos estándares éticos en la gestión de organizaciones sin fines de lucro.",
          oversight: {
            title: "Supervisión de la Junta",
            description: "La Junta se reúne trimestralmente para revisar el impacto del programa, los informes financieros y la dirección estratégica."
          },
          conflict: {
            title: "Conflicto de Intereses",
            description: "Todos los miembros de la junta y oficiales firman una declaración anual de divulgación de conflictos de intereses."
          }
        },
        finance: {
          title: "Responsabilidad Financiera",
          description: "Mantenemos una supervisión estricta de todos los fondos, particularmente para nuestros proyectos internacionales en Ecuador. Nuestro compromiso financiero garantiza que más del 90% de las donaciones públicas se destinen directamente a los servicios del programa.",
          oversight: {
            title: "Supervisión de Fondos Internacionales",
            items: [
              { title: "Supervisión directa por parte del liderazgo con sede en EE. UU. en todos los proyectos de Ecuador" },
              { title: "Documentación rigurosa y seguimiento de recibos para todos los gastos" },
              { title: "Auditorías periódicas in situ y verificación comunitaria" },
              { title: "Compromiso con la distribución ética de fondos y el empoderamiento local" }
            ]
          }
        },
        board: {
          title: "Junta de Fideicomisarios",
          roles: {
            president: "Liderazgo Estratégico",
            treasurer: "Supervisión Financiera",
            secretary: "Gobernanza y Registros"
          }
        },
        docs: {
          title: "Documentos Públicos",
          items: [
            { title: "Certificado de Incorporación" },
            { title: "Estatutos" },
            { title: "Política de Conflicto de Intereses" },
            { title: "Determinación IRS 501(c)(3) (Pendiente)" },
            { title: "Informe Financiero Anual (Próximamente)" }
          ]
        },
        legal: {
          title: "Divulgación Legal",
          description: "Bridges Without Borders es una corporación sin fines de lucro de Nueva Jersey. No participamos en ninguna actividad política o cabildeo. Nuestra misión es estrictamente humanitaria y educativa."
        }
      },
      blog: {
        hero: {
          title: "Blog y Noticias",
          subtitle: "Mantente informado sobre nuestros últimos proyectos, historias de éxito y noticias de la comunidad."
        },
        labels: {
          readMore: "Leer Más"
        },
        posts: [
          {
            title: "Apertura de Nueva Escuela en el Ecuador Rural",
            excerpt: "Después de seis meses de construcción, nos enorgullece anunciar la apertura de nuestra instalación educativa más reciente en la región andina."
          },
          {
            title: "Apoyo a Familias Inmigrantes Durante la Temporada de Impuestos",
            excerpt: "Nuestros talleres comunitarios ayudaron a más de 100 familias a navegar los recursos financieros y las declaraciones de impuestos este mes."
          },
          {
            title: "Destacado de Voluntarios: Conociendo a Nuestros Tutores de NJ",
            excerpt: "Conozca a las personas dedicadas que pasan sus fines de semana ayudando a los estudiantes a dominar el inglés y las habilidades de alfabetización."
          }
        ]
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    returnObjects: true,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
