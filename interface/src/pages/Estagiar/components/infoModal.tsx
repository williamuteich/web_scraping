interface MoreInfoProps{
  codeVaga: string;
  detalheVaga: string;
}

const MoreInfo: React.FC<MoreInfoProps> = ({codeVaga, detalheVaga}) => {
  console.log('tá recebendo isso aqui:', detalheVaga)
  return ( 
    <div className="">
      <div className="border border-gray-600 border-solid p-4">
        <span className="text-black">{detalheVaga[0]}</span>
      </div>
      <div className="border border-gray-800 border-solid p-4">
        <span className="text-black">{detalheVaga[1]}</span>
      </div>
      <div className="border border-gray-800 border-solid p-4">
        <span className="text-black">{detalheVaga[2]}</span>
      </div>
      <div className="border border-gray-800 border-solid p-4">
        <span className="text-black">{detalheVaga[3]}</span>
      </div>
    </div>
   );
}
 
export default MoreInfo;