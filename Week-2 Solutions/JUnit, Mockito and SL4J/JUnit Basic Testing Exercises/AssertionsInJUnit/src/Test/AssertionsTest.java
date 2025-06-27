package Test;
import org.junit.Test;
import static org.junit.Assert.*;

public class AssertionsTest {

    @Test
    public void testAssertions() {
        int expected = 5;
        int actual = 2 + 3;

        assertEquals(expected, actual);

        assertTrue(5 > 3);

        assertFalse(5 < 3);

        Object obj = null;
        assertNull(obj);

        Object notNullObj = new Object();
        assertNotNull(notNullObj);
    }
}
