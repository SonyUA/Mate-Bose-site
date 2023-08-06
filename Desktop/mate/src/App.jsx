import { useState, memo, useCallback, useMemo, createContext } from "react";
import "./App.css";
import Categories from "./Pages/categories/Categories";
import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/Header/Header";
import Menu from "./Pages/Header/Menu";
import HowToBuy from "./Pages/How-to-buy/HowToBuy";
import Recomended from "./Pages/Recomended/Recomended";
import Basket from "./Pages/basket/Basket";
import { FaShoppingCart } from "react-icons/fa";

export const StateContext = createContext(null);
export const FuncContext = createContext();
// eslint-disable-next-line react-refresh/only-export-components
const App = () => {
    const [basketData, setBasketData] = useState([]);
    const [isOpenBasket, setIsOpenBasket] = useState(false);
    const [number, setNumber] = useState(0);

    useMemo(() => {
        let count = 0;
        basketData.forEach((el) => {
            count += Number(el.count);
        });
        return setNumber(count);
    }, [basketData]);

    const addToBasket = useCallback(
        (item) => {
            if (basketData.length === 0) {
                setBasketData([item]);
                setIsOpenBasket(false);
            }
            if (basketData.length > 0) {
                setBasketData(
                    basketData.map((el) => {
                        return el.id === item.id ? { ...el, count: el.count + 1 } : el;
                    })
                );
            }
            let isInBasket = basketData.some((el) => {
                return el.id === item.id;
            });
            isInBasket ? basketData : setBasketData([...basketData, item]);
        },
        [basketData]
    );

    const decrement = useCallback(
        (item) => {
            if (basketData.length > 0) {
                setBasketData(
                    basketData.map((el) => {
                        if (el.count > 0) {
                            return el.id === item.id ? { ...el, count: el.count - 1 } : el;
                        } else {
                            return el.id === item.id ? { ...el, count: (el.count = 0) } : el;
                        }
                    })
                );
            }
        },
        [basketData]
    );

    const deleteInBasket = useCallback(
        (item) => {
            setBasketData(
                basketData.filter((el) => {
                    return el.id !== item.id;
                })
            );
        },
        [basketData]
    );

    const states = { basketData, setIsOpenBasket };
    const functions = { basketData, addToBasket, decrement, deleteInBasket };

    return (
        <FuncContext.Provider value={functions}>
            <StateContext.Provider value={states}>
                <div id='Home'>
                    <Header />
                    <Menu />
                    <main className='main'>
                        <Recomended />
                        <Categories />
                        <HowToBuy />
                        {basketData.length > 0 && (
                            <div className='fa__box'>
                                <span className='fa__count'>{number}</span>
                                <FaShoppingCart
                                    className='ShoppingCart'
                                    onClick={() => {
                                        setIsOpenBasket(!isOpenBasket);
                                    }}
                                />
                            </div>
                        )}
                        {isOpenBasket && basketData.length > 0 && <Basket />}
                    </main>
                    <Footer />
                </div>
            </StateContext.Provider>
        </FuncContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default memo(App);
