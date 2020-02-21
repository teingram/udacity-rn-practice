import React from 'react'
import { View, Text } from 'react-native'
import { getMetricMetaData } from '../utils/helpers'

function AddEntry() {
    return (
        <View>
            <Text>Hello there!</Text>
            {getMetricMetaData('bike').getIcon()}
        </View>
    )
}

export default AddEntry;