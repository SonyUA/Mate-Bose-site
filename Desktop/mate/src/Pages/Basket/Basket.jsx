/* eslint-disable react-refresh/only-export-components */
import { useState, memo, useMemo, useContext } from "react";
import { FaWindowClose } from "react-icons/fa";
import { StateContext } from "../../App";
import { FuncContext } from "../../App";
/* eslint-disable react/prop-types */
const Basket = () => {
    const { setIsOpenBasket } = useContext(StateContext);
    const { basketData, addToBasket, decrement, deleteInBasket } = useContext(FuncContext);
    const [allSum, setAllSum] = useState(0);

    useMemo(() => {
        let newAllSum = basketData.reduce((sum, el) => {
            sum += el.price * el.count;
            return sum;
        }, 0);
        console.log("NewAllSum", newAllSum);
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
                        <div className='basket__img__box'>
                            <img src={el.image} alt={el.image.slice(0, -3)} className='basket__product__photo' />
                        </div>
                        <h3 className='basket__product__title'>{el.title}</h3>
                        <p className='basket__product__category'>{el.category}</p>
                        <div className='basket__product__inner'>
                            <p className='basket__product__price'>{el.price} $</p>
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
            </div>
        </section>
    );
};

export default memo(Basket);
