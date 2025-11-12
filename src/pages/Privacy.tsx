import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FadeIn } from '@/components/ui/motion-div';

export default function Privacy() {
  const sections = [
    {
      title: 'Information We Collect',
      content:
        'We collect information you provide directly, such as account details, workout data, and nutrition logs. We also collect usage data to improve our services.',
    },
    {
      title: 'How We Use Your Information',
      content:
        'Your data is used to provide and improve our services, generate insights, and personalize your experience. We never sell your personal data to third parties.',
    },
    {
      title: 'Data Security',
      content:
        'We implement industry-standard security measures to protect your information, including encryption, secure servers, and regular security audits.',
    },
    {
      title: 'Your Rights',
      content:
        'You have the right to access, modify, or delete your data at any time. You can export your data or close your account from your profile settings.',
    },
    {
      title: 'Cookies',
      content:
        'We use cookies to enhance your experience, remember preferences, and analyze usage patterns. You can control cookie settings in your browser.',
    },
    {
      title: 'Contact Us',
      content:
        'If you have questions about our privacy practices, please contact us at privacy@fitforge.com.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn>
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold font-['Orbitron'] mb-6">
                Privacy <span className="gradient-text">Policy</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </FadeIn>

          <div className="space-y-8">
            {sections.map((section, idx) => (
              <FadeIn key={section.title} delay={idx * 0.1}>
                <div className="glass-strong p-8 rounded-xl border border-primary/20">
                  <h2 className="text-2xl font-bold font-['Orbitron'] mb-4 gradient-text">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
