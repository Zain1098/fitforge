import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FadeIn } from '@/components/ui/motion-div';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for getting started',
    features: [
      'Track up to 50 workouts',
      'Basic nutrition logging',
      'Progress charts',
      'Mobile app access',
      'Community support',
    ],
    cta: 'Get Started',
    link: '/signup',
    popular: false,
  },
  {
    name: 'Premium',
    price: '$9.99',
    period: '/month',
    description: 'Unlock your full potential',
    features: [
      'Unlimited workout tracking',
      'Advanced nutrition insights',
      'AI-powered training plans',
      'Detailed analytics & reports',
      'Priority support',
      'Custom reminders',
      'Export data',
      'Ad-free experience',
    ],
    cta: 'Go Premium',
    link: '/signup',
    popular: true,
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        </div>

        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block px-6 py-2 rounded-full glass border border-primary/30 mb-6"
              >
                <span className="text-sm font-semibold gradient-text">Simple Pricing</span>
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-bold font-['Orbitron'] mb-6">
                Choose Your <span className="gradient-text">Plan</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Start free and upgrade anytime. No hidden fees, cancel whenever.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, idx) => (
              <FadeIn key={plan.name} delay={idx * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`glass-strong p-8 rounded-2xl border relative overflow-hidden ${
                    plan.popular
                      ? 'border-primary glow-primary'
                      : 'border-primary/20 hover:border-primary/40'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-4 right-4">
                      <div className="px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-semibold flex items-center gap-1">
                        <Zap className="w-3 h-3" />
                        Popular
                      </div>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-3xl font-bold font-['Orbitron'] mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </div>

                  <div className="mb-6">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">{plan.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to={plan.link}>
                    <Button
                      className={`w-full ${
                        plan.popular ? 'glow-primary' : ''
                      }`}
                      size="lg"
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-['Orbitron'] mb-8 text-center">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>

              <div className="space-y-4">
                {[
                  {
                    q: 'Can I switch plans anytime?',
                    a: 'Yes! Upgrade or downgrade your plan at any time. Changes take effect immediately.',
                  },
                  {
                    q: 'Is my data safe?',
                    a: 'Absolutely. We use industry-standard encryption and never share your data with third parties.',
                  },
                  {
                    q: 'Do you offer refunds?',
                    a: 'We offer a 14-day money-back guarantee on all premium subscriptions.',
                  },
                ].map((faq, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 4 }}
                    className="glass-strong p-6 rounded-xl border border-primary/20"
                  >
                    <h3 className="font-bold mb-2">{faq.q}</h3>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
