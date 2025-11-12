import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  Dumbbell,
  Apple,
  TrendingUp,
  Brain,
  FileText,
  Bell,
  User,
  LogOut,
  Menu,
  X,
} from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: Dumbbell, label: 'Workouts', path: '/workouts' },
  { icon: Apple, label: 'Nutrition', path: '/nutrition' },
  { icon: TrendingUp, label: 'Progress', path: '/progress' },
  { icon: Brain, label: 'AI Plans', path: '/ai-plans' },
  { icon: FileText, label: 'Reports', path: '/reports' },
  { icon: Bell, label: 'Reminders', path: '/reminders' },
  { icon: User, label: 'Profile', path: '/profile' },
];

export function DashboardSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  const SidebarContent = () => (
    <>
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link key={item.path} to={item.path} onClick={() => setMobileOpen(false)}>
            <motion.div
              whileHover={{ x: 4 }}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? 'bg-primary/20 text-primary glow-primary'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {!collapsed && <span className="text-sm font-medium">{item.label}</span>}
              {isActive && !collapsed && (
                <motion.div
                  layoutId="sidebar-indicator"
                  className="ml-auto w-1 h-6 bg-primary rounded-full"
                />
              )}
            </motion.div>
          </Link>
        );
      })}
      <button
        onClick={handleLogout}
        className="flex items-center gap-3 px-4 py-3 rounded-lg text-destructive hover:bg-destructive/10 transition-all w-full"
      >
        <LogOut className="w-5 h-5 flex-shrink-0" />
        {!collapsed && <span className="text-sm font-medium">Logout</span>}
      </button>
    </>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: 0, width: collapsed ? '80px' : '256px' }}
        className="hidden lg:flex flex-col fixed left-0 top-0 h-screen glass-strong border-r border-primary/20 z-40"
      >
        <div className="p-4 border-b border-border/50">
          <div className="flex items-center justify-between">
            {!collapsed && (
              <span className="text-xl font-bold font-['Orbitron'] gradient-text">
                FitForge
              </span>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCollapsed(!collapsed)}
              className="ml-auto"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto hide-scrollbar">
          <SidebarContent />
        </nav>
      </motion.aside>

      {/* Mobile Sidebar Toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed top-20 left-4 z-50 p-2 rounded-lg glass-strong border border-primary/20"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile Sidebar */}
      {mobileOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
          />
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            className="lg:hidden fixed left-0 top-0 h-screen w-64 glass-strong border-r border-primary/20 z-50"
          >
            <div className="p-4 border-b border-border/50 flex items-center justify-between">
              <span className="text-xl font-bold font-['Orbitron'] gradient-text">
                FitForge
              </span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileOpen(false)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            <nav className="p-4 space-y-2 overflow-y-auto hide-scrollbar">
              <SidebarContent />
            </nav>
          </motion.aside>
        </>
      )}
    </>
  );
}
