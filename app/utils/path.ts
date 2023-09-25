import { getClientConfig } from "../config/client";
import { ApiPath, DEFAULT_API_HOST } from "../constant";

/**
 * Get api path according to desktop/web env
 *
 * 1. In desktop app, we always try to use a remote full path for better network experience
 * 2. In web app, we always try to use the original relative path
 *
 * @param path - /api/*
 * @returns
 */
export function getApiPath(path: ApiPath) {
  const baseUrl = getClientConfig()?.isApp ? `${DEFAULT_API_HOST}` : "";
  return `${baseUrl}${path}`;
}
