"use client"
import { useState, useEffect } from "react";
import CardBlog from "./groupCards/cardBlog";
import CardData from "./groupCards/cardData";
import CardTotal from "./groupCards/cardTotal";
import vagasData from "../../../data/vagas.json";

interface Vaga {
    site: string;
    imagem: string;
    data: string;
    vaga: string;
    code: string;
    detalhes: string[];
}

const ContainerCards = () => {
    const [vagasDados, setVagasDados] = useState<Vaga[]>([]);

    useEffect(() => {
        setVagasDados(vagasData);
    }, []);

    return ( 
        <div className="cardsDashboard flex justify-between gap-4">
            <CardTotal vagasDados={vagasDados}/>
            <CardData vagaDados={vagasDados}/>
            <CardBlog/>
        </div>
    );
}
 
export default ContainerCards;

