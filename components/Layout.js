import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'


const Layout = (props) => (
    <div>
        <Head>
            <meta charSet="utf-8"/>
            <title>Title</title>
            <meta httpEquiv="X-UA-Compitable" content="IE-edge"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <Header/>
        {props.children}
        <Footer/>
    </div>
);

export default Layout