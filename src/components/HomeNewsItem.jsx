import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { Box, Modal, Fade, Backdrop } from '@mui/material';
import { grey } from '@mui/material/colors';

const HomeNewsItem = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box sx={{ bgcolor: grey[100], cursor: 'pointer', display: 'flex', textDecoration: 'none', marginBottom: '4px', paddingX: {xs: '8px', sm: '12px'}, paddingY: {xs: '12px', sm: '16px'}, boxShadow: 1}} onClick={handleOpen}>
        <Box sx={{ display: 'flex', flexDirection: 'column', paddingY: 0 }}>
          <Typography gutterBottom variant="h3" component="div" sx={{ fontSize: { xs: '0.75rem', sm: '1rem' } }}>
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
        </Box>
      </Box>
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

export default HomeNewsItem