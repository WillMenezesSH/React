import React from 'react';
import './Login.css';
import {Grid, Box, Typography,TextField, Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
function Login (){

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' style={{backgroundColor: '#ece8e8' }}>
            <Grid alignItems='center' xs={6} >
                <Box paddingX={20}>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3'
                         align='center' style={{fontWeight: 'bold'}}>
                            Entrar
                            </Typography>
                            <TextField id='usuario' label='Usuário' variant='outlined' name='Usuário' margin='normal' fullWidth ></TextField>
                            <TextField id='senha' label='Senha' variant='outlined' name='Senha' margin='normal' fullWidth type='password' ></TextField>
                            <Box marginTop={2} textAlign='center'>
                                <Link to='/home' className='text-decorator-none'>
                                    <Button type='submit' variant='contained' color='primary'>
                                        Logar
                                    </Button>
                                </Link>
                                
                            </Box>                   
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Typography variant='subtitle1' gutterBottom align='center' style={{fontWeight: 'bold'}}>Cadastre-se</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} style={{
                backgroundImage: `url(https://i.imgur.com/wLR9M2w.png)`,
                backgroundRepeat: 'no-repeat', width: '100vh', minHeight:'100vh', backgroundSize: 'cover', backgroundPosition: 'center',
                backgroundColor: '#cbc6c6' }}>
            </Grid>
        </Grid>

    )

}

export default Login;