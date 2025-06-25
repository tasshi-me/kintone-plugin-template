import { getPluginConfig, setPluginConfig } from "../helpers/plugin.ts";
import type { MouseEventHandler } from "react";
import { useState } from "react";

type Props = {
  pluginId: string;
};

function App({ pluginId }: Props) {
  const config = getPluginConfig(pluginId);
  const [message, setMessage] = useState(config.message);

  const onSaveCallBack: MouseEventHandler = async (event) => {
    await setPluginConfig({ message });
    alert("The plug-in settings have been saved. Please update the app!");
    window.location.href = "../../flow?app=" + kintone.app.getId();
  };

  const onCancelCallback: MouseEventHandler = async (event) => {
    window.location.href = "../../" + kintone.app.getId() + "/plugin/";
  };

  return (
    <>
      <h2 className="settings-heading">Settings for kintone-plugin-template</h2>

      <p className="kintoneplugin-desc">
        This message is displayed on the app page after the app has been
        updated.
      </p>

      <form className="js-submit-settings">
        <p className="kintoneplugin-row">
          <label htmlFor="message">
            Message:
            <input
              type="text"
              className="js-text-message kintoneplugin-input-text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </p>
        <p className="kintoneplugin-row">
          <button
            type="button"
            className="js-cancel-button kintoneplugin-button-dialog-cancel"
            onClick={onCancelCallback}
          >
            Cancel
          </button>
          <button
            type="button"
            className="kintoneplugin-button-dialog-ok"
            onClick={onSaveCallBack}
          >
            Save
          </button>
        </p>
      </form>
    </>
  );
}

export default App;
