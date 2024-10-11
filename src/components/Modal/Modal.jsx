import React from 'react'
import { Formik,Field,Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from 'react-bootstrap/Button';
import ModalBs from 'react-bootstrap/Modal';
import FromBs from 'react-bootstrap/Form';

const Modal = (props) => {

    const initialValues = {
        name: props.item.name || '',
        description: props.item.description || '',
        image: props.item.image || '',
        stock: props.item.stock || '',
        price: props.item.price || ''
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
      <ModalBs
      {...props}
      size='lg'
      aria-labelledby="contained-model-tittle-vcenter"
      centered
      >
        <ModalBs.Header closeButton className='bg-dark'>
            <ModalBs.Title id='contained-modal-title-vcenter'>
                Modal Heading
            </ModalBs.Title>
        </ModalBs.Header>
        <ModalBs.Body className='bg-dark'>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={ async (values, {setSubmitting}) => {
                console.log(values);
                await props.onSubmit(props.item.id, values)
                setSubmitting(false)
                props.onHide()
            }}
      >
        {
          ({values,isSubmitting,errors,touched, handleChange}) => (
            <Form>
              <FromBs.Group className='mb-3'>
                <label htmlFor="name">Nombre: </label>
                <Field id='name' type='text' placeholder='' name='name' className='form-control field-input' onChange={handleChange}/>
                {
                  errors.name && touched.name &&(
                    <ErrorMessage name='name' component='div'></ErrorMessage>
                  )
                }
              </FromBs.Group >

              <FromBs.Group className='mb-3'>
                <label htmlFor="description">Descripcion: </label>
                <Field id='description' type='text' placeholder='' name='description' className='form-control field-input' onChange={handleChange}/>
                {
                  errors.description && touched.description &&(
                    <ErrorMessage name='description' component='div'></ErrorMessage>
                  )
                }
              </FromBs.Group>

              <FromBs.Group className='mb-3'>
                <label htmlFor="image">Imagen: </label>
                <Field id='image' type='text' placeholder='image' name='image' className='form-control  field-input' onChange={handleChange} />
                {
                  errors.image && touched.image &&(
                    <ErrorMessage name='image' component='div'></ErrorMessage>
                  )
                }
              </FromBs.Group>

              <FromBs.Group className='mb-3'>
              <label htmlFor="stock">Stock: </label>
                <Field id='stock' type='text' placeholder='stock' name='stock' className='form-control field-input' onChange={handleChange}/>
                {
                  errors.stock && touched.stock &&(
                    <ErrorMessage name='stock' component='div'></ErrorMessage>
                  )
                }
              </FromBs.Group>

              <FromBs.Group className='mb-3'>
              <label htmlFor="price">Precio: </label>
              <Field id='price' type='text' placeholder='price' name='price' className='form-control field-input' onChange={handleChange}/>
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
        </ModalBs.Body>
        <ModalBs.Footer className='bg-dark'>
            <Button onClick={props.onHide}>Close</Button>
        </ModalBs.Footer>
      </ModalBs>
  )
}

export default Modal