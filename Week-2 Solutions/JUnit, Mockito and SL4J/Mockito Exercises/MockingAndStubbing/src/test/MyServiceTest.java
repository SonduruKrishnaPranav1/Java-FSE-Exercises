package test;
import org.junit.Test;
import static org.mockito.Mockito.*;   // ✅ This is REQUIRED for 'mock()' and 'when()'
import static org.junit.Assert.*;      // ✅ For 'assertEquals()'

public class MyServiceTest {

    @Test
    public void testExternalApi() {
        // Create a mock
        ExternalApi mockApi = mock(ExternalApi.class);

        // Stub the method correctly using when()
        when(mockApi.getData()).thenReturn("Mock Data");

        // Inject into service
        MyService service = new MyService(mockApi);
        String result = service.fetchData();

        // Assert result
        assertEquals("Mock Data", result);
    }
}
