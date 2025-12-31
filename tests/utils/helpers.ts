/**
 * Testing helper functions
 */

/**
 * Wait for a specific amount of time
 */
export const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Generate a random string for testing
 */
export const randomString = (length: number = 10): string => {
  return Math.random().toString(36).substring(2, length + 2);
};

/**
 * Mock console methods to suppress logs in tests
 */
export const mockConsole = () => {
  const originalConsole = { ...console };
  
  beforeEach(() => {
    global.console = {
      ...console,
      log: vi.fn(),
      error: vi.fn(),
      warn: vi.fn(),
      info: vi.fn(),
    };
  });

  afterEach(() => {
    global.console = originalConsole;
  });
};

/**
 * Create mock fetch response
 */
export const mockFetchResponse = (data: any, status: number = 200) => {
  return Promise.resolve({
    ok: status >= 200 && status < 300,
    status,
    json: async () => data,
    text: async () => JSON.stringify(data),
  } as Response);
};
