import CardIndiceMonth from "./cardsGraficos/cardIndiceMonth";
import CardIndiceVagas from "./cardsGraficos/cardindiceVagas/cardIndiceVagas";

const InforCards = () => {
    return ( 
        <div className="contentGrafico flex flex-col lg:flex-row gap-4">
            <CardIndiceMonth/>
            <CardIndiceVagas/>
        </div>
     );
}
 
export default InforCards;