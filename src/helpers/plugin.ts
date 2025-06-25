export type PluginConfig = {
  message?: string;
};
export type PluginProxyConfig = {
  headers: {
    value1?: string;
  };
  data: {
    value1?: string;
  };
};

export const getPluginConfig = (pluginId: string): PluginConfig => {
  return kintone.plugin.app.getConfig(pluginId);
};

export const setPluginConfig = async (config: PluginConfig) => {
  return new Promise<void>((resolve) => {
    kintone.plugin.app.setConfig(config, () => resolve());
  });
};

export const getPluginProxyConfig = (
  url: Parameters<typeof kintone.plugin.app.getProxyConfig>[0],
  method: Parameters<typeof kintone.plugin.app.getProxyConfig>[1],
): PluginProxyConfig | null => {
  return kintone.plugin.app.getProxyConfig(url, method);
};

export const setPluginProxyConfig = async (
  url: Parameters<typeof kintone.plugin.app.setProxyConfig>[0],
  method: Parameters<typeof kintone.plugin.app.setProxyConfig>[1],
  pluginProxyConfig: PluginProxyConfig,
) => {
  return new Promise<void>((resolve) => {
    kintone.plugin.app.setProxyConfig(
      url,
      method,
      pluginProxyConfig.headers,
      pluginProxyConfig.data,
      () => resolve(),
    );
  });
};
