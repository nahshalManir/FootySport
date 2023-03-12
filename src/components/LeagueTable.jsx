import React from 'react';
import { Box, Typography, Table, TableCell, TableContainer, TableHead, TableRow, TableBody, useMediaQuery, useTheme, Tooltip } from '@mui/material';
import { grey } from '@mui/material/colors';

const teamQual = {
  20: {
    qual: 'Champions League',
    bgCol: 'blue'
  },
  21: {
    qual: 'Champions League Qualification',
    bgCol: 'royalblue'
  },
  25: {
    qual: 'Europa League',
    bgCol: 'orange'
  },
  191: {
    qual: 'Europa Conference League Qualification',
    bgCol: 'green'
  },
  15: {
    qual: 'Relegation',
    bgCol: 'red'
  },
  16: {
    qual: 'Relegation play-off',
    bgCol: 'purple',
  }
}

const LeagueTable = (props) => {
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down('md'));
  const downSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', boxShadow: 1, marginBottom: { xs: '20px', md: '40px' }, marginY: {xs: '20px', md: '40px'} }}>
      <Box sx={{ display: 'flex', paddingY: { xs: '4px', md: '10px' }, borderBottom: 1, alignItems: 'center' }}>
        <Box sx={{ width: 'max-content', display: 'flex', alignItems: 'center', paddingX: { xs: '6px', md: '12px' }, borderRight: '2px solid lightgrey' }}>
          <Box sx={{ width: { xs: '32px', md: '60px' }, marginX: { xs: '2px', md: '4px' }, display: 'flex', alignItems: 'center' }}>
            <img crossOrigin='anonymous' src={`https://tipsscore.com/resb/league/${props.country.toLowerCase()}-${props.league.toLowerCase() === 'laliga santander' ? 'laliga': props.league.replace(' ', '-').toLowerCase()}.png`} width="100%" alt="" />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', marginX: { xs: '2px', md: '4px' } }}>
            <Typography sx={{ fontSize: { md: '1.75rem', xs: '1rem' } }}>
              {props.league}
            </Typography>
            <Typography sx={{ color: grey[500], fontSize: { xs: '0.65rem', md: '1rem' } }}>
              {props.country}
            </Typography>
          </Box>
        </Box>
        <Typography sx={{ fontSize: { xs: '0.75rem', md: '1.5rem' }, marginX: '20px' }}>
          League Table
        </Typography>
        <Box sx={{ width: 'max-content', marginX: '20px', fontSize: { xs: '0.5rem', md: '1rem' }, scale: { xs: '0.75', md: '1' } }}>
        </Box>
      </Box>
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
            {props.table.team.map(row => (
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
                      {/* Borussia Monchebgladbach */}
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
      <Box sx={{ display: 'flex', flexDirection: 'column', paddingY: '20px', "& p.MuiTypography-root": { fontSize: { xs: '0.75rem', md: '1rem' } }, "> div.MuiBox-root": { marginX: { xs: '10px', md: '20px' } } }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ width: '16px', height: '16px', bgcolor: 'blue', borderRadius: '20%' }}></Box>
          <Typography>
            &nbsp;- UEFA Champions League Group Stage
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ width: '16px', height: '16px', bgcolor: 'royalblue', borderRadius: '20%' }}></Box>
          <Typography>
            &nbsp;- UEFA Champions League Qualification
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ width: '16px', height: '16px', bgcolor: 'orange', borderRadius: '20%' }}></Box>
          <Typography>
            &nbsp;- UEFA Europa League Group Stage
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ width: '16px', height: '16px', bgcolor: 'green', borderRadius: '20%' }}></Box>
          <Typography>
            &nbsp;- UEFA Conference League Group Qualification
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ width: '16px', height: '16px', bgcolor: 'red', borderRadius: '20%' }}></Box>
          <Typography>
            &nbsp;- Relegation
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ width: '16px', height: '16px', bgcolor: 'purple', borderRadius: '20%' }}></Box>
          <Typography>
            &nbsp;- Relegation play-off
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default LeagueTable