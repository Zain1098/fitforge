import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FadeIn } from '@/components/ui/motion-div';

export default function Terms() {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content:
        'By accessing and using FitForge, you accept and agree to be bound by these Terms of Service. If you do not agree, please do not use our service.',
    },
    {
      title: 'User Accounts',
      content:
        'You are responsible for maintaining the security of your account and password. You agree to provide accurate information and update it as needed.',
    },
    {
      title: 'Service Usage',
      content:
        'You agree to use FitForge for lawful purposes only. You may not misuse our service, attempt unauthorized access, or interfere with other users.',
    },
    {
      title: 'Content Ownership',
      content:
        'You retain ownership of your data. By using FitForge, you grant us permission to use your data to provide and improve our services.',
    },
    {
      title: 'Subscriptions',
      content:
        'Premium subscriptions are billed monthly. You may cancel at any time. Refunds are available within 14 days of purchase.',
    },
    {
      title: 'Disclaimer',
      content:
        'FitForge provides fitness tracking tools but is not a substitute for professional medical advice. Consult healthcare professionals before starting any fitness program.',
    },
    {
      title: 'Limitation of Liability',
      content:
        'FitForge is provided "as is" without warranties. We are not liable for damages arising from your use of the service.',
    },
    {
      title: 'Changes to Terms',
      content:
        'We may update these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms.',
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
                Terms of <span className="gradient-text">Service</span>
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
