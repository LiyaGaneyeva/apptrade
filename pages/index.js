import React from 'react'
import {bindActionCreators} from 'redux'
import {initStore, startClock, addCount, serverRenderClock} from '../store'
import withRedux from 'next-redux-wrapper'
import {injectGlobal} from 'styled-components';
import MainPage from '../components/MainPage'

injectGlobal`
    body{
        margin: 0;
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
        font-size: 14px;
        font-weight: normal;
        position: relative;
        line-height: 1.4;
    }
   
    *,
    *:before,
    *:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    img{
        max-width: 100%;
    }
`;

class Counter extends React.Component {
    static getInitialProps({store, isServer}) {
        store.dispatch(serverRenderClock(isServer));
        store.dispatch(addCount());

        return {isServer}
    }

    componentDidMount() {
        this.timer = this.props.startClock()
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        return (
            <MainPage />
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCount: bindActionCreators(addCount, dispatch),
        startClock: bindActionCreators(startClock, dispatch)
    }
}

export default withRedux(initStore, null, mapDispatchToProps)(Counter)
