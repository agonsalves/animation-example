import React, {memo}       from 'react'
import Icon                from '../Basic/Icon'
import MotionDiv           from '../Basic/MotionDiv'
import {
    datalistClearIconStyle,
    datalistFieldIconStyle,
    datalistPersonFieldIconStyle
}                          from '../themes/datalists'
import {defaultFieldStyle} from '../themes/forms'

const InputIconToggle = memo((props) =>
    (!!props.isIconFade && (
        <MotionDiv
            initial="blur"
            animate={props.isFocusedInputLabel ? 'focus' : 'blur'}
            variants={{
                blur: {width: 'auto', opacity: 1},
                focus: {opacity: 0, width: 0}
            }}
            transition={{ease: 'easeOut', duration: .25}}
        >
            <Icon
                icon={props.inputIcon}
                theme={{...datalistFieldIconStyle, ...props.theme.icon}}
            />
        </MotionDiv>
    )) ||
    (!!props.isIconToggle && (
        (props.value.length > 0 && (
            <Icon
                icon={props.inputIcon}
                onClick={props.handleClear}
                theme={{...datalistClearIconStyle, ...props.theme.clearIcon}}
            />
        )) || (
            <Icon
                icon={props.inputIcon}
                theme={{...datalistPersonFieldIconStyle, ...props.theme.icon}}
                style={{transform: props['aria-expanded'] ? 'rotate(180deg)' : null}}
            />
        )
    )) || (
        <Icon icon={props.inputIcon} theme={{...defaultFieldStyle.icon, ...props.theme.icon}}/>
    )
)

export default InputIconToggle