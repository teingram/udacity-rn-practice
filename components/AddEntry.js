import React, { useState } from 'react'
import { View, Text } from 'react-native'

import { getMetricMetaData, timeToString } from '../utils/helpers'
import DateHeader from './DateHeader'
import SliderComponent from './Slider'
import Stepper from './Stepper'
import SubmitBtn from './SubmitBtn'

function AddEntry() {
    const [data, setData] = useState({run: 10, bike: 0, swim: 0, eat: 0, sleep: 0});

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
        const newState = {...data, [metric]: value}
        setData(newState)
    }

    function submit() {
        const key = timeToString();
        const newState = {run: 0, bike: 0, swim: 0, eat: 0, sleep: 0}
        // update redux
        // navigate to home screen
        // save to database
        // clear notice
        setData(newState)
    }

    const metaData = getMetricMetaData()

    return (
        <View>
            <DateHeader date={new Date().toLocaleDateString()}/>
            <Text>{JSON.stringify(data)}</Text>
            {Object.keys(metaData).map((key) => {
                const { getIcon, type, ...rest } = getMetricMetaData(key);
                const value = data[key];
                return (
                    <View key={key}>
                        {getIcon()}
                        {type === 'steppers'
                            ? <Stepper
                            value={value}
                            onIncrement={() => increment(key)}
                            onDecrement={() => decrement(key)}
                            {...rest} />
                            : <SliderComponent
                            value={value}
                            onChange={(value) => slide(key, value)}
                            {...rest}/>
                    }
                    </View>
                )
            })
        }
        <SubmitBtn onPress={submit}/>
        </View>

    )
}

export default AddEntry;