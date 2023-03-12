import React, {useState} from 'react'
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Hamburger = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer sx={{color: 'red'}} anchor='right' open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItemButton component={Link} to='/' onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>
                Home
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton component={Link} to='/europe/uefa-champions-league' onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>
                UCL
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton component={Link} to='/europe/uefa-europa-league' onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>
                UEL
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton component={Link} to='/england/premier-league' onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>
                Premier League
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton component={Link} to='/spain/laliga-santander' onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>
                Laliga
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton component={Link} to='/germany/bundesliga' onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>
                Bundesliga
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton component={Link} to='/france/ligue-1' onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>
                Ligue 1
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton component={Link} to='/italy/serie-a' onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>
                Serie A
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton  onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon sx={{color: 'white'}}/>
      </IconButton>
    </>
  )
}

export default Hamburger