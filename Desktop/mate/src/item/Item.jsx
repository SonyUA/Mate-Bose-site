/* eslint-disable react/prop-types */
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
                    +
                </div>
            </div>
        </article>
    );
};

export default Item;
