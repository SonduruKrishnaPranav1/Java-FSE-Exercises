package Test;

import static org.junit.Assert.*;

import org.junit.Test;

public class AdditionTest {
    @Test
    public void sampleAdditionTest() {
    	Main m = new Main();
    	int ans = m.sum(5, 6);
        assertEquals(11, ans);
    }
}
