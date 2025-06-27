DELIMITER $$

CREATE PROCEDURE TransferFunds(
    IN source_account INT,
    IN target_account INT,
    IN amount DECIMAL(10,2)
)
BEGIN
    DECLARE current_balance DECIMAL(10,2);


    SELECT balance INTO current_balance
    FROM accounts
    WHERE account_id = source_account;

    IF current_balance >= amount THEN
        
        UPDATE accounts
        SET balance = balance - amount
        WHERE account_id = source_account;

      
        UPDATE accounts
        SET balance = balance + amount
        WHERE account_id = target_account;
    ELSE
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Insufficient balance in source account';
    END IF;
END $$

DELIMITER ;
