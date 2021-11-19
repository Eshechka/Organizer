import React from 'react';
import styles from './ProfilePage.module.css'
import {Col, Container, Row} from "bootstrap-4-react/lib/components/layout";
import PageName from "../Todo/PageName/PageName";
import Button from "../Todo/Management/Buttons/Button/Button";
import WindowProfile from "./WindowPfile/WindowProfile";
import DateTimeContainer from "../Todo/DateTime/DateTimeContainer";
function ProfilePage() {
    return (
        <div className={styles.background}>
            <Container>
                <Row>
                    <Col>
                        <DateTimeContainer/>
                    </Col>
                    <Col>
                        <PageName text="Профиль"/>
                    </Col>
                </Row>
                <h2 className={styles.title}>Добро пожаловать, Максим</h2>

                <div className={styles.wap}>
                    <p className={styles.p}>Ваш логин:</p>
                    <input className={styles.input} type="text"/>
                    <Button text='Изменить'/>
                </div>
                <div className={styles.wap}>
                    <p className={styles.p}>Ваш пароль:</p>
                    <input className={styles.input} type="password"/>
                    <Button text='Изменить'/>
                </div>
                <div className={styles.wap_button}>
                <Button text='Удалить профиль' color="#141F84"/>
                </div>
            </Container>
            {/*пока нет функционала, поэтому я убрал окно что бы оно не показывалось*/}
            {/*{<WindowProfile/>}*/}
        </div>
    );
}

export default ProfilePage;