import React, {Component} from 'react'
import Layout from "./Layout";
import Container from './Container'
import styled from "styled-components";
import Link from 'next/link';
import DefaultButton from './DefaultButton'

const Banner = styled.div`
       background-color: #F6F7FA;
       height: 360px;
       padding: 80px 15px;
       color: #373A3C;
       font-size: 16px;
       line-height: 1.5;
    `;

const Heading = styled.h1`
      font-size: 40px;
      font-weight: 600;
      margin-bottom: 8px;
    `;

const MainPageButton = DefaultButton.extend`
    margin-top: 30px;
`



export default class MainPage extends Component {
    render() {
        return (
            <Layout>
                <Banner>
                    <Container>
                        <Heading>The easiest way to buy & sell Apps securely</Heading>
                        <p>This is a template for a simple marketing or informational website. It includes a large
                            callout
                            called a jumbotron and three supporting pieces of content.</p>
                        <Link><MainPageButton>Get started</MainPageButton></Link>
                        <Link><MainPageButton>How it works</MainPageButton></Link>
                    </Container>
                </Banner>
            </Layout>
        )
    }

}
