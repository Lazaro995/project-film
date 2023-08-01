import { Grid, Image } from "@nextui-org/react"
import { CAROUSEL_CONTENT } from "./constant"
import { FC } from "react"
import { IContent } from "../../carouselHome/interfaces"
import { ContentProps } from "./interfaces"
export const ImgGrill:FC<ContentProps> = ({content}) => {
    return (
        <Grid.Container css={{
            height: 800*CAROUSEL_CONTENT.length/2
        }} gap={2} justify='center'>
            {content.map((item,index)=>{
                return(
                    <Grid xs={6}>
                    <Image
                        width={"100%"}
                        height={"100%"}
                        src={item.src}
                        alt={item.alt}
                        objectFit="cover"
                    />
                </Grid>  
                )
            })}
        </Grid.Container>
    )
}