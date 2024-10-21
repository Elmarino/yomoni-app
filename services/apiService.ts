// apiService.ts
class ApiService {
  private baseURL: string;
  private timeout: number;

  constructor(baseURL: string, timeout: number = 10000) {
    this.baseURL = baseURL;
    this.timeout = timeout;
  }

  async get<T>(
    endpoint: string,
    params: Record<string, string | number> = {}
  ): Promise<T> {
    const url = new URL(`${this.baseURL}${endpoint}`);
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, String(params[key]))
    );

    return this.request<T>(url.toString(), { method: 'GET' });
  }

  async post<T>(endpoint: string, data: any): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    return this.request<T>(url, { method: 'POST', body: JSON.stringify(data) });
  }

  async put<T>(endpoint: string, data: any): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    return this.request<T>(url, { method: 'PUT', body: JSON.stringify(data) });
  }

  async delete<T>(endpoint: string): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    return this.request<T>(url, { method: 'DELETE' });
  }

  private async request<T>(url: string, options: RequestInit): Promise<T> {
    const controller = new AbortController();
    const signal = controller.signal;

    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        signal,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return (await response.json()) as T;
    } catch (error: any) {
      this.handleError(error);
      throw error; // Rethrow the error for further handling
    } finally {
      clearTimeout(timeoutId);
    }
  }

  private handleError(error: Error) {
    console.error('API Error:', error);
  }
}

export default ApiService;
