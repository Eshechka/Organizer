import React from 'react';
import styles from './Nav.module.css'
import icon1 from '../../img/icon1.png'
import icon2 from '../../img/icon2.png'
import icon3 from '../../img/icon3.png'
import {Col, Container, Row} from "bootstrap-4-react/lib/components/layout";
import {NavLink} from "react-router-dom";

function Nav({user}) {

    return (
        <div className={styles.nav}>
            <Container>
                <Row>
                    <Col>
                        <ul className={styles.list}>
                            <li className={styles.element} style={{
                                opacity: user === false ? 0.4 : 1,
                            }}>
                                <NavLink to='/do'>
                                    <img src={icon1} alt="icon1"/>
                                    <p>Список дел</p>
                                </NavLink>
                            </li>
                            <li className={styles.element} style={{
                                opacity: user === false ? 0.4 : 1,
                            }}>
                                <NavLink to="/purposes">
                                    <img src={icon2} alt="icon2"/>
                                    <p>Список целей</p>
                                </NavLink>
                            </li>
                            <li className={styles.element} style={{
                                opacity: user === false ? 0.4 : 1,
                            }}>
                                <NavLink to='/profile'>
                                    <img src={icon3} alt="icon3"/>
                                    <p>Профиль</p>
                                </NavLink>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Nav;
