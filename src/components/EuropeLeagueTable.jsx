import React from 'react';
import { Box, Typography, TableCell, TableRow, Table, TableContainer, TableBody, useMediaQuery, useTheme, TableHead, Tooltip } from '@mui/material';
import { grey } from '@mui/material/colors';
import Playoffs from './Playoffs';


const teamQual = {
  30: {
    qual: 'Next round',
    bgCol: 'blue'
  },
  28: {
    qual: 'Europa League group stage',
    bgCol: 'orange'
  },
  29: {
    qual: 'Conference League group stage',
    bgCol: 'green'
  }
}

function editAndCapitalize(str) {
  str = str.replace(/-/g, ' ');
  str = str.replace(/uefa/,'');
  const splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   return splitStr.join(' '); 
}

const EuropeLeagueTable = (props) => {
  const theme = useTheme();
  const downSm = useMediaQuery(theme.breakpoints.down('sm'));
  const downMd = useMediaQuery(theme.breakpoints.down('md'));
  const downXl = useMediaQuery(theme.breakpoints.down('xl'));

  return (
    <Box sx={{ display: 'flex', flexDirection: downXl ? 'column' : 'row', justifyContent: 'space-between', width: '100%', marginY: {xs: '20px', md: '40px'} }}>
      <Box sx={{ width: { xs: '100%', xl: '47.5%' }, display: 'flex', flexDirection: 'column', boxShadow: 1, marginBottom: { xs: '20px', md: '40px' }, borderRadius: '8px' }}>
        <Box sx={{ display: 'flex', paddingY: { xs: '4px', md: '10px' }, borderBottom: 0.5, alignItems: 'center' }}>
          <Box sx={{ width: 'max-content', display: 'flex', alignItems: 'center', paddingX: { xs: '6px', md: '12px' }, borderRight: '2px solid lightgrey' }}>
            <Box sx={{ width: { xs: '32px', md: '60px' }, marginX: { xs: '2px', md: '4px' }, display: 'flex', alignItems: 'center' }}>
              <img crossOrigin='anonymous' src={`https://tipsscore.com/resb/league/${props.country}-${props.league}.png`} width="100%" alt="" />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', marginX: { xs: '2px', md: '4px' } }}>
              <Typography sx={{ fontSize: { md: '1.75rem', xs: '1rem' } }}>
                {editAndCapitalize(props.league)}
              </Typography>
              <Typography sx={{ color: grey[500], fontSize: { xs: '0.65rem', md: '1rem' } }}>
                {editAndCapitalize(props.country)}
              </Typography>
            </Box>
          </Box>
          <Typography sx={{ fontSize: { xs: '1rem', md: '1.5rem' }, marginX: { xs: '10px', md: '20px' } }}>
            League Table
          </Typography>
        </Box>
        <Box>
          {props.tables.Stages.map(group => (
            <Box key={group.Sid} sx={{ display: 'flex', flexDirection: 'column', marginY: { xs: '8px', md: '8px' }, boxShadow: 1 }}>
              <Typography sx={{ fontSize: { xs: '0.9rem', md: '1.2rem' }, paddingY: { xs: '6px', md: '10px' }, paddingX: { xs: '4px', md: '8px' } }}>
                {group.Snm}
              </Typography>
              <TableContainer>
                <Table size="small" aria-label="a dense table" sx={{ "& th.MuiTableCell-root, & td.MuiTableCell-root": { fontSize: { xs: '0.75rem', md: '1rem' }, paddingX: { xs: '8px' }, fontWeight: '400' } }}>
                  <TableHead sx={{ bgcolor: grey[100] }}>
                    <TableRow>
                      <TableCell sx={{ paddingX: { xs: '4px' } }}>Pos.</TableCell>
                      <TableCell>Team Name</TableCell>
                      <TableCell align='center'>{downMd ? "P" : "Played"}</TableCell>
                      <TableCell align='center'>{downMd ? "W" : "Wins"}</TableCell>
                      <TableCell align='center'>{downMd ? "D" : "Draws"}</TableCell>
                      <TableCell align='center'>{downMd ? "L" : "Lost"}</TableCell>
                      <TableCell align='center' sx={{ width: 'max-content' }}>GF:GA</TableCell>
                      <TableCell align='center'><b style={{ fontWeight: 'bolder' }}>Pts</b></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {group.LeagueTable.L[0].Tables[0].team.map(row => (
                      <TableRow
                        key={row.Tid}>
                        <TableCell sx={{ paddingX: { xs: '8px' } }}>
                          <Tooltip title={row?.phr !== undefined && teamQual[row.phr[0]].qual} placement='right'>
                            <Typography sx={{ width: 'fit-content', paddingX: '6px', borderRadius: '6px', bgcolor: (row?.phr !== undefined && teamQual[row.phr[0]].bgCol), color: row?.phr !== undefined && 'white', fontSize: { xs: '0.75rem', md: '1rem' } }} >
                              {row.rnk}
                            </Typography>
                          </Tooltip>
                        </TableCell>
                        <TableCell>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box sx={{ width: { md: '24px', xs: '16px', display: 'flex', alignItems: 'center' } }}>
                              <img src={`https://lsm-static-prod.livescore.com/medium/${row.Img}`} width="100%" alt={row.Tnm}></img>
                            </Box>
                            <Typography sx={{ width: 'max-content', display: 'flex', marginLeft: '8px', fontSize: { xs: '0.75rem', md: '1rem' } }}>
                              {(downSm && row.Tnm.slice(0, 15)) || (row.Tnm)}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell align='center'>
                          {row.pld}
                        </TableCell>
                        <TableCell align='center'>{row.win}</TableCell>
                        <TableCell align='center'>{row.drw}</TableCell>
                        <TableCell align='center'>{row.lst}</TableCell>
                        <TableCell align='center'>{row.gf}:{row.ga}</TableCell>
                        <TableCell align='center'>
                          <Typography sx={{ fontSize: { xs: '0.75rem', md: '1rem' }, fontWeight: '900' }}>
                            {row.pts}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>))}

          <Box sx={{ display: 'flex', flexDirection: 'column', paddingY: '20px', "& p.MuiTypography-root": { fontSize: { xs: '0.75rem', md: '1rem' } }, "> div.MuiBox-root": { marginX: { xs: '10px', md: '20px' } } }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ width: '16px', height: '16px', bgcolor: 'blue', borderRadius: '20%' }}></Box>
              <Typography>
                &nbsp;- Next round
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ width: '16px', height: '16px', bgcolor: 'orange', borderRadius: '20%' }}></Box>
              <Typography>
                &nbsp;- Europa League group stage
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ width: '16px', height: '16px', bgcolor: 'green', borderRadius: '20%' }}></Box>
              <Typography>
                &nbsp;- Conference League group stage
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: { xs: '100%', xl: '47.5%' } }}>
        <Playoffs playoffs={props.playoffs} />
      </Box>
    </Box>
  )
}

export default EuropeLeagueTable