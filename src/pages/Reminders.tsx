import { useState } from 'react';
import { DashboardSidebar } from '@/components/layout/DashboardSidebar';
import { FadeIn } from '@/components/ui/motion-div';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';
import { Bell, Dumbbell, Apple, Calendar } from 'lucide-react';
import { toast } from 'react-hot-toast';

interface Reminder {
  id: string;
  type: 'workout' | 'meal' | 'general';
  title: string;
  time: string;
  enabled: boolean;
}

const initialReminders: Reminder[] = [
  { id: '1', type: 'workout', title: 'Morning Workout', time: '07:00', enabled: true },
  { id: '2', type: 'meal', title: 'Lunch Time', time: '12:30', enabled: true },
  { id: '3', type: 'workout', title: 'Evening Workout', time: '18:00', enabled: false },
  { id: '4', type: 'meal', title: 'Dinner Time', time: '19:30', enabled: true },
  { id: '5', type: 'general', title: 'Hydration Check', time: '15:00', enabled: true },
];

const getIcon = (type: string) => {
  switch (type) {
    case 'workout':
      return Dumbbell;
    case 'meal':
      return Apple;
    default:
      return Bell;
  }
};

export default function Reminders() {
  const [reminders, setReminders] = useState(initialReminders);

  const toggleReminder = (id: string) => {
    setReminders(
      reminders.map((r) => (r.id === id ? { ...r, enabled: !r.enabled } : r))
    );
    toast.success('Reminder updated');
  };

  return (
    <div className="min-h-screen flex">
      <DashboardSidebar />

      <main className="flex-1 lg:ml-64 p-8 pt-24 lg:pt-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <FadeIn>
            <div>
              <h1 className="text-4xl font-bold font-['Orbitron'] mb-2">
                <span className="gradient-text">Reminders</span>
              </h1>
              <p className="text-muted-foreground">
                Stay on track with smart notifications
              </p>
            </div>
          </FadeIn>

          {/* Calendar View Placeholder */}
          <FadeIn delay={0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              className="glass-strong p-8 rounded-xl border border-primary/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold font-['Orbitron']">This Week</h2>
              </div>
              <div className="grid grid-cols-7 gap-2">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, idx) => (
                  <motion.div
                    key={day}
                    whileHover={{ scale: 1.05 }}
                    className={`aspect-square rounded-lg flex items-center justify-center text-sm font-semibold ${
                      idx === 3
                        ? 'bg-primary/20 text-primary border border-primary/40'
                        : 'bg-muted/20'
                    }`}
                  >
                    {day}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </FadeIn>

          {/* Reminders List */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-['Orbitron']">Active Reminders</h2>
            {reminders.map((reminder, idx) => {
              const Icon = getIcon(reminder.type);
              return (
                <FadeIn key={reminder.id} delay={idx * 0.05}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="glass-strong p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold">{reminder.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {reminder.time} • {reminder.type}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Label htmlFor={`reminder-${reminder.id}`} className="sr-only">
                          Toggle {reminder.title}
                        </Label>
                        <Switch
                          id={`reminder-${reminder.id}`}
                          checked={reminder.enabled}
                          onCheckedChange={() => toggleReminder(reminder.id)}
                        />
                      </div>
                    </div>
                  </motion.div>
                </FadeIn>
              );
            })}
          </div>

          {/* Add New Reminder */}
          <FadeIn delay={0.4}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-strong p-8 rounded-xl border border-primary/20 border-dashed text-center cursor-pointer hover:border-primary/40 transition-all"
            >
              <Bell className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Add New Reminder</h3>
              <p className="text-muted-foreground mb-4">
                Set custom reminders for workouts, meals, or other activities
              </p>
              <Button className="glow-primary">
                <Bell className="mr-2 w-5 h-5" />
                Create Reminder
              </Button>
            </motion.div>
          </FadeIn>
        </div>
      </main>
    </div>
  );
}
