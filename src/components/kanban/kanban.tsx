import { Flex } from "../../assets/constant/styles"
import Doing from "./container/doing"
import Done from "./container/done"
import New from "./container/new"
import Layout from "./container/new"
import Todo from "./container/todo"
import Header from "./header/hearder"

const Kanban = () => {
    return(
        <>
        <div>
            <Header />
            <Flex>
                <New />
                <Todo />
                <Doing />
                <Done />
            </Flex>
        </div>
        </>
    )
}

export default Kanban