import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { getMetricMetaData } from '../utils/helpers'
import Slider from './Slider'
import Stepper from './Stepper'

function AddEntry() {
    const [data, setData] = useState({run: 0, bike: 0, swim: 0, eat: 0, sleep: 0});

    function increment(metric) {
        const { max, step } = getMetricMetaData(metric);
        const count = data[metric] + step;
        setData(() => data[metric] > max ? data[metric] : data[metric] = count)
    }
    function decrement(metric) {
        const { step } = getMetricMetaData(metric);
        const count = data[metric] - step;
        setData(() => data[metric] <= 0  ? 0 : data[metric] = count)
    }

    function slide(metric, value) {
        setData(() => data[metric] = value)
    }

    const metaData = getMetricMetaData()

    return (
        <View>
            {Object.keys(metaData).map((key) => {
                const { getIcon, type, ...rest } = getMetricMetaData(key);
                const value = data[key];
                return (
                    <View>
                        {getIcon()}
                        {type === 'steppers'
                        ? <Stepper
                        value={value}
                        onIncrement={() => increment(key)}
                        onDecrement={() => decrement(key)}
                        {...rest} />
                        : <Slider
                        value={value}
                        onChange={() => slide(key, value)}
                        {...rest}/>
                    }
                    </View>
                )
            })
        }
        </View>

    )
}

export default AddEntry;