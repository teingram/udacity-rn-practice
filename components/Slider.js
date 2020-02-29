import React from 'react'
import { View, Text } from 'react-native'
import Slider from '@react-native-community/slider';

function SliderComponent({ step, max, value, unit, onChange }) {
    return (
        <View>
            <Slider
                step={step}
                minimumValue={0}
                maximumValue={max}
                value={value}
                onValueChange={onChange}
            />
            <View>
                <Text>{value}</Text>
                <Text>{unit}</Text>
            </View>
        </View>

    )
}

export default SliderComponent