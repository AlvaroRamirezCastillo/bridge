public class FigmaNode {
    public String id;
    public String name;
    public String type; // FRAME | TEXT | INSTANCE | RECTANGLE | GROUP | etc.
    public List<FigmaNode> children;

    // Layout / autolayout keys
    public String layoutMode; // HORIZONTAL | VERTICAL
    public Double paddingLeft;
    public Double paddingRight;
    public Double paddingTop;
    public Double paddingBottom;
    public Double itemSpacing;
    public String counterAxisAlignItems;
    public String primaryAxisAlignItems;

    // Size
    public BoundingBox absoluteBoundingBox;

    // Fills & background colors
    public List<Paint> fills;
    public FigmaColor backgroundColor;
    public Double cornerRadius;

    // Text fields
    public String characters;
    public Double fontSize;
    public String fontWeight;
    public String textAlignHorizontal;

    // Components
    public String componentId; // INSTANCE → component
}
