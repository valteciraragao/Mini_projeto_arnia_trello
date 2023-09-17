import edit from '../../../assets/images/edit-svgrepo-com 1.png'
import del from '../../../assets/images/Group-2.png'
import rigth from '../../../assets/images/Group.png'
import { Box, Flex, Img } from './style'

interface Props{
    title: string
    content: string
}

const Card = ({ title, content }:Props) => <div>
    <Box>
        <Flex>
            <h3>{title}</h3>
            <Img src={edit} alt="Botão editar" />
        </Flex>
        <div>
            <p>{content}</p>
        </div>
        <Flex>
            <Img src={del} alt="Botão excluir" />
            <Img src={rigth} alt="Enviar para a coluna da direita" />
        </Flex>
    </Box>
</div>

export default Card