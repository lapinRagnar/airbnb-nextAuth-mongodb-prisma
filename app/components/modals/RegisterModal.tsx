'use client'

import axios from "axios"
import { AiFillGithub } from "react-icons/ai"
import { FcGoogle } from 'react-icons/fc'
import { useCallback, useState } from "react"
import toast from "react-hot-toast"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"

import useLoginModal from "@/app/hooks/useLoginModal"
import useRegisterModal from "@/app/hooks/useRegisterModal"

import Modal from "./Modal"
import Input from "../imputs/Input"
import Heading from "../Heading"
import Button from "../Button"

import { signIn } from "next-auth/react"

import { useRouter } from "next/navigation"

const RegisterModal = () => {

  const router = useRouter()

  const registerModal = useRegisterModal()
  const loginModal = useLoginModal()
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)

    console.log('data avant entrée axios',data)
    
    
    // axios.post('/api/register', data)
    //   .then(() => {
    //     toast.success('Registered!')
    //     registerModal.onClose
    //     loginModal.onOpen()
    //   })
    //   .catch((error) => {
    //     console.log('erreur dans axios',error)
    //     toast.error('Something went wrong')
    //   })
    //   .finally(() => {
    //     setIsLoading(false)
    //   })

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }

    fetch('/api/register', requestOptions)
      .then(async response => {


        if (response.ok) {
          console.log('response ok')
          toast.success('Registered!')
          registerModal.onClose()
          loginModal.onOpen()
          
          router.refresh()
          router.push('/')
        }


      })
      .catch(error => {
        console.error('There was an error!', error)
        toast.error('Something went wrong')
      })
      .finally(() => {
        setIsLoading(false)
      })

    

  }


  const onToggle = useCallback(() => {
    registerModal.onClose();
    loginModal.onOpen();
  }, [registerModal, loginModal])


  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Heading 
        title='Welcome to Airbnb'
        subtitle='Create an account!'
      />

      <Input 
        id='email'
        label='Email'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />

      <Input 
        id='name'
        label='Name'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />

      <Input 
        id='password'
        type='password'
        label='Password'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />

    </div>
  )

  const footerContent = (
    <div className='flex flex-col gap-4 mt-3 '>
      
      <hr />

      <Button
        outline
        label='Continue with Google'
        icon={FcGoogle}
        onClick={() => signIn('google')}
      />

      <Button
        outline
        label='Continue with Github'
        icon={AiFillGithub}
        onClick={() => signIn('github')}
      />

      <div
        className='
          text-neutral-500
          text-center
          mt-4
          font-light
        '
      >
        <p>Already have an account?
          <span 
            onClick={onToggle} 
            className="
              text-neutral-800
              cursor-pointer 
              hover:underline
            "
          > 
            Log in
          </span>
        </p>

      </div>

    </div>
  )



  return (
    <Modal 
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title='Register'
      actionLabel='Register'
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  )
}

export default RegisterModal