// API Service for BTS Global
const API_BASE_URL = typeof window !== 'undefined' && window.location.hostname !== 'localhost'
  ? '/api'
  : 'http://localhost:3000/api';

export interface ApiUser {
  id: string;
  email: string;
  name: string;
  role: 'partner' | 'admin';
  status: 'active' | 'inactive';
  company?: string;
  phone?: string;
  createdAt?: string;
}

class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'ApiError';
  }
}

async function fetchApi(endpoint: string, options: RequestInit = {}) {
  const token = localStorage.getItem('bts-auth-token');
  
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  
  if (options.headers) {
    Object.assign(headers, options.headers);
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new ApiError(response.status, data.error || 'Request failed');
  }

  return data.data;
}

// Auth API
export const authApi = {
  async login(email: string, password: string) {
    const data = await fetchApi('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    
    if (data.token) {
      localStorage.setItem('bts-auth-token', data.token);
    }
    
    return data;
  },

  async register(userData: {
    email: string;
    password: string;
    name: string;
    company?: string;
    phone?: string;
  }) {
    const data = await fetchApi('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
    
    if (data.token) {
      localStorage.setItem('bts-auth-token', data.token);
    }
    
    return data;
  },

  async getMe() {
    return await fetchApi('/auth/me');
  },

  logout() {
    localStorage.removeItem('bts-auth-token');
  },
};

// Users API (admin only)
export const usersApi = {
  async list(): Promise<ApiUser[]> {
    return await fetchApi('/auth/users');
  },

  async create(userData: {
    name: string;
    email: string;
    password: string;
    role: 'partner' | 'admin';
    company?: string;
    phone?: string;
    status?: 'active' | 'inactive';
  }): Promise<ApiUser> {
    return await fetchApi('/auth/users', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  },

  async update(
    id: string,
    updates: Partial<{
      name: string;
      email: string;
      role: 'partner' | 'admin';
      company?: string;
      phone?: string;
      status?: 'active' | 'inactive';
    }>
  ): Promise<ApiUser> {
    return await fetchApi(`/auth/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    });
  },

  async remove(id: string) {
    return await fetchApi(`/auth/users/${id}`, {
      method: 'DELETE',
    });
  },

  async resetPassword(id: string, password: string) {
    return await fetchApi(`/auth/users/${id}/password`, {
      method: 'PATCH',
      body: JSON.stringify({ password }),
    });
  },
};

// Proposals API
export const proposalsApi = {
  async create(proposal: {
    clientName: string;
    clientEmail: string;
    clientPhone: string;
    structureId: string;
    structureName: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
  }) {
    return await fetchApi('/proposals/create', {
      method: 'POST',
      body: JSON.stringify(proposal),
    });
  },

  async list() {
    return await fetchApi('/proposals/list');
  },

  async get(id: string) {
    return await fetchApi(`/proposals/${id}`);
  },

  async update(id: string, data: {
    status?: 'pending' | 'approved' | 'rejected';
    notes?: string;
  }) {
    return await fetchApi(`/proposals/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  async delete(id: string) {
    return await fetchApi(`/proposals/${id}`, {
      method: 'DELETE',
    });
  },
};

// Agentic Commerce API
export const agenticApi = {
  async chat(message: string, sessionId?: string, context?: any) {
    return await fetchApi('/agentic/chat', {
      method: 'POST',
      body: JSON.stringify({ message, sessionId, context }),
    });
  },

  async analyze(type: 'proposal' | 'client' | 'market', data: any) {
    return await fetchApi('/agentic/analyze', {
      method: 'POST',
      body: JSON.stringify({ type, data }),
    });
  },
};

export { ApiError };
