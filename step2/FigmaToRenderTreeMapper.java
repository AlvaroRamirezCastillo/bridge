public class FigmaToRenderTreeMapper {

    public RenderNode map(FigmaNode figma) {
        RenderNode node = new RenderNode();
        node.id = figma.id;
        node.name = figma.name;
        node.type = mapType(figma.type);

        mapLayout(figma, node);
        mapStyle(figma, node);

        if ("text".equals(node.type)) {
            node.content = figma.characters;
        }

        if ("component".equals(node.type)) {
            node.componentName = figma.name; // or lookup componentId
        }

        if (figma.children != null) {
            for (FigmaNode child : figma.children) {
                node.children.add(map(child));
            }
        }

        return node;
    }

    private String mapType(String figmaType) {
        switch (figmaType) {
            case "FRAME":
            case "GROUP": return "container";
            case "TEXT": return "text";
            case "RECTANGLE": return "container";
            case "INSTANCE": return "component";
            default: return "container";
        }
    }

    private void mapLayout(FigmaNode f, RenderNode r) {
        if (f.layoutMode != null) {
            r.layout.direction = f.layoutMode.equals("HORIZONTAL") ? "row" : "column";
        }
        r.layout.align = f.counterAxisAlignItems != null
            ? f.counterAxisAlignItems
            : f.primaryAxisAlignItems;

        r.layout.padding = safePadding(f);
        r.layout.gap = f.itemSpacing != null ? f.itemSpacing.intValue() : null;
    }

    private Integer safePadding(FigmaNode f) {
        if (f.paddingLeft == null && f.paddingRight == null &&
            f.paddingTop == null && f.paddingBottom == null) return null;

        return (int) Math.round(
            ((f.paddingLeft != null ? f.paddingLeft : 0) +
             (f.paddingRight != null ? f.paddingRight : 0) +
             (f.paddingTop != null ? f.paddingTop : 0) +
             (f.paddingBottom != null ? f.paddingBottom : 0)) / 4
        );
    }

    private void mapStyle(FigmaNode f, RenderNode r) {
        if (f.absoluteBoundingBox != null) {
            r.style.width = f.absoluteBoundingBox.width != null ? f.absoluteBoundingBox.width.intValue() : null;
            r.style.height = f.absoluteBoundingBox.height != null ? f.absoluteBoundingBox.height.intValue() : null;
        }

        r.style.borderRadius = f.cornerRadius != null ? f.cornerRadius.intValue() : null;
        r.style.backgroundColor = extractColor(f);

        if ("text".equals(r.type)) {
            r.style.text.fontSize = f.fontSize != null ? f.fontSize.intValue() : null;
            r.style.text.fontWeight = f.fontWeight;
            r.style.text.color = extractColor(f);
            r.style.text.align = f.textAlignHorizontal;
        }
    }

    private String extractColor(FigmaNode f) {
        if (f.fills != null && !f.fills.isEmpty() && f.fills.get(0).color != null) {
            return toRgba(f.fills.get(0).color);
        }
        if (f.backgroundColor != null) {
            return toRgba(f.backgroundColor);
        }
        return null;
    }

    private String toRgba(FigmaColor c) {
        return String.format(
            "rgba(%d,%d,%d,%.2f)",
            (int)(c.r * 255),
            (int)(c.g * 255),
            (int)(c.b * 255),
            c.a
        );
    }
}
