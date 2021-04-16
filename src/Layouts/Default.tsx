import { Container, Box } from '@material-ui/core'

const DefaultLayout = ({
  children,
}: React.PropsWithChildren<React.ReactNode>): JSX.Element => (
  <Container maxWidth="sm">
    <Box my={4}>{children}</Box>
  </Container>
)

export default DefaultLayout
