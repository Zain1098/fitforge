import { useState } from 'react';
import { DashboardSidebar } from '@/components/layout/DashboardSidebar';
import { FadeIn } from '@/components/ui/motion-div';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useAuth } from '@/contexts/AuthContext';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';
import { Camera, Save } from 'lucide-react';
import { toast } from 'react-hot-toast';

export default function Profile() {
  const { user } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    height: '175',
    weight: '76',
    goalWeight: '72',
  });

  const handleSave = () => {
    toast.success('Profile updated successfully!');
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
                <span className="gradient-text">Profile</span>
              </h1>
              <p className="text-muted-foreground">Manage your account settings</p>
            </div>
          </FadeIn>

          {/* Avatar Section */}
          <FadeIn delay={0.1}>
            <div className="glass-strong p-8 rounded-xl border border-primary/20">
              <h2 className="text-2xl font-bold font-['Orbitron'] mb-6">Profile Picture</h2>
              <div className="flex items-center gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative group cursor-pointer"
                >
                  <img
                    src={user?.avatar}
                    alt={user?.name}
                    className="w-24 h-24 rounded-full border-2 border-primary"
                  />
                  <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                </motion.div>
                <div>
                  <Button variant="outline" size="sm">
                    Change Photo
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2">
                    JPG, PNG or GIF. Max size 2MB
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Personal Info */}
          <FadeIn delay={0.2}>
            <div className="glass-strong p-8 rounded-xl border border-primary/20">
              <h2 className="text-2xl font-bold font-['Orbitron'] mb-6">Personal Information</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="height">Height (cm)</Label>
                    <Input
                      id="height"
                      type="number"
                      value={formData.height}
                      onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="weight">Current Weight (kg)</Label>
                    <Input
                      id="weight"
                      type="number"
                      value={formData.weight}
                      onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="goalWeight">Goal Weight (kg)</Label>
                    <Input
                      id="goalWeight"
                      type="number"
                      value={formData.goalWeight}
                      onChange={(e) => setFormData({ ...formData, goalWeight: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Settings */}
          <FadeIn delay={0.3}>
            <div className="glass-strong p-8 rounded-xl border border-primary/20">
              <h2 className="text-2xl font-bold font-['Orbitron'] mb-6">Preferences</h2>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Dark Mode</Label>
                    <p className="text-sm text-muted-foreground">
                      Toggle between light and dark themes
                    </p>
                  </div>
                  <Switch checked={theme === 'dark'} onCheckedChange={toggleTheme} />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Workout Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive reminders for scheduled workouts
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Nutrition Reminders</Label>
                    <p className="text-sm text-muted-foreground">
                      Get notified to log your meals
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Progress Updates</Label>
                    <p className="text-sm text-muted-foreground">
                      Weekly summary of your achievements
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Save Button */}
          <FadeIn delay={0.4}>
            <div className="flex justify-end">
              <Button onClick={handleSave} size="lg" className="glow-primary">
                <Save className="mr-2 w-5 h-5" />
                Save Changes
              </Button>
            </div>
          </FadeIn>
        </div>
      </main>
    </div>
  );
}
