import { useEffect, useState } from 'react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function BookingItem() {
  const [nome, setNome] = useState('');
  const [aluno, setAluno] = useState(null);

  useEffect(() => {
    // Verifica se estamos no navegador antes de usar useState
    if (typeof window !== 'undefined') {
      const handleSearch = async () => {
        try {
          const alunoEncontrado = await prisma.estudante.findUnique({
            where: {
              nome,
            },
          });
          setAluno(alunoEncontrado);
        } catch (error) {
          console.error('Erro ao buscar aluno:', error);
        }
      };

      // Definindo handleSearch como uma função global disponível no navegador
      window.handleSearch = handleSearch;
    }
  }, [nome]);

  return (
    <div className="flex justify-center items-center h-screen">
      {/* Seção de pesquisa */}
      <div>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite o nome do aluno"
        />
        <button onClick={window.handleSearch}>Pesquisar</button>
      </div>

      {/* Exibição dos dados do aluno */}
      {aluno && (
        <div>
          <p>Matrícula: {aluno.ra}</p>
          <p>Nome: {aluno.nome}</p>
          <p>Curso: {aluno.curso}</p>
          <img src={aluno.fotoUrl} alt="Foto do Aluno" />
        </div>
      )}
    </div>
  );
}

export default BookingItem;
