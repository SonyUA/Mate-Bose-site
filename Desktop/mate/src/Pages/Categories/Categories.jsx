const Categories = () => {
    return (
        <section className='categories' id='categories'>
            <h2 className='categories__title'>
                Browse Bose <br /> products by category
            </h2>
            <article className='categori'>
                <div className='categori__photos'>
                    <img src='/images/categoris/Vector.png' alt='Vector' className='photo__wide' />
                    <img src='/images/categoris/v2.png' alt='V2' className='photo__square' />
                </div>
                <h3 className='categori__title'>Headphones & earbuds</h3>
            </article>
            <article className='categori'>
                <div className='categori__photos'>
                    <img src='/images/categoris/v3.png' alt='V3' className='photo__wide' />
                    <img src='/images/categoris/v4.png' alt='V4' className='photo__square' />
                </div>
                <h3 className='categori__title'>Speakers</h3>
            </article>
            <article className='categori'>
                <div className='categori__photos'>
                    <img src='/images/categoris/v5.png' alt='V5' className='photo__square' />
                    <img src='/images/categoris/v6.png' alt='V6' className='photo__wide' />
                </div>
                <h3 className='categori__title'>Audio sunglasses</h3>
            </article>
        </section>
    );
};

export default Categories;
