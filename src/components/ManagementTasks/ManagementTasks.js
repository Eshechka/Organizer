import React from "react";
import styles from "./ManagementTasks.module.scss";
import Inputs from "../Inputs/Inputs";
import Button from "../Button/Button";

function ManagementTasks({
                        title,
                        start,
                        end,
                        changeTitle,
                        changeDateStart,
                        changeDateEnd,
                        click,
                        window,
                        errors
                    }) {
    return (
        <div className={styles.planner}>
            <Inputs
                errors={errors}
                title={title}
                start={start}
                end={end}
                changeTitle={changeTitle}
                changeDateStart={changeDateStart}
                changeDateEnd={changeDateEnd}
            />

            <div className={styles.planner__buttons}>
                <Button click={window} text="Добавить" color="#000000"/>
                <Button click={click} text="Очистить" color="#192386"/>
            </div>
        </div>
    );
}

export default ManagementTasks;
