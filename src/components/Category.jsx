import React from 'react'
import Categories from './Categories'
import { useState } from 'react';

const Category = () => {

    const [data, setData] = useState(Categories);

    const filterResult=(catItem)=>{
        const result=Categories.filter((curDate)=>{
            return curDate.category === catItem;
        });
        setData(result);
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Filter by Category</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <button className="btn" onClick={()=>setData(Categories)}>All</button>
                        <button className="btn" onClick={()=>filterResult('Men')}>Men</button>
                        <button className="btn" onClick={()=>filterResult('Women')}>Woman</button>
                        <button className="btn" onClick={()=>filterResult('Kids')}>Kids</button>

                    </div>


                    <div className="col">
                        <div className="cards">

                            {data.map((values) => {
                                const {id, title, price, image} = values;
                                return (
                                    <>
                                        <div className="card" key={id}>
                                            <div className="card-header">
                                                <img src={image} alt="" />
                                            </div>
                                            <div className="card-body">
                                                <h2 className="titleProduct">{title}</h2>
                                                <span className="price">${price}</span>
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                            )}




                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Category