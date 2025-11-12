import { DashboardSidebar } from '@/components/layout/DashboardSidebar';
import { FadeIn } from '@/components/ui/motion-div';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { FileText, Download, Calendar, TrendingUp } from 'lucide-react';

const mockReports = [
  {
    title: 'Monthly Fitness Report',
    date: 'January 2025',
    type: 'Monthly Summary',
    size: '2.4 MB',
  },
  {
    title: 'Workout Performance Analysis',
    date: 'Q4 2024',
    type: 'Quarterly Report',
    size: '3.1 MB',
  },
  {
    title: 'Nutrition Insights',
    date: 'December 2024',
    type: 'Nutrition Report',
    size: '1.8 MB',
  },
];

export default function Reports() {
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
                  <span className="gradient-text">Reports</span>
                </h1>
                <p className="text-muted-foreground">
                  Download and review your fitness analytics
                </p>
              </div>
              <Button className="glow-primary">
                <Download className="mr-2 w-5 h-5" />
                Generate New Report
              </Button>
            </div>
          </FadeIn>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeIn delay={0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="glass-strong p-6 rounded-xl border border-primary/20"
              >
                <Calendar className="w-8 h-8 text-primary mb-2" />
                <p className="text-3xl font-bold">24</p>
                <p className="text-sm text-muted-foreground">Reports Generated</p>
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <motion.div
                whileHover={{ y: -4 }}
                className="glass-strong p-6 rounded-xl border border-primary/20"
              >
                <TrendingUp className="w-8 h-8 text-secondary mb-2" />
                <p className="text-3xl font-bold">+15%</p>
                <p className="text-sm text-muted-foreground">Performance Improvement</p>
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <motion.div
                whileHover={{ y: -4 }}
                className="glass-strong p-6 rounded-xl border border-primary/20"
              >
                <FileText className="w-8 h-8 text-accent mb-2" />
                <p className="text-3xl font-bold">8.2 MB</p>
                <p className="text-sm text-muted-foreground">Total Data Exported</p>
              </motion.div>
            </FadeIn>
          </div>

          {/* Reports List */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-['Orbitron']">Recent Reports</h2>
            {mockReports.map((report, idx) => (
              <FadeIn key={report.title} delay={idx * 0.1}>
                <motion.div
                  whileHover={{ x: 4 }}
                  className="glass-strong p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">{report.title}</h3>
                        <div className="flex gap-4 text-sm text-muted-foreground mt-1">
                          <span>{report.type}</span>
                          <span>•</span>
                          <span>{report.date}</span>
                          <span>•</span>
                          <span>{report.size}</span>
                        </div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="gap-2">
                      <Download className="w-4 h-4" />
                      Download
                    </Button>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          {/* Export Options */}
          <FadeIn delay={0.4}>
            <div className="glass-strong p-8 rounded-xl border border-primary/20">
              <h2 className="text-2xl font-bold font-['Orbitron'] mb-4">
                Export Your Data
              </h2>
              <p className="text-muted-foreground mb-6">
                Download all your fitness data in your preferred format
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {['PDF', 'CSV', 'JSON'].map((format) => (
                  <motion.button
                    key={format}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="glass p-4 rounded-lg border border-primary/20 hover:border-primary/40 hover:glow-primary transition-all font-semibold"
                  >
                    Export as {format}
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
