DECLARE
  v_due_date loans.due_date%TYPE;
  v_customer_name customers.name%TYPE;
BEGIN
  FOR rec IN (
    SELECT c.name AS customer_name, l.due_date
    FROM loans l
    JOIN customers c ON l.customer_id = c.customer_id
    WHERE l.due_date BETWEEN SYSDATE AND SYSDATE + 30
  ) LOOP
    DBMS_OUTPUT.PUT_LINE('Reminder: Loan due on ' || TO_CHAR(rec.due_date, 'DD-MON-YYYY') || 
                         ' for customer: ' || rec.customer_name);
  END LOOP;
END;