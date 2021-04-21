import React from 'react'
import {messageDataType} from './HW1'
import style from './Message.module.css'

function Message(props: messageDataType) {
    return (
        <div className={style.message}>
            <img src={props.avatar} alt={'Bob'}/>

            <div className={style.angle}/>

            <div className={style.input}>
                <p className={style.name}>{props.name}</p>
                <p className={style.messageText}>{props.message}</p>
                <p className={style.date}>{props.time}</p>
            </div>
        </div>
    )
}

export default Message
