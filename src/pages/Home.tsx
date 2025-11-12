import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FadeIn, ScaleIn } from '@/components/ui/motion-div';
import { Button } from '@/components/ui/button';
import {
  Dumbbell,
  TrendingUp,
  Brain,
  Apple,
  Target,
  Zap,
  Users,
  Award,
  ChevronRight,
} from 'lucide-react';

const features = [
  {
    icon: Dumbbell,
    title: 'Workout Tracking',
    description: 'Log exercises, sets, reps, and track your strength progression over time.',
  },
  {
    icon: Apple,
    title: 'Nutrition Monitoring',
    description: 'Track calories, macros, and meals to fuel your fitness goals.',
  },
  {
    icon: TrendingUp,
    title: 'Progress Analytics',
    description: 'Visualize your journey with detailed charts and performance metrics.',
  },
  {
    icon: Brain,
    title: 'AI Training Plans',
    description: 'Get personalized workout plans powered by intelligent algorithms.',
  },
  {
    icon: Target,
    title: 'Goal Setting',
    description: 'Set targets and track milestones with smart reminders.',
  },
  {
    icon: Zap,
    title: 'Real-time Insights',
    description: 'Receive instant feedback and motivation as you progress.',
  },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Marathon Runner',
    content: 'FitForge transformed how I train. The analytics are incredible!',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
  },
  {
    name: 'Mike Chen',
    role: 'Personal Trainer',
    content: 'Best fitness tracker I\'ve used. My clients love the progress tracking.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
  },
  {
    name: 'Emily Davis',
    role: 'Fitness Enthusiast',
    content: 'The AI plans keep me motivated. Never been more consistent!',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
  },
];

const stats = [
  { icon: Users, value: '50K+', label: 'Active Users' },
  { icon: Dumbbell, value: '2M+', label: 'Workouts Tracked' },
  { icon: Award, value: '98%', label: 'Goal Success Rate' },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute bottom-1/4 -right-48 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block px-6 py-2 rounded-full glass border border-primary/30 glow-primary"
            >
              <span className="text-sm font-semibold gradient-text">
                🚀 Your Fitness Revolution Starts Here
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold font-['Orbitron'] leading-tight">
              Transform Your Body.
              <br />
              <span className="gradient-text">Forge Your Future.</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Track workouts, monitor nutrition, and crush your fitness goals with
              intelligent insights and motivation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/signup">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 glow-primary group"
                >
                  Get Started Free
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12">
              {stats.map((stat, idx) => (
                <ScaleIn key={stat.label} delay={0.6 + idx * 0.1}>
                  <div className="glass p-6 rounded-xl">
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="text-3xl font-bold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </ScaleIn>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-['Orbitron'] mb-4">
              Everything You Need to <span className="gradient-text">Succeed</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to keep you motivated and on track.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <FadeIn key={feature.title} delay={idx * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="glass-strong p-8 rounded-xl border border-primary/20 hover:border-primary/40 transition-all group cursor-pointer"
                >
                  <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4 group-hover:glow-primary transition-all">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-['Orbitron'] mb-4">
              Loved by <span className="gradient-text">Thousands</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              See what our community has to say.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <FadeIn key={testimonial.name} delay={idx * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass-strong p-8 rounded-xl border border-primary/20"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="glass-strong p-12 md:p-16 rounded-2xl border border-primary/20 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold font-['Orbitron'] mb-6">
                  Ready to <span className="gradient-text">Transform</span>?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join thousands of users crushing their fitness goals with FitForge.
                </p>
                <Link to="/signup">
                  <Button size="lg" className="text-lg px-12 py-6 glow-primary">
                    Start Your Journey
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
