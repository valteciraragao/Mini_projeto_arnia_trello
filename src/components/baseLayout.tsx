import { Outlet } from "react-router-dom"


const BaseLayout = () => <div>
    <div>
        <main>
            <Outlet/>
        </main>
    </div>
</div>

export default BaseLayout