const API_URL =
  'https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false';

const fieldMap = {};
document.querySelectorAll('[data-field]').forEach((node) => {
  fieldMap[node.dataset.field] = node;
});

const loadingPanel = document.getElementById('loading-panel');
const errorBanner = document.getElementById('error-banner');
const errorMessage = document.getElementById('error-message');
const refreshButton = document.getElementById('refreshMetrics');
const retryButton = document.getElementById('retryMetrics');
const yearNode = document.getElementById('currentYear');

if (yearNode) {
  yearNode.textContent = new Date().getFullYear().toString();
}

let refreshTimer = null;

const formatCurrency = (value) => {
  if (!value && value !== 0) return '$ --';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
};

const formatCompact = (value) => {
  if (!value && value !== 0) return '$ --';
  if (value >= 1_000_000_000_000) {
    return `$${(value / 1_000_000_000_000).toFixed(2)}T`;
  }
  if (value >= 1_000_000_000) {
    return `$${(value / 1_000_000_000).toFixed(2)}B`;
  }
  if (value >= 1_000_000) {
    return `$${(value / 1_000_000).toFixed(2)}M`;
  }
  return formatCurrency(value);
};

const formatPercent = (value) => {
  if (typeof value !== 'number' || Number.isNaN(value)) {
    return '--';
  }
  const prefix = value > 0 ? '+' : '';
  return `${prefix}${value.toFixed(2)}%`;
};

const formatSupply = (value) => {
  if (!value && value !== 0) return '--';
  return `${(value / 1_000_000).toFixed(2)}M BTC`;
};

const setLoading = (isLoading) => {
  if (loadingPanel) {
    loadingPanel.hidden = !isLoading;
  }
};

const setError = (message) => {
  if (!errorBanner) return;
  if (message) {
    errorBanner.hidden = false;
    errorMessage.textContent = ` (${message})`;
  } else {
    errorBanner.hidden = true;
    errorMessage.textContent = '';
  }
};

const applyChangeBadge = (value) => {
  const node = fieldMap['price-change'];
  if (!node) return;
  node.textContent = formatPercent(value);
  node.style.color = value >= 0 ? '#4ade80' : '#f87171';
  node.style.borderColor = value >= 0 ? 'rgba(74, 222, 128, 0.4)' : 'rgba(248, 113, 113, 0.5)';
};

const updateSupplyProgress = (percentage) => {
  const node = fieldMap['progress-bar'];
  if (node) {
    node.style.width = `${Math.min(Math.max(percentage, 0), 100).toFixed(1)}%`;
  }
};

const updateUI = (payload) => {
  const { market_data: market } = payload;
  const data = {
    price: market.current_price.usd,
    change24h: market.price_change_percentage_24h,
    marketCap: market.market_cap.usd,
    volume24h: market.total_volume.usd,
    circulating: market.circulating_supply,
    maxSupply: market.max_supply || 21_000_000,
    priceChange7d: market.price_change_percentage_7d,
    priceChange30d: market.price_change_percentage_30d,
    updatedAt: new Date().toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }),
  };

  const remaining = data.maxSupply - data.circulating;
  const progress = (data.circulating / data.maxSupply) * 100;

  if (fieldMap['price']) fieldMap['price'].textContent = formatCurrency(data.price);
  applyChangeBadge(data.change24h);
  if (fieldMap['market-cap']) fieldMap['market-cap'].textContent = formatCompact(data.marketCap);
  if (fieldMap['volume']) fieldMap['volume'].textContent = formatCompact(data.volume24h);
  if (fieldMap['circulating']) fieldMap['circulating'].textContent = formatSupply(data.circulating);
  if (fieldMap['remaining']) fieldMap['remaining'].textContent = formatSupply(remaining);
  if (fieldMap['progress']) fieldMap['progress'].textContent = `${progress.toFixed(1)}%`;
  updateSupplyProgress(progress);

  if (fieldMap['change-7d']) fieldMap['change-7d'].textContent = formatPercent(data.priceChange7d);
  if (fieldMap['change-30d']) fieldMap['change-30d'].textContent = formatPercent(data.priceChange30d);
  if (fieldMap['last-updated']) fieldMap['last-updated'].textContent = data.updatedAt;
  if (fieldMap['last-updated-inline']) fieldMap['last-updated-inline'].textContent = data.updatedAt;
};

const fetchMetrics = async () => {
  setLoading(true);
  setError(null);
  try {
    const response = await fetch(API_URL, { cache: 'no-store' });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const json = await response.json();
    updateUI(json);
  } catch (error) {
    console.error('Erro ao buscar métricas', error);
    setError(error.message || 'Erro inesperado');
  } finally {
    setLoading(false);
  }
};

const startAutoRefresh = () => {
  if (refreshTimer) {
    clearInterval(refreshTimer);
  }
  refreshTimer = setInterval(fetchMetrics, 5 * 60 * 1000);
};

if (refreshButton) {
  refreshButton.addEventListener('click', fetchMetrics);
}

if (retryButton) {
  retryButton.addEventListener('click', fetchMetrics);
}

fetchMetrics();
startAutoRefresh();
