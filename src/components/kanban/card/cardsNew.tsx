import { Area, Box, Img, Input } from "./style"
import add from '../../../assets/images/plus-svgrepo-com 1.png'


const CardNews = () => <div>
    <Box>
        <Input type="text" placeholder="Título" id="inpContent"/>
        <Area name="content" id="content" placeholder="Conteúdo"></Area>
        <div>
            <Img src={add} alt="Botão adicionar" />
        </div>
    </Box>
</div>

export default CardNews


