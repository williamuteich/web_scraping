// FiltrosVaga.tsx
import React from 'react';

interface FiltrosVagaProps {
  vagas: any[]; 
  setVagasFiltradas: React.Dispatch<React.SetStateAction<any[]>>;
}

const FiltrosVaga: React.FC<FiltrosVagaProps> = ({ vagas, setVagasFiltradas }) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value;
    if (selectedOption === 'select') {
      setVagasFiltradas(vagas);
    } else {
      const filteredVagas = vagas.filter(vaga => vaga.vaga.toLowerCase().includes(selectedOption.toLowerCase()));
      setVagasFiltradas(filteredVagas);
    }
  };

  const opcoes = vagas.map(vaga => vaga.vaga);
  const opcoesUnicas = opcoes.filter((v, i, a) => a.indexOf(v) === i);
  const tratamento = opcoesUnicas.map((str: string) => str.split('-')[2]);

  return ( 
    <div>
      <select 
        style={{ maxWidth: '200px' }} 
        className="bg-white border border-solid rounded-lg py-1 px-4 pr-2 outline-none focus:ring-1 focus:ring-[var(--corPrincipal)] focus:ring-opacity-50 w-full text-gray-500 text-base"
        onChange={handleSelectChange}
      >
        <option value="select">Todos</option>
        {tratamento.map((tratamento, index) => (
          <option key={index} value={tratamento} className="text-gray-700">{tratamento}</option>
        ))}
      </select>
    </div>
  );
};

export default FiltrosVaga;
