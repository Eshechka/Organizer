import React from 'react';
import styles from './GoalsPage.module.css'
import {Col, Container, Row} from "bootstrap-4-react/lib/components/layout";
import PageName from "../Todo/PageName/PageName";
import ManagementGoals from "./ManagementGoals/ManagementGoals";
import Goals from "./ManagementGoals/Goals/Goals";
import TodoWindow from "../Todo/TodoWindow/TodoWindow";
import DateTimeContainer from "../Todo/DateTime/DateTimeContainer";
function GoalsPage(props) {
    return (
        <div className={styles.GoalsPage}>
            <Container>
                <Row>
                    <Col>
                        <DateTimeContainer/>
                    </Col>
                    <Col>
                        <PageName text='Список целей'/>
                    </Col>
                </Row>
                <Row className='justify-content-md-center'>
                    <ManagementGoals/>
                </Row>
                <Row className='justify-content-md-center'>
                    <ul className={styles.price}>
                        <Goals/>
                        <Goals/>
                        <Goals/>
                        <Goals/>
                    </ul>
                </Row>
                </Container>
            <TodoWindow/>
        </div>
    );
}

export default GoalsPage;