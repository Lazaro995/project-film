import { useEffect, useState } from "react"
import { ImgGrill } from "../counter/ImgGrill"
import { Button, Grid } from "@nextui-org/react"
import { CAROUSEL_CONTENT, CAROUSEL_CONTENT2, CAROUSEL_CONTENT3 } from "../counter/ImgGrill/constant"
import { IContent } from "./interfaces"

export const CarouselHome = () => {
    const carouselTotals =[CAROUSEL_CONTENT, CAROUSEL_CONTENT2, CAROUSEL_CONTENT3];
    const [currentValue, setCurrentValue] = useState(0);
const PreviousGallery = () => {
    setCurrentValue((prevValue) => (prevValue === 0 ? carouselTotals.length - 1 : prevValue -1))
    setCurrentValue((kjuan)=>{return kjuan})
};
const nextGallery = () => {
    setCurrentValue((prevValue) => (prevValue === carouselTotals.length - 1 ? 0 : prevValue +1))
}
const [content, setContent] = useState<IContent[]>(carouselTotals[currentValue]);

useEffect(() =>{
setContent(carouselTotals[currentValue])
},[currentValue]);
return (
        <Grid.Container>
            <Button onClick={PreviousGallery}>
                Galeria Anterior
            </Button>
            <Button onClick={nextGallery}>
                Galeria Siguiente
            </Button>
            <ImgGrill content={content} />
        </Grid.Container>
    )
}
/* Utilizar el array carousel totals para determinar el valor
de content. Haciendo por ejemplo: que setContent(carouselTotals[currentValue])
Y currentValue es una nueva variable de estado
Que se va a modificar en Galeria Anterior, Galeria siguiente
*/

