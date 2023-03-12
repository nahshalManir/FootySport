import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, useTheme } from '@mui/material';
import { grey } from "@mui/material/colors";

const Lineups = (props) => {
  const theme = useTheme();

  return (
    <TableContainer>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow sx={{ '& th.MuiTableCell-root': { fontSize: { xs: '0.9rem', md: '1.2rem' }, width: '50%', paddingY: '16px' } }}>
            <TableCell >{props.homeName} ({props.lineups.Lu[0].Fo.toString()})</TableCell>
            <TableCell align="right">{props.awayName} ({props.lineups.Lu[1].Fo.toString()})</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='left' sx={{ bgcolor: grey[300] }}>
              <Typography sx={{ marginLeft: { xs: '4px', md: '12px' }, fontSize: { xs: '0.8rem', md: '1rem' } }}>
                Starting 11
              </Typography>
            </TableCell>
            <TableCell align='center' sx={{ bgcolor: grey[300] }}>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.lineups.Lu[0].Ps.filter((val, i) => i <= 10).map((row, i) => (
            <TableRow
              key={row.Pid}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, '& p.iconContainer': { fontSize: { xs: '0.5rem !important' } }, '& p.MuiTypography-root': { fontSize: { xs: '0.75rem', md: '1rem' } }, '& td.MuiTableCell-root': { paddingX: { xs: '8px', md: '18px' } } }}
            >
              <TableCell scope="row" >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography sx={{ color: grey[700], width: { xs: '14px', md: '19px' } }}>
                    {row.Snu}
                  </Typography>
                  <Typography sx={{ marginX: { xs: '4px', md: '8px' }, display: 'flex', alignItems: 'center' }}>
                    {row.Fn} {row.Ln}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell align="right">
                {
                  i < props.lineups.Lu[1].Ps.length &&
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Typography sx={{ marginX: { xs: '4px', md: '8px' }, display: 'flex', alignItems: 'center' }}>
                      {props.lineups.Lu[1].Ps[i].Fn} {props.lineups.Lu[1].Ps[i].Ln}
                    </Typography>
                    <Typography sx={{ color: grey[700], width: { xs: '14px', md: '19px' } }}>
                      {props.lineups.Lu[1].Ps[i].Snu}
                    </Typography>
                  </Box>
                }
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell align='left' sx={{ bgcolor: grey[300] }}>
              <Typography sx={{ marginLeft: { xs: '4px', md: '12px' }, fontSize: { xs: '0.8rem', md: '1rem' } }}>
                Substitutes
              </Typography>
            </TableCell>
            <TableCell align='center' sx={{ bgcolor: grey[300] }}>
            </TableCell>
          </TableRow>
          {props.lineups.Lu[0].Ps.filter((val, i) => i > 10 && val.Pon !== "COACH").map((row, i) => (
            <TableRow
              key={row.Pid}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, '& p.iconContainer': { fontSize: { xs: '0.5rem !important' } }, '& p.MuiTypography-root': { fontSize: { xs: '0.75rem', md: '1rem' } }, '& td.MuiTableCell-root': { paddingX: { xs: '8px', md: '18px' } } }}
            >
              <TableCell scope="row" >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography sx={{ color: grey[700], width: { xs: '14px', md: '19px' } }}>
                    {row.Snu}
                  </Typography>
                  <Typography sx={{ marginX: { xs: '4px', md: '8px' }, display: 'flex', alignItems: 'center' }}>
                    {row.Fn} {row.Ln}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell align="right">
                {
                  i + 11 < props.lineups.Lu[1].Ps.length &&
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Typography sx={{ marginX: { xs: '4px', md: '8px' }, display: 'flex', alignItems: 'center' }}>
                      {props.lineups.Lu[1].Ps[i + 11].Fn} {props.lineups.Lu[1].Ps[i + 11].Ln}
                    </Typography>
                    <Typography sx={{ color: grey[700] }}>
                      {props.lineups.Lu[1].Ps[i + 11].Snu}
                    </Typography>
                  </Box>
                }
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell align='left' sx={{ bgcolor: grey[300] }}>
              <Typography sx={{ marginLeft: { xs: '4px', md: '12px' }, fontSize: { xs: '0.8rem', md: '1rem' } }}>
                Manager
              </Typography>
            </TableCell>
            <TableCell align='center' sx={{ bgcolor: grey[300] }}>
            </TableCell>
          </TableRow>
          <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 }, '& p.iconContainer': { fontSize: { xs: '0.5rem !important' } }, '& p.MuiTypography-root': { fontSize: { xs: '0.75rem', md: '1rem' } }, '& td.MuiTableCell-root': { paddingX: { xs: '8px', md: '18px' } } }}
          >
            <TableCell scope="row" >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography sx={{ marginX: { xs: '4px', md: '8px' }, display: 'flex', alignItems: 'center' }}>
                  {props.lineups.Lu[0].Ps[props.lineups.Lu[0].Ps.length - 1].Fn} {props.lineups.Lu[0].Ps[props.lineups.Lu[0].Ps.length - 1].Ln}
                </Typography>
              </Box>
            </TableCell>
            <TableCell align="right">
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <Typography sx={{ marginX: { xs: '4px', md: '8px' }, display: 'flex', alignItems: 'center' }}>
                {props.lineups.Lu[1].Ps[props.lineups.Lu[1].Ps.length - 1].Fn} {props.lineups.Lu[1].Ps[props.lineups.Lu[1].Ps.length - 1].Ln}
                </Typography>
              </Box>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Lineups