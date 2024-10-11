import React from 'react'
import { Formik,Field,Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from 'react-bootstrap/Button';
import FromBs from 'react-bootstrap/Form';
import './Formulario.css'
import { axiosInstance } from '../../../services/axios.config';
//import { Description } from '@mui/icons-material';

const FormCreateProduct = () => {

  const initialValues = {
    name: '',
    description: '',
    image: '',
    stock: '',
    price: ''
  }
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2,'Nombre demasiado corto')
      .max(50, 'Nombre demasiado largo')
      .required('El campo es obligatorio'),
    description: Yup.string()
      .min(8,'Descripcion demasiado corta')
      .max(100, 'Descripcion demasiado largo')
      .required('El campo es obligatorio'),
    image: Yup.string().required('Campo obligatorio'),
    stock: Yup.number().required('Campo obligatorio'),
    price: Yup.number().required('Campo obligatorio'),
  })

  return (
    <div className='container'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, {setSubmitting}) => {
        
          console.log(values);
          axiosInstance.post('/',values)
          .then(r => {
            if(r.status == 201){
              console.log(r)
              setSubmitting(false)
            }else{
              throw new Error(`[${r.status}]error en la solicitud`)
            }
          })
          .catch(err => console.log(err))
        }}
      >
        {
          ({values,isSubmitting,errors,touched}) => (
            <Form>
              <FromBs.Group className='mb-3'>
                <label htmlFor="name">Nombre: </label>
                <Field id='name' type='text' placeholder='' name='name' className='form-control field-input'/>
                {
                  errors.name && touched.name &&(
                    <ErrorMessage name='name' component='div'></ErrorMessage>
                  )
                }
              </FromBs.Group >

              <FromBs.Group className='mb-3'>
                <label htmlFor="description">Descripcion: </label>
                <Field id='description' type='text' placeholder='' name='description' className='form-control field-input'/>
                {
                  errors.description && touched.description &&(
                    <ErrorMessage name='description' component='div'></ErrorMessage>
                  )
                }
              </FromBs.Group>

              <FromBs.Group className='mb-3'>
                <label htmlFor="image">Imagen: </label>
                <Field id='image' type='text' placeholder='image' name='image' className='form-control  field-input'/>
                {
                  errors.image && touched.image &&(
                    <ErrorMessage name='image' component='div'></ErrorMessage>
                  )
                }
              </FromBs.Group>

              <FromBs.Group className='mb-3'>
              <label htmlFor="stock">Stock: </label>
                <Field id='stock' type='text' placeholder='stock' name='stock' className='form-control field-input'/>
                {
                  errors.stock && touched.stock &&(
                    <ErrorMessage name='stock' component='div'></ErrorMessage>
                  )
                }
              </FromBs.Group>

              <FromBs.Group className='mb-3'>
              <label htmlFor="price">Precio: </label>
              <Field id='price' type='text' placeholder='price' name='price' className='form-control field-input'/>
              {
                errors.price && touched.price &&(
                  <ErrorMessage name='price' component='div'></ErrorMessage>
                )
              }
              </FromBs.Group>

              <Button className='btn btn-primary' type='submit'>Cargar producto</Button>
              {
                isSubmitting ? (<p>Enviando nuevo producto</p>) : null
              }
            </Form>
          )
        }
      </Formik>   
    </div>
  )
}

export default FormCreateProduct