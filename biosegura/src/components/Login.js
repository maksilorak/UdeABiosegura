import React,{useState, Fragment} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { 
        FormControl, 
        IconButton,
        InputAdornment,
        InputLabel,
        OutlinedInput,
        Button,
    } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '95%',
    },

    button: {
        margin: theme.spacing(1),
        width: '95%',
      },
  }));

  

const Login = () => {
    //usar styles
    const classes = useStyles();
    //crear el state de los valores
    const [values, setValues] = useState({
        email: '',
        password: '',
        showPassword: false
    });

    //mostrar u ocultar password
    const handleClickShowPassword = () =>{
        setValues({
            ...values,
            showPassword: !values.showPassword
        });
    };

    const getValues = event =>{
        setValues({
            //copia de values
            ...values,
            //obtengo el valor
            [event.target.name] : event.target.value
        });
    }


    const validateData = () =>{
        
    }

    return (
        <Fragment>

            <FormControl
                fullWidth
                className = {clsx(classes.margin, classes.textField)}
                variant = "outlined"
            >
                <InputLabel htmlFor="outlined-email">Correo electrónico</InputLabel>
                <OutlinedInput
                    name = "email"
                    type = "text"
                    value = {values.email}
                    onChange = {getValues}
                    labelWidth ={150} 
                />

            </FormControl>


            <FormControl
                fullWidth
                className = {clsx(classes.margin, classes.textField)}
                variant ="outlined"
            >
                <InputLabel htmlFor = "outlined-password">Contraseña</InputLabel>
                <OutlinedInput
                    name = "password"
                    id = "outlined-password"
                    type = {values.showPassword ? 'text':'password'}
                    value = {values.password}
                    onChange ={getValues}   
                    endAdornment={
                        <InputAdornment position = "end">
                            <IconButton
                                aria-label="toggle password visibility"
                                edge ="end"
                                onClick = {handleClickShowPassword}
                            >
                                {values.showPassword?<Visibility/>:<VisibilityOff/>}
                            </IconButton>                    
                        </InputAdornment>
                    }
                    labelWidth ={100}        
                /> 
            </FormControl>

            <Button
                name = "login"
                variant = "contained"
                color = "primary"
                className = {classes.button}
                startIcon ={<ExitToAppIcon fontSize="large"/>}
                onClick = {validateData}
            >Ingresar
            </Button>
        </Fragment>
    );
}
 
export default Login;