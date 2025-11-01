public class RenderNode {
    public String id;
    public String name;
    public String type; // container | text | image | component | spacer
    public Layout layout = new Layout();
    public Style style = new Style();
    public String content; // solo si es texto
    public String componentName; // si es componente UI
    public List<RenderNode> children = new ArrayList<>();

    public static class Layout {
        public String direction; 
        public String align;
        public Integer padding;
        public Integer gap;
    }

    public static class Style {
        public Integer width;
        public Integer height;
        public String backgroundColor;
        public Integer borderRadius;
        public TextStyle text = new TextStyle();
    }

    public static class TextStyle {
        public Integer fontSize;
        public String fontWeight;
        public Integer lineHeight;
        public String color;
        public String align;
    }
}
