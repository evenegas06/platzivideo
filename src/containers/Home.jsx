import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';

// const API = 'http://localhost:3000/initialState';

const Home = ({ mylist, trends, originals }) => {
    // const initialState = useInitialState(API);
    // return initialState.length === 0 ? <h1>Loading...</h1> : (
        return (
        <React.Fragment>
            <Search />
            {/* {initialState.mylist.length > 0 && */}
            {mylist.length > 0 &&
                <Categories title="Mi lista">
                    <Carousel>
                        {/* {initialState.mylist.map(item =>  */}
                        {mylist.map(item => 
                            <CarouselItem key={item.id} 
                                {...item}
                                isFavorite={true}
                            />
                        )}
                    </Carousel>
                </Categories>
            }
            

            <Categories title="Tendencias">
                <Carousel>
                    {/* {initialState.trends.map(item => */}
                    {trends.map(item =>
                        <CarouselItem key={item.id} {...item}/>
                    )}
                </Carousel>
            </Categories>

            <Categories title="Originales de PlatziVideo">
                <Carousel>
                    {/* {initialState.originals.map(item =>  */}
                    {originals.map(item => 
                        <CarouselItem key={item.id} {...item}/>
                    )}
                </Carousel>
            </Categories>
        </React.Fragment>
    );
};

const mapStateToProps = ( state ) => {
    return {
        mylist: state.mylist,
        trends: state.trends,
        originals: state.originals,
    };
};

// export default Home;
export default connect(mapStateToProps, null)(Home);