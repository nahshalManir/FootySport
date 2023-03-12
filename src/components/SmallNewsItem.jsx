import React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Modal, Fade, Backdrop } from '@mui/material';
import { grey } from '@mui/material/colors';

const BigNewsItem = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card sx={{ height: '100%', bgcolor: grey[100], cursor: 'pointer', display: 'flex', flexDirection: { sm: 'column' } }} onClick={handleOpen}>
        <CardMedia
          component="img"
          sx={{ width: { xs: 100, sm: '100%' }, height: { xs: 100, sm: 150, lg: 200 } }}
          image={props.thumbnail}
          title={props.title}
        />
        <CardContent sx={{ paddingY: '10px!important', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Typography gutterBottom variant="h3" component="div" sx={{ fontSize: { xs: '0.75rem', sm: '1.25rem' } }}>
            {props.title}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.5rem', sm: '0.75rem' } }}>
              Date: {props.date.slice(0, 10)}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.5rem', sm: '0.75rem' } }}>
              Author: {props.author}
            </Typography>
          </Box>
        </CardContent>
      </Card>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 300,
        }}
      >
        <Fade in={open}>
          <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: 4, bgcolor: 'background.paper', width: '75%', height: '75%', overflowY: 'scroll' }}>
            <Typography variant="h3" component="h3" sx={{ fontSize: { xs: '2rem', sm: '3rem' } }}>
              {props.title}
            </Typography>
            {props.body.map(item => {
              return item.type === 'editor_block' && <Box key={item.id} sx={{ fontSize: { xs: '0.75rem', sm: '1rem' } }} dangerouslySetInnerHTML={{ __html: item.data.content }}>
              </Box>
            })}
          </Box>
        </Fade>
      </Modal>
    </>
  )
}

export default BigNewsItem