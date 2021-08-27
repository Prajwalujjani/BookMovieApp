import React from 'react'
import { Tabs, Tab } from '@material-ui/core'
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm'



function MaterialTabs() {
    const [value, setValue] = React.useState(0);
    const handleTabs = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>

            <Tabs value={value} onChange={handleTabs} className="center">
                <Tab label='Login' />

                <Tab label='Register' />

            </Tabs>

            <TablePanel className="center" value={value} index={0}>               
                        <LoginForm/>
                 </TablePanel>
            <TablePanel className="center" value={value} index={1} ><RegisterForm/></TablePanel>


        </div>
    )
}
function TablePanel(props) {
    const { children, value, index } = props;
    return (
        <div>
            {
                value === index && (
                    <div >
                        {children}
                    </div>
                )
            }
        </div>
    )
}

export default MaterialTabs;




