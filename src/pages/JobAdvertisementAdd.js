import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form, Message } from 'semantic-ui-react'
import JobAdvertisementService from '../services/jobAdvertisementService'
import { toast } from 'react-toastify';
import { useHistory } from "react-router";

export default function JobAdvertisementAdd() {

    const history = useHistory()

    const [status, setStatus] = useState([])

    useEffect(() => {
        setStatus({success: false, error: false})
    },[])

    const users = [
        { text: 'Ef Company', value: 6 }
    ]

    const formik = useFormik({

        initialValues: {
            jobDescription: '',
            salaryScaleMin: '',
            salaryScaleMax: '',
            numberOfOpenPositions: '',
            applicationDeadline: '',
            cityId: '',
            userId: '',
            jobPositionId: ''
        },

        validationSchema: Yup.object({
            jobDescription: Yup.string().min(15, 'En Az 15 karakter olamalıdır.').required('Boş olamaz.'),
            salaryScaleMin: Yup.number('Lütfen sayısal değer giriniz.').positive().integer('Lütfen sayısal değer giriniz.').required('Boş olamaz.'),
            salaryScaleMax: Yup.number('Lütfen sayısal değer giriniz.').positive().integer('Lütfen sayısal değer giriniz.').required('Boş olamaz.'),
            numberOfOpenPositions: Yup.number('Lütfen sayısal değer giriniz.').positive().integer('Lütfen sayısal değer giriniz.').required('Boş olamaz.'),
            cityId: Yup.number('Lütfen sayısal değer giriniz.').positive().integer('Lütfen sayısal değer giriniz.').required('Boş olamaz.'),
            userId: Yup.number('Lütfen sayısal değer giriniz.').positive().integer('Lütfen sayısal değer giriniz.').required('Boş olamaz.'),
            jobPositionId: Yup.number('Lütfen sayısal değer giriniz.').positive().integer('Lütfen sayısal değer giriniz.').required('Boş olamaz.'),
            applicationDeadline: Yup.date().default(function () {
                return new Date();
            })
        }),

        onSubmit: values => {
            let yeniObje = {
                jobDescription: values.jobDescription,
                salaryScaleMin: values.salaryScaleMin,
                salaryScaleMax: values.salaryScaleMax,
                numberOfOpenPositions: values.numberOfOpenPositions,
                applicationDeadline: values.applicationDeadline,
                employer: {
                    id: values.userId
                },
                city: {
                    id: values.cityId
                },
                jobPosition: {
                    id: values.jobPositionId
                },
            }
            let jobAdvertisementsService = new JobAdvertisementService();
            jobAdvertisementsService.add(yeniObje).then(result => {
                setStatus({success: true, error: false});
                toast.success("Yeni iş ilanı oluşturuldu.");
                history.push("/");
            }).catch(err => setStatus({success: false, error: true}));

        },

    });
    return (
        <div>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group widths='equal'>
                    <Form.Input 
                        fluid
                        label='Kullanıcı'
                        placeholder='Kullanıcı'
                        name='userId'
                        onChange={formik.handleChange}
                        error={
                            formik.touched.userId && formik.errors.userId ? 
                            { content: formik.errors.userId, pointing: 'below' } 
                            : null
                        }
                    />
                    <Form.Input 
                        fluid label='Pozisyon' 
                        placeholder='Pozisyon'
                        name='jobPositionId'
                        onChange={formik.handleChange}
                        error={
                            formik.touched.jobPositionId && formik.errors.jobPositionId ? 
                            { content: formik.errors.jobPositionId, pointing: 'below' } 
                            : null
                        }
                    />
                    <Form.Input 
                        fluid label='Şehir' 
                        placeholder='Şehir' 
                        name='cityId'
                        onChange={formik.handleChange}
                        error={
                            formik.touched.cityId && formik.errors.cityId ? 
                            { content: formik.errors.cityId, pointing: 'below' } 
                            : null
                        }
                    />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input 
                        fluid label='Açık Pozisyon Sayısı' 
                        placeholder='Açık Pozisyon Sayısı'
                        name='numberOfOpenPositions'
                        onChange={formik.handleChange}
                        error={
                            formik.touched.numberOfOpenPositions && formik.errors.numberOfOpenPositions ? 
                            { content: formik.errors.numberOfOpenPositions, pointing: 'below' } 
                            : null
                        }
                    />    
                    <Form.Input 
                        fluid label='Min. Maaş' 
                        placeholder='Min. Maaş'
                        name='salaryScaleMin' 
                        onChange={formik.handleChange}
                        error={
                            formik.touched.salaryScaleMin && formik.errors.salaryScaleMin ? 
                            { content: formik.errors.salaryScaleMin, pointing: 'below' } 
                            : null
                        }
                    />
                    <Form.Input 
                        fluid label='Max. Maaş' 
                        placeholder='Max. Maaş' 
                        name='salaryScaleMax'
                        onChange={formik.handleChange}
                        error={
                            formik.touched.salaryScaleMax && formik.errors.salaryScaleMax ? 
                            { content: formik.errors.salaryScaleMax, pointing: 'below' } 
                            : null
                        }
                    />
                </Form.Group>
                <Form.TextArea 
                    label='İş Açıklaması' 
                    placeholder='İş Açıklaması...' 
                    name='jobDescription'
                    onChange={formik.handleChange}
                    error={
                        formik.touched.jobDescription && formik.errors.jobDescription ? 
                        { content: formik.errors.jobDescription, pointing: 'below' } 
                        : null
                    }
                />
                <Form.Button type="submit">Gönder</Form.Button>
                {
                    status.error ? (
                        <Message color='red'>Hata! Yeni ilan oluşturulamadı.</Message>
                    ) : null
                }

                {
                    status.success ? (
                        <Message color='green'>Başarılı. Yeni iş ilanı oluşturuldu.</Message>
                    ) : null
                }
            </Form>
        </div>
    )
}
