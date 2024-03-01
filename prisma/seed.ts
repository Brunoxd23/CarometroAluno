// seed.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedDatabase() {
  try {
    await prisma.estudante.create({
      data: {
        ra: '123456',
        nome: 'Exemplo de Aluno',
        curso: 'Ciência da Computação',
        fotoUrl: 'https://caminho/para/a/imagem.jpg', // URL da imagem
      },
    });

    console.log('Dados de exemplo inseridos com sucesso!');
  } catch (error) {
    console.error('Erro ao inserir dados de exemplo:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedDatabase();
