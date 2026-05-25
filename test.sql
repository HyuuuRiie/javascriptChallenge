SELECT p.*
FROM T_POLICY p
JOIN T_CLIENT c ON p.CLIENT_NUMBER = c.CLIENT_NUMBER
WHERE p.POLICY_SUBMIT_DATE > '2018-01-15'
  AND MONTH(c.BIRTH_DATE) = 9;
  
----------------------------------------------------------------------------------------------------------------

SELECT p.*
FROM T_POLICY p
JOIN T_AGENT a ON p.AGENT_CODE = a.AGENT_CODE
WHERE p.POLICY_STATUS = 'INFORCE'
  AND a.AGENT_OFFICE = 'JAKARTA';
  
----------------------------------------------------------------------------------------------------------------

UPDATE T_AGENT a
SET a.BASIC_COMMISSION = (
    SELECT ROUND((SUM(p.COMMISSION) / SUM(p.PREMIUM)) * 100, 2)
    FROM T_POLICY p
    WHERE p.AGENT_CODE = a.AGENT_CODE
);

----------------------------------------------------------------------------------------------------------------

UPDATE T_POLICY
SET POLICY_DUE_DATE = LAST_DAY(DATE_ADD(POLICY_SUBMIT_DATE, INTERVAL 30 DAY));

----------------------------------------------------------------------------------------------------------------

SELECT 
    a.AGENT_CODE,
    a.AGENT_NAME,
    p.POLICY_NUMBER,
    p.PREMIUM,
    p.DISCOUNT,
    (p.PREMIUM - (p.PREMIUM * p.DISCOUNT / 100)) AS NET_PREMIUM
FROM T_POLICY p
JOIN T_AGENT a ON p.AGENT_CODE = a.AGENT_CODE
WHERE (p.PREMIUM - (p.PREMIUM * p.DISCOUNT / 100)) < 1000000
ORDER BY NET_PREMIUM ASC;