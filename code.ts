type inputs = {
  marginTop: number;
  marginLeft: number;
  height: number;
  cornerRadius: number;
};

// MAIN PLUGIN CODE
const { selection } = figma.currentPage;
if (selection.length !== 1) {
  figma.closePlugin("Select a single node.");
}

if (selection[0].type !== "TEXT") {
  figma.closePlugin("Select a single text node.");
}
const textNode = selection[0];

figma.showUI(__html__);

figma.ui.postMessage(textNode.height);

figma.ui.onmessage = ({
  marginTop,
  marginLeft,
  height,
  cornerRadius,
}: inputs) => {
  console.log("height: " + height);
  const { selection } = figma.currentPage;
  const textNode = selection[0];

  const groupNode = figma.group(
    [textNode],
    textNode.parent ?? figma.currentPage
  );

  const rectangle = figma.createRectangle();
  rectangle.x = textNode.x + marginLeft;
  rectangle.y = textNode.y + marginTop;
  rectangle.cornerRadius = cornerRadius;
  rectangle.resize(textNode.width, height);
  rectangle.fills = [{ type: "SOLID", color: { r: 1, g: 0.5, b: 0 } }];
  groupNode.insertChild(0, rectangle);

  figma.closePlugin();
};
