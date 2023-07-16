import { useEffect, useState } from "react";
import { FaWindowClose } from "react-icons/fa";

/* eslint-disable react/prop-types */
const Basket = (props) => {
    const { basketData, addToBasket, decrement, deleteInBasket, setIsOpenBasket } = props;
    const [allSum, setAllSum] = useState(0);
    useEffect(() => {
        let newAllSum = 0;
        basketData.forEach((el) => {
            newAllSum += Number(el.price.slice(1) * el.count);
        });
        setAllSum(newAllSum);
    }, [basketData]);
    return (
        <section className='basket'>
            <div className='basket__inner'>
                <FaWindowClose
                    className='basket__close'
                    onClick={() => {
                        setIsOpenBasket(false);
                    }}
                />
                {basketData.map((el) => (
                    <article key={el.id} className='basket__product'>
                        <img src={el.img} alt={el.img.slice(0, -3)} className='basket__product__photo' />
                        <h3 className='basket__product__title'>{el.title}</h3>
                        <p className='basket__product__category'>{el.category}</p>
                        <div className='basket__product__inner'>
                            <p className='basket__product__price'>{el.price}</p>
                        </div>
                        <p>
                            <span
                                onClick={() => {
                                    addToBasket(el);
                                }}
                                className='basket__plus'
                            >
                                +
                            </span>
                            <span className='basket__count'>{el.count}</span>
                            <span
                                onClick={() => {
                                    decrement(el);
                                }}
                                className='basket__minus'
                            >
                                -
                            </span>
                        </p>
                        <button
                            className='basket__delete'
                            onClick={() => {
                                deleteInBasket(el);
                            }}
                        >
                            Delete
                        </button>
                    </article>
                ))}
                <div>ALL {allSum} $</div>
                {basketData.length === 0 && <div>Корзина пуста</div>}
            </div>
        </section>
    );
};

export default Basket;
