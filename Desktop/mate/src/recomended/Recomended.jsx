/* eslint-disable react/prop-types */
import Item from "../item/Item";
import { products } from "../products/products";

const Recomended = (props) => {
    const { addToBasket } = props;
    return (
        <section className='recomended' id='recommended'>
            <h2 className='recomended__title'>Recommended</h2>
            <div className='recomended__products'>
                {products.map((el) => (
                    <Item key={el.id} el={el} addToBasket={addToBasket} />
                ))}
            </div>
        </section>
    );
};

export default Recomended;
