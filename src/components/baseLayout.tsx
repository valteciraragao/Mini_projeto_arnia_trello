import { Outlet } from "react-router-dom"
import { Container } from "../assets/constant/styles"


const BaseLayout = () => <div>
    <Container>
        <main>
            <Outlet/>
        </main>
    </Container>
</div>

export default BaseLayout