import { DashboardSidebar } from '@/components/layout/DashboardSidebar';
import { FadeIn } from '@/components/ui/motion-div';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Zap, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AIPlans() {
  return (
    <div className="min-h-screen flex">
      <DashboardSidebar />

      <main className="flex-1 lg:ml-64 p-8 pt-24 lg:pt-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="relative min-h-[80vh] flex items-center justify-center">
              {/* Animated Background */}
              <div className="absolute inset-0 -z-10 overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, -180, -360],
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute bottom-1/4 -right-48 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
                />
              </div>

              {/* Content */}
              <div className="glass-strong p-12 rounded-2xl border border-primary/20 text-center max-w-3xl relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  className="inline-block mb-6"
                >
                  <div className="p-6 rounded-full bg-gradient-to-br from-primary to-secondary glow-primary">
                    <Brain className="w-16 h-16 text-primary-foreground" />
                  </div>
                </motion.div>

                <h1 className="text-5xl font-bold font-['Orbitron'] mb-4">
                  AI-Powered <span className="gradient-text">Training Plans</span>
                </h1>

                <p className="text-xl text-muted-foreground mb-8">
                  Get personalized workout plans tailored to your goals, fitness level, and
                  available equipment—powered by cutting-edge AI.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {[
                    {
                      icon: Sparkles,
                      label: 'Smart Adaptation',
                      desc: 'Plans adjust based on your progress',
                    },
                    {
                      icon: Zap,
                      label: 'Quick Results',
                      desc: 'Optimized for maximum efficiency',
                    },
                    {
                      icon: Brain,
                      label: 'AI Insights',
                      desc: 'Data-driven recommendations',
                    },
                  ].map((feature, idx) => (
                    <motion.div
                      key={feature.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="glass p-4 rounded-lg border border-primary/20"
                    >
                      <feature.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                      <h3 className="font-bold text-sm mb-1">{feature.label}</h3>
                      <p className="text-xs text-muted-foreground">{feature.desc}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="flex items-center justify-center gap-2 mb-8">
                  <Lock className="w-5 h-5 text-accent" />
                  <span className="text-accent font-semibold">Premium Feature</span>
                </div>

                <Button size="lg" className="glow-primary">
                  Upgrade to Premium
                </Button>

                <p className="text-sm text-muted-foreground mt-4">
                  Unlock AI training plans, advanced analytics, and more
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </main>
    </div>
  );
}
