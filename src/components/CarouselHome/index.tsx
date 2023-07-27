import { useState } from "react"
import { ImgGrill } from "../counter/ImgGrill"
import { Button, Grid } from "@nextui-org/react"
import { CAROUSEL_CONTENT, CAROUSEL_CONTENT2 } from "../counter/ImgGrill/constant"
import { IContent } from "./interfaces"

export const CarouselHome = () => {
    const [content, setContent] = useState<IContent[]>([])
    return (
        <Grid.Container>
            <Button onClick={()=>setContent(CAROUSEL_CONTENT)}>
                Ver galeria 1
            </Button>
            <Button onClick={()=>setContent(CAROUSEL_CONTENT2)}>
                Ver galeria 2
            </Button>
            <ImgGrill content={content} />
        </Grid.Container>
    )
}
//Ver galeria 1
//Ver galeria 2
//OnClick Galeria 1 set content carousel_content
//OnClick Galeria 2 set content carousel_content2

