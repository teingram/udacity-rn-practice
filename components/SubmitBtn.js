import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

function SubmitBtn({ onPress }) {
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <Text>Submit</Text>
        </TouchableOpacity>
    )
}

export default SubmitBtn