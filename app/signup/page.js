"use client";

import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { useContext } from "react";
import { AuthContext } from "@/Providers/AuthProviders";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const metadata = {
  title: "SignUp- Mitnog",
  description: "A Multi-Vendor e-Commerce Platform ",
};

// function Copyright(props: any) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

// TODO remove, this demo shouldn't need to reset the theme.
// const defaultTheme = createTheme();

export default function SignUp() {
  const { createUser } = useContext(AuthContext);
  const navigate = useRouter();
  //   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //     event.preventDefault();
  //     const data = new FormData(event.currentTarget);
  //     console.log({
  //       email: data.get("email"),
  //       password: data.get("password"),
  //     });
  //   };

  const handleSignUp = async (e) => {
    e.preventDefault();

    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(firstName, lastName, email, password);
    await createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);

        const saveUserToMongoDb = {
          firstName: createdUser.firstName,
          lastName: createdUser.lastName,
          email: createdUser.email,
        };

        fetch("https://lazy-lime-seahorse-wrap.cyclic.app/users", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(saveUserToMongoDb),
        });

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully Sign-Up to Mitnog",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate.push("/");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Something Wrong",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    // <ThemeProvider theme={defaultTheme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        {/* noValidate onSubmit={handleSubmit} sx={{ mt: 3 }} */}
        <Box component="form" onSubmit={handleSignUp}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            className="bg-blue-800"
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* <Copyright sx={{ mt: 5 }} /> */}
    </Container>
    // </ThemeProvider>
  );
}
