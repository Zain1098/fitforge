import { motion } from 'framer-motion';
import { DashboardSidebar } from '@/components/layout/DashboardSidebar';
import { StatCard } from '@/components/StatCard';
import { FadeIn } from '@/components/ui/motion-div';
import { useAuth } from '@/contexts/AuthContext';
import { Flame, Dumbbell, Target, TrendingUp } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockWeeklyData = [
  { day: 'Mon', calories: 2100, workouts: 1 },
  { day: 'Tue', calories: 1950, workouts: 0 },
  { day: 'Wed', calories: 2200, workouts: 1 },
  { day: 'Thu', calories: 2000, workouts: 1 },
  { day: 'Fri', calories: 2150, workouts: 0 },
  { day: 'Sat', calories: 2300, workouts: 2 },
  { day: 'Sun', calories: 1900, workouts: 0 },
];

const motivationalQuotes = [
  'The only bad workout is the one that didn\'t happen.',
  'Your body can stand almost anything. It\'s your mind you have to convince.',
  'Success starts with self-discipline.',
  'The pain you feel today will be the strength you feel tomorrow.',
];

export default function Dashboard() {
  const { user } = useAuth();
  const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];

  return (
    <div className="min-h-screen flex">
      <DashboardSidebar />

      <main className="flex-1 lg:ml-64 p-8 pt-24 lg:pt-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Welcome Banner */}
          <FadeIn>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="glass-strong p-8 rounded-2xl border border-primary/20 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
              <div className="relative z-10">
                <h1 className="text-3xl md:text-4xl font-bold font-['Orbitron'] mb-2">
                  Welcome back, <span className="gradient-text">{user?.name || 'Champion'}</span>!
                </h1>
                <p className="text-muted-foreground italic">"{randomQuote}"</p>
              </div>
            </motion.div>
          </FadeIn>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              icon={Flame}
              label="Calories Today"
              value="2,150"
              trend="+5% from yesterday"
              delay={0}
            />
            <StatCard
              icon={Dumbbell}
              label="Workouts This Week"
              value="5"
              trend="Goal: 6 workouts"
              delay={0.1}
            />
            <StatCard
              icon={Target}
              label="Current Streak"
              value="12 days"
              trend="Personal best!"
              delay={0.2}
            />
            <StatCard
              icon={TrendingUp}
              label="Weight Progress"
              value="-3.2 kg"
              trend="This month"
              delay={0.3}
            />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <FadeIn delay={0.4}>
              <motion.div
                whileHover={{ y: -4 }}
                className="glass-strong p-6 rounded-xl border border-primary/20"
              >
                <h3 className="text-xl font-bold mb-4">Weekly Calories</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={mockWeeklyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="calories"
                      stroke="hsl(var(--primary))"
                      strokeWidth={3}
                      dot={{ fill: 'hsl(var(--primary))' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <motion.div
                whileHover={{ y: -4 }}
                className="glass-strong p-6 rounded-xl border border-primary/20"
              >
                <h3 className="text-xl font-bold mb-4">Workout Frequency</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={mockWeeklyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                      }}
                    />
                    <Bar
                      dataKey="workouts"
                      fill="hsl(var(--secondary))"
                      radius={[8, 8, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </motion.div>
            </FadeIn>
          </div>

          {/* Quick Actions */}
          <FadeIn delay={0.6}>
            <div className="glass-strong p-6 rounded-xl border border-primary/20">
              <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { label: 'Log Workout', icon: Dumbbell, path: '/workouts' },
                  { label: 'Track Meal', icon: Flame, path: '/nutrition' },
                  { label: 'View Progress', icon: TrendingUp, path: '/progress' },
                ].map((action) => (
                  <motion.button
                    key={action.label}
                    whileHover={{ scale: 1.05, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => (window.location.href = action.path)}
                    className="glass p-4 rounded-lg border border-primary/20 hover:border-primary/40 transition-all flex items-center gap-3 hover:glow-primary"
                  >
                    <action.icon className="w-5 h-5 text-primary" />
                    <span className="font-semibold">{action.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </main>
    </div>
  );
}
