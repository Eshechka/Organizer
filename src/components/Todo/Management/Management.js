import React from 'react';
import {Container, Row} from "bootstrap-4-react/lib/components/layout";
import styles from './Management.module.css'
import Inputs from "./Inputs/Inputs";
import Buttons from "./Buttons/Buttons";
function Management({title,start,end,changeTitle,changeDateStart,changeDateEnd,click,window}) {
    return (
        <div className={styles.wap}>
            <Container>
                <Row >
                  <Inputs title={title} start={start} end={end} 
                  changeTitle={changeTitle} changeDateStart={changeDateStart} changeDateEnd={changeDateEnd}
                  />
                </Row>
                <Row>
                    <Buttons window={window} click={click}/>
                </Row>
            </Container>
        </div>
    );
}

export default Management;