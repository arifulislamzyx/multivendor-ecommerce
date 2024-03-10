"use client";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { FormEvent, useContext } from "react";
import { AuthContext } from "@/Providers/AuthProviders";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { getCookies } from "cookies-next";
import { User } from "@/types/user";

const metadata = {
  title: "Login- Mitnog",
  description: "A Multi-Vendor e-Commerce Platform ",
};

interface UserProps {
  user: User[];
}

const SignIn: React.FC = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useRouter();

  const handleSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const email: any = form.email.value;
    const password: any = form.password.value;

    console.log(email, password);

    await signIn(email, password)
      .then((result) => {
        console.log(result);
        const loggedInUser = result?.user?.email;
        console.log(loggedInUser);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully Logged-In to Mitnog",
          showConfirmButton: false,
          timer: 1500,
        });
        // getCookies({ token: "token" });
        navigate.push("/");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          position: "top-end",
          icon: "warning",
          title: "Entered a Wrong Password",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <Container className="h-screen" component="main" maxWidth="xs">
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
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSignIn}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            className="bg-blue-800"
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
export default SignIn;
