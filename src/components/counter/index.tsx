import { Button, Text, Grid } from '@nextui-org/react'
import React, { FC, useState } from 'react'
import { CounterProps } from './interfaces'

const Counter: FC<CounterProps> = ({ available, stock, imagen }) => {
    const [value, setValue] = useState(0)
    const addValue = () => {
        console.log("it is work")
        if (value <= 0) {
            return;
        }
        setValue(value - 1)
    }
    const removeValue = () => {
        console.log("Remove")
        setValue(value + 1)
    }
    const resetValue = () => {
        console.log("Reset")
        setValue(0)
    }
    return (
        <Grid.Container>
            <img src={imagen} alt="this is a img" />
            <Grid.Container gap={2} justify="center">
                {!available && 'No ta disponible XD'}
                <Grid xs={3}>
                    <Button size='xs' onPress={addValue}> - </Button>
                </Grid>
                <Grid css={{ alignItems: 'center', justifyContent: 'center', padding: 0 }} xs={5}>
                    <Text
                        h1
                        size={20}
                        css={{
                            textGradient: "45deg, $purple600 -20%, $pink600 100%", textAlign: "center"
                        }}
                        weight="bold"
                    >
                        {value}/{stock}
                    </Text>
                </Grid>
                <Grid xs={3}>
                    <Button size='xs' onPress={removeValue}>+</Button>

                </Grid>
                <Button onPress={resetValue}>Reset</Button>
            </Grid.Container>
        </Grid.Container>
    )
}

export default Counter