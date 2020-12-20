import React from "react"
import { Text } from "react-native"
import { Container } from "../../../share/styles/container"
import styles from "../home_style"
import { Icon } from 'react-native-elements'

export const HomeHeader: React.FunctionComponent = ({ }) => {
    return (
        <Container style={styles.rowContainer}>
            <Container style={styles.titleContainer}>
                <Text style={styles.headerTitle}>Traveloca</Text>
            </Container>
            <Container style={styles.titleContainer}>
                <Icon
                    raised
                    name='heart'
                    type='font-awesome'
                    color='#f50'
                    onPress={() => console.log('hello')} />
            </Container>
        </Container>
    )
}
