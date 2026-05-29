import { getBlockComponent } from "../registry";
import type { CmsBlock } from "../types";

export function BlockRenderer({ block }: { block: CmsBlock }) {
  const Component = getBlockComponent(block.type);
  if (!Component) return null;
  return <Component data={block.data as never} />;
}
