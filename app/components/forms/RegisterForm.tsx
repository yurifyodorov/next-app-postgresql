'use client';

import axios from "axios";
import { toast } from "react-hot-toast";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import Form from "@/app/components/forms/Form";
import Input from "@/app/components/inputs/Input";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {


    axios.post('/api/register', data)
      .then(() => {
        toast.success('Registered!');
      })
      .catch(() => {
        toast.error('Something went wrong');
      })
      .finally(() => {
        console.log('Success')
      })
  }

  const bodyContent = (
    <form>
      <Input
        id="email"
        label="Email"
        register={register}
        errors={errors}
        required
      />
      <Input
        id="name"
        label="Name"
        register={register}
        errors={errors}
        required
      />
    </form>
  )

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      title="Register"
      actionLabel="Continue"
      body={bodyContent}
    />
  )
}

export default RegisterForm;