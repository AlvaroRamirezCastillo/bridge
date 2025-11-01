public class FigmaToRenderTreeMapper {

    public RenderNode map(FigmaNode figmaNode) {
        RenderNode node = new RenderNode();

        node.id = figmaNode.id;
        node.name = figmaNode.name;
        node.type = mapType(figmaNode);

        mapLayout(figmaNode, node);
        mapStyle(figmaNode, node);

        if ("text".equals(node.type)) {
            node.content = figmaNode.characters;
        }

        if ("component".equals(node.type)) {
            node.componentName = figmaNode.componentName; 
        }

        if (figmaNode.children != null) {
            for (FigmaNode child : figmaNode.children) {
                node.children.add(map(child));
            }
        }

        return node;
    }

    private String mapType(FigmaNode figmaNode) {
        switch (figmaNode.type) {
            case "FRAME":
            case "GROUP":
                return "container";
            case "TEXT":
                return "text";
            case "RECTANGLE":
                return "container";
            case "INSTANCE":
                return "component";
            case "VECTOR":
                return "vector";
            default:
                return "container";
        }
    }

    private void mapLayout(FigmaNode figmaNode, RenderNode node) {
        if (figmaNode.layoutMode != null) {
            node.layout.direction = figmaNode.layoutMode.equals("HORIZONTAL") 
                ? "row" 
                : "column";
        }

        node.layout.align = figmaNode.primaryAxisAlignItems;
        node.layout.padding = figmaNode.padding;
        node.layout.gap = figmaNode.itemSpacing;
    }

    private void mapStyle(FigmaNode figmaNode, RenderNode node) {
        if (figmaNode.absoluteBoundingBox != null) {
            node.style.width = figmaNode.absoluteBoundingBox.width;
            node.style.height = figmaNode.absoluteBoundingBox.height;
        }

        node.style.backgroundColor = figmaNode.backgroundColor;
        node.style.borderRadius = figmaNode.cornerRadius;

        if ("TEXT".equals(figmaNode.type)) {
            node.style.text.fontSize = figmaNode.fontSize;
            node.style.text.fontWeight = figmaNode.fontWeight;
            node.style.text.color = figmaNode.fillColor;
            node.style.text.align = figmaNode.textAlignHorizontal;
        }
    }
}
