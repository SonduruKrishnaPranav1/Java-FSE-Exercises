package test;
import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggingTest {

    private static final Logger logger = LoggerFactory.getLogger(LoggingTest.class);

    @Test
    public void testLoggingInJUnit() {
        logger.error("JUnit Test: This is an error message");
        logger.warn("JUnit Test: This is a warning message");
        logger.info("JUnit Test: This is an info message");
    }
}
