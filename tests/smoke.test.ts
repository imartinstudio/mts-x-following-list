/**
 * Entry smoke tests: each bundled entry point must execute in a DOM
 * environment without throwing at import time.
 */
import { afterEach, describe, expect, it, vi } from "vitest";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("entry smoke", () => {
  it("content script entry executes without runtime crash", async () => {
    await expect(import("../src/content/following-manager.js")).resolves.toBeDefined();
  });

  it("background service worker entry registers lifecycle listeners", async () => {
    const onInstalled = vi.fn();
    const onStartup = vi.fn();
    const onUpdated = vi.fn();
    vi.stubGlobal("chrome", {
      runtime: {
        id: "smoke",
        onInstalled: { addListener: onInstalled },
        onStartup: { addListener: onStartup },
      },
      tabs: { onUpdated: { addListener: onUpdated }, query: vi.fn(async () => []) },
      scripting: { executeScript: vi.fn(async () => [{ result: true }]) },
    });
    await import("../src/background/background.js");
    expect(onInstalled).toHaveBeenCalledTimes(1);
    expect(onStartup).toHaveBeenCalledTimes(1);
    expect(onUpdated).toHaveBeenCalledTimes(1);
  });
});
