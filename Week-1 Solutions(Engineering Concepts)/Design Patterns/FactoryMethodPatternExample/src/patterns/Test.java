package patterns;

public class Test {
    public static void main(String[] args) {
        Document doc1 = DocumentFactory.getDocument("word");
        doc1.open(); // Output: Word Document opened

        Document doc2 = DocumentFactory.getDocument("pdf");
        doc2.open(); // Output: PDF Document opened

        Document doc3 = DocumentFactory.getDocument("excel");
        doc3.open(); // Output: Excel Document opened
    }
}
