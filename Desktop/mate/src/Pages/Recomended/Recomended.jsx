/* eslint-disable react/prop-types */
import { memo } from "react";
import Item from "../../Components/item/Item";
import { products } from "../../Api/products";

// eslint-disable-next-line react-refresh/only-export-components
const Recomended = (props) => {
    const { addToBasket, basketData } = props;
    return (
        <section className='recomended' id='recommended'>
            <h2 className='recomended__title'>Recommended</h2>
            <div className='recomended__products'>
                {products.map((el) => (
                    <Item key={el.id} el={el} addToBasket={addToBasket} basketData={basketData} />
                ))}
            </div>
        </section>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default memo(Recomended);
