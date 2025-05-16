import { useState } from "react";

import TabButtons from "./components/TabButtons";
import { EXAMPLES } from "./data";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function doSom(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButtons
          isSelected={selectedTopic === "jsx"}
          handleClick={() => doSom("jsx")}
        >
          JSX
        </TabButtons>
        <TabButtons
          isSelected={selectedTopic === "components"}
          handleClick={() => doSom("components")}
        >
          Components
        </TabButtons>
        <TabButtons
          isSelected={selectedTopic === "props"}
          handleClick={() => doSom("props")}
        >
          Props
        </TabButtons>
        <TabButtons
          isSelected={selectedTopic === "state"}
          handleClick={() => doSom("state")}
        >
          State
        </TabButtons>
      </menu>

      {!selectedTopic && <p>Please select a topic.</p>}
      {selectedTopic && (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      )}
    </section>
  );
}
