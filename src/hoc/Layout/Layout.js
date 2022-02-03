import classes from './Layout.module.css'
import MenuToggle from "../../components/Navigatioon/MenuToggle/MenuToggle";
import {useState} from "react";
import Drawer from "../../components/Navigatioon/Drawer/Drawer";

const Layout = props => {

    const [menu, setMenu] = useState(false)

    const toggleMenuHandler = () => {
        setMenu(!menu)
    }

    const menuCloseHandler = () => {
        setMenu(false)
    }
    return (
        <div className={classes.Layout}>
            <MenuToggle
                onToggle={toggleMenuHandler}
                isOpen={menu}
            />
            <Drawer
                isOpen={menu}
                onClose={menuCloseHandler}
            />

            <main>
                {props.children}
            </main>
        </div>

    )
}

export default Layout