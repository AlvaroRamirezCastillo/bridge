public class FigmaNode {
    public String id;
    public String name;
    public String type;
    public List<FigmaNode> children;

    public String layoutMode;
    public String primaryAxisAlignItems;
    public Integer padding;
    public Integer itemSpacing;

    public Box absoluteBoundingBox;
    public String backgroundColor;
    public Integer cornerRadius;

    public String characters; 
    public Integer fontSize;
    public String fontWeight;
    public String fillColor;
    public String textAlignHorizontal;

    public String componentName;

    public static class Box {
        public Integer width;
        public Integer height;
    }
}


public class FigmaNodesResponse {
    public Map<String, FigmaNodeContainer> nodes;
}


public class FigmaNodeContainer {
    public FigmaNode document;
    public Map<String, Object> components;
    public Map<String, Object> styles;
}
