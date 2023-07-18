import { Button, Text, Grid } from "@nextui-org/react";
import React, { FC, useState } from "react";
import { CounterProps } from "./interfaces";

const Counter: FC<CounterProps> = ({ available, stock, imagen }) => {
  const [value, setValue] = useState(0);

  const writeValue = (newValue: number) => {
    setValue(value + newValue);
  };

  return (
    <Grid.Container>
      <img src={imagen} alt="" />
      <Grid.Container gap={2} justify="center">
        {!available && "No ta disponible XD"}
        <Grid xs={3}>
          <Button size="xs" onPress={() => writeValue(+1)}>
            {" "}
            -{" "}
          </Button>
        </Grid>
        <Grid
          css={{ alignItems: "center", justifyContent: "center", padding: 0 }}
          xs={5}
        >
          <Text
            h1
            size={20}
            css={{
              textGradient: "45deg, $purple600 -20%, $pink600 100%",
              textAlign: "center",
            }}
            weight="bold"
          >
            {value}/{stock}
          </Text>
        </Grid>
        <Grid xs={3}>
          <Button size="xs" onPress={() => writeValue(-1)}>
            +
          </Button>
        </Grid>
        <Button onPress={() => writeValue(-value)}>Reset</Button>
      </Grid.Container>
    </Grid.Container>
  );
};

export default Counter;
