import React from "react"
import Container from "@material-ui/core/Container"
import Paper from "@material-ui/core/Paper"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import MenuItem from "@material-ui/core/MenuItem"

function LotsLandsForm() {
  const people = [
    { label: "Bruce Wayne", value: 1 },
    { label: "Wally West", value: 2 },
    { label: "Clark Kent", value: 3 },
  ]

  return (
    <Container maxWidth="md">
      <Paper elevation={3}>
        <Box p={3}>
          <form action="">
            <Grid container spacing={5}>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Fecha" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Lugar" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Medidas" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField select fullWidth label="Vendedor o dueño">
                  {people.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField select fullWidth label="Comprador">
                  {people.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField select fullWidth label="Asesor de Ventas">
                  {people.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField select fullWidth label="Precio">
                  {people.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField select fullWidth label="Notario">
                  {people.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Número de escritura" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  type="file"
                  fullWidth
                  label="Escritura matriz"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
          </form>
        </Box>
      </Paper>
    </Container>
  )
}

export default LotsLandsForm
