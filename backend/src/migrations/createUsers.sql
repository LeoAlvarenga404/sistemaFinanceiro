CREATE DATATABLE dtb_sistema_financeiro;

CREATE TABLE Users (
    user_id INT PRIMARY KEY IDENTITY(1,1), 
    name NVARCHAR(100) NOT NULL,             
    email NVARCHAR(100) NOT NULL UNIQUE,     
    password NVARCHAR(255) NOT NULL,            
    date_birthday DATE NULL,                
    cell NVARCHAR(20) NULL,              
    create_at DATETIME DEFAULT GETDATE(),  
    role NVARCHAR(20) DEFAULT 'User',             
)
