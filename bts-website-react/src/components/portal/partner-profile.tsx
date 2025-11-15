import React from "react";
import { User, Mail, Shield, Calendar } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

export function PartnerProfile() {
  const { user } = useAuth();

  if (!user) return null;
  const roleLabel =
    user.role === "superadmin"
      ? "Super Admin"
      : user.role === "admin"
        ? "Administrador"
        : "Parceiro";

  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <User className="w-8 h-8 text-[#00E5FF]" />
          <h1 className="text-3xl text-white">Perfil</h1>
        </div>
        <p className="text-[#C6CEDF]">
          Suas informações e configurações de conta.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile Info Card */}
        <div className="bg-white/[0.04] backdrop-blur-2xl rounded-2xl border border-white/15 p-8 space-y-6">
          <div>
            <h2 className="text-white font-medium mb-6">
              Informações Pessoais
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 border border-white/10 rounded-lg">
                  <User className="w-5 h-5 text-[#00E5FF]" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-[#C6CEDF]/70 mb-1">Nome</p>
                  <p className="text-white font-medium">{user.name}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 border border-white/10 rounded-lg">
                  <Mail className="w-5 h-5 text-[#00E5FF]" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-[#C6CEDF]/70 mb-1">E-mail</p>
                  <p className="text-white font-medium">{user.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 border border-white/10 rounded-lg">
                  <Shield className="w-5 h-5 text-[#00E5FF]" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-[#C6CEDF]/70 mb-1">Perfil</p>
                  <span className="inline-block px-3 py-1 bg-[#1F4AFF]/20 border border-[#1F4AFF]/30 rounded-md text-[#00E5FF] text-sm">
                    {roleLabel}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 border border-white/10 rounded-lg">
                  <Calendar className="w-5 h-5 text-[#00E5FF]" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-[#C6CEDF]/70 mb-1">Status</p>
                  <span className="inline-block px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-md text-green-400 text-sm">
                    {user.status === "active" ? "Ativo" : "Inativo"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Card */}
        <div className="bg-white/[0.04] backdrop-blur-2xl rounded-2xl border border-white/15 p-8 space-y-6">
          <div>
            <h2 className="text-white font-medium mb-6">Segurança</h2>

            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 transition-colors">
                <span>Alterar senha</span>
                <span className="text-[#00E5FF]">→</span>
              </button>

              <button className="w-full flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 transition-colors">
                <span>Autenticação de dois fatores</span>
                <span className="text-[#C6CEDF] text-sm">Em breve</span>
              </button>

              <button className="w-full flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 transition-colors">
                <span>Sessões ativas</span>
                <span className="text-[#00E5FF]">→</span>
              </button>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10">
            <h3 className="text-sm text-[#C6CEDF] mb-3">
              Sua conta está protegida por:
            </h3>
            <ul className="space-y-2 text-sm text-[#C6CEDF]">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span>Criptografia end-to-end</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span>Protocolo One-Way Mirror of Trust™</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span>Conformidade internacional</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
