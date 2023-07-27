import { Button, Text, Grid } from "@nextui-org/react";
import React, { FC, useEffect, useState } from "react";
import { CounterProps } from "./interfaces";

const Counter: FC<CounterProps> = ({ available, stock, imagen, price}) => {
  const [value, setValue] = useState(0);

  const writeValue = (newValue: number) => {
    setValue(value + newValue);
  };
  const handleReset = () => {
    setValue(0);
  };
if(stock)

  return (
    <Grid.Container>
      <img src={imagen} alt="this is a img" />
      <Text h3 size={20} weight="bold">
        Price: ${value*price}
      </Text>
      <Grid.Container gap={2} justify="center">
        {!available}
        <Grid xs={3}>
          <Button size="xs" onPress={() => writeValue(-1)}>
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
          <Button size="xs" onPress={() => writeValue(+1)}>
            +
          </Button>
        </Grid>
        <Button onPress={handleReset}>Reset</Button> {/* Utilizamos handleReset para restablecer el precio */}
      </Grid.Container>
    </Grid.Container>
  );
};

export default Counter;
