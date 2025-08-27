-- Aula 3 - Node.js + Express.js + SQL Server
-- Script SQL para criação do banco de dados bd_aula3


-- 1. Criar o banco de dados
CREATE DATABASE bd_aula3;
GO

-- 2. Usar o banco de dados criado
USE bd_aula3;
GO

-- 3. Criar a tabela cliente
CREATE TABLE cliente (
    id_cliente INT IDENTITY(1,1) PRIMARY KEY,
    nome_cliente VARCHAR(100) NOT NULL
);
GO

-- 4. Inserir dados de exemplo
INSERT INTO cliente (nome_cliente) VALUES 
    ('João Silva'),
    ('Maria Santos'),
    ('Pedro Oliveira');
GO

-- 5. Verificar os dados inseridos
SELECT * FROM cliente;
GO

-- Comandos opcionais para verificação:
-- SELECT COUNT(*) as total_clientes FROM cliente;
-- SELECT TOP 1 * FROM cliente ORDER BY id_cliente DESC;
