import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FadeIn } from '@/components/ui/motion-div';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { toast } from 'react-hot-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Mock submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success('Message sent! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setLoading(false);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        </div>

        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center mb-12">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block px-6 py-2 rounded-full glass border border-primary/30 mb-6"
              >
                <span className="text-sm font-semibold gradient-text">Get in Touch</span>
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-bold font-['Orbitron'] mb-6">
                Contact <span className="gradient-text">Us</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Have questions? We're here to help you on your fitness journey.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <FadeIn delay={0.1} className="lg:col-span-2">
              <motion.div
                whileHover={{ y: -4 }}
                className="glass-strong p-8 rounded-2xl border border-primary/20"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full glow-primary"
                    size="lg"
                    disabled={loading}
                  >
                    {loading ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="mr-2 w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>
            </FadeIn>

            {/* Contact Info */}
            <FadeIn delay={0.2} className="space-y-6">
              <motion.div
                whileHover={{ x: 4 }}
                className="glass-strong p-6 rounded-xl border border-primary/20"
              >
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Email Us</h3>
                <p className="text-muted-foreground text-sm">support@fitforge.com</p>
              </motion.div>

              <motion.div
                whileHover={{ x: 4 }}
                className="glass-strong p-6 rounded-xl border border-primary/20"
              >
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Live Chat</h3>
                <p className="text-muted-foreground text-sm">Available Mon-Fri, 9am-5pm EST</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass-strong p-6 rounded-xl border border-primary/20 text-center"
              >
                <h3 className="font-bold mb-2">Response Time</h3>
                <p className="text-2xl font-bold text-primary mb-1">{'< 24 hours'}</p>
                <p className="text-sm text-muted-foreground">Average response time</p>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
