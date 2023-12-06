"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import Image from 'next/image';
import mitnog from "../../public/mitnog.png"
import { CardMedia } from '@mui/material';
import Link from 'next/link';
import { NotificationAddOutlined } from '@mui/icons-material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useContext } from 'react';
import { AuthContext } from '@/Providers/AuthProviders';
import useCart from '@/Hooks/useCart';
import { useRouter } from 'next/navigation';


// const Search = styled('div')(({ theme }) => ({
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     '&:hover': {
//       backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing(3),
//       width: 'auto',
//     },
//   }));
  
//   const SearchIconWrapper = styled('div')(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }));
  
//   const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: 'inherit',
//     '& .MuiInputBase-input': {
//       padding: theme.spacing(1, 1, 1, 0),
//       // vertical padding + font size from searchIcon
//       paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//       transition: theme.transitions.create('width'),
//       width: '100%',
//       [theme.breakpoints.up('md')]: {
//         width: '20ch',
//       },
//     },
//   }));

const pages = [
    { text: 'Product', path: '/product' },
    { text: 'Pricing', path: '/pricing' },
    { text: 'Blog', path: '/blog' },
  ];
const settings = [
    { text: 'Profile', path: '/profile' },
    { text: 'Account', path: '/account' },
    { text: 'Dashboard', path: '/dashboard' },
    { text: 'Logout', path: '/logout' }
  ];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { user, logOut } = useContext(AuthContext);
  const [cart, refetch] = useCart();
  const navigate = useRouter();
//   const [searchValue, setSearchValue] = useState(" ")

//   const handleValueChange =(newValue)=>{
//         setSearchValue(newValue)
//   }

//   const handleSearchRequest =()=>{
//     doSomethingWith(searchValue)
//   }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar >
          <CardMedia sx={{
             display: { xs: 'none', md: 'flex' },

          }}>
          <Image  src={mitnog} width="90" height="6">

         </Image>
          </CardMedia>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            {/* <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton> */}

            {/* <SearchBar
            value={searchValue}
            onChange={handleValueChange}
            onRequestSearch={handleSearchRequest}
            /> */}
            {/* <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page,index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                    <Link href={page.path}><Typography textAlign="center">{page.text}</Typography>
                </Link>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
          
          <CardMedia sx={{
            flexGrow: 1,
            display: { xs: 'flex', md: 'none' },
          }}>
          <Image  src={mitnog} width="80" height="5">

         </Image>
          </CardMedia>
          
          {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <Link href={page.path}><Button
              key={index}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              {page.text}
            </Button></Link>
            ))}
          </Box> */}
           {user ? (
           <>
           <input className='w-1/3 p-2 rounded-xl text-black hidden sm:block sm:w-3/6 sm:p-2 sm:ml-4 sm:items-center' type="search" name="search" id="" placeholder='Search Items'/>
          <Box className="flex justify-end gap-3 " sx={{ flexGrow: 1 }}>
            <Tooltip title="Open settings">  
            <FavoriteBorderIcon className='mr-4 w-10'></FavoriteBorderIcon> <AddShoppingCartIcon className='mr-4 w-10'></AddShoppingCartIcon>
            <NotificationAddOutlined className='mr-7 w-10'></NotificationAddOutlined>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting,index) => (
                <MenuItem key={index} onClick={handleCloseUserMenu}>
                  <Link href={setting.path} style={{ textDecoration: 'none', color: 'inherit' }}><Typography textAlign="center">{setting.text}</Typography></Link>
                </MenuItem>
              ))}
            </Menu>
          </Box> 
           </>) : (
            <>
            <input className='w-3/6 p-2 rounded-xl items-center text-black hidden sm:block sm:w-3/6 sm:p-2 sm:ml-4 sm:items-center' type="search" name="search" id="" placeholder='Search Items'/>
                <Box className="flex justify-end ml-80 gap-3 sm:ml-2 sm:gap-3">
                    <Link href="/login"><Typography>Login</Typography></Link> ||
                    <Link href="/signup"><Typography>Sign Up</Typography></Link>
                </Box>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
