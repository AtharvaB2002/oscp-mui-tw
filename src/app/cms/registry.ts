import {
  ButtonBlock,
  CardsBlock,
  HeadingBlock,
  ImageBlock,
  ParagraphBlock,
} from "./components/blocks";
import type { BlockComponent, BlockType } from "./types";

/** Maps a block type to the component that renders it. Add new block types here. */
export const BLOCK_REGISTRY: Record<BlockType, BlockComponent> = {
  heading: HeadingBlock as BlockComponent,
  paragraph: ParagraphBlock as BlockComponent,
  image: ImageBlock as BlockComponent,
  button: ButtonBlock as BlockComponent,
  cards: CardsBlock as BlockComponent,
};

export function getBlockComponent(type: BlockType): BlockComponent | undefined {
  return BLOCK_REGISTRY[type];
}
