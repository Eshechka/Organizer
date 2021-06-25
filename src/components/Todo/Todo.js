import React from 'react';
import styles from './Todo.module.css'
import PageName from "./PageName/PageName";
import {Col, Container, Row} from "bootstrap-4-react/lib/components/layout";
import TodoList from "./TodoList/TodoList";
import TodoWindow from "./TodoWindow/TodoWindow";
import DateTimeContainer from "./DateTime/DateTimeContainer";
import ManagementContainer from './Management/ManegementContainer';
function Todo({valueWindow,todoList,dayFunction,click,window,push,check}) {
  
    return (
        <div className={styles.background}>
            <Container>
                <Row>
                    <Col>
                        <DateTimeContainer/>
                    </Col>
                    <Col>
                        <PageName text='Список дел'/>
                    </Col>
                </Row>
                <Row className='justify-content-md-center'>
                    <ManagementContainer/>
                </Row>
                <Row className='justify-content-md-center'>
                    <ul>
                        {todoList.map(el=><li key={el.id}><TodoList id={el.id} click={click} dayFunction={dayFunction} el={el} /></li>)}
                    </ul>
                </Row>
            </Container>
            {valueWindow===true?<TodoWindow check={check}push={push} window={window}/>:null }
        </div>
    );
}

export default Todo;