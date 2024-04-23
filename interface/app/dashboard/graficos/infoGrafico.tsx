import CardIndiceMonth from "./cardsGraficos/cardIndiceMonth";
import CardIndiceVagas from "./cardsGraficos/cardIndiceVagas";

const InforCards = () => {
    return ( 
        <div className="flex justify-between gap-4">
            <CardIndiceMonth/>
            <CardIndiceVagas/>
        </div>
     );
}
 
export default InforCards;