import { LLMProvider, ModelConfig, ProviderConfig } from "@/app/store";
import { Updater } from "@/app/typing";
import { OpenAIModelConfig } from "./openai/model";
import { OpenAIProviderConfig } from "./openai/provider";

export function ModelConfigList(props: {
  provider: LLMProvider;
  config: ModelConfig;
  updateConfig: Updater<ModelConfig>;
}) {
  if (props.provider === "openai") {
    return (
      <OpenAIModelConfig
        config={props.config.openai}
        updateConfig={(update) => {
          props.updateConfig((config) => update(config.openai));
        }}
        models={[]}
      />
    );
  }

  return null;
}

export function ProviderConfigList(props: {
  provider: LLMProvider;
  config: ProviderConfig;
  updateConfig: Updater<ProviderConfig>;
}) {
  if (props.provider === "openai") {
    return (
      <OpenAIProviderConfig
        config={props.config.openai}
        updateConfig={(update) => {
          props.updateConfig((config) => update(config.openai));
        }}
      />
    );
  }

  return null;
}
