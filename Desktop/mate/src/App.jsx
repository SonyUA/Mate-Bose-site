import { useEffect, useState } from "react";
import "./App.css";
import Categories from "./categories/Categories";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Menu from "./header/Menu";
import HowToBuy from "./how-to-buy/HowToBuy";
import Recomended from "./recomended/Recomended";
import Basket from "./basket/Basket";
import { FaShoppingCart } from "react-icons/fa";
const App = () => {
    const [basketData, setBasketData] = useState([]);
    const [isOpenBasket, setIsOpenBasket] = useState(false);
    const [number, setNumber] = useState(0);
    useEffect(() => {
        const CountTheNumber = () => {
            let count = 0;
            basketData.forEach((el) => {
                count += Number(el.count);
            });
            setNumber(count);
        };
        CountTheNumber();
    }, [basketData]);
    const addToBasket = (item) => {
        if (basketData.length === 0) {
            setBasketData([item]);
            setIsOpenBasket(false);
        }
        if (basketData.length > 0) {
            let newData = [];
            newData = basketData.map((el) => {
                return el.id === item.id ? { ...el, count: el.count + 1 } : el;
            });
            setBasketData(newData);
        }
        let isInBasket = basketData.some((el) => {
            return el.id === item.id;
        });
        isInBasket ? basketData : setBasketData([...basketData, item]);
    };
    const decrement = (item) => {
        if (basketData.length > 0) {
            let newData = [];
            newData = basketData.map((el) => {
                if (el.count > 0) {
                    return el.id === item.id ? { ...el, count: el.count - 1 } : el;
                } else {
                    return el.id === item.id ? { ...el, count: (el.count = 0) } : el;
                }
            });
            setBasketData(newData);
        }
    };
    const deleteInBasket = (item) => {
        let newData = [];
        newData = basketData.filter((el) => {
            return el.id !== item.id;
        });
        setBasketData(newData);
    };

    return (
        <div id='Home'>
            <Header />
            <Menu />
            <main className='main'>
                <Recomended addToBasket={addToBasket} />
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
                {isOpenBasket && basketData.length > 0 && (
                    <Basket basketData={basketData} addToBasket={addToBasket} decrement={decrement} deleteInBasket={deleteInBasket} setIsOpenBasket={setIsOpenBasket} />
                )}
            </main>
            <Footer />
        </div>
    );
};

export default App;
