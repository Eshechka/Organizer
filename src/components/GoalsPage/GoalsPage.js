import React from 'react';
import styles from './GoalsPage.module.css'
import {Col, Container, Row} from "bootstrap-4-react/lib/components/layout";
import PageName from "../Todo/PageName/PageName";
import ManagementGoals from "./ManagementGoals/ManagementGoals";
import TodoWindow from "../Todo/TodoWindow/TodoWindow";
import DateTimeContainer from "../Todo/DateTime/DateTimeContainer";
import Goals from './Goals/Goals';
function GoalsPage({dayFunction,openWindow,addGoals,goals,valueWindow,changeTitle,changeDate,changeTodo,valueTitle,valueDate,valueTodo}) {
    let objectForInput={
        changeTodo,
        changeTitle,
        changeDate,
        valueTodo,
        valueDate,
        valueTitle,
    }
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
                    <ManagementGoals  click={openWindow} inputs={objectForInput}/>
                </Row>
                <Row className='justify-content-md-center'>
                    <ul className={styles.price}>
                    {goals.map(el=><li key={el.id}><Goals dayFunction={dayFunction} goal={el}/></li>)}
                    </ul>
                </Row>
                </Container>
            {valueWindow===true ? <TodoWindow push={addGoals} window={openWindow}/>: null}
        </div>
    );
}

export default GoalsPage;