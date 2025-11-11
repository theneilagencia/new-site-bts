# BTS Global Corp - Site Institucional

> Site institucional moderno e responsivo desenvolvido com base no design do Figma Make.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## 📋 Sobre o Projeto

Site institucional da BTS Global Corp, uma empresa líder em soluções corporativas. O site apresenta:

- 🏢 Informações sobre a empresa
- 💼 Serviços oferecidos
- 🎯 Soluções integradas
- 👥 Depoimentos de clientes
- 📞 Formulário de contato

## ✨ Características

- ✅ **Design Moderno**: Interface limpa e profissional
- ✅ **Totalmente Responsivo**: Adapta-se a todos os dispositivos
- ✅ **Performance Otimizada**: Carregamento rápido e eficiente
- ✅ **Animações Suaves**: Transições e efeitos visuais elegantes
- ✅ **SEO Friendly**: Otimizado para mecanismos de busca
- ✅ **Acessibilidade**: Seguindo padrões de acessibilidade web
- ✅ **Cross-browser**: Compatível com todos os navegadores modernos

## 🚀 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e moderna
- **CSS3**: Estilização avançada com Flexbox e Grid
- **JavaScript (Vanilla)**: Funcionalidades interativas sem dependências
- **Google Fonts**: Tipografia profissional (Inter)
- **SVG**: Ícones e gráficos vetoriais

## 📁 Estrutura do Projeto

```
bts-global-corp-website/
├── index.html              # Página principal
├── css/
│   └── style.css          # Estilos CSS
├── js/
│   └── main.js            # Scripts JavaScript
├── assets/
│   ├── images/            # Imagens do site
│   └── icons/             # Ícones SVG
├── package.json           # Configurações do projeto
├── .gitignore            # Arquivos ignorados pelo Git
└── README.md             # Documentação
```

## 🔧 Como Usar

### Opção 1: Abrir Diretamente no Navegador

1. Clone o repositório ou baixe os arquivos
2. Navegue até a pasta do projeto
3. Abra o arquivo `index.html` em seu navegador

### Opção 2: Usar um Servidor Local (Recomendado)

#### Usando Python:
```bash
# Python 3
python -m http.server 8080

# Python 2
python -m SimpleHTTPServer 8080
```

#### Usando Node.js (http-server):
```bash
# Instalar globalmente (uma vez)
npm install -g http-server

# Executar
npm start
# ou
http-server -p 8080
```

#### Usando Node.js (live-server):
```bash
# Instalar globalmente (uma vez)
npm install -g live-server

# Executar com reload automático
npm run dev
# ou
live-server --port=8080
```

#### Usando PHP:
```bash
php -S localhost:8080
```

Depois de iniciar o servidor, acesse: **http://localhost:8080**

## 📱 Responsividade

O site é totalmente responsivo e foi testado nos seguintes breakpoints:

- 📱 **Mobile**: 320px - 576px
- 📱 **Tablet**: 577px - 968px
- 💻 **Desktop**: 969px+
- 🖥️ **Large Desktop**: 1200px+

## 🎨 Paleta de Cores

```css
/* Cores Principais */
--primary-color: #2196F3     /* Azul Principal */
--primary-dark: #1976D2      /* Azul Escuro */
--primary-light: #64B5F6     /* Azul Claro */
--secondary-color: #FF6B6B   /* Vermelho/Coral */
--accent-color: #4CAF50      /* Verde */

/* Cores de Texto */
--text-color: #2C3E50        /* Texto Principal */
--text-light: #7F8C8D        /* Texto Secundário */

/* Cores de Fundo */
--white: #FFFFFF             /* Branco */
--bg-color: #FAFAFA         /* Fundo Claro */
--bg-light: #F5F7FA         /* Fundo Extra Claro */
```

## 📄 Seções do Site

### 1. Hero Section
- Título impactante com destaques
- Descrição da empresa
- Call-to-action buttons
- Imagem/ilustração decorativa

### 2. Sobre (About)
- História da empresa
- Missão, Visão e Valores
- Estatísticas impressionantes

### 3. Serviços (Services)
- Consultoria Estratégica
- Transformação Digital
- Gestão Financeira
- Recursos Humanos
- Análise de Dados
- Gestão de Projetos

### 4. Soluções (Solutions)
- Soluções Personalizadas
- Implementação Ágil
- Suporte Contínuo
- Resultados Mensuráveis

### 5. Clientes (Clients)
- Logos de clientes
- Depoimentos e avaliações
- Cases de sucesso

### 6. Contato (Contact)
- Formulário de contato
- Informações de localização
- Telefone e e-mail
- Redes sociais

## ⚙️ Funcionalidades JavaScript

- ✅ Menu mobile responsivo
- ✅ Navegação suave entre seções
- ✅ Destacar seção ativa no menu
- ✅ Botão "Voltar ao topo"
- ✅ Animações ao scroll (Intersection Observer)
- ✅ Validação de formulário
- ✅ Header com efeito backdrop blur ao scroll
- ✅ Contador animado nas estatísticas
- ✅ Lazy loading de imagens

## 🎯 Otimizações

### Performance
- Carregamento assíncrono de recursos
- Lazy loading de imagens
- Debounce em eventos de scroll
- CSS otimizado e minificável

### SEO
- Tags meta apropriadas
- Estrutura semântica HTML5
- Títulos hierárquicos corretos
- Alt text em imagens

### Acessibilidade
- ARIA labels
- Navegação por teclado
- Contraste adequado
- Focus trap no menu mobile

## 🌐 Navegadores Suportados

- ✅ Chrome (últimas 2 versões)
- ✅ Firefox (últimas 2 versões)
- ✅ Safari (últimas 2 versões)
- ✅ Edge (últimas 2 versões)
- ✅ Opera (últimas 2 versões)

## 📝 Personalização

### Alterar Cores

Edite as variáveis CSS em `css/style.css`:

```css
:root {
    --primary-color: #SuaCor;
    --secondary-color: #SuaCor;
    /* ... outras cores */
}
```

### Alterar Fontes

1. Escolha uma fonte no [Google Fonts](https://fonts.google.com/)
2. Substitua o link no `<head>` do `index.html`
3. Atualize a variável `--font-family` no CSS

### Adicionar Imagens

1. Coloque as imagens na pasta `assets/images/`
2. Substitua os placeholders no HTML
3. Use lazy loading com `data-src` para melhor performance

## 🚀 Deployment

### GitHub Pages

```bash
# Fazer commit das alterações
git add .
git commit -m "Site completo"
git push origin main

# Nas configurações do repositório, ative o GitHub Pages
```

### Netlify

1. Arraste a pasta do projeto para [Netlify Drop](https://app.netlify.com/drop)
2. Ou conecte seu repositório Git para deploy automático

### Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 📞 Contato

Para mais informações sobre a BTS Global Corp:

- 📧 Email: contato@btsglobal.com
- 📱 Telefone: +55 (11) 3000-0000
- 🌐 Website: [btsglobal.com](https://btsglobal.com)
- 📍 Endereço: Av. Paulista, 1000 - São Paulo, SP

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fork o projeto
2. Criar uma branch (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abrir um Pull Request

## 📚 Documentação Adicional

- [HTML5 Documentation](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS3 Documentation](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [JavaScript Documentation](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## 🎓 Recursos Úteis

- [Can I Use](https://caniuse.com/) - Verificar compatibilidade de recursos
- [Google PageSpeed Insights](https://pagespeed.web.dev/) - Testar performance
- [WAVE](https://wave.webaim.org/) - Verificar acessibilidade
- [CSS Gradient Generator](https://cssgradient.io/) - Gerar gradientes

---

**Desenvolvido com ❤️ para BTS Global Corp**

*Transformando desafios em oportunidades através de soluções corporativas inovadoras.*
