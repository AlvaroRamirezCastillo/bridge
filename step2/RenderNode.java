public class RenderNode {
    public String id;
    public String name;
    public String type; // container | text | image | component | spacer
    public Layout layout = new Layout();
    public Style style = new Style();
    public String content; // solo si es text
    public String componentName; // si es un componente UI de Figma
    public List<RenderNode> children = new ArrayList<>();

    public static class Layout {
        public String direction; // row | column
        public String align; // center | start | end | space-between | ...
        public Integer padding; // promedio para simplificar
        public Integer gap; // spacing entre hijos
    }

    public static class Style {
        public Integer width;
        public Integer height;
        public String backgroundColor; // rgba format
        public Integer borderRadius;

        public TextStyle text = new TextStyle();
    }

    public static class TextStyle {
        public Integer fontSize;
        public String fontWeight;
        public String color;
        public String align;
    }
}
