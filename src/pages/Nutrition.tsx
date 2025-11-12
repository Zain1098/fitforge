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
import { Plus, Apple, Beef, Salad, Trash2 } from 'lucide-react';
import { toast } from 'react-hot-toast';

interface Meal {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  time: string;
}

const mockMeals: Meal[] = [
  { id: '1', name: 'Oatmeal with Berries', calories: 350, protein: 12, carbs: 58, fats: 8, time: '08:00' },
  { id: '2', name: 'Grilled Chicken Salad', calories: 420, protein: 38, carbs: 25, fats: 18, time: '12:30' },
  { id: '3', name: 'Protein Shake', calories: 280, protein: 30, carbs: 25, fats: 6, time: '15:00' },
];

const getMealIcon = (mealName: string) => {
  if (mealName.toLowerCase().includes('salad')) return Salad;
  if (mealName.toLowerCase().includes('chicken') || mealName.toLowerCase().includes('beef')) return Beef;
  return Apple;
};

export default function Nutrition() {
  const [meals, setMeals] = useState<Meal[]>(mockMeals);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    calories: '',
    protein: '',
    carbs: '',
    fats: '',
  });

  const totalNutrition = meals.reduce(
    (acc, meal) => ({
      calories: acc.calories + meal.calories,
      protein: acc.protein + meal.protein,
      carbs: acc.carbs + meal.carbs,
      fats: acc.fats + meal.fats,
    }),
    { calories: 0, protein: 0, carbs: 0, fats: 0 }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newMeal: Meal = {
      id: Date.now().toString(),
      name: formData.name,
      calories: parseInt(formData.calories),
      protein: parseInt(formData.protein),
      carbs: parseInt(formData.carbs),
      fats: parseInt(formData.fats),
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    };
    setMeals([...meals, newMeal]);
    setFormData({ name: '', calories: '', protein: '', carbs: '', fats: '' });
    setOpen(false);
    toast.success('Meal logged! 🍽️');
  };

  const handleDelete = (id: string) => {
    setMeals(meals.filter((m) => m.id !== id));
    toast.success('Meal deleted');
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
                  <span className="gradient-text">Nutrition</span>
                </h1>
                <p className="text-muted-foreground">Track your daily meals and macros</p>
              </div>

              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button className="glow-primary">
                    <Plus className="mr-2 w-5 h-5" />
                    Add Meal
                  </Button>
                </DialogTrigger>
                <DialogContent className="glass-strong border-primary/20">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-['Orbitron'] gradient-text">
                      Log New Meal
                    </DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Meal Name</Label>
                      <Input
                        id="name"
                        placeholder="e.g., Grilled Chicken Salad"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="calories">Calories</Label>
                        <Input
                          id="calories"
                          type="number"
                          placeholder="420"
                          value={formData.calories}
                          onChange={(e) => setFormData({ ...formData, calories: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="protein">Protein (g)</Label>
                        <Input
                          id="protein"
                          type="number"
                          placeholder="38"
                          value={formData.protein}
                          onChange={(e) => setFormData({ ...formData, protein: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="carbs">Carbs (g)</Label>
                        <Input
                          id="carbs"
                          type="number"
                          placeholder="25"
                          value={formData.carbs}
                          onChange={(e) => setFormData({ ...formData, carbs: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="fats">Fats (g)</Label>
                        <Input
                          id="fats"
                          type="number"
                          placeholder="18"
                          value={formData.fats}
                          onChange={(e) => setFormData({ ...formData, fats: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    <Button type="submit" className="w-full glow-primary">
                      Log Meal
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </FadeIn>

          {/* Daily Summary */}
          <FadeIn delay={0.1}>
            <div className="glass-strong p-6 rounded-xl border border-primary/20">
              <h2 className="text-2xl font-bold font-['Orbitron'] mb-4">Today's Summary</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">{totalNutrition.calories}</p>
                  <p className="text-sm text-muted-foreground">Calories</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-secondary">{totalNutrition.protein}g</p>
                  <p className="text-sm text-muted-foreground">Protein</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-accent">{totalNutrition.carbs}g</p>
                  <p className="text-sm text-muted-foreground">Carbs</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold">{totalNutrition.fats}g</p>
                  <p className="text-sm text-muted-foreground">Fats</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Meals List */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-['Orbitron']">Today's Meals</h2>
            {meals.map((meal, idx) => {
              const Icon = getMealIcon(meal.name);
              return (
                <FadeIn key={meal.id} delay={idx * 0.05}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="glass-strong p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-all"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-1">{meal.name}</h3>
                          <p className="text-sm text-muted-foreground mb-3">{meal.time}</p>
                          <div className="flex flex-wrap gap-4 text-sm">
                            <span>🔥 {meal.calories} cal</span>
                            <span>💪 {meal.protein}g protein</span>
                            <span>🍞 {meal.carbs}g carbs</span>
                            <span>🥑 {meal.fats}g fats</span>
                          </div>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleDelete(meal.id)}
                        className="p-2 rounded-lg hover:bg-destructive/10 text-destructive"
                      >
                        <Trash2 className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </motion.div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
