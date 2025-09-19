import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, CheckCircle, TrendingUp, Users, Zap, Star, Monitor, Database, BarChart3, Settings, Code, Cpu, Network, Server, Wifi } from 'lucide-react'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, -50])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])
  const y3 = useTransform(scrollY, [0, 300], [0, -150])

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setLoading(false), 500)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(timer)
  }, [])

  if (loading) {
    return (
      <div className="fixed inset-0 bg-stone-50 flex items-center justify-center">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center mb-4">
              <Monitor className="w-12 h-12 text-blue-600 mr-3" />
              <h1 className="text-6xl font-bold text-stone-900">
                Denti<span className="text-blue-600">cor</span>
              </h1>
            </div>
            <div className="w-64 h-2 bg-stone-200 rounded-full mx-auto">
              <motion.div
                className="h-full bg-blue-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${loadingProgress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <p className="text-stone-600 mt-4">{loadingProgress}%</p>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed top-0 w-full z-50 bg-stone-50/80 backdrop-blur-sm border-b border-stone-200"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Database className="w-8 h-8 text-blue-600 mr-3" />
            <div className="text-2xl font-bold text-stone-900">
              Denti<span className="text-blue-600">cor</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-stone-600">New York | 11:54 am</span>
            <Button variant="outline" className="border-stone-300 hover:bg-stone-100">
              Contact
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Parallax Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Parallax Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
          {/* Tech Grid Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }} />
          </div>

          {/* Floating Tech Elements */}
          <motion.div style={{ y: y1 }} className="absolute top-20 left-20">
            <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-blue-400/30">
              <Cpu className="w-8 h-8 text-blue-300" />
            </div>
          </motion.div>

          <motion.div style={{ y: y2 }} className="absolute top-40 right-32">
            <div className="w-20 h-20 bg-purple-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-purple-400/30">
              <BarChart3 className="w-10 h-10 text-purple-300" />
            </div>
          </motion.div>

          <motion.div style={{ y: y3 }} className="absolute bottom-40 left-32">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-green-400/30">
              <Network className="w-6 h-6 text-green-300" />
            </div>
          </motion.div>

          <motion.div style={{ y: y1 }} className="absolute top-60 right-20">
            <div className="w-14 h-14 bg-orange-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-orange-400/30">
              <Server className="w-7 h-7 text-orange-300" />
            </div>
          </motion.div>

          <motion.div style={{ y: y2 }} className="absolute bottom-60 right-40">
            <div className="w-18 h-18 bg-cyan-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-cyan-400/30">
              <Database className="w-9 h-9 text-cyan-300" />
            </div>
          </motion.div>

          {/* Circuit Lines */}
          <motion.div style={{ y: y3 }} className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
          <motion.div style={{ y: y1 }} className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-5xl mx-auto"
          >
            {/* Main Tech Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mb-8"
            >
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-sm border border-white/20">
                <Cpu className="w-16 h-16 text-white" />
              </div>
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
              Revenue
              <br />
              <span className="text-blue-400">Stack</span>
              <br />
              Technology
            </h1>
            
            <p className="text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              AI-Powered Revenue Optimization Platform for Dental Practices
            </p>
            
            <p className="text-lg text-white/80 max-w-4xl mx-auto mb-12">
              We deploy enterprise-grade technology systems that automatically convert website visitors into booked consultations and optimize your practice revenue through advanced AI and machine learning algorithms.
            </p>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg shadow-2xl">
                <Monitor className="mr-2 h-5 w-5" />
                Deploy Your Revenue Stack
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-blue-200">
                Performance-based technology • 30% revenue increase guaranteed
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-4xl font-bold text-stone-900">Our Mission</h2>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 mb-8">
              <blockquote className="text-2xl font-medium text-stone-800 leading-relaxed mb-6">
                "To revolutionize dental practice revenue optimization through cutting-edge AI technology, making enterprise-grade revenue systems accessible to every practice while delivering guaranteed, measurable results."
              </blockquote>
              <p className="text-lg text-stone-600 leading-relaxed">
                We believe that every dental practice deserves access to the same advanced technology that Fortune 500 companies use to optimize their revenue streams. Our mission is to democratize AI-powered revenue optimization, ensuring that practice owners can focus on patient care while our technology handles the complexities of patient acquisition, conversion, and retention.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-stone-900 mb-2">Measurable Results</h3>
                <p className="text-stone-600">Every system we deploy comes with guaranteed performance metrics and transparent ROI tracking.</p>
              </div>
              
              <div className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-stone-900 mb-2">Advanced Technology</h3>
                <p className="text-stone-600">Enterprise-grade AI and machine learning systems tailored specifically for dental practice needs.</p>
              </div>
              
              <div className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-stone-900 mb-2">Practice-Focused</h3>
                <p className="text-stone-600">Built by technologists who understand the unique challenges and opportunities in dental practice management.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Credibility Section */}
      <section className="py-20 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold text-stone-900 mb-6 leading-tight">
                WE BUILD
                <br />
                <span className="text-blue-600">REVENUE SYSTEMS.</span>
                <br />
                WE DEPLOY
                <br />
                TECHNOLOGY.
              </h2>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-stone-600">
                Unlike traditional marketing agencies, we're a technology company that builds and deploys AI-powered revenue optimization systems. We understand the technical architecture needed to convert website visitors into booked patients.
              </p>
              
              {/* Tech Stack Indicators */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Code className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold">AI Integration</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Database className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold">Data Analytics</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Monitor className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold">System Integration</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Platform Showcase */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-stone-900 mb-6">
              Enterprise Technology Platform
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Our proprietary technology stack integrates seamlessly with your practice management system to create a complete revenue optimization engine.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl"
            >
              <div className="mb-6">
                <div className="w-24 h-24 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-stone-900 mb-2">FOR PRACTICE GROWTH</h3>
              </div>
              <blockquote className="text-stone-700 mb-4">
                "The technology platform they deployed increased our patient bookings by 45% in the first quarter. The AI-powered follow-up system is incredible."
              </blockquote>
              <cite className="text-stone-500">
                Dr. Sarah Chen
                <br />
                <span className="text-sm">Practice Owner, Manhattan Dental</span>
              </cite>
              <Button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white">
                <BarChart3 className="mr-2 h-4 w-4" />
                Deploy Growth Technology
              </Button>
            </motion.div>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl"
            >
              <div className="mb-6">
                <div className="w-24 h-24 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <Cpu className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-stone-900 mb-2">FOR AUTOMATION</h3>
              </div>
              <blockquote className="text-stone-700 mb-4">
                "Their AI system handles everything automatically - from lead capture to appointment booking. It's like having a full marketing team that never sleeps."
              </blockquote>
              <cite className="text-stone-500">
                Dr. Michael Torres
                <br />
                <span className="text-sm">Multi-Practice Owner</span>
              </cite>
              <Button className="mt-6 bg-green-600 hover:bg-green-700 text-white">
                <Settings className="mr-2 h-4 w-4" />
                Automate Your Revenue
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Services */}
      <section className="py-20 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-stone-900 mb-16 text-center"
          >
            Technology Solutions
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "System Architecture",
                description: "Deploy enterprise-grade revenue stack with AI integration, analytics tracking, and automated workflows.",
                icon: Database,
                color: "blue"
              },
              {
                number: "02",
                title: "AI Optimization Engine",
                description: "Machine learning algorithms that automatically optimize conversion rates and patient engagement.",
                icon: Cpu,
                color: "purple"
              },
              {
                number: "03",
                title: "Performance Analytics",
                description: "Real-time dashboard with predictive analytics, ROI tracking, and automated reporting systems.",
                icon: BarChart3,
                color: "green"
              },
              {
                number: "04",
                title: "Scaling Infrastructure",
                description: "Cloud-based systems that automatically scale with practice growth and multi-location expansion.",
                icon: Monitor,
                color: "orange"
              }
            ].map((service, index) => (
              <motion.div
                key={service.number}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="text-6xl font-bold text-stone-200 mb-4 group-hover:text-blue-200 transition-colors">
                  {service.number}
                </div>
                <div className="mb-4">
                  <div className={`w-12 h-12 bg-${service.color}-100 rounded-lg flex items-center justify-center mb-3`}>
                    <service.icon className={`w-6 h-6 text-${service.color}-600`} />
                  </div>
                  <h3 className="text-xl font-semibold text-stone-900 mb-2">
                    {service.title}
                  </h3>
                </div>
                <p className="text-stone-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center mb-8">
              <Database className="w-12 h-12 text-blue-600 mr-4" />
              <h2 className="text-4xl font-bold text-stone-900">
                Denticor.
                <br />
                <span className="text-stone-500">Technology Company, since 2024</span>
              </h2>
            </div>
            <p className="text-lg text-stone-600 mb-8 max-w-2xl mx-auto">
              Founded by revenue optimization technologists who saw an opportunity to help dental practices succeed by deploying enterprise-grade AI and automation systems.
            </p>
            <p className="text-stone-600 mb-8 max-w-3xl mx-auto">
              We believe in developing technology solutions that understand a practice's unique challenges and growth goals, so that we can serve as a strategic technology partner – helping practices build the automated revenue systems they need to thrive.
            </p>
            <Button size="lg" variant="outline" className="border-blue-300 hover:bg-blue-50">
              <Monitor className="mr-2 h-5 w-5" />
              Connect with our technology team
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Database className="w-8 h-8 text-blue-400 mr-3" />
            <div className="text-2xl font-bold">
              Denti<span className="text-blue-400">cor</span>
            </div>
          </div>
          <p className="text-stone-400">
            New York © 2024 Denticor Technology, Inc.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
