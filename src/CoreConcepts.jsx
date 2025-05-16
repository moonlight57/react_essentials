import { CORE_CONCEPTS } from "./data";
import ConceptProps from "./components/ConceptProps";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concept</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => {
          return <ConceptProps key={conceptItem.title} {...conceptItem} />;
        })}
      </ul>
    </section>
  );
}
