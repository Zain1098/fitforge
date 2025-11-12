import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FadeIn } from '@/components/ui/motion-div';
import { motion } from 'framer-motion';
import { Target, Users, Zap, Heart } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Goal-Driven',
    description: 'We believe every fitness journey starts with a clear goal and ends with achievement.',
  },
  {
    icon: Users,
    title: 'Community First',
    description: 'Building a supportive community where everyone motivates each other.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Leveraging cutting-edge technology to make fitness tracking effortless.',
  },
  {
    icon: Heart,
    title: 'Wellness',
    description: 'Promoting holistic health through balanced nutrition and exercise.',
  },
];

const milestones = [
  { year: '2023', title: 'Founded', description: '10K workouts tracked' },
  { year: '2024', title: 'Growth', description: '50K active users' },
  { year: '2025', title: 'Innovation', description: 'AI-powered plans launched' },
];

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        </div>

        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block px-6 py-2 rounded-full glass border border-primary/30 mb-6"
              >
                <span className="text-sm font-semibold gradient-text">Our Story</span>
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-bold font-['Orbitron'] mb-6">
                Transforming Fitness,
                <br />
                <span className="gradient-text">One Rep at a Time</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                FitForge was born from a simple idea: make fitness tracking so intuitive
                and motivating that everyone can achieve their goals.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="glass-strong p-12 rounded-2xl border border-primary/20 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-['Orbitron'] mb-6 text-center">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-lg text-muted-foreground text-center">
                We're on a mission to empower individuals worldwide to take control of their
                health and fitness. Through intelligent tracking, data-driven insights, and a
                supportive community, we help you forge the body and mindset you've always
                wanted.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-['Orbitron'] mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <FadeIn key={value.title} delay={idx * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="glass-strong p-8 rounded-xl border border-primary/20 hover:border-primary/40 transition-all text-center"
                >
                  <div className="p-4 rounded-lg bg-primary/10 w-fit mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-['Orbitron'] mb-4">
              Our <span className="gradient-text">Journey</span>
            </h2>
          </FadeIn>

          <div className="max-w-4xl mx-auto space-y-8">
            {milestones.map((milestone, idx) => (
              <FadeIn key={milestone.year} delay={idx * 0.2}>
                <div className="flex gap-6 items-start">
                  <div className="text-4xl font-bold font-['Orbitron'] text-primary">
                    {milestone.year}
                  </div>
                  <motion.div
                    whileHover={{ x: 8 }}
                    className="glass-strong p-6 rounded-xl border border-primary/20 flex-1"
                  >
                    <h3 className="text-2xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </motion.div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="glass-strong p-12 rounded-2xl border border-primary/20 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-['Orbitron'] mb-4">
                Join the <span className="gradient-text">Movement</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We're building the future of fitness tracking. Want to be part of it?
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block px-8 py-3 bg-primary/20 rounded-lg text-primary font-semibold cursor-pointer hover:glow-primary transition-all"
              >
                Careers Coming Soon
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
