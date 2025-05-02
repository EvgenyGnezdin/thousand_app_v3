import { Link, useLocation } from "react-router-dom"
import { Button } from "../../../shared/ui/Button/Button"
import { FaThList } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { IoPersonAdd } from "react-icons/io5";
import { TabsList } from "./StyledTabs";
export const Tabs = () => {
    const location = useLocation()
    const path = location.pathname.slice(1)
    const screenWidth = window.screen.width < 450 || false
    const TabsElemets = [
        { id: 1, title: "Начать игру", icon: <FaThList/>, path: 'game-page' },
        { id: 2, title: "Добавить игрока", icon: <IoPersonAdd/>, path: 'add-player'},
        { id: 3, title: "Список игроков", icon: <FaPlay/>, path: '' },
    ]
    
    return (

            <TabsList>
                {TabsElemets.map((item) => (
                    <Link to={item.path} key={item.id}>
                        <Button activetab={(path === item.path).toString()}>{screenWidth ? item.icon : item.title}</Button>
                    </Link>
                ))}
            </TabsList>

    )
}

