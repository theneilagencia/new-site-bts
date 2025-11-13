import { Proposal, STATUS_LABELS } from './proposal-types';

const STORAGE_KEY = 'bts-notification-emails';

// Default email recipients for notifications
const DEFAULT_NOTIFICATION_EMAILS = [
  'comercial@btsglobalcorp.com',
  'vinicius.debian@btsglobalcorp.com',
];

interface EmailNotificationData {
  proposal: Proposal;
  previousStatus?: string;
  newStatus: string;
}

// Get notification emails from localStorage or return defaults
export function getNotificationEmails(): string[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return Array.isArray(parsed) && parsed.length > 0 ? parsed : DEFAULT_NOTIFICATION_EMAILS;
    }
  } catch (error) {
    console.error('Erro ao carregar e-mails de notificação:', error);
  }
  return DEFAULT_NOTIFICATION_EMAILS;
}

export async function sendStatusChangeNotification(data: EmailNotificationData): Promise<boolean> {
  const { proposal, previousStatus, newStatus } = data;

  // Only send notifications for 'review' and 'approved' statuses
  if (newStatus !== 'review' && newStatus !== 'approved') {
    return false;
  }

  // Get current notification emails from settings
  const notificationEmails = getNotificationEmails();

  if (notificationEmails.length === 0) {
    console.warn('⚠️ Nenhum e-mail configurado para notificações');
    return false;
  }

  const emailSubject = `[BTS] Proposta ${proposal.id} - Status: ${STATUS_LABELS[newStatus as keyof typeof STATUS_LABELS]}`;
  
  const emailBody = `
Nova atualização de status de proposta!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INFORMAÇÕES DA PROPOSTA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ID: ${proposal.id}
Cliente: ${proposal.clientName}
Email: ${proposal.clientEmail}
CPF/CNPJ: ${proposal.clientCpfCnpj}
País: ${proposal.country}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MUDANÇA DE STATUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${previousStatus ? `Status Anterior: ${STATUS_LABELS[previousStatus as keyof typeof STATUS_LABELS]}` : ''}
Novo Status: ${STATUS_LABELS[newStatus as keyof typeof STATUS_LABELS]}
Data: ${new Date().toLocaleString('pt-BR')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DETALHES COMERCIAIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Estruturas: ${proposal.structures.length} estrutura(s)
Valor Total: ${proposal.currency} $${proposal.amount.toLocaleString()}
Manutenção Anual: ${proposal.currency} $${proposal.maintenanceFee.toLocaleString()}

Parceiro Responsável: ${proposal.partnerName}
Data de Criação: ${new Date(proposal.createdAt).toLocaleDateString('pt-BR')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${newStatus === 'review' ? '⚠️ Esta proposta está aguardando análise.' : ''}
${newStatus === 'approved' ? '✅ Esta proposta foi APROVADA!' : ''}

Acesse o portal BTS para mais detalhes:
https://new-site-bts.vercel.app/

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BTS Global Corp
Infraestrutura Digital Global
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  `.trim();

  try {
    // In a real implementation, this would call a backend API endpoint
    // For now, we'll simulate the email sending with a console log
    console.log('📧 Enviando email de notificação...');
    console.log('Para:', notificationEmails.join(', '));
    console.log('Assunto:', emailSubject);
    console.log('Corpo:', emailBody);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // In production, replace this with actual API call:
    // const response = await fetch('/api/send-notification', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     to: notificationEmails,
    //     subject: emailSubject,
    //     body: emailBody,
    //     proposal: proposal,
    //   }),
    // });
    // return response.ok;

    return true;
  } catch (error) {
    console.error('❌ Erro ao enviar notificação por email:', error);
    return false;
  }
}
