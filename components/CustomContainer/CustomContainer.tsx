import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

export default function CustomContainer(props) {
  return (
    <>
      {/* <CssBaseline /> */}
      <Container disableGutters={true} maxWidth={false}>
        <Box sx={{ bgcolor: '#aaaaaa', width: '100%' }}>{props.children}</Box>
      </Container>
    </>
  );
}
