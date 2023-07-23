/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { memo } from "react";
// eslint-disable-next-line react-refresh/only-export-components
const Item = (props) => {
    const { el, addToBasket } = props;
    return (
        <article className='product'>
            <img src={el.img} alt={el.img.slice(0, -3)} className='product__photo' />
            <h3 className='product__title'>{el.title}</h3>
            <p className='product__category'>{el.category}</p>
            <div className='product__inner'>
                <p className='product__price'>{el.price}</p>
                <div
                    className='product__plus'
                    onClick={() => {
                        addToBasket(el);
                    }}
                >
                    Add
                </div>
            </div>
        </article>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default memo(Item);
