import React from 'react'
import { AppBar, Toolbar, Typography , IconButton , Button , Divider , List , ListItem , ListItemText, ListItemIcon, Drawer , } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { Box } from '@mui/system';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function Navbar() {
    let anchor;
        const [state, setState] = React.useState({
          left: false
        });
      
        const toggleDrawer = (anchor, open) => (event) => {
          if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
          ) {
            return;
          }
      
          setState({ ...state, [anchor]: open });
        };
      
        const list = (anchor) => (
          <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
          >
            <List>
              {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Box>
        );

    return (
        <>
              {/* {['left', 'right', 'top', 'bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))} */}


            <Box sx={{ flexGrow: 1 }}>
                <AppBar >
                    <Toolbar >
                        <IconButton onClick={toggleDrawer(anchor, true)}
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                        <Drawer variant="temporary" >
                            {list(anchor)}
                        </Drawer>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Blogging</Typography>
                        <Button variant="outlined" color="inherit">Login</Button>
                    </Toolbar>
                </AppBar >
            </Box>
        </>
    )
}
