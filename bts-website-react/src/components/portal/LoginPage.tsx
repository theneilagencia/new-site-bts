import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { LogIn, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

export function LoginPage({ onLoginSuccess }: { onLoginSuccess?: () => void }) {
  const { login } = useAuth();
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    const success = await login(email, password);
    setIsLoading(false);

    if (success) {
      onLoginSuccess?.();
    } else {
      setError(t.portal.login.error);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0f1e]">
      
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Orbital Gradients */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute left-1/4 top-1/4 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-8 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, #00639A 0%, transparent 70%)',
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        <motion.div
          className="absolute right-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full opacity-6 blur-[100px]"
          style={{
            background: 'radial-gradient(circle, #21B6F3 0%, transparent 65%)',
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      {/* Login Card */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative z-10 w-full max-w-md px-6"
      >
        <motion.div
          variants={fadeInUp}
          className="overflow-hidden rounded-2xl border border-white/10 bg-[#0f1729]/80 p-8 shadow-2xl backdrop-blur-xl"
        >
          
          {/* Logo */}
          <motion.div variants={staggerItem} className="mb-8 text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00639A] to-[#21B6F3]">
                <LogIn className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="mb-2 text-3xl font-bold text-white">
              {t.portal.login.title}
            </h1>
            <p className="text-sm text-slate-400">
              {t.portal.login.subtitle}
            </p>
          </motion.div>

          {/* Form */}
          <motion.form variants={staggerItem} onSubmit={handleSubmit} className="space-y-6">
            
            {/* Email */}
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
                {t.portal.login.emailLabel}
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-white/10 bg-[#1a2234] py-3 pl-12 pr-4 text-white placeholder-slate-500 transition-all focus:border-[#00639A] focus:outline-none focus:ring-2 focus:ring-[#00639A]/30"
                  placeholder={t.portal.login.emailPlaceholder}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-300">
                {t.portal.login.passwordLabel}
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border border-white/10 bg-[#1a2234] py-3 pl-12 pr-12 text-white placeholder-slate-500 transition-all focus:border-[#00639A] focus:outline-none focus:ring-2 focus:ring-[#00639A]/30"
                  placeholder={t.portal.login.passwordPlaceholder}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-300"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-lg bg-red-500/10 border border-red-500/20 p-3 text-sm text-red-400"
              >
                {error}
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-[#00639A] to-[#21B6F3] py-3 font-semibold text-white shadow-lg transition-all disabled:opacity-50"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isLoading ? (
                  <>
                    <motion.div
                      className="h-5 w-5 rounded-full border-2 border-white/30 border-t-white"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                    {t.portal.login.loading}
                  </>
                ) : (
                  <>
                    <LogIn className="h-5 w-5" />
                    {t.portal.login.submit}
                  </>
                )}
              </span>
              <motion.div
                className="absolute inset-0 bg-white/10 opacity-0 transition-opacity group-hover:opacity-100"
                initial={false}
              />
            </motion.button>
          </motion.form>

          {/* Demo Credentials */}
          <motion.div
            variants={staggerItem}
            className="mt-6 rounded-lg border border-slate-700/50 bg-slate-800/30 p-4"
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Demo Credentials:
            </p>
            <div className="space-y-1 text-xs text-slate-400">
              <p>Partner: parceiro@demo.com / demo123</p>
              <p>Admin: admin@btsglobal.com / admin123</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
