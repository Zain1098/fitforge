import { useState } from 'react';
import { motion } from 'framer-motion';
import { DashboardSidebar } from '@/components/layout/DashboardSidebar';
import { FadeIn } from '@/components/ui/motion-div';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Plus, Dumbbell, Clock, Flame, Edit, Trash2 } from 'lucide-react';
import { toast } from 'react-hot-toast';

interface Workout {
  id: string;
  name: string;
  duration: number;
  calories: number;
  date: string;
}

const mockWorkouts: Workout[] = [
  { id: '1', name: 'Upper Body Strength', duration: 60, calories: 450, date: '2025-01-15' },
  { id: '2', name: 'HIIT Cardio', duration: 30, calories: 380, date: '2025-01-14' },
  { id: '3', name: 'Leg Day', duration: 75, calories: 520, date: '2025-01-13' },
  { id: '4', name: 'Core & Abs', duration: 45, calories: 280, date: '2025-01-12' },
];

export default function Workouts() {
  const [workouts, setWorkouts] = useState<Workout[]>(mockWorkouts);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    duration: '',
    calories: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newWorkout: Workout = {
      id: Date.now().toString(),
      name: formData.name,
      duration: parseInt(formData.duration),
      calories: parseInt(formData.calories),
      date: new Date().toISOString().split('T')[0],
    };
    setWorkouts([newWorkout, ...workouts]);
    setFormData({ name: '', duration: '', calories: '' });
    setOpen(false);
    toast.success('Workout logged! 💪');
  };

  const handleDelete = (id: string) => {
    setWorkouts(workouts.filter((w) => w.id !== id));
    toast.success('Workout deleted');
  };

  return (
    <div className="min-h-screen flex">
      <DashboardSidebar />

      <main className="flex-1 lg:ml-64 p-8 pt-24 lg:pt-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <FadeIn>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold font-['Orbitron'] mb-2">
                  <span className="gradient-text">Workouts</span>
                </h1>
                <p className="text-muted-foreground">Track and manage your training sessions</p>
              </div>

              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button className="glow-primary">
                    <Plus className="mr-2 w-5 h-5" />
                    Add Workout
                  </Button>
                </DialogTrigger>
                <DialogContent className="glass-strong border-primary/20">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-['Orbitron'] gradient-text">
                      Log New Workout
                    </DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Workout Name</Label>
                      <Input
                        id="name"
                        placeholder="e.g., Upper Body Strength"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="duration">Duration (min)</Label>
                        <Input
                          id="duration"
                          type="number"
                          placeholder="45"
                          value={formData.duration}
                          onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="calories">Calories Burned</Label>
                        <Input
                          id="calories"
                          type="number"
                          placeholder="350"
                          value={formData.calories}
                          onChange={(e) => setFormData({ ...formData, calories: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    <Button type="submit" className="w-full glow-primary">
                      Log Workout
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </FadeIn>

          {/* Workouts List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workouts.map((workout, idx) => (
              <FadeIn key={workout.id} delay={idx * 0.05}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="glass-strong p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-all group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:glow-primary transition-all">
                      <Dumbbell className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-lg hover:bg-muted"
                      >
                        <Edit className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleDelete(workout.id)}
                        className="p-2 rounded-lg hover:bg-destructive/10 text-destructive"
                      >
                        <Trash2 className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2">{workout.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{workout.date}</p>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{workout.duration} minutes</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Flame className="w-4 h-4 text-primary" />
                      <span>{workout.calories} calories</span>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
