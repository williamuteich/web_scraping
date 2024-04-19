import CardBlog from "./groupCards/cardBlog";
import CardData from "./groupCards/cardData";
import CardTotal from "./groupCards/cardTotal";

const containerCards = () => {
    return ( 
        <div className="flex justify-between gap-4">
            <CardTotal/>
            <CardData/>
            <CardBlog/>
        </div>
     );
}
 
export default containerCards;