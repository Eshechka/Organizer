import React from 'react';
import styles from './ManagementGoals.module.css'
import {Col, Container, Row} from "bootstrap-4-react/lib/components/layout";
import Button from "../../Todo/Management/Buttons/Button/Button";

function ManagementGoals({inputs, click}) {

    return (
        <div className={styles.container}>
            <Container>
                <Row className='justify-content-md-center'>
                    <input className={`${styles.title} `} type="text" onChange={inputs.changeTitle}
                           value={inputs.valueTitle} placeholder='Название цели'/>
                </Row>
                <Row className='margin-top'>
                    <Col>
                        <div className={styles.wap_left}>
                            <p className={styles.text}>Конечная дата для<br/>
                                достижения<br/>
                                заданной цели</p>
                            <input className={styles.title} onChange={inputs.changeDate} value={inputs.valueDate}
                                   type='date'/>
                        </div>
                    </Col>
                    <Col>
                        <div className={styles.wap}>
                            <p className={`${styles.text} ${styles.text_left}`}>Перечислите название этапов<br/>
                                для достижения цели через запятую<br/>
                                если они есть</p>
                            <textarea className={styles.textarea} onChange={inputs.changeTodo} value={inputs.valueTodo}
                                      cols="30" rows="10"/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.flex_buttons}>
                            <Button click={click} text='Добавить'/>
                            <Button text='Отчистить' color='#192386'/>
                        </div>
                    </Col>
                </Row>

            </Container>

        </div>
    );
}

export default ManagementGoals;