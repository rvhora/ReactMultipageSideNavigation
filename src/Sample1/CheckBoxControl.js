import Checkbox from '@material-ui/core/Checkbox';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';

import React, { Component } from 'react'

export class CheckBoxControl extends Component {
    render() {
        const { checked } = this.props;
        return (
            <>
                <Checkbox
                    checked={checked}
                    icon={<CircleUnchecked style={{
                        width: '20px',
                        height: '20px'
                    }} />}
                    checkedIcon={<CheckCircleIcon style={{
                        color: 'green', width: '20px',
                        height: '20px'
                    }} />}
                    disableRipple

                />
            </>
        )
    }
}

export default CheckBoxControl


