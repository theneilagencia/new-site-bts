# 🤖 AGENTIC COMMERCE - INTEGRAÇÃO OPENAI

## 📋 OVERVIEW

Integração completa do **Agentic Commerce Protocol** da OpenAI para automatizar:

1. **Aplicações de Parceria** (Partner Applications)
2. **Agendamento de Demos** (Demo Scheduling)
3. **Cotações de Preço** (Pricing Quotes)
4. **Suporte ao Cliente** (Customer Support)

---

## 🔑 SETUP & CONFIGURAÇÃO

### 1. Variáveis de Ambiente

```bash
# .env
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxxxxx
OPENAI_ORG_ID=org-xxxxxxxxxxxxxxxxxxxxx
OPENAI_ASSISTANT_ID=asst_xxxxxxxxxxxxxxxxxxxxx

# Backend API
API_BASE_URL=https://api.btsglobal.com/v1
API_KEY=bts_xxxxxxxxxxxxxxxxxxxxx

# CRM Integration
HUBSPOT_API_KEY=xxxxxxxxxxxxxxxxxxxxx
SALESFORCE_INSTANCE=https://btsglobal.salesforce.com
SALESFORCE_TOKEN=xxxxxxxxxxxxxxxxxxxxx

# Email Service
SENDGRID_API_KEY=SG.xxxxxxxxxxxxxxxxxxxxx
NOTIFICATION_EMAIL=partnerships@btsglobal.com
```

### 2. Dependências

```json
{
  "dependencies": {
    "openai": "^4.28.0",
    "dotenv": "^16.4.5",
    "express": "^4.18.3",
    "cors": "^2.8.5",
    "helmet": "^7.1.0",
    "rate-limiter-flexible": "^5.0.3",
    "@sendgrid/mail": "^8.1.1",
    "zod": "^3.22.4"
  }
}
```

---

## 🏗️ ARQUITETURA

```
/backend
  /api
    /routes
      - partnerships.js
      - demos.js
      - quotes.js
    /controllers
      - agenticController.js
    /services
      - openai.service.js
      - crm.service.js
      - email.service.js
    /middleware
      - auth.middleware.js
      - rateLimit.middleware.js
      - validation.middleware.js
    /models
      - partnership.model.js
      - demo.model.js
      - quote.model.js
    /utils
      - logger.js
      - errorHandler.js
  - server.js
  - .env

/frontend
  /js
    - agentic-commerce.js
    - agentic-chat-widget.js
  /css
    - agentic-widget.css
```

---

## 🔧 BACKEND - OPENAI SERVICE

### openai.service.js

```javascript
// services/openai.service.js
import OpenAI from 'openai';
import { createLogger } from '../utils/logger.js';

const logger = createLogger('OpenAI Service');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  organization: process.env.OPENAI_ORG_ID,
});

// ===== AGENT CONFIGURATION =====
export const AGENT_CONFIG = {
  businessInfo: {
    name: 'BTS Global Corp',
    tagline: 'Empowering businesses with AI-driven intelligence',
    website: 'https://btsglobal.com',
    headquarters: 'São Paulo, Brazil',
    founded: 2010,
    employees: '500+',
    industries: ['Technology', 'Finance', 'Healthcare', 'Manufacturing'],
  },
  
  services: [
    {
      id: 'offshore-data-centers',
      name: 'Offshore Data Centers',
      description: 'Enterprise-grade infrastructure with global presence',
      features: [
        'Multi-region deployment with sub-10ms latency',
        'Tier IV certified with 99.999% uptime',
        'Full data sovereignty',
        'Advanced DDoS protection',
      ],
      pricing: {
        starter: { price: 499, unit: 'month', features: ['1 Region', '100GB Storage', 'Standard Support'] },
        professional: { price: 1499, unit: 'month', features: ['3 Regions', '1TB Storage', 'Priority Support'] },
        enterprise: { price: 'custom', features: ['Unlimited Regions', 'Custom Storage', '24/7 Support'] },
      },
    },
    {
      id: 'foundation-platform',
      name: 'Foundation Platform',
      description: 'Unified data infrastructure for scale and adaptability',
      features: [
        'Integration with 500+ tools',
        'Real-time data synchronization',
        'API-first architecture',
        'Low-code/no-code builder',
      ],
      pricing: {
        starter: { price: 299, unit: 'month' },
        professional: { price: 999, unit: 'month' },
        enterprise: { price: 'custom' },
      },
    },
    {
      id: 'blocktrust-security',
      name: 'BlockTrust Security',
      description: 'Next-generation security powered by blockchain',
      features: [
        'Blockchain-verified audit logs',
        'Zero-trust security model',
        'Smart contract access control',
        'Cryptographic data integrity',
      ],
      pricing: {
        starter: { price: 399, unit: 'month' },
        professional: { price: 1299, unit: 'month' },
        enterprise: { price: 'custom' },
      },
    },
  ],
  
  partnershipProgram: {
    name: 'BTS Global Partner Program',
    tiers: ['Silver', 'Gold', 'Platinum'],
    benefits: [
      'Customizable white-label platform',
      'Complete API and documentation',
      'Sandbox environment',
      '24/7 priority support',
      'Co-branded marketing',
      'Training & certification',
      'Qualified leads',
    ],
    requirements: {
      revenue: '$1M+ annual revenue',
      employees: '10+ employees',
      experience: '2+ years in industry',
      technical: 'Dedicated technical team',
    },
    approvalTime: '5-7 business days',
  },
};

// ===== ASSISTANT CREATION =====
export async function createAgenticAssistant() {
  try {
    const assistant = await openai.beta.assistants.create({
      name: 'BTS Global Commerce Agent',
      instructions: `
You are an AI agent for BTS Global Corp, a leading provider of AI-driven enterprise intelligence solutions.

# Your Role:
- Help potential partners apply to our partner program
- Schedule product demos with qualified leads
- Provide pricing information and generate quotes
- Answer questions about our services and capabilities

# Business Context:
${JSON.stringify(AGENT_CONFIG.businessInfo, null, 2)}

# Available Services:
${JSON.stringify(AGENT_CONFIG.services.map(s => ({ id: s.id, name: s.name, description: s.description })), null, 2)}

# Partner Program:
${JSON.stringify(AGENT_CONFIG.partnershipProgram, null, 2)}

# Guidelines:
1. Be professional, helpful, and concise
2. Qualify leads by asking relevant questions
3. Use tools to submit applications, schedule demos, or generate quotes
4. Provide accurate pricing information
5. Emphasize security, reliability, and ROI
6. Use a consultative approach - understand needs before recommending
7. Always confirm details before submitting

# Tone:
Professional yet approachable. Technical when needed, but accessible to non-technical decision-makers.
      `.trim(),
      
      model: 'gpt-4-turbo-preview',
      
      tools: [
        {
          type: 'function',
          function: {
            name: 'submit_partnership_application',
            description: 'Submit a new partnership application to BTS Global',
            parameters: {
              type: 'object',
              properties: {
                companyName: { type: 'string', description: 'Company name' },
                contactName: { type: 'string', description: 'Primary contact name' },
                email: { type: 'string', description: 'Contact email' },
                phone: { type: 'string', description: 'Contact phone (optional)' },
                website: { type: 'string', description: 'Company website (optional)' },
                industry: { 
                  type: 'string', 
                  enum: ['technology', 'finance', 'healthcare', 'consulting', 'manufacturing', 'retail', 'other'],
                  description: 'Primary industry' 
                },
                companySize: { 
                  type: 'string', 
                  enum: ['1-10', '11-50', '51-200', '201-500', '500+'],
                  description: 'Number of employees' 
                },
                annualRevenue: { type: 'string', description: 'Approximate annual revenue (optional)' },
                motivation: { type: 'string', description: 'Why they want to partner' },
                currentSolutions: { type: 'string', description: 'Current solutions they use (optional)' },
              },
              required: ['companyName', 'contactName', 'email', 'industry', 'companySize', 'motivation'],
            },
          },
        },
        {
          type: 'function',
          function: {
            name: 'schedule_demo',
            description: 'Schedule a product demo with a prospect',
            parameters: {
              type: 'object',
              properties: {
                fullName: { type: 'string', description: 'Full name' },
                email: { type: 'string', description: 'Email address' },
                company: { type: 'string', description: 'Company name' },
                role: { type: 'string', description: 'Job title/role' },
                product: { 
                  type: 'string', 
                  enum: ['offshore-data-centers', 'foundation-platform', 'blocktrust-security', 'all'],
                  description: 'Product of interest' 
                },
                preferredDate: { type: 'string', description: 'Preferred date (YYYY-MM-DD)' },
                preferredTime: { 
                  type: 'string', 
                  enum: ['morning', 'afternoon', 'evening'],
                  description: 'Preferred time of day' 
                },
                timezone: { type: 'string', description: 'Timezone (e.g., America/Sao_Paulo)' },
                requirements: { type: 'string', description: 'Specific requirements or questions (optional)' },
              },
              required: ['fullName', 'email', 'company', 'role', 'product', 'preferredDate', 'preferredTime', 'timezone'],
            },
          },
        },
        {
          type: 'function',
          function: {
            name: 'generate_pricing_quote',
            description: 'Generate a custom pricing quote for services',
            parameters: {
              type: 'object',
              properties: {
                companyName: { type: 'string', description: 'Company name' },
                contactEmail: { type: 'string', description: 'Contact email' },
                services: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      serviceId: { type: 'string', description: 'Service ID' },
                      tier: { type: 'string', enum: ['starter', 'professional', 'enterprise'] },
                      quantity: { type: 'number', description: 'Quantity (optional)', default: 1 },
                    },
                  },
                  description: 'List of services to quote',
                },
                billingCycle: { 
                  type: 'string', 
                  enum: ['monthly', 'annual'],
                  description: 'Billing cycle',
                  default: 'monthly',
                },
                notes: { type: 'string', description: 'Additional requirements (optional)' },
              },
              required: ['companyName', 'contactEmail', 'services'],
            },
          },
        },
      ],
    });
    
    logger.info(`Assistant created: ${assistant.id}`);
    return assistant;
    
  } catch (error) {
    logger.error('Failed to create assistant:', error);
    throw error;
  }
}

// ===== THREAD MANAGEMENT =====
export async function createThread() {
  return await openai.beta.threads.create();
}

export async function addMessage(threadId, content) {
  return await openai.beta.threads.messages.create(threadId, {
    role: 'user',
    content,
  });
}

// ===== RUN ASSISTANT =====
export async function runAssistant(threadId, assistantId) {
  return await openai.beta.threads.runs.create(threadId, {
    assistant_id: assistantId,
  });
}

// ===== WAIT FOR COMPLETION =====
export async function waitForCompletion(threadId, runId, onToolCall) {
  let run = await openai.beta.threads.runs.retrieve(threadId, runId);
  
  while (run.status === 'queued' || run.status === 'in_progress' || run.status === 'requires_action') {
    if (run.status === 'requires_action') {
      // Handle tool calls
      const toolCalls = run.required_action?.submit_tool_outputs?.tool_calls || [];
      
      const toolOutputs = await Promise.all(
        toolCalls.map(async (toolCall) => {
          const result = await onToolCall(toolCall.function.name, JSON.parse(toolCall.function.arguments));
          return {
            tool_call_id: toolCall.id,
            output: JSON.stringify(result),
          };
        })
      );
      
      // Submit tool outputs
      run = await openai.beta.threads.runs.submitToolOutputs(threadId, runId, {
        tool_outputs: toolOutputs,
      });
    }
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    run = await openai.beta.threads.runs.retrieve(threadId, runId);
  }
  
  return run;
}

// ===== GET MESSAGES =====
export async function getMessages(threadId) {
  const messages = await openai.beta.threads.messages.list(threadId);
  return messages.data.reverse();
}

// ===== EXPORT =====
export default {
  createAgenticAssistant,
  createThread,
  addMessage,
  runAssistant,
  waitForCompletion,
  getMessages,
  AGENT_CONFIG,
};
```

---

## 🎮 BACKEND - CONTROLLER

### agenticController.js

```javascript
// controllers/agenticController.js
import * as openaiService from '../services/openai.service.js';
import * as crmService from '../services/crm.service.js';
import * as emailService from '../services/email.service.js';
import { createLogger } from '../utils/logger.js';

const logger = createLogger('Agentic Controller');

// Store active threads (in production, use Redis or database)
const activeThreads = new Map();

// ===== CHAT ENDPOINT =====
export async function chat(req, res) {
  try {
    const { message, threadId: existingThreadId } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }
    
    // Get or create thread
    let threadId = existingThreadId;
    if (!threadId || !activeThreads.has(threadId)) {
      const thread = await openaiService.createThread();
      threadId = thread.id;
      activeThreads.set(threadId, { createdAt: Date.now() });
    }
    
    // Add user message
    await openaiService.addMessage(threadId, message);
    
    // Run assistant
    const assistantId = process.env.OPENAI_ASSISTANT_ID;
    const run = await openaiService.runAssistant(threadId, assistantId);
    
    // Wait for completion with tool call handler
    await openaiService.waitForCompletion(threadId, run.id, handleToolCall);
    
    // Get response
    const messages = await openaiService.getMessages(threadId);
    const lastMessage = messages[messages.length - 1];
    
    return res.json({
      success: true,
      threadId,
      message: lastMessage.content[0].text.value,
      timestamp: Date.now(),
    });
    
  } catch (error) {
    logger.error('Chat error:', error);
    return res.status(500).json({ error: 'Failed to process message' });
  }
}

// ===== TOOL CALL HANDLER =====
async function handleToolCall(functionName, args) {
  logger.info(`Tool called: ${functionName}`, args);
  
  try {
    switch (functionName) {
      case 'submit_partnership_application':
        return await submitPartnershipApplication(args);
        
      case 'schedule_demo':
        return await scheduleDemo(args);
        
      case 'generate_pricing_quote':
        return await generatePricingQuote(args);
        
      default:
        return { success: false, message: 'Unknown function' };
    }
  } catch (error) {
    logger.error(`Tool call failed: ${functionName}`, error);
    return { success: false, message: error.message };
  }
}

// ===== PARTNERSHIP APPLICATION =====
async function submitPartnershipApplication(data) {
  // 1. Save to CRM
  const crmResult = await crmService.createPartnerLead({
    ...data,
    source: 'Website - AI Agent',
    status: 'new',
    priority: 'high',
  });
  
  // 2. Send confirmation email
  await emailService.sendPartnershipConfirmation({
    to: data.email,
    companyName: data.companyName,
    contactName: data.contactName,
  });
  
  // 3. Notify internal team
  await emailService.notifyTeam({
    type: 'new_partnership_application',
    data: {
      ...data,
      crmId: crmResult.id,
    },
  });
  
  logger.info(`Partnership application submitted: ${data.companyName}`);
  
  return {
    success: true,
    message: `Thank you ${data.contactName}! Your partnership application has been submitted successfully. You'll receive a confirmation email shortly, and our team will review your application within 5-7 business days.`,
    applicationId: crmResult.id,
  };
}

// ===== DEMO SCHEDULING =====
async function scheduleDemo(data) {
  // 1. Check availability (integrate with calendar)
  const availability = await crmService.checkDemoAvailability(data.preferredDate, data.preferredTime);
  
  if (!availability.available) {
    return {
      success: false,
      message: `Unfortunately, ${data.preferredDate} ${data.preferredTime} is not available. Available slots: ${availability.alternativeDates.join(', ')}`,
    };
  }
  
  // 2. Create demo event
  const demoEvent = await crmService.createDemoEvent({
    ...data,
    confirmedDate: availability.confirmedDateTime,
    meetingLink: availability.meetingLink,
  });
  
  // 3. Send calendar invite
  await emailService.sendDemoInvite({
    to: data.email,
    fullName: data.fullName,
    company: data.company,
    dateTime: availability.confirmedDateTime,
    meetingLink: availability.meetingLink,
    product: data.product,
  });
  
  logger.info(`Demo scheduled: ${data.company} - ${availability.confirmedDateTime}`);
  
  return {
    success: true,
    message: `Great! Your demo has been scheduled for ${availability.confirmedDateTime}. You'll receive a calendar invite at ${data.email} with the meeting link shortly.`,
    demoId: demoEvent.id,
    meetingLink: availability.meetingLink,
  };
}

// ===== PRICING QUOTE =====
async function generatePricingQuote(data) {
  // 1. Calculate pricing
  const quote = calculateQuote(data.services, data.billingCycle);
  
  // 2. Save quote to CRM
  const quoteRecord = await crmService.createQuote({
    companyName: data.companyName,
    contactEmail: data.contactEmail,
    services: data.services,
    billingCycle: data.billingCycle,
    subtotal: quote.subtotal,
    discount: quote.discount,
    total: quote.total,
    notes: data.notes,
    validUntil: quote.validUntil,
  });
  
  // 3. Send quote email
  await emailService.sendPricingQuote({
    to: data.contactEmail,
    companyName: data.companyName,
    quote,
    quoteId: quoteRecord.id,
  });
  
  logger.info(`Quote generated: ${data.companyName} - $${quote.total}`);
  
  return {
    success: true,
    message: `I've generated a custom quote for ${data.companyName}. The total is $${quote.total}/${data.billingCycle}. A detailed quote has been sent to ${data.contactEmail}.`,
    quoteId: quoteRecord.id,
    quote,
  };
}

// ===== CALCULATE QUOTE =====
function calculateQuote(services, billingCycle = 'monthly') {
  const servicesList = openaiService.AGENT_CONFIG.services;
  let subtotal = 0;
  const items = [];
  
  services.forEach(({ serviceId, tier, quantity = 1 }) => {
    const service = servicesList.find(s => s.id === serviceId);
    if (!service) return;
    
    const pricing = service.pricing[tier];
    if (!pricing || pricing.price === 'custom') {
      items.push({
        name: service.name,
        tier,
        price: 'Custom',
        quantity,
      });
      return;
    }
    
    const price = pricing.price * quantity;
    subtotal += price;
    
    items.push({
      name: service.name,
      tier,
      price: pricing.price,
      quantity,
      total: price,
    });
  });
  
  // Apply annual discount (20%)
  const discount = billingCycle === 'annual' ? subtotal * 0.20 : 0;
  const total = billingCycle === 'annual' ? (subtotal - discount) * 12 : subtotal;
  
  return {
    items,
    subtotal,
    discount,
    total,
    billingCycle,
    validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 30 days
  };
}

export default { chat };
```

---

## 🌐 FRONTEND - WIDGET

### agentic-chat-widget.js

```javascript
// js/agentic-chat-widget.js

class AgenticChatWidget {
  constructor() {
    this.isOpen = false;
    this.threadId = null;
    this.apiUrl = '/api/agentic/chat'; // Backend endpoint
    this.messages = [];
    
    this.init();
  }
  
  init() {
    this.createWidget();
    this.attachEventListeners();
    this.loadThreadFromStorage();
  }
  
  createWidget() {
    const widget = document.createElement('div');
    widget.className = 'agentic-widget';
    widget.innerHTML = `
      <!-- Toggle Button -->
      <button class="agentic-toggle" id="agentic-toggle">
        <svg class="icon-chat" width="24" height="24" viewBox="0 0 24 24">
          <!-- Chat icon -->
        </svg>
        <svg class="icon-close" width="24" height="24" viewBox="0 0 24 24">
          <!-- Close icon -->
        </svg>
      </button>
      
      <!-- Widget Container -->
      <div class="agentic-container" id="agentic-container">
        <!-- Header -->
        <div class="agentic-header">
          <div class="header-info">
            <div class="agent-avatar"></div>
            <div>
              <h4>BTS AI Assistant</h4>
              <p class="status">Online</p>
            </div>
          </div>
          <button class="btn-minimize" id="agentic-minimize">−</button>
        </div>
        
        <!-- Messages -->
        <div class="agentic-messages" id="agentic-messages">
          <div class="message message-assistant">
            <div class="message-content">
              Hi! I'm the BTS Global AI assistant. I can help you with:
              <ul>
                <li>Applying to our Partner Program</li>
                <li>Scheduling a product demo</li>
                <li>Getting a pricing quote</li>
                <li>Answering questions about our services</li>
              </ul>
              How can I assist you today?
            </div>
          </div>
        </div>
        
        <!-- Input -->
        <div class="agentic-input">
          <textarea 
            id="agentic-textarea" 
            placeholder="Type your message..."
            rows="1"
          ></textarea>
          <button id="agentic-send" class="btn-send">
            <svg width="20" height="20">
              <!-- Send icon -->
            </svg>
          </button>
        </div>
      </div>
    `;
    
    document.body.appendChild(widget);
  }
  
  attachEventListeners() {
    document.getElementById('agentic-toggle').addEventListener('click', () => this.toggle());
    document.getElementById('agentic-minimize').addEventListener('click', () => this.close());
    document.getElementById('agentic-send').addEventListener('click', () => this.sendMessage());
    
    const textarea = document.getElementById('agentic-textarea');
    textarea.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        this.sendMessage();
      }
    });
  }
  
  toggle() {
    this.isOpen = !this.isOpen;
    const container = document.getElementById('agentic-container');
    const toggle = document.getElementById('agentic-toggle');
    
    if (this.isOpen) {
      container.classList.add('open');
      toggle.classList.add('open');
    } else {
      container.classList.remove('open');
      toggle.classList.remove('open');
    }
  }
  
  close() {
    this.isOpen = false;
    document.getElementById('agentic-container').classList.remove('open');
    document.getElementById('agentic-toggle').classList.remove('open');
  }
  
  async sendMessage() {
    const textarea = document.getElementById('agentic-textarea');
    const message = textarea.value.trim();
    
    if (!message) return;
    
    // Add user message to UI
    this.addMessage(message, 'user');
    textarea.value = '';
    
    // Show typing indicator
    this.showTyping();
    
    try {
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          threadId: this.threadId,
        }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        this.threadId = data.threadId;
        this.saveThreadToStorage();
        
        // Remove typing indicator
        this.hideTyping();
        
        // Add assistant message
        this.addMessage(data.message, 'assistant');
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
      
    } catch (error) {
      console.error('Chat error:', error);
      this.hideTyping();
      this.addMessage('Sorry, something went wrong. Please try again.', 'assistant');
    }
  }
  
  addMessage(content, role) {
    const messagesContainer = document.getElementById('agentic-messages');
    const messageEl = document.createElement('div');
    messageEl.className = `message message-${role}`;
    messageEl.innerHTML = `<div class="message-content">${this.formatMessage(content)}</div>`;
    messagesContainer.appendChild(messageEl);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
  
  formatMessage(content) {
    // Convert markdown-like formatting
    return content
      .replace(/\n/g, '<br>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>');
  }
  
  showTyping() {
    const messagesContainer = document.getElementById('agentic-messages');
    const typing = document.createElement('div');
    typing.className = 'message message-assistant typing-indicator';
    typing.id = 'typing-indicator';
    typing.innerHTML = `
      <div class="message-content">
        <span></span><span></span><span></span>
      </div>
    `;
    messagesContainer.appendChild(typing);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
  
  hideTyping() {
    const typing = document.getElementById('typing-indicator');
    if (typing) typing.remove();
  }
  
  saveThreadToStorage() {
    if (this.threadId) {
      localStorage.setItem('bts_agentic_thread', this.threadId);
    }
  }
  
  loadThreadFromStorage() {
    this.threadId = localStorage.getItem('bts_agentic_thread');
  }
}

// Initialize widget
window.agenticWidget = new AgenticChatWidget();
```

---

## 🎨 WIDGET CSS

```css
/* agentic-widget.css */

.agentic-widget {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 9999;
}

.agentic-toggle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00639A, #21B6F3);
  border: none;
  color: white;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0, 99, 154, 0.4);
  transition: all 0.3s ease;
}

.agentic-toggle:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 30px rgba(0, 99, 154, 0.6);
}

.agentic-toggle .icon-close {
  display: none;
}

.agentic-toggle.open .icon-chat {
  display: none;
}

.agentic-toggle.open .icon-close {
  display: block;
}

.agentic-container {
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 400px;
  height: 600px;
  max-height: calc(100vh - 120px);
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
  transition: all 0.3s ease;
}

.agentic-container.open {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.agentic-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: linear-gradient(135deg, #00639A, #21B6F3);
  color: white;
  border-radius: 16px 16px 0 0;
}

.agent-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  margin-right: 12px;
}

.status {
  font-size: 12px;
  opacity: 0.9;
}

.agentic-messages {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.message {
  display: flex;
  gap: 8px;
}

.message-assistant {
  align-self: flex-start;
  max-width: 80%;
}

.message-user {
  align-self: flex-end;
  max-width: 80%;
}

.message-content {
  padding: 12px 16px;
  border-radius: 12px;
  font-size: 14px;
  line-height: 1.5;
}

.message-assistant .message-content {
  background: #F3F4F6;
  color: #111827;
}

.message-user .message-content {
  background: linear-gradient(135deg, #00639A, #21B6F3);
  color: white;
}

.typing-indicator .message-content {
  display: flex;
  gap: 4px;
  padding: 12px;
}

.typing-indicator span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #9CA3AF;
  animation: typing 1.4s infinite;
}

.typing-indicator span:nth-child(2) {
  animation-delay: 0.2s;
}

.typing-indicator span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes typing {
  0%, 60%, 100% {
    transform: translateY(0);
    opacity: 0.5;
  }
  30% {
    transform: translateY(-8px);
    opacity: 1;
  }
}

.agentic-input {
  display: flex;
  gap: 12px;
  padding: 16px;
  border-top: 1px solid #E5E7EB;
}

#agentic-textarea {
  flex: 1;
  padding: 12px;
  border: 2px solid #E5E7EB;
  border-radius: 8px;
  font-family: inherit;
  font-size: 14px;
  resize: none;
  max-height: 120px;
}

#agentic-textarea:focus {
  outline: none;
  border-color: #00639A;
}

.btn-send {
  width: 44px;
  height: 44px;
  border-radius: 8px;
  background: linear-gradient(135deg, #00639A, #21B6F3);
  border: none;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-send:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 99, 154, 0.4);
}

@media (max-width: 640px) {
  .agentic-container {
    width: calc(100vw - 48px);
    height: calc(100vh - 140px);
    right: 24px;
  }
}
```

---

## ✅ CHECKLIST DE IMPLEMENTAÇÃO

- [ ] Setup OpenAI API Key
- [ ] Criar Assistant no OpenAI
- [ ] Configurar Backend Express
- [ ] Implementar endpoints (`/api/agentic/chat`)
- [ ] Integrar com CRM (HubSpot/Salesforce)
- [ ] Configurar Email Service (SendGrid)
- [ ] Criar Widget Frontend
- [ ] Testar fluxo de parceria
- [ ] Testar agendamento de demo
- [ ] Testar cotação de preço
- [ ] Deploy backend (Vercel/Railway/AWS)
- [ ] Configurar CORS e Rate Limiting
- [ ] Adicionar monitoring e logging
- [ ] Documentar API

---

**FIM DA ESPECIFICAÇÃO TÉCNICA COMPLETA**
