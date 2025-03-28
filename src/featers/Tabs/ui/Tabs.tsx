import { Link, useLocation } from "react-router-dom"
import { TabsList } from "../../../shared/ui/StyledTabs/StyledTabs"
import { Button } from "../../../shared/ui/Button/Button"



export const Tabs = () => {
    const location = useLocation()
    const TabsElemets = [
        { id: 1, title: 'Играть', path: 'game-page' },
        { id: 2, title: 'Добавить игрока', path: 'add-player'},
        { id: 3, title: 'Список', path: '' },
    ]
    return (

            <TabsList>
                {TabsElemets.map((item) => (
                    <Link to={item.path} key={item.id}>
                        <Button activetab={(location.pathname.slice(1) === item.path).toString()}>{item.title}</Button>
                    </Link>
                ))}
            </TabsList>

    )
}

