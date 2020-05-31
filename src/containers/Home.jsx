import React,{useState,useEffect} from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
/*import useInitialState from '../Hooks/useInitialState';*/
import '../assets/styles/App.scss';

/*cuando se necesita hooks const API='http://localhost:3000/initalState/';*/

const Home = ({myList,trends,originals}) => {
    /*Uso de hooks const initialState = useInitialState(API);*/
    return /* validacion de si tengo o no datos en la api initialState.length === 0 ? <h1>Loading...</h1> : */(
        <>
            <Header />
            <Search />
        {myList.length > 0 &&
        <Categories title="Mi Lista">
            <Carousel>
            {myList.map(item =>
                <CarouselItem
                key={item.id}
                {...item}
                isList
                />
            )}
            </Carousel>
        </Categories>
        }
        <Categories title="Tendencias">
        <Carousel>
            {trends.map(item =>
            <CarouselItem key={item.id} {...item} />
            )}
        </Carousel>
        </Categories>
        <Categories title="Originales de Platzi Video">
        <Carousel>
            {originals.map(item =>
            <CarouselItem key={item.id} {...item} />
            )}
        </Carousel>
        </Categories>
    </>
    );
}

const mapStateToProps=state=>{
    return{
        myList:state.myList,
        trends:state.trends,
        originals:state.originals,
    }
}
//export default connect(props, actions)(Home);
export default connect(mapStateToProps, null)(Home);