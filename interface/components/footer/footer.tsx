import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="text-gray-300 p-8 rounded-md" style={{background: '#182237'}}>
            <div className="flex gap-6 ">
                <div className="w-full lg:w-1/3 mb-4 md:mb-0 text-left lg:text-center">
                    <img src="/vagaonlines.png" alt="VagaOnline" className="h-16 mb-2" />
                    <p className="text-sm" style={{maxWidth: '200px', lineHeight: '125%'}}>Todas as vagas são obtidas através de web scraping e são propriedade dos respectivos sites.</p>
                    <div className="flex justify-center mt-4" style={{maxWidth: '200px'}}>
                        <a href="https://github.com/williamuteich?tab=repositories" target="_blank" className="text-white hover:underline mx-2">
                            <FaGithub size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/william-u-96ab6b216" target="_blank" className="text-white hover:underline mx-2">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="mailto:williamuteich14@gmail.com" className="text-white hover:underline mx-2">
                            <FaEnvelope size={24} />
                        </a>
                    </div>
                </div>
                <div className="w-full mb-4 md:mb-0 text-center flex gap-10 justify-center ">
                    <div className="mb-4 flex flex-col gap-1 w-2/5">
                        <p className="text-white hover:underline text-left text-base">• Tecnologias</p>
                        <p className="text-sm text-left">Python: Utilizado para realizar web scraping e coletar os dados das vagas dos sites.</p>
                        <p className="text-sm text-left">JavaScript (ReactJS/Next.js): Utilizado para desenvolver a interface do usuário e exibir as vagas coletadas de forma eficiente.</p>
                        <p className="text-sm text-left">Tailwind CSS: Utilizado para estilizar a interface do usuário de forma rápida e eficiente.</p>
                    </div>
                    <div className="mb-4 flex flex-col gap-1 w-2/5">
                        <p className="text-white hover:underline text-left text-base">• Sobre o Projeto</p>
                        <p className="text-sm text-left">
                            Este projeto surge como resposta à complexidade frequentemente enfrentada pelos estudantes na busca por oportunidades de estágio. 
                            Ao concentrar-se na simplicidade e acessibilidade, busca-se democratizar o acesso a informações valiosas sobre vagas de estágio,
                            proporcionando uma plataforma intuitiva e centralizada para explorar essas oportunidades.
                        </p>
                    </div>
                    <div className="mb-4 flex flex-col gap-1 w-2/5">
                        <p className="text-white hover:underline text-left text-base">• Objetivo</p>
                        <p className="text-sm text-left">O objetivo deste projeto é facilitar o acesso a vagas de estágio disponíveis nos sites Estagiar e LinkedIn, fornecendo uma plataforma centralizada para os usuários encontrarem oportunidades de estágio.</p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto mt-4 text-xs text-center mt-8 ">
                <p>&copy; 2024 Projeto Web Scraping. Todos os direitos reservados </p>
                <p>Desenvolvido por William Uteich</p>
            </div>
        </footer>
    );
}

export default Footer;
