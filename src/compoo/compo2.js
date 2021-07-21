import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../redux/slice';
import { Link } from 'react-router-dom';

export default function Compo(props){
    const count = useSelector((state) => state.ss.value);
    const dispatch = useDispatch()
    return (<>
    <div>two</div>
    {count}
    <button onClick={(e)=>{
        dispatch(increment());
    }}>go</button>
    <Link to ="/one">go</Link>
    </>)
}