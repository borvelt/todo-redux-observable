import { Grid } from '@material-ui/core'

const DefaultLayout = ({
  children,
}: React.PropsWithChildren<React.ReactNode>): JSX.Element => (
  <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
    style={{ minHeight: '100vh' }}
  >
    <Grid item md={12}>
      {children}
    </Grid>
  </Grid>
)

export default DefaultLayout
