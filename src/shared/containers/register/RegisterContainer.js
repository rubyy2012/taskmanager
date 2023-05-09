import React from 'react'
import { Button, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import styles from './styles.module.scss';
import { yupResolver } from '@hookform/resolvers/yup'; 
import AuthenLayout from '../layouts/authen/AuthenLayout';
import { Link } from 'react-router-dom';
const RegisterContainer = () => {
  const schema = yup.object().shape({
    username: yup.string().required('Bạn phải nhập tên người dùng'),
    password: yup.string().min(6, 'Mật khẩu phải chứa tối thiểu 6 ký tự').required('Bạn phải nhập mật khẩu!'),
  });
  const onSubmit = async (data) => {
    console.log(data);
  }
//   const {control, handleSubmit, formState: { errors } } = useForm({
//     resolver: yupResolver(schema),
//       defaultValues: {
//         username: '',
//         password: ''
//       }
//   });

  const {control, handleSubmit, formState: { errors } } = useForm();
  return (
    <div className={styles.form_submit_container}>
    <div className={styles.form_submit_body}>
        <h4 className={styles.welcome_greeting}>Chào mừng bạn đến với Đăng ký</h4>     
    <form onSubmit={handleSubmit(onSubmit)}>
    <Controller
            control={control}
            name="fullName"     
            render={({ field }) => <TextField {...field}  
                            fullWidth={true}
                            margin="normal"
                            id="outlined-required"
                            label="Họ tên"/>}/>
        <Controller
            control={control}
            name="username"    
            render={({ field }) => <TextField {...field}  
                            fullWidth={true}
                            margin="normal"
                            id="outlined-required"
                            label="Tên đăng nhập"/>}
          />
        <Controller
            control={control}
            name="email"           
            render={({ field }) => <TextField {...field} 
                            fullWidth={true}
                            margin="normal"
                            id="outlined-required"
                            label="Email"/>}
        />
        <Controller
          control={control}
          name="password"
          render={({ field }) => <TextField {...field} 
                             fullWidth={true}
                              id="outlined-required"
                              margin="normal"
                              label="Mật khẩu"/>}
        />
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field }) => <TextField {...field} 
                              fullWidth={true}
                              id="outlined-required"
                              margin="normal"
                              label="Nhập lại mật khẩu"/>}
        />
        <Button 
          fullWidth
          variant='contained'
          margin="normal"
          color='info'
          type="submit"
          style={{marginTop:'15px',padding:'12px 0'}}
          >Đăng ký</Button>
    </form>
    <p>Bạn chưa có tài khoản?
      <Link to='/login'className={styles.change_page_link}> Đăng nhập</Link>

        </p>
    </div>
    </div>
  )
}
export default RegisterContainer;
