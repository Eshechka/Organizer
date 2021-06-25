import React from 'react';
import {Col, Container, Row} from "bootstrap-4-react/lib/components/layout";
import logo from '../../img/logo.png';
import styles from './Header.module.css'

export default function Header({user, click}) {

    return (
        <div className={styles.header}>
            <Container>
                <Row>
                    <Col>
                        <img src={logo} alt="logo" className={styles.logo}/>
                    </Col>
                    <Col>
                        <h1 className={styles.title}>Онлайн Органайзер</h1>
                    </Col>
                    <Col>
                        {user === true ? <div className={styles.wap}>
                            <p onClick={click}>Выйти</p>
                        </div> : <div className={styles.wap}>
                            <p onClick={click}>Вход</p>
                            <p onClick={click}>Регистрация</p>
                        </div>}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

