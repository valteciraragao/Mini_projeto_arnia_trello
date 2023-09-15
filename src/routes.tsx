import { BrowserRouter, Route, Routes } from "react-router-dom";
import BaseLayout from "./components/baseLayout";
import Kanban from "./components/kanban/kanban";
import Login from "./components/login/login";
import EditLogin from "./components/login/edit_login";



export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BaseLayout/>}>
                    <Route index element={<Login />} />
                    <Route path="/cadastro" element={<EditLogin/>}/>
                </Route>
                <Route path="/trello" element={<Kanban/>} />
            </Routes>
        </BrowserRouter>
    )
}