import { DashboardSidebar } from '@/components/layout/DashboardSidebar';
import { FadeIn } from '@/components/ui/motion-div';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { TrendingUp, TrendingDown, Award } from 'lucide-react';

const weightData = [
  { month: 'Jan', weight: 82 },
  { month: 'Feb', weight: 80.5 },
  { month: 'Mar', weight: 79 },
  { month: 'Apr', weight: 78 },
  { month: 'May', weight: 77.2 },
  { month: 'Jun', weight: 76.5 },
];

const strengthData = [
  { exercise: 'Bench Press', week1: 60, week8: 80 },
  { exercise: 'Squat', week1: 80, week8: 110 },
  { exercise: 'Deadlift', week1: 100, week8: 135 },
  { exercise: 'Overhead Press', week1: 40, week8: 55 },
];

export default function Progress() {
  const weightChange = weightData[weightData.length - 1].weight - weightData[0].weight;
  const avgStrengthIncrease = strengthData.reduce(
    (acc, d) => acc + ((d.week8 - d.week1) / d.week1) * 100,
    0
  ) / strengthData.length;

  return (
    <div className="min-h-screen flex">
      <DashboardSidebar />

      <main className="flex-1 lg:ml-64 p-8 pt-24 lg:pt-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <FadeIn>
            <div>
              <h1 className="text-4xl font-bold font-['Orbitron'] mb-2">
                <span className="gradient-text">Progress</span>
              </h1>
              <p className="text-muted-foreground">Track your fitness transformation</p>
            </div>
          </FadeIn>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeIn delay={0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="glass-strong p-6 rounded-xl border border-primary/20"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm text-muted-foreground">Weight Change</h3>
                  {weightChange < 0 ? (
                    <TrendingDown className="w-5 h-5 text-primary" />
                  ) : (
                    <TrendingUp className="w-5 h-5 text-primary" />
                  )}
                </div>
                <p className="text-3xl font-bold text-primary">
                  {weightChange > 0 ? '+' : ''}
                  {weightChange.toFixed(1)} kg
                </p>
                <p className="text-xs text-muted-foreground mt-1">Last 6 months</p>
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <motion.div
                whileHover={{ y: -4 }}
                className="glass-strong p-6 rounded-xl border border-primary/20"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm text-muted-foreground">Strength Gain</h3>
                  <TrendingUp className="w-5 h-5 text-secondary" />
                </div>
                <p className="text-3xl font-bold text-secondary">
                  +{avgStrengthIncrease.toFixed(0)}%
                </p>
                <p className="text-xs text-muted-foreground mt-1">Average increase</p>
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <motion.div
                whileHover={{ y: -4 }}
                className="glass-strong p-6 rounded-xl border border-primary/20"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm text-muted-foreground">Milestones</h3>
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <p className="text-3xl font-bold text-accent">12</p>
                <p className="text-xs text-muted-foreground mt-1">Goals achieved</p>
              </motion.div>
            </FadeIn>
          </div>

          {/* Weight Chart */}
          <FadeIn delay={0.4}>
            <motion.div
              whileHover={{ y: -4 }}
              className="glass-strong p-6 rounded-xl border border-primary/20"
            >
              <h2 className="text-2xl font-bold font-['Orbitron'] mb-4">Weight Trend</h2>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={weightData}>
                  <defs>
                    <linearGradient id="weightGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" domain={[75, 83]} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="weight"
                    stroke="hsl(var(--primary))"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#weightGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </motion.div>
          </FadeIn>

          {/* Strength Progress */}
          <FadeIn delay={0.5}>
            <motion.div
              whileHover={{ y: -4 }}
              className="glass-strong p-6 rounded-xl border border-primary/20"
            >
              <h2 className="text-2xl font-bold font-['Orbitron'] mb-4">Strength Progress</h2>
              <div className="space-y-4">
                {strengthData.map((exercise, idx) => {
                  const increase = ((exercise.week8 - exercise.week1) / exercise.week1) * 100;
                  return (
                    <div key={exercise.exercise} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">{exercise.exercise}</span>
                        <span className="text-sm text-primary">+{increase.toFixed(0)}%</span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(exercise.week8 / 150) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: idx * 0.1 }}
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full glow-primary"
                        />
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Week 1: {exercise.week1}kg</span>
                        <span>Week 8: {exercise.week8}kg</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </FadeIn>

          {/* Photo Comparison Placeholder */}
          <FadeIn delay={0.6}>
            <div className="glass-strong p-8 rounded-xl border border-primary/20 text-center">
              <h2 className="text-2xl font-bold font-['Orbitron'] mb-4">
                Progress <span className="gradient-text">Photos</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Compare your transformation visually (Coming Soon)
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                <div className="aspect-[3/4] rounded-xl bg-muted/20 border-2 border-dashed border-primary/30 flex items-center justify-center">
                  <p className="text-muted-foreground">Before Photo</p>
                </div>
                <div className="aspect-[3/4] rounded-xl bg-muted/20 border-2 border-dashed border-primary/30 flex items-center justify-center">
                  <p className="text-muted-foreground">Current Photo</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </main>
    </div>
  );
}
