import Entry from "./Entry.jsx";
import data from "../data.js";
export default function MainPage() {
  const entryDataElements = data.map((entry) => (
    <Entry key={entry.id} data={entry} />
  ));
  return <div className="main-page">{entryDataElements}</div>;
}
