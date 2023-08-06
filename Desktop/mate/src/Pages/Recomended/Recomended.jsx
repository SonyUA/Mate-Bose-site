/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { StateContext } from "../../App";
import { FuncContext } from "../../App";
import Item from "../../Components/item/Item";

// eslint-disable-next-line react-refresh/only-export-components, no-unused-vars

const Recomended = () => {
    const { basketData } = useContext(StateContext);
    const { addToBasket } = useContext(FuncContext);
    const [dataApi, setDataApi] = useState([]);

    useEffect(() => {
        const getApi = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                if (!response) {
                    throw new Error("something terrible happened");
                }
                const data = await response.json();
                const newData = data.map((el) => {
                    return { ...el, count: 1 };
                });
                console.log("new", newData);
                setDataApi(newData);
            } catch (error) {
                console.log(error);
            }
        };
        getApi();
    }, []);

    return (
        <section className='recomended' id='recommended'>
            <h2 className='recomended__title'>Recommended</h2>
            <div className='recomended__products'>
                {dataApi.map((el) => (
                    <Item key={el.id} el={el} addToBasket={addToBasket} basketData={basketData} />
                ))}
            </div>
        </section>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default Recomended;
