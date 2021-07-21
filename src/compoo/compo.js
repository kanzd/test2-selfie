import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { decrement, increment } from '../redux/slice';

export default function Compo(props){
    const count = useSelector((state) => state.ss.value);
    const dispatch = useDispatch()
    return (<>
    <div>one</div>
    {count}
    <button onClick={(e)=>{
        dispatch(increment());
    }}>go</button>
    <Link to ="/two">go</Link>
    </>)
}