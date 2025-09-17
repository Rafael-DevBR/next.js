const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function request<T>(
  endpoint: string,
  method: string = "GET",
  data?: unknown
): Promise<T> {
  const options: RequestInit = {
    method,
    headers: { "Content-Type": "application/json" },
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  const res = await fetch(`${BASE_URL}${endpoint}`, options);

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || `Erro ${res.status}`);
  }

  return res.json();
}
