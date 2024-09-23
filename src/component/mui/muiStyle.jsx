// // import * as React from "react";
// // import Box from "@mui/material/Box";

// // export default function MuiStyle() {
// //   return (
// //     <Box component="section" sx={{ p: 2, border: "1px solid grey", mt: 10 }}>
// //       This Box renders as an HTML section element.
// //     </Box>
// //   );
// // }

// import * as React from "react";
// import CssBaseline from "@mui/material/CssBaseline";
// import Box from "@mui/material/Box";
// import { Grid } from "@mui/material";
// import Container from "@mui/material/Container";

// export default function SimpleContainer() {
//   return (
//     <React.Fragment>
//       <CssBaseline />
//       {/* <Container maxWidth="lg">

//         <Box sx={{ bgcolor: "#cfe9fc", height: "100vh", my: 3 }} />
//         <Box sx={{ bgcolor: "#cfe0fc", height: "100vh", my: 3 }} />
//         <Box sx={{ bgcolor: "#cfe1fc", height: "100vh", my: 3 }} />
//         <Box sx={{ bgcolor: "#cfe4fc", height: "100vh", my: 3 }} />
//       </Container> */}
//       <Grid container spacing={2}>
//         <Grid item xs={6} md={8}>
//           <Item>xs=6 md=8</Item>
//         </Grid>
//         <Grid item xs={6} md={4}>
//           <Item>xs=6 md=4</Item>
//         </Grid>
//         <Grid item xs={6} md={4}>
//           <Item>xs=6 md=4</Item>
//         </Grid>
//         <Grid item xs={6} md={8}>
//           <Item>xs=6 md=8</Item>
//         </Grid>
//       </Grid>
//     </React.Fragment>
//   );
// }

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1, m: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3} sx={{ bgcolor: "#0000FF" }}>
          <Item>xs=12 md=3</Item>
        </Grid>
        <Grid item xs={12} md={3} sx={{ bgcolor: "#4000FF" }}>
          <Item>xs=12 md=3</Item>
        </Grid>
        <Grid item xs={12} md={3}>
          <Item>xs=12 md=3</Item>
        </Grid>
        <Grid item xs={12} md={3}>
          <Item>xs=12 md=3</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
