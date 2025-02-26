import { Editor } from "./editor";
import { Preview } from "./preview";

export const Markdown = () => {
  return (
    <div className="flex">
      <Editor />
      <Preview />
    </div>
  );
};
