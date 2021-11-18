import React from 'react';
import styles from './Info.module.css'
import {useEffect} from 'react'
function Info({day,start,end,dayFunction,id}) {
    useEffect(() => {
       dayFunction(start,end,id)
    },[])

    return (
        <div className={styles.wap}>
            <p>{`${start.replaceAll('-','.')} - ${end.replaceAll('-','.')}`}</p>
            <div className={styles.wap_flex}>
                <p>осталось:</p>
                <p style={{color:day.color}}>{day.text}</p>
            </div>
        </div>
    );
}

export default Info