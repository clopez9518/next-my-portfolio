
const requests = new Map<string, { count: number; lastRequest: number }>();

const WINDOW_MS = 60 * 1000;
const MAX_REQUESTS = 3;

export function rateLimit(ip: string): boolean {
    const now = Date.now();

    const entry = requests.get(ip);

    if (!entry) {
        requests.set(ip, { count: 1, lastRequest: now });
        return true;
    }

    if (now - entry.lastRequest > WINDOW_MS) {
        requests.set(ip, { count: 1, lastRequest: now });
        return true;
    }

    if (entry.count >= MAX_REQUESTS) {
        return false;
    }

    entry.count++;
    return true;
}