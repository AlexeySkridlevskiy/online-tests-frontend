import * as React from 'react';
import './Header.css'
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import Item from '../Item/item';
import Button from '@mui/material/Button';
import FormSignIn from '../FormSignIn/FormSignIn';
import FormSignUp from '../FormSignUp/FormSignUp';
import Link from '@mui/material/Link';

export default function Header(){
    return(
    <Box className='header'>
      <Grid container spacing={2} alignItems="center">
      <Grid md={6} paddingTop="17px">
        <Item justifyContent="flex-start">
          <Link href="" underline="none" color="white" fontSize="250%">
            {'ONLINE TESTS'}
          </Link>
        </Item>
      </Grid>
      <Grid md ={6} container direction="row" justifyContent="flex-end" alignItems="center" paddingTop="15px">

          <Item><Button variant="text" sx={{color:'yellow', boxShadow: 'none'}}>Info</Button></Item>
          <Item><Button variant="text" sx={{color:'yellow'}}>Contacts</Button></Item>

          <Item><FormSignIn/></Item>
          <Item><FormSignUp/></Item>

      </Grid>
      </Grid>
    </Box>
    );
}