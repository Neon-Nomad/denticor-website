import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, CheckCircle, TrendingUp, Users, Zap, Star, Monitor, Database, BarChart3, Settings, Code, Cpu, Network, Server, Wifi, DollarSign, Calendar, Phone, Mail, MessageSquare, Activity, Target, Briefcase, Award, Shield, Clock, Globe } from 'lucide-react'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 1000], [0, -200])
  const y2 = useTransform(scrollY, [0, 1000], [0, -400])
  const y3 = useTransform(scrollY, [0, 1000], [0, -600])
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 })

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setLoading(false), 500)
          return 100
        }
        return prev + 3
      })
    }, 50)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      setMousePosition({ x: clientX, y: clientY })
      mouseX.set(clientX)
      mouseY.set(clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  if (loading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
                  <Database className="w-10 h-10 text-white" />
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-2 border-2 border-blue-400/30 rounded-3xl"
                />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">
              Denti<span className="text-blue-400">cor</span>
            </h1>
            <p className="text-blue-200 mb-6">Initializing Revenue Stack Technology</p>
            <div className="w-80 h-3 bg-slate-800 rounded-full mx-auto overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${loadingProgress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <p className="text-blue-300 mt-4 font-mono">{loadingProgress}% Complete</p>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-900 overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* 3D Wave Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-20">
            <motion.div
              style={{ y: y1 }}
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px'
              }}
            />
          </div>

          {/* Floating Particles */}
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}

          {/* 3D Wave Effect */}
          <motion.div
            style={{ y: y2 }}
            className="absolute bottom-0 left-0 right-0 h-96 opacity-30"
          >
            <svg viewBox="0 0 1200 320" className="w-full h-full">
              <defs>
                <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8"/>
                  <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.6"/>
                  <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.4"/>
                </linearGradient>
              </defs>
              <motion.path
                d="M0,160 C300,100 600,220 1200,160 L1200,320 L0,320 Z"
                fill="url(#wave-gradient)"
                animate={{
                  d: [
                    "M0,160 C300,100 600,220 1200,160 L1200,320 L0,320 Z",
                    "M0,140 C300,200 600,80 1200,140 L1200,320 L0,320 Z",
                    "M0,160 C300,100 600,220 1200,160 L1200,320 L0,320 Z"
                  ]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/50"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="relative mr-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Database className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-30"></div>
            </div>
            <div className="text-2xl font-bold text-white">
              Denti<span className="text-blue-400">cor</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-slate-300 hover:text-white transition-colors">Use Cases</a>
            <a href="#" className="text-slate-300 hover:text-white transition-colors">Features</a>
            <a href="#" className="text-slate-300 hover:text-white transition-colors">About</a>
            <Button className="bg-white text-slate-900 hover:bg-slate-100">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section with 3D Dashboard */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 z-10">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full px-4 py-2 mb-8"
            >
              <Zap className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-slate-300">Now with AI Revenue Optimization</span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Turn Visitors
              <br />
              Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Patients.</span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 max-w-2xl">
              Deploy enterprise-grade AI systems that automatically convert website traffic into booked consultations and optimize your practice revenue — powered by cutting-edge technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg shadow-2xl">
                <Database className="mr-2 h-5 w-5" />
                Deploy Revenue Stack
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg">
                <Activity className="mr-2 h-5 w-5" />
                See It in Action
              </Button>
            </div>

            <div className="text-sm text-slate-400">
              Performance-based technology • 30% revenue increase guaranteed
            </div>
          </motion.div>

          {/* Right Dashboard */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            {/* 3D Dashboard Container */}
            <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 shadow-2xl">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Revenue Dashboard</h3>
                    <p className="text-slate-400 text-sm">Manhattan Dental Practice</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-green-400 text-sm">Live</span>
                </div>
              </div>

              {/* Revenue Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <motion.div
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-xl p-4"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-4 h-4 text-blue-400" />
                    <span className="text-slate-300 text-sm">Monthly Revenue</span>
                  </div>
                  <div className="text-2xl font-bold text-white">$47,632</div>
                  <div className="text-green-400 text-sm">+34.5% ↗</div>
                </motion.div>

                <motion.div
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-xl p-4"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-purple-400" />
                    <span className="text-slate-300 text-sm">New Patients</span>
                  </div>
                  <div className="text-2xl font-bold text-white">127</div>
                  <div className="text-green-400 text-sm">+28.3% ↗</div>
                </motion.div>

                <motion.div
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 rounded-xl p-4"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-4 h-4 text-green-400" />
                    <span className="text-slate-300 text-sm">Conversion Rate</span>
                  </div>
                  <div className="text-2xl font-bold text-white">8.7%</div>
                  <div className="text-green-400 text-sm">+45.2% ↗</div>
                </motion.div>

                <motion.div
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                  className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-xl p-4"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Phone className="w-4 h-4 text-orange-400" />
                    <span className="text-slate-300 text-sm">Consultations</span>
                  </div>
                  <div className="text-2xl font-bold text-white">89</div>
                  <div className="text-green-400 text-sm">+52.1% ↗</div>
                </motion.div>
              </div>

              {/* Live Chart */}
              <div className="bg-slate-800/50 rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-white font-medium">Revenue Growth</h4>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-slate-400 text-xs">AI Optimized</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-slate-400 text-xs">Previous Period</span>
                    </div>
                  </div>
                </div>
                
                {/* Animated Chart */}
                <div className="h-32 flex items-end justify-between gap-1">
                  {[40, 65, 45, 80, 60, 95, 75, 110, 85, 120, 100, 135].map((height, i) => (
                    <motion.div
                      key={i}
                      className="bg-gradient-to-t from-blue-500 to-purple-600 rounded-t-sm flex-1"
                      initial={{ height: 0 }}
                      animate={{ height: `${height}px` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                    />
                  ))}
                </div>
              </div>

              {/* AI Status */}
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-blue-400" />
                  <span className="text-slate-300 text-sm">AI Engine Active</span>
                </div>
                <div className="text-green-400 text-sm">Optimizing Revenue 24/7</div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              style={{ x: springX, y: springY }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Database className="w-8 h-8 text-white" />
            </motion.div>

            <motion.div
              style={{ x: springX, y: springY }}
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center shadow-2xl"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <TrendingUp className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="relative py-20 z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-12"
          >
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-white">Our Mission</h2>
            </div>
            
            <blockquote className="text-2xl font-medium text-slate-200 leading-relaxed mb-8">
              "To revolutionize dental practice revenue optimization through cutting-edge AI technology, making enterprise-grade revenue systems accessible to every practice while delivering guaranteed, measurable results."
            </blockquote>
            
            <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
              We believe that every dental practice deserves access to the same advanced technology that Fortune 500 companies use to optimize their revenue streams. Our mission is to democratize AI-powered revenue optimization, ensuring that practice owners can focus on patient care while our technology handles the complexities of patient acquisition, conversion, and retention.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Your all-in-one Revenue Engine */}
      <section className="relative py-20 z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Your all-in-one Revenue Engine.
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              AI systems, analytics, and automation — everything you need to optimize and scale your practice revenue, zero hassle.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Bank-grade encryption and HIPAA compliance built-in",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Cpu,
                title: "AI-Powered Optimization",
                description: "Machine learning algorithms that improve performance 24/7",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Globe,
                title: "Seamless Integration",
                description: "Connect with your existing practice management systems",
                color: "from-green-500 to-emerald-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by Leaders */}
      <section className="relative py-20 z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Trusted by practice leaders.
            </h2>
            <p className="text-xl text-slate-300">
              More than 500+ dental practices nationwide already trust our technology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: "99.99%",
                label: "Always On, Always Reliable",
                icon: Clock
              },
              {
                metric: "500+",
                label: "Practices Powered by Denticor",
                icon: Users
              },
              {
                metric: "24/7",
                label: "AI Systems, Real Support",
                icon: MessageSquare
              }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.metric}</div>
                <div className="text-slate-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Launch with Denticor.
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Deploy enterprise-grade revenue optimization technology for your practice today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg">
                <Database className="mr-2 h-5 w-5" />
                Deploy Revenue Stack
              </Button>
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 z-10 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
              <Database className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-white">
              Denti<span className="text-blue-400">cor</span>
            </div>
          </div>
          <p className="text-slate-400">
            © 2024 — DENTICOR TECHNOLOGY, INC. All rights reserved
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
