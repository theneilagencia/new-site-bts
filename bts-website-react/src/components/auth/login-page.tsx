import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { BtsLogo } from '@/components/ui/BtsLogo';
import { Mail, Lock, ArrowRight, AlertCircle, Eye, EyeOff } from 'lucide-react';

interface LoginPageProps {
  onLoginSuccess: () => void;
}

export function LoginPage({ onLoginSuccess }: LoginPageProps) {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    const success = await login(email, password);
    
    setIsLoading(false);

    if (success) {
      onLoginSuccess();
    } else {
      setError('E-mail ou senha incorretos');
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#050B18] via-[#0A1432] to-[#050B18]">
      {/* Orbital background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-[#1F4AFF] rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-[#00E5FF] rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          {/* Logo */}
          <div className="mb-8 text-center">
            <div className="flex justify-center mb-6">
              <BtsLogo className="h-10 w-auto" />
            </div>
            <h1 className="text-2xl text-white mb-2">Área Logada</h1>
            <p className="text-sm text-[#C6CEDF]">Portal de gestão e propostas contratuais</p>
          </div>

          {/* Login Card */}
          <div className="relative">
            {/* Card with blur effect */}
            <div className="absolute inset-0 bg-white/[0.04] backdrop-blur-2xl rounded-2xl border border-white/15" />
            
            <div className="relative p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div>
                  <label className="block text-sm text-[#C6CEDF] mb-2">E-mail</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C6CEDF]/50" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="seu@email.com"
                      className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-[#C6CEDF]/30 focus:outline-none focus:border-[#1F4AFF] focus:ring-2 focus:ring-[#1F4AFF]/20 transition-all"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-sm text-[#C6CEDF] mb-2">Senha</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C6CEDF]/50" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="••••••••"
                      className="w-full pl-12 pr-12 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-[#C6CEDF]/30 focus:outline-none focus:border-[#1F4AFF] focus:ring-2 focus:ring-[#1F4AFF]/20 transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#C6CEDF]/50 hover:text-[#C6CEDF] transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Error Message */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-lg"
                  >
                    <AlertCircle className="w-4 h-4 text-red-400" />
                    <span className="text-sm text-red-400">{error}</span>
                  </motion.div>
                )}

                {/* Forgot Password */}
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="text-sm text-[#1F4AFF] hover:text-[#00E5FF] transition-colors"
                  >
                    Esqueci minha senha
                  </button>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full group relative overflow-hidden rounded-lg bg-gradient-to-r from-[#1F4AFF] to-[#00E5FF] p-[1px] transition-all hover:shadow-lg hover:shadow-[#1F4AFF]/30"
                >
                  <div className="relative flex items-center justify-center gap-2 bg-[#050B18] rounded-lg px-6 py-3 group-hover:bg-transparent transition-all">
                    <span className="text-white font-medium">
                      {isLoading ? 'Entrando...' : 'Entrar'}
                    </span>
                    <ArrowRight className="w-5 h-5 text-white transition-transform group-hover:translate-x-1" />
                  </div>
                </button>
              </form>

              {/* Demo Credentials */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-xs text-[#C6CEDF]/50 mb-3 text-center">Credenciais de demonstração:</p>
                <div className="space-y-2 text-xs text-[#C6CEDF]/70">
                  <div className="flex justify-between">
                    <span>Parceiro:</span>
                    <span className="text-[#00E5FF]">elcio@bts.com / partner123</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Admin:</span>
                    <span className="text-[#00E5FF]">admin@bts.com / admin123</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-xs text-[#C6CEDF]/50">
              One-Way Mirror of Trust™ · BTS Global Corp
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}