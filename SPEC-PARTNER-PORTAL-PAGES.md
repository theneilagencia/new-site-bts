# 📄 PARTNER PORTAL - PÁGINAS

## 3. NOVA PROPOSTA (Gerador de Contratos)

### nova-proposta.html

```html
<!-- Extends portal-layout.html -->
<div class="portal-page-header">
  <div class="page-header-icon">
    <svg width="32" height="32"><!-- FileText icon --></svg>
  </div>
  <div>
    <h1 class="page-title">Gerador de Propostas BTS</h1>
    <p class="page-subtitle">
      Crie e gere contratos personalizados em formato PDF com termos oficiais da BTS Global Corp.
    </p>
  </div>
</div>

<form id="proposal-form" class="proposal-form">
  <!-- Card Container -->
  <div class="form-card">
    
    <!-- Client Information -->
    <div class="form-section">
      <h3 class="form-section-title">Informações do Cliente</h3>
      
      <div class="form-grid">
        <div class="form-group">
          <label class="form-label">Nome completo do cliente *</label>
          <input 
            type="text" 
            name="clientName" 
            required 
            placeholder="João Silva"
            class="form-input"
          />
        </div>
        
        <div class="form-group">
          <label class="form-label">E-mail *</label>
          <input 
            type="email" 
            name="clientEmail" 
            required 
            placeholder="joao@empresa.com"
            class="form-input"
          />
        </div>
      </div>
      
      <div class="form-group">
        <label class="form-label">País / Jurisdição principal *</label>
        <input 
          type="text" 
          name="country" 
          required 
          placeholder="Brasil"
          class="form-input"
        />
      </div>
    </div>
    
    <!-- Structure Selection -->
    <div class="form-section">
      <h3 class="form-section-title">Estrutura Desejada *</h3>
      
      <div class="structure-list">
        <!-- Structure 1: Digital Offshore Bahamas -->
        <label class="structure-item">
          <input 
            type="checkbox" 
            name="structures" 
            value="digital-offshore-bahamas"
            class="structure-checkbox"
          />
          <div class="structure-content">
            <div class="structure-header">
              <span class="structure-name">Digital Offshore - Bahamas</span>
              <span class="structure-price">$3,000</span>
            </div>
            <p class="structure-description">
              Empresa constituída nas Bahamas com conta bancária internacional, 
              ideal para consultoria e serviços digitais globais.
            </p>
          </div>
        </label>
        
        <!-- Structure 2: DAO Wyoming -->
        <label class="structure-item">
          <input 
            type="checkbox" 
            name="structures" 
            value="dao-wyoming"
            class="structure-checkbox"
          />
          <div class="structure-content">
            <div class="structure-header">
              <span class="structure-name">DAO Wyoming</span>
              <span class="structure-price">$2,500</span>
            </div>
            <p class="structure-description">
              Organização Autônoma Descentralizada (DAO) registrada em Wyoming, 
              ideal para projetos Web3 e blockchain.
            </p>
          </div>
        </label>
        
        <!-- Structure 3: LLC Delaware -->
        <label class="structure-item">
          <input 
            type="checkbox" 
            name="structures" 
            value="llc-delaware"
            class="structure-checkbox"
          />
          <div class="structure-content">
            <div class="structure-header">
              <span class="structure-name">LLC Delaware</span>
              <span class="structure-price">$1,800</span>
            </div>
            <p class="structure-description">
              Limited Liability Company em Delaware, estrutura clássica e flexível 
              para negócios nos EUA.
            </p>
          </div>
        </label>
        
        <!-- Structure 4: Trust Nevis -->
        <label class="structure-item">
          <input 
            type="checkbox" 
            name="structures" 
            value="trust-nevis"
            class="structure-checkbox"
          />
          <div class="structure-content">
            <div class="structure-header">
              <span class="structure-name">Trust Nevis</span>
              <span class="structure-price">$4,500</span>
            </div>
            <p class="structure-description">
              Asset Protection Trust em Nevis, máxima proteção patrimonial 
              com privacidade garantida.
            </p>
          </div>
        </label>
      </div>
    </div>
    
    <!-- Description -->
    <div class="form-section">
      <h3 class="form-section-title">Descrição Personalizada</h3>
      
      <div class="form-group">
        <label class="form-label">Descreva o contexto e necessidades específicas do cliente</label>
        <textarea 
          name="description" 
          rows="4"
          placeholder="Ex: Cliente busca estrutura offshore para consultoria internacional com foco em privacidade..."
          class="form-textarea"
        ></textarea>
      </div>
    </div>
    
    <!-- Pricing Summary -->
    <div class="form-section">
      <h3 class="form-section-title">Valores</h3>
      
      <div class="pricing-grid">
        <div class="form-group">
          <label class="form-label">Moeda</label>
          <select name="currency" class="form-select">
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="BRL">BRL</option>
          </select>
        </div>
        
        <div class="form-group">
          <label class="form-label">Valor Total</label>
          <div class="form-display" id="total-amount">$0</div>
        </div>
        
        <div class="form-group">
          <label class="form-label">Manutenção Anual</label>
          <div class="form-display" id="maintenance-fee">$0</div>
        </div>
      </div>
    </div>
    
    <!-- Custom Clauses -->
    <div class="form-section">
      <h3 class="form-section-title">Cláusulas Específicas (Opcional)</h3>
      
      <div class="form-group">
        <textarea 
          name="customClauses" 
          rows="3"
          placeholder="Adicione cláusulas ou condições específicas para este contrato..."
          class="form-textarea"
        ></textarea>
      </div>
    </div>
    
    <!-- Terms Acceptance -->
    <div class="form-section">
      <label class="form-checkbox-card">
        <input 
          type="checkbox" 
          name="acceptedTerms" 
          required
          class="form-checkbox-input"
        />
        <div class="checkbox-content">
          <svg class="checkbox-icon" width="20" height="20"><!-- Check icon --></svg>
          <span class="checkbox-label">
            Confirmo que revisei as condições e termos da BTS e que as informações 
            fornecidas estão corretas.
          </span>
        </div>
      </label>
    </div>
    
    <!-- Submit Button -->
    <button type="submit" class="btn-generate-proposal" id="btn-generate">
      <span class="btn-text">Gerar Proposta Contratual (PDF)</span>
      <svg class="btn-icon" width="20" height="20"><!-- Send icon --></svg>
      <svg class="btn-loader" width="20" height="20" style="display: none;"><!-- Spinner --></svg>
    </button>
  </div>
</form>

<!-- Success Toast -->
<div id="success-toast" class="toast toast-success" style="display: none;">
  <svg class="toast-icon" width="20" height="20"><!-- Check icon --></svg>
  <span>Proposta gerada com sucesso!</span>
</div>
```

### CSS - Nova Proposta

```css
/* ===== NOVA PROPOSTA PAGE ===== */

/* Page Header */
.portal-page-header {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 32px;
}

.page-header-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--portal-accent-blue), var(--portal-accent-cyan));
  border-radius: 12px;
  color: white;
  flex-shrink: 0;
}

.page-title {
  font-size: 32px;
  font-weight: 700;
  color: var(--portal-text-primary);
  margin-bottom: 8px;
}

.page-subtitle {
  font-size: 14px;
  color: var(--portal-text-secondary);
  line-height: 1.6;
}

/* Form Card */
.form-card {
  background: var(--portal-bg-card);
  backdrop-filter: blur(40px);
  border: 1px solid var(--portal-border);
  border-radius: 24px;
  padding: 32px;
}

@media (max-width: 768px) {
  .form-card {
    padding: 24px;
  }
}

/* Form Sections */
.form-section {
  margin-bottom: 32px;
  padding-bottom: 32px;
  border-bottom: 1px solid var(--portal-border);
}

.form-section:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.form-section-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--portal-text-primary);
  margin-bottom: 20px;
}

/* Form Grid */
.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

@media (max-width: 768px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
}

/* Form Group */
.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-label {
  font-size: 14px;
  font-weight: 500;
  color: var(--portal-text-secondary);
}

.form-input,
.form-textarea,
.form-select {
  width: 100%;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--portal-border);
  border-radius: 12px;
  color: var(--portal-text-primary);
  font-size: 16px;
  font-family: inherit;
  transition: all 0.2s ease;
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: var(--portal-text-tertiary);
}

.form-input:focus,
.form-textarea:focus,
.form-select:focus {
  outline: none;
  border-color: var(--portal-border-focus);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 0 4px rgba(31, 74, 255, 0.1);
}

.form-textarea {
  resize: vertical;
  min-height: 100px;
}

.form-display {
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--portal-border);
  border-radius: 12px;
  color: var(--portal-text-primary);
  font-size: 18px;
  font-weight: 600;
}

/* Structure List */
.structure-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.structure-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.03);
  border: 2px solid var(--portal-border);
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.structure-item:hover {
  border-color: rgba(31, 74, 255, 0.3);
  background: rgba(255, 255, 255, 0.05);
}

.structure-item:has(.structure-checkbox:checked) {
  border-color: var(--portal-accent-blue);
  background: rgba(31, 74, 255, 0.1);
}

.structure-checkbox {
  width: 20px;
  height: 20px;
  margin-top: 2px;
  border-radius: 6px;
  border: 2px solid var(--portal-border);
  background: rgba(255, 255, 255, 0.05);
  cursor: pointer;
  flex-shrink: 0;
}

.structure-content {
  flex: 1;
}

.structure-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}

.structure-name {
  font-size: 16px;
  font-weight: 600;
  color: var(--portal-text-primary);
}

.structure-price {
  font-size: 14px;
  font-weight: 600;
  color: var(--portal-accent-cyan);
}

.structure-description {
  font-size: 14px;
  line-height: 1.6;
  color: var(--portal-text-tertiary);
}

/* Pricing Grid */
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

@media (max-width: 768px) {
  .pricing-grid {
    grid-template-columns: 1fr;
  }
}

/* Checkbox Card */
.form-checkbox-card {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--portal-border);
  border-radius: 12px;
  cursor: pointer;
}

.checkbox-content {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  flex: 1;
}

.form-checkbox-input {
  width: 20px;
  height: 20px;
  margin-top: 2px;
  border-radius: 6px;
  border: 2px solid var(--portal-border);
  background: rgba(255, 255, 255, 0.05);
  cursor: pointer;
  flex-shrink: 0;
}

.checkbox-icon {
  display: none;
}

.form-checkbox-input:checked ~ .checkbox-content .checkbox-icon {
  display: block;
}

.checkbox-label {
  font-size: 14px;
  line-height: 1.6;
  color: var(--portal-text-secondary);
}

/* Generate Button */
.btn-generate-proposal {
  width: 100%;
  position: relative;
  padding: 16px 32px;
  background: linear-gradient(135deg, var(--portal-accent-blue), var(--portal-accent-cyan));
  border: none;
  border-radius: 16px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  transition: all 0.3s ease;
  overflow: hidden;
}

.btn-generate-proposal::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.btn-generate-proposal:hover::before {
  opacity: 1;
}

.btn-generate-proposal:hover {
  transform: translateY(-2px);
  box-shadow: var(--portal-glow-blue);
}

.btn-generate-proposal:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

.btn-generate-proposal.loading .btn-text,
.btn-generate-proposal.loading .btn-icon {
  display: none;
}

.btn-generate-proposal.loading .btn-loader {
  display: block !important;
  animation: spin 1s linear infinite;
}

/* Toast */
.toast {
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 24px;
  border-radius: 12px;
  backdrop-filter: blur(40px);
  box-shadow: var(--portal-shadow-lg);
  animation: slideInUp 0.4s ease;
}

.toast-success {
  background: rgba(16, 185, 129, 0.2);
  border: 1px solid rgba(16, 185, 129, 0.3);
  color: var(--portal-accent-green);
}

.toast-icon {
  flex-shrink: 0;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

## 4. HISTÓRICO DE PROPOSTAS

### historico.html

```html
<div class="portal-page-header">
  <div class="page-header-icon">
    <svg width="32" height="32"><!-- History icon --></svg>
  </div>
  <div>
    <h1 class="page-title">Histórico de Propostas</h1>
    <p class="page-subtitle">
      Visualize e gerencie todas as propostas contratuais criadas.
    </p>
  </div>
</div>

<!-- Proposals Table/List -->
<div class="table-card" id="proposals-container">
  <!-- Desktop Table -->
  <div class="table-wrapper desktop-only">
    <table class="proposals-table">
      <thead>
        <tr>
          <th>ID Proposta</th>
          <th>Cliente</th>
          <th>Estruturas</th>
          <th>Valor</th>
          <th>Status</th>
          <th>Data</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody id="proposals-tbody">
        <!-- Rows will be inserted by JavaScript -->
        <!-- Example Row: -->
        <tr class="proposal-row">
          <td>
            <code class="proposal-id">PROP-1731337200000</code>
          </td>
          <td>
            <div class="client-info">
              <p class="client-name">Cassio Altiva</p>
              <p class="client-email">cassio@altiva.com</p>
            </div>
          </td>
          <td>
            <span class="structures-count">1 estrutura(s)</span>
          </td>
          <td>
            <span class="proposal-amount">USD $3,000</span>
          </td>
          <td>
            <span class="status-badge status-generated">Gerado</span>
          </td>
          <td>
            <span class="proposal-date">10/11/2025</span>
          </td>
          <td>
            <div class="action-buttons">
              <button class="action-btn" title="Visualizar PDF">
                <svg width="16" height="16"><!-- Eye icon --></svg>
              </button>
              <button class="action-btn" title="Baixar PDF">
                <svg width="16" height="16"><!-- Download icon --></svg>
              </button>
              <button class="action-btn" title="Duplicar">
                <svg width="16" height="16"><!-- Copy icon --></svg>
              </button>
              <button class="action-btn action-btn-danger" title="Excluir">
                <svg width="16" height="16"><!-- Trash icon --></svg>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  
  <!-- Mobile Cards -->
  <div class="mobile-cards mobile-only" id="proposals-mobile">
    <!-- Cards will be inserted by JavaScript -->
    <!-- Example Card: -->
    <div class="proposal-card">
      <div class="card-header">
        <code class="proposal-id">PROP-1731337200000</code>
        <span class="status-badge status-generated">Gerado</span>
      </div>
      
      <div class="card-body">
        <div class="client-info">
          <p class="client-name">Cassio Altiva</p>
          <p class="client-email">cassio@altiva.com</p>
        </div>
        
        <div class="card-details">
          <div class="detail-item">
            <span class="detail-label">Valor:</span>
            <span class="detail-value">USD $3,000</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Data:</span>
            <span class="detail-value">10/11/2025</span>
          </div>
        </div>
      </div>
      
      <div class="card-actions">
        <button class="card-action-btn">
          <svg width="16" height="16"><!-- Eye icon --></svg>
          <span>Ver</span>
        </button>
        <button class="card-action-btn">
          <svg width="16" height="16"><!-- Download icon --></svg>
          <span>PDF</span>
        </button>
        <button class="card-action-btn">
          <svg width="16" height="16"><!-- Copy icon --></svg>
        </button>
        <button class="card-action-btn card-action-danger">
          <svg width="16" height="16"><!-- Trash icon --></svg>
        </button>
      </div>
    </div>
  </div>
  
  <!-- Empty State -->
  <div class="empty-state" id="empty-state" style="display: none;">
    <svg class="empty-icon" width="64" height="64"><!-- History icon --></svg>
    <p class="empty-title">Nenhuma proposta criada ainda</p>
    <p class="empty-subtitle">Crie sua primeira proposta para começar</p>
    <a href="/portal/nova-proposta.html" class="btn-empty-action">
      <svg width="20" height="20"><!-- Plus icon --></svg>
      <span>Nova Proposta</span>
    </a>
  </div>
</div>

<!-- PDF Viewer Modal -->
<div class="modal pdf-viewer-modal" id="pdf-viewer-modal" style="display: none;">
  <div class="modal-overlay" onclick="closePDFViewer()"></div>
  <div class="modal-content modal-content-large">
    <div class="modal-header">
      <h3 class="modal-title">Proposta Contratual</h3>
      <button class="modal-close" onclick="closePDFViewer()">
        <svg width="24" height="24"><!-- X icon --></svg>
      </button>
    </div>
    <div class="modal-body">
      <div class="pdf-viewer" id="pdf-viewer">
        <!-- PDF content will be inserted here -->
      </div>
    </div>
  </div>
</div>
```

### CSS - Histórico

```css
/* ===== HISTÓRICO PAGE ===== */

/* Table Card */
.table-card {
  background: var(--portal-bg-card);
  backdrop-filter: blur(40px);
  border: 1px solid var(--portal-border);
  border-radius: 24px;
  overflow: hidden;
}

/* Desktop Table */
.table-wrapper {
  overflow-x: auto;
}

.proposals-table {
  width: 100%;
  border-collapse: collapse;
}

.proposals-table thead {
  background: rgba(255, 255, 255, 0.02);
  border-bottom: 1px solid var(--portal-border);
}

.proposals-table th {
  padding: 16px 20px;
  text-align: left;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--portal-text-tertiary);
}

.proposals-table tbody tr {
  border-bottom: 1px solid var(--portal-border);
  transition: background 0.2s ease;
}

.proposals-table tbody tr:hover {
  background: rgba(255, 255, 255, 0.03);
}

.proposals-table td {
  padding: 20px;
}

/* Proposal ID */
.proposal-id {
  display: inline-block;
  padding: 4px 8px;
  background: rgba(0, 229, 255, 0.1);
  border: 1px solid rgba(0, 229, 255, 0.2);
  border-radius: 6px;
  font-family: 'Monaco', monospace;
  font-size: 11px;
  color: var(--portal-accent-cyan);
}

/* Client Info */
.client-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.client-name {
  font-size: 14px;
  font-weight: 500;
  color: var(--portal-text-primary);
}

.client-email {
  font-size: 12px;
  color: var(--portal-text-tertiary);
}

/* Status Badges */
.status-badge {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 500;
  border: 1px solid;
}

.status-generated {
  background: rgba(59, 130, 246, 0.1);
  border-color: rgba(59, 130, 246, 0.3);
  color: #60A5FA;
}

.status-review {
  background: rgba(245, 158, 11, 0.1);
  border-color: rgba(245, 158, 11, 0.3);
  color: #FBB F24;
}

.status-approved {
  background: rgba(16, 185, 129, 0.1);
  border-color: rgba(16, 185, 129, 0.3);
  color: var(--portal-accent-green);
}

.status-rejected {
  background: rgba(239, 68, 68, 0.1);
  border-color: rgba(239, 68, 68, 0.3);
  color: var(--portal-accent-red);
}

/* Action Buttons */
.action-buttons {
  display: flex;
  gap: 8px;
}

.action-btn {
  padding: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--portal-border);
  border-radius: 8px;
  color: var(--portal-text-secondary);
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.action-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--portal-text-primary);
}

.action-btn-danger {
  color: var(--portal-accent-red);
}

.action-btn-danger:hover {
  background: rgba(239, 68, 68, 0.1);
  border-color: rgba(239, 68, 68, 0.3);
}

/* Mobile Cards */
.mobile-cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
}

.proposal-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--portal-border);
  border-radius: 16px;
  overflow: hidden;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid var(--portal-border);
}

.card-body {
  padding: 16px;
}

.card-details {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 16px;
}

.detail-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.detail-label {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--portal-text-tertiary);
}

.detail-value {
  font-size: 14px;
  font-weight: 500;
  color: var(--portal-text-primary);
}

.card-actions {
  display: flex;
  gap: 8px;
  padding: 16px;
  border-top: 1px solid var(--portal-border);
}

.card-action-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px;
  background: rgba(31, 74, 255, 0.1);
  border: 1px solid rgba(31, 74, 255, 0.3);
  border-radius: 12px;
  color: var(--portal-accent-cyan);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.card-action-btn:hover {
  background: rgba(31, 74, 255, 0.2);
}

.card-action-danger {
  background: rgba(239, 68, 68, 0.1);
  border-color: rgba(239, 68, 68, 0.3);
  color: var(--portal-accent-red);
}

/* Empty State */
.empty-state {
  padding: 80px 32px;
  text-align: center;
}

.empty-icon {
  color: var(--portal-text-tertiary);
  opacity: 0.3;
  margin-bottom: 24px;
}

.empty-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--portal-text-secondary);
  margin-bottom: 8px;
}

.empty-subtitle {
  font-size: 14px;
  color: var(--portal-text-tertiary);
  margin-bottom: 32px;
}

.btn-empty-action {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: linear-gradient(135deg, var(--portal-accent-blue), var(--portal-accent-cyan));
  border-radius: 12px;
  color: white;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-empty-action:hover {
  transform: translateY(-2px);
  box-shadow: var(--portal-glow-blue);
}

/* PDF Viewer Modal */
.modal {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.modal-overlay {
  position: absolute;
  inset: 0;
  background: rgba(5, 11, 24, 0.9);
  backdrop-filter: blur(8px);
}

.modal-content {
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  background: var(--portal-bg-card);
  backdrop-filter: blur(40px);
  border: 1px solid var(--portal-border);
  border-radius: 24px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.modal-content-large {
  max-width: 1200px;
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 32px;
  border-bottom: 1px solid var(--portal-border);
}

.modal-title {
  font-size: 20px;
  font-weight: 600;
  color: var(--portal-text-primary);
}

.modal-close {
  padding: 8px;
  background: transparent;
  border: none;
  color: var(--portal-text-tertiary);
  cursor: pointer;
  transition: color 0.2s ease;
}

.modal-close:hover {
  color: var(--portal-text-primary);
}

.modal-body {
  flex: 1;
  overflow-y: auto;
  padding: 32px;
}

.pdf-viewer {
  min-height: 600px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--portal-border);
  border-radius: 16px;
  padding: 32px;
  color: var(--portal-text-secondary);
}

/* Responsive */
@media (max-width: 1024px) {
  .desktop-only {
    display: none !important;
  }
  
  .mobile-only {
    display: flex !important;
  }
}

@media (min-width: 1025px) {
  .mobile-only {
    display: none !important;
  }
}
```

---

## CONTINUA...

Ainda faltam:
- 5. Perfil do Parceiro
- 6. Área Admin (Dashboard, Propostas, Usuários)
- JavaScript completo (auth.js, portal.js, proposals.js)

Quer que eu continue?
