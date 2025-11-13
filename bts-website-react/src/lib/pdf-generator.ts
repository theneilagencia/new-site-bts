import jsPDF from 'jspdf';
import { Proposal, STRUCTURE_OPTIONS } from './proposal-types';

// BTS Official Color Palette
const BTS_COLORS = {
  darkBlue: { r: 27, g: 46, b: 62 },      // #1B2E3E
  black: { r: 0, g: 0, b: 0 },            // #000000
  white: { r: 255, g: 255, b: 255 },      // #FFFFFF
  highlight: { r: 31, g: 74, b: 255 },    // #1F4AFF
  s01: { r: 30, g: 54, b: 91 },           // #1E365B
  s02: { r: 0, g: 99, b: 154 },           // #00639A
  s03: { r: 0, g: 188, b: 165 },          // #00BCA5
  s04: { r: 42, g: 123, b: 161 },         // #2A7BA1
  s05: { r: 33, g: 182, b: 243 },         // #21B6F3
  s06: { r: 232, g: 232, b: 232 },        // #E8E8E8
  gray: { r: 198, g: 206, b: 223 },       // Text gray
};

export function generateProposalPDF(proposal: Proposal): void {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - 2 * margin;
  let yPos = margin;

  // Helper function to add new page if needed
  const checkPageBreak = (requiredSpace: number) => {
    if (yPos + requiredSpace > pageHeight - margin) {
      doc.addPage();
      yPos = margin;
      return true;
    }
    return false;
  };

  // Helper function for wrapped text
  const addWrappedText = (text: string, x: number, y: number, maxWidth: number, fontSize: number = 10) => {
    doc.setFontSize(fontSize);
    const lines = doc.splitTextToSize(text, maxWidth);
    doc.text(lines, x, y);
    return lines.length * (fontSize * 0.35); // Return height used
  };

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  // Get structure details
  const getStructureDetails = () => {
    return proposal.structures
      .map(id => STRUCTURE_OPTIONS.find(s => s.id === id))
      .filter(Boolean);
  };

  // ===== COVER PAGE =====
  // Header gradient simulation with BTS colors
  doc.setFillColor(BTS_COLORS.darkBlue.r, BTS_COLORS.darkBlue.g, BTS_COLORS.darkBlue.b);
  doc.rect(0, 0, pageWidth, 50, 'F');
  doc.setFillColor(BTS_COLORS.s02.r, BTS_COLORS.s02.g, BTS_COLORS.s02.b);
  doc.rect(0, 50, pageWidth, 10, 'F');

  // Confidential badge
  doc.setFillColor(BTS_COLORS.white.r, BTS_COLORS.white.g, BTS_COLORS.white.b);
  doc.setDrawColor(BTS_COLORS.s05.r, BTS_COLORS.s05.g, BTS_COLORS.s05.b);
  doc.roundedRect(margin, 70, 30, 8, 2, 2, 'FD');
  doc.setTextColor(BTS_COLORS.s02.r, BTS_COLORS.s02.g, BTS_COLORS.s02.b);
  doc.setFontSize(8);
  doc.text('CONFIDENCIAL', margin + 2, 75);

  // Title
  doc.setTextColor(BTS_COLORS.white.r, BTS_COLORS.white.g, BTS_COLORS.white.b);
  doc.setFontSize(32);
  doc.setFont('helvetica', 'bold');
  doc.text('PROPOSTA', pageWidth / 2, 25, { align: 'center' });
  doc.text('CONTRATUAL', pageWidth / 2, 40, { align: 'center' });

  // Client info
  doc.setFontSize(16);
  doc.setFont('helvetica', 'normal');
  doc.text(proposal.clientName, pageWidth / 2, 95, { align: 'center' });
  
  doc.setFontSize(10);
  doc.setTextColor(BTS_COLORS.gray.r, BTS_COLORS.gray.g, BTS_COLORS.gray.b);
  doc.text(formatDate(proposal.createdAt), pageWidth / 2, 105, { align: 'center' });

  // Footer info
  doc.setFontSize(8);
  doc.text(`Emitida por: ${proposal.partnerName}`, pageWidth / 2, 120, { align: 'center' });
  doc.text(`ID: ${proposal.id}`, pageWidth / 2, 126, { align: 'center' });

  // ===== PAGE 2: INTRODUCTION =====
  doc.addPage();
  yPos = margin;

  // Section 1
  doc.setTextColor(BTS_COLORS.darkBlue.r, BTS_COLORS.darkBlue.g, BTS_COLORS.darkBlue.b);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('1. Apresentação da BTS Global Corp', margin, yPos);
  yPos += 10;

  doc.setDrawColor(BTS_COLORS.s02.r, BTS_COLORS.s02.g, BTS_COLORS.s02.b);
  doc.setLineWidth(0.5);
  doc.line(margin, yPos, pageWidth - margin, yPos);
  yPos += 8;

  doc.setTextColor(BTS_COLORS.darkBlue.r, BTS_COLORS.darkBlue.g, BTS_COLORS.darkBlue.b);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  
  const intro1 = 'A BTS Global Corp é uma infraestrutura digital para estruturação internacional, privacidade e conformidade jurídica. Oferecemos soluções completas para fundadores, family offices e cidadãos globais que buscam operar com liberdade, transparência e segurança em jurisdições estratégicas.';
  yPos += addWrappedText(intro1, margin, yPos, contentWidth);
  yPos += 6;

  const intro2 = 'Nossa plataforma combina tecnologia de ponta com expertise jurídica internacional, garantindo que cada estrutura seja construída sob os mais altos padrões de compliance e governança.';
  yPos += addWrappedText(intro2, margin, yPos, contentWidth);
  yPos += 15;

  // Section 2: Scope
  checkPageBreak(40);
  doc.setTextColor(BTS_COLORS.darkBlue.r, BTS_COLORS.darkBlue.g, BTS_COLORS.darkBlue.b);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('2. Escopo da Proposta', margin, yPos);
  yPos += 10;

  doc.setDrawColor(BTS_COLORS.s02.r, BTS_COLORS.s02.g, BTS_COLORS.s02.b);
  doc.line(margin, yPos, pageWidth - margin, yPos);
  yPos += 8;

  // Client box
  doc.setTextColor(BTS_COLORS.darkBlue.r, BTS_COLORS.darkBlue.g, BTS_COLORS.darkBlue.b);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Cliente:', margin, yPos);
  yPos += 6;

  doc.setFillColor(BTS_COLORS.s06.r, BTS_COLORS.s06.g, BTS_COLORS.s06.b);
  doc.setDrawColor(BTS_COLORS.s02.r, BTS_COLORS.s02.g, BTS_COLORS.s02.b);
  doc.roundedRect(margin, yPos, contentWidth, 25, 2, 2, 'FD');
  
  doc.setTextColor(BTS_COLORS.darkBlue.r, BTS_COLORS.darkBlue.g, BTS_COLORS.darkBlue.b);
  doc.setFont('helvetica', 'bold');
  doc.text(proposal.clientName, margin + 5, yPos + 6);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.text(proposal.clientEmail, margin + 5, yPos + 11);
  doc.text(`CPF/CNPJ: ${proposal.clientCpfCnpj}`, margin + 5, yPos + 16);
  doc.text(`Jurisdição: ${proposal.country}`, margin + 5, yPos + 21);
  yPos += 31;

  // Structures
  checkPageBreak(50);
  doc.setTextColor(BTS_COLORS.darkBlue.r, BTS_COLORS.darkBlue.g, BTS_COLORS.darkBlue.b);
  doc.setFontSize(10);
  doc.text('Estruturas Selecionadas:', margin, yPos);
  yPos += 6;

  const structures = getStructureDetails();
  structures.forEach((structure) => {
    if (!structure) return;
    
    checkPageBreak(25);
    
    doc.setFillColor(BTS_COLORS.s06.r, BTS_COLORS.s06.g, BTS_COLORS.s06.b);
    doc.setDrawColor(BTS_COLORS.s02.r, BTS_COLORS.s02.g, BTS_COLORS.s02.b);
    doc.roundedRect(margin, yPos, contentWidth, 18, 2, 2, 'FD');
    
    doc.setTextColor(BTS_COLORS.darkBlue.r, BTS_COLORS.darkBlue.g, BTS_COLORS.darkBlue.b);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.text(structure.label, margin + 5, yPos + 6);
    
    doc.setTextColor(BTS_COLORS.s02.r, BTS_COLORS.s02.g, BTS_COLORS.s02.b);
    doc.text(`$${structure.basePrice.toLocaleString()}`, pageWidth - margin - 5, yPos + 6, { align: 'right' });
    
    doc.setTextColor(BTS_COLORS.darkBlue.r, BTS_COLORS.darkBlue.g, BTS_COLORS.darkBlue.b);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    const descLines = doc.splitTextToSize(structure.description, contentWidth - 15);
    doc.text(descLines.slice(0, 1), margin + 5, yPos + 12);
    
    yPos += 23;
  });

  // Description if exists
  if (proposal.description) {
    checkPageBreak(30);
    doc.setTextColor(BTS_COLORS.darkBlue.r, BTS_COLORS.darkBlue.g, BTS_COLORS.darkBlue.b);
    doc.setFontSize(10);
    doc.text('Descrição do Caso:', margin, yPos);
    yPos += 6;

    doc.setFillColor(BTS_COLORS.s06.r, BTS_COLORS.s06.g, BTS_COLORS.s06.b);
    doc.setDrawColor(BTS_COLORS.s02.r, BTS_COLORS.s02.g, BTS_COLORS.s02.b);
    const descHeight = Math.max(20, Math.ceil(proposal.description.length / 80) * 5);
    doc.roundedRect(margin, yPos, contentWidth, descHeight, 2, 2, 'FD');
    
    doc.setTextColor(BTS_COLORS.darkBlue.r, BTS_COLORS.darkBlue.g, BTS_COLORS.darkBlue.b);
    doc.setFontSize(9);
    yPos += addWrappedText(proposal.description, margin + 5, yPos + 5, contentWidth - 10, 9);
    yPos += 10;
  }

  // ===== PAGE 3: COMMERCIAL TERMS =====
  doc.addPage();
  yPos = margin;

  doc.setTextColor(BTS_COLORS.darkBlue.r, BTS_COLORS.darkBlue.g, BTS_COLORS.darkBlue.b);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('3. Condições Comerciais e Operacionais', margin, yPos);
  yPos += 10;

  doc.setDrawColor(BTS_COLORS.s02.r, BTS_COLORS.s02.g, BTS_COLORS.s02.b);
  doc.line(margin, yPos, pageWidth - margin, yPos);
  yPos += 10;

  // Value boxes
  const boxWidth = (contentWidth - 5) / 2;
  
  // Total value box
  doc.setFillColor(BTS_COLORS.s06.r, BTS_COLORS.s06.g, BTS_COLORS.s06.b);
  doc.setDrawColor(BTS_COLORS.s02.r, BTS_COLORS.s02.g, BTS_COLORS.s02.b);
  doc.roundedRect(margin, yPos, boxWidth, 20, 2, 2, 'FD');
  
  doc.setTextColor(BTS_COLORS.darkBlue.r, BTS_COLORS.darkBlue.g, BTS_COLORS.darkBlue.b);
  doc.setFontSize(8);
  doc.text('Valor Total da Estrutura', margin + 5, yPos + 6);
  
  doc.setTextColor(BTS_COLORS.s02.r, BTS_COLORS.s02.g, BTS_COLORS.s02.b);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text(`${proposal.currency} $${proposal.amount.toLocaleString()}`, margin + 5, yPos + 14);

  // Maintenance box
  doc.setFillColor(BTS_COLORS.s06.r, BTS_COLORS.s06.g, BTS_COLORS.s06.b);
  doc.setDrawColor(BTS_COLORS.s02.r, BTS_COLORS.s02.g, BTS_COLORS.s02.b);
  doc.roundedRect(margin + boxWidth + 5, yPos, boxWidth, 20, 2, 2, 'FD');
  
  doc.setTextColor(BTS_COLORS.darkBlue.r, BTS_COLORS.darkBlue.g, BTS_COLORS.darkBlue.b);
  doc.setFontSize(8);
  doc.text('Manutenção Anual', margin + boxWidth + 10, yPos + 6);
  
  doc.setTextColor(BTS_COLORS.s02.r, BTS_COLORS.s02.g, BTS_COLORS.s02.b);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text(`${proposal.currency} $${proposal.maintenanceFee.toLocaleString()}`, margin + boxWidth + 10, yPos + 14);
  
  yPos += 26;

  // Additional terms box
  doc.setFillColor(BTS_COLORS.s06.r, BTS_COLORS.s06.g, BTS_COLORS.s06.b);
  doc.setDrawColor(BTS_COLORS.s02.r, BTS_COLORS.s02.g, BTS_COLORS.s02.b);
  doc.roundedRect(margin, yPos, contentWidth, 25, 2, 2, 'FD');
  
  doc.setTextColor(BTS_COLORS.darkBlue.r, BTS_COLORS.darkBlue.g, BTS_COLORS.darkBlue.b);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text('Prazo de Execução: 30 a 45 dias úteis após aprovação', margin + 5, yPos + 6);
  doc.text('Entregáveis: Certificados digitais, documentação completa, acesso ao portal de gestão', margin + 5, yPos + 11);
  doc.text('Forma de Pagamento: Wire transfer, criptomoedas ou outros métodos acordados', margin + 5, yPos + 16);
  
  yPos += 30;

  // Section 4: Terms
  checkPageBreak(40);
  doc.setTextColor(BTS_COLORS.darkBlue.r, BTS_COLORS.darkBlue.g, BTS_COLORS.darkBlue.b);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('4. Termos e Cláusulas Contratuais', margin, yPos);
  yPos += 10;

  doc.setDrawColor(BTS_COLORS.s02.r, BTS_COLORS.s02.g, BTS_COLORS.s02.b);
  doc.line(margin, yPos, pageWidth - margin, yPos);
  yPos += 10;

  const clauses = [
    {
      title: '4.1 Vigência',
      text: 'Este contrato entra em vigor a partir da data de assinatura e possui vigência indeterminada, podendo ser rescindido conforme cláusulas estabelecidas.'
    },
    {
      title: '4.2 Obrigações das Partes',
      text: 'BTS: Fornecer toda infraestrutura digital, documentação legal e suporte necessário. Cliente: Fornecer informações precisas, realizar pagamentos conforme acordado e cumprir requisitos de compliance.'
    },
    {
      title: '4.3 Confidencialidade',
      text: 'Todas as informações trocadas entre as partes são consideradas confidenciais e protegidas sob selo "One-Way Mirror of Trust".'
    },
    {
      title: '4.4 Privacidade e Compliance',
      text: 'A BTS opera sob rigorosos padrões de privacidade e conformidade internacional, garantindo total transparência verificável.'
    },
  ];

  clauses.forEach(clause => {
    checkPageBreak(20);
    doc.setTextColor(BTS_COLORS.s02.r, BTS_COLORS.s02.g, BTS_COLORS.s02.b);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text(clause.title, margin, yPos);
    yPos += 6;
    
    doc.setTextColor(BTS_COLORS.darkBlue.r, BTS_COLORS.darkBlue.g, BTS_COLORS.darkBlue.b);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    yPos += addWrappedText(clause.text, margin, yPos, contentWidth, 9);
    yPos += 6;
  });

  // Custom clauses if exist
  if (proposal.customClauses) {
    checkPageBreak(25);
    doc.setTextColor(BTS_COLORS.s02.r, BTS_COLORS.s02.g, BTS_COLORS.s02.b);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('4.5 Cláusulas Específicas', margin, yPos);
    yPos += 6;

    doc.setFillColor(BTS_COLORS.s06.r, BTS_COLORS.s06.g, BTS_COLORS.s06.b);
    doc.setDrawColor(BTS_COLORS.s02.r, BTS_COLORS.s02.g, BTS_COLORS.s02.b);
    const customHeight = Math.max(15, Math.ceil(proposal.customClauses.length / 80) * 5);
    doc.roundedRect(margin, yPos, contentWidth, customHeight, 2, 2, 'FD');
    
    doc.setTextColor(BTS_COLORS.darkBlue.r, BTS_COLORS.darkBlue.g, BTS_COLORS.darkBlue.b);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    yPos += addWrappedText(proposal.customClauses, margin + 5, yPos + 5, contentWidth - 10, 9);
    yPos += 10;
  }

  // Jurisdiction
  checkPageBreak(15);
  doc.setTextColor(BTS_COLORS.s02.r, BTS_COLORS.s02.g, BTS_COLORS.s02.b);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('4.6 Jurisdição', margin, yPos);
  yPos += 6;
  
  doc.setTextColor(BTS_COLORS.darkBlue.r, BTS_COLORS.darkBlue.g, BTS_COLORS.darkBlue.b);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.text(`Este contrato será regido pelas leis aplicáveis às jurisdições selecionadas: ${proposal.country}.`, margin, yPos);
  yPos += 15;

  // ===== SIGNATURE SECTION =====
  checkPageBreak(60);
  doc.setTextColor(BTS_COLORS.darkBlue.r, BTS_COLORS.darkBlue.g, BTS_COLORS.darkBlue.b);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('5. Assinatura Digital', margin, yPos);
  yPos += 10;

  doc.setDrawColor(BTS_COLORS.s02.r, BTS_COLORS.s02.g, BTS_COLORS.s02.b);
  doc.line(margin, yPos, pageWidth - margin, yPos);
  yPos += 10;

  const sigBoxWidth = (contentWidth - 10) / 2;

  // BTS signature
  doc.setFillColor(BTS_COLORS.s06.r, BTS_COLORS.s06.g, BTS_COLORS.s06.b);
  doc.setDrawColor(BTS_COLORS.s02.r, BTS_COLORS.s02.g, BTS_COLORS.s02.b);
  doc.roundedRect(margin, yPos, sigBoxWidth, 30, 2, 2, 'FD');
  
  doc.setTextColor(BTS_COLORS.darkBlue.r, BTS_COLORS.darkBlue.g, BTS_COLORS.darkBlue.b);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.text('BTS Global Corp', margin + 5, yPos + 6);
  
  doc.setDrawColor(BTS_COLORS.gray.r, BTS_COLORS.gray.g, BTS_COLORS.gray.b);
  doc.line(margin + 5, yPos + 20, margin + sigBoxWidth - 5, yPos + 20);
  
  doc.setFontSize(7);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(BTS_COLORS.gray.r, BTS_COLORS.gray.g, BTS_COLORS.gray.b);
  doc.text('Assinatura e carimbo', margin + 5, yPos + 26);

  // Client signature
  doc.setFillColor(BTS_COLORS.s06.r, BTS_COLORS.s06.g, BTS_COLORS.s06.b);
  doc.setDrawColor(BTS_COLORS.s02.r, BTS_COLORS.s02.g, BTS_COLORS.s02.b);
  doc.roundedRect(margin + sigBoxWidth + 10, yPos, sigBoxWidth, 30, 2, 2, 'FD');
  
  doc.setTextColor(BTS_COLORS.darkBlue.r, BTS_COLORS.darkBlue.g, BTS_COLORS.darkBlue.b);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.text(proposal.clientName, margin + sigBoxWidth + 15, yPos + 6);
  
  doc.setDrawColor(BTS_COLORS.gray.r, BTS_COLORS.gray.g, BTS_COLORS.gray.b);
  doc.line(margin + sigBoxWidth + 15, yPos + 20, margin + contentWidth - 5, yPos + 20);
  
  doc.setFontSize(7);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(BTS_COLORS.gray.r, BTS_COLORS.gray.g, BTS_COLORS.gray.b);
  doc.text('Assinatura e data', margin + sigBoxWidth + 15, yPos + 26);
  
  yPos += 40;

  // Footer
  checkPageBreak(25);
  doc.setDrawColor(BTS_COLORS.s02.r, BTS_COLORS.s02.g, BTS_COLORS.s02.b);
  doc.line(margin, yPos, pageWidth - margin, yPos);
  yPos += 8;

  doc.setFillColor(BTS_COLORS.s06.r, BTS_COLORS.s06.g, BTS_COLORS.s06.b);
  doc.setDrawColor(BTS_COLORS.s05.r, BTS_COLORS.s05.g, BTS_COLORS.s05.b);
  doc.roundedRect(pageWidth / 2 - 40, yPos, 80, 8, 2, 2, 'FD');
  
  doc.setTextColor(BTS_COLORS.s02.r, BTS_COLORS.s02.g, BTS_COLORS.s02.b);
  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.text('One-Way Mirror of Trust™', pageWidth / 2, yPos + 5, { align: 'center' });
  yPos += 12;

  doc.setTextColor(BTS_COLORS.gray.r, BTS_COLORS.gray.g, BTS_COLORS.gray.b);
  doc.setFontSize(7);
  doc.setFont('helvetica', 'normal');
  doc.text('BTS Global Corp · Infraestrutura Digital Global', pageWidth / 2, yPos, { align: 'center' });
  yPos += 4;
  
  doc.setTextColor(BTS_COLORS.gray.r, BTS_COLORS.gray.g, BTS_COLORS.gray.b);
  doc.text(`ID de Verificação: ${proposal.id}`, pageWidth / 2, yPos, { align: 'center' });

  // Save the PDF
  doc.save(`BTS-Proposta-${proposal.id}.pdf`);
}
