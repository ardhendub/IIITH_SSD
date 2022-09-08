{\rtf1\ansi\ansicpg1252\cocoartf2639
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 CREATE DEFINER=`root`@`localhost` PROCEDURE `agent`()\
BEGIN\
	DECLARE done INT DEFAULT FALSE;\
	DECLARE custName varchar(40);\
	DECLARE cityName varchar(35);\
	DECLARE custCountry varchar(20);\
	DECLARE custGrade decimal(10,0);\
	DECLARE custCode varchar(6);\
	DECLARE cursor_row CURSOR FOR SELECT CUST_NAME,CUST_CITY,CUST_COUNTRY,GRADE,AGENT_CODE from customer;\
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;\
	\
    OPEN cursor_row;\
    \
    read_loop: LOOP\
		FETCH NEXT FROM cursor_row INTO custName,cityName,custCountry,custGrade,custCode;\
		IF done THEN\
			LEAVE read_loop;\
		END IF;\
        if (custcode like "A00%") THEN\
        select custName,cityName,custCountry where custCode like "A00%";\
        END IF;\
    END LOOP;\
    \
    CLOSE cursor_row;\
END}