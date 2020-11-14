export function toPlainText(blocks) {
  if (!blocks) {
    return '';
  }
  return blocks
    .map((block) => {
      if (block._type !== 'block' || !block.children) {
        return '';
      }
      return block.children.map((child) => child.text).join('');
    })
    .join('\n\n');
}
