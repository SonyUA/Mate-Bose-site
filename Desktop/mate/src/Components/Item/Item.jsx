/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { memo, useState } from "react";
// eslint-disable-next-line react-refresh/only-export-components
const Item = (props) => {
    const { el, addToBasket, basketData } = props;
    const [added, setAdded] = useState(true);
    return (
        <article className='product'>
            <div className='product__img__box'>
                <img src={el.image} alt={el.image.slice(0, -3)} className='product__photo' />
            </div>
            <h3 className='product__title'>{el.title}</h3>
            <p className='product__category'>{el.category}</p>
            <div className='product__inner'>
                <p className='product__price'>{el.price}</p>
                <div
                    className='product__plus'
                    onClick={() => {
                        setAdded(false);
                        addToBasket(el);
                    }}
                >
                    {added || basketData.length === 0 ? "Add" : "Added"}
                </div>
            </div>
        </article>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default memo(Item);
