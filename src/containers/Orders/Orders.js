import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import Order from '../../components/Order/Order';
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios-orders';
import * as actions from '../../store/actions/index';

const Orders = props => {
    useEffect(() => {
        props.onFetchOrders(props.token, props.userId);
    }, []);

    let orders = <div>
        {props.orders.map(order => (
            <Order
                key={order.id}
                ingredients={order.ingredients}
                price={+order.price}/>
        ))}
    </div>;
    if (props.loading) {
        orders = <Spinner/>;
    }

    return (
        <div>
            {orders}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));
