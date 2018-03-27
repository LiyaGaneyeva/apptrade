import React, {Component} from 'react'
import styled from 'styled-components';
import Container from './Container'
import Link from 'next/link';

const HeaderWrapper = styled.header`
  width: 100%;
  height: 56px;
  z-index: 99;
  background-color: #D3D5E4;
  display: flex;
  color: #535456;
`;


const Logo = styled.div`
  padding: 13px 15px;
  float: left;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 700;
  display: inline-block;
`;

const MenuLink = styled.a`
  display: inline-block;
  font-size: 16px;  
  text-decoration: none;
  color: #535456;
  padding: 16px 20px;
  float: right;
`

const LeftMenuLink = MenuLink.extend`
    float: left;
`
/*const Button = styled.button`
  font-size: ${({ big }) => (big ? 3 : 1)}em;
`;

// it is bad because big prop will be passed to dom
const ButtonLink = Button.withComponent('a').extend`
    //style
`;
const ButtonLinkBig = Button.withComponent(({ big, ...props }) => <a {...props} />).extend`
    //style
`;

//use only in emergency case
const StyledButtonLink = styled(({ color, big, ...props }) => <ButtonLink {...props} />)`
    color: ${({ color }) => color};
`;*/

class Header extends Component {

    render() {
        return (
            <HeaderWrapper>
                <Container>
                    <Logo>Logotype</Logo>
                    <Link prefetch href="#"><LeftMenuLink href="">Buy Apps</LeftMenuLink></Link>
                    <Link prefetch href="#"><MenuLink href="">Log In</MenuLink></Link>
                    <Link prefetch href="#"><MenuLink href="">Sign Up</MenuLink></Link>
                    <Link prefetch href="#"><MenuLink href="">FAQ</MenuLink></Link>
                </Container>

            </HeaderWrapper>

        )

    }
}


export default Header