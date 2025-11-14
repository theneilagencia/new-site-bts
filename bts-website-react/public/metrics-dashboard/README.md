# Bitcoin Capital Reserve · Metrics Dashboard

Esta pasta contém uma page estática pronta para reproduzir o layout solicitado de https://scwtfngk.manus.space/metrics/ aproveitando a identidade visual atual do site em WordPress (tema Most/Elementor) hospedado na Kinghost.

## Pré-visualização local

1. Instale as dependências do projeto principal (se ainda não fez):
   ```bash
   npm install
   ```
2. Rode o ambiente Vite normalmente:
   ```bash
   npm run dev
   ```
3. Acesse `http://localhost:5173/metrics-dashboard/` para ver o painel renderizado com dados ao vivo da CoinGecko.

> O painel é 100% estático (HTML + CSS + JS vanila). Não depende do bundle React principal e pode ser publicado de forma independente.

## Publicação no domínio WordPress (Kinghost)

### Passo 1 · Enviar arquivos
1. Acesse o painel da Kinghost ou use SFTP.
2. Entre na pasta `public_html` (ou na raiz onde o WordPress está instalado).
3. Faça upload da pasta `metrics-dashboard` completa (HTML, CSS e JS).

### Passo 2 · Apontar a rota `/metrics`
Adicione uma regra no `.htaccess` do WordPress para servir a página estática diretamente:

```apacheconf
# Painel de métricas estático
RewriteRule ^metrics/?$ metrics-dashboard/index.html [L]
```

> Coloque a regra antes do bloco padrão do WordPress (`# BEGIN WordPress`) para ter prioridade.

### Passo 3 · Criar página no WP (opcional)
A regra acima já permite acessar `https://bitcoincapreserve.com/metrics`. Caso prefira manter o page builder para editar o SEO/canonicals:
1. Crie uma página no WordPress com o slug `metrics`.
2. Dentro do conteúdo, insira um **Custom HTML** com um iframe apontando para o arquivo estático:
   ```html
   <iframe src="/metrics-dashboard/index.html" width="100%" height="1700" style="border:none;" loading="lazy"></iframe>
   ```
3. No tema Most/Elementor você pode esconder o header/footer da página para deixar apenas o iframe carregando o painel.

### Passo 4 · Cache
- O JavaScript busca a CoinGecko diretamente e tem um intervalo interno de 5 minutos.
- Garanta que a página não seja armazenada por plugins de cache agressivos (adicione `/metrics-dashboard/*` à lista de exclusão).

## Manutenção
- Para alterar textos/títulos, edite `index.html`.
- Para ajustar visuais (cores, spacing, responsividade), utilize `styles.css`.
- Para trocar a fonte dos dados ou o intervalo de atualização, edite `metrics.js`.

Com isso, o domínio oficial passa a ter um painel de métricas dinâmico em `/metrics` sem precisar mexer no tema WordPress principal. 
