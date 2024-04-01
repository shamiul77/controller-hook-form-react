





import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { Controller } from "react-hook-form"
import * as yup from "yup"
import { useState } from "react"

const schema = yup
  .object({
    username: yup.string().required("This field is required"),
    email: yup.string().required("Email is required*"),
    password: yup.string().required("Password is required*"),
    password2: yup.string().required("Password is required*"),

  })
  .required()
const defaultValues={
  username:'',
  email: '',
  password: '',
  password2:''
}
function App() {
const [state, setState] = useState([])
  const {
    watch, 
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues

  })

  const onSubmit = (data) => {
  setState(data)
  reset()
  }

  console.log(state)
  return (

    <div className=" ">
                <h3 className="text-center">Registration Form</h3> <br /> <br />
      <div className="">
    <form  onSubmit={handleSubmit(onSubmit)}  className="m-auto w-50 bg-light px-5 py-5">
    <Controller
    name="username"
    control={control}
    render={({field,fieldState:{errors}})=>(
      <input  className={errors?.username ? "form-control is-invalid": "form-control"} placeholder="Enter your username " type="text" {...field} />
    )}
    />
      {errors.username && <p className="text-danger">This is required.</p>} <br /> 
    <Controller
    name="email"
    control={control}
    render={({field,fieldState:{errors}})=>(
      <input  className=" form-control " placeholder="Enter your email" type="email" {...field} />
    )}
    />
      {errors.email && <p className="text-danger">This is required.</p>}
        <br />
    <Controller
    name="password"
    control={control}
    render={({field,fieldState:{errors}})=>(
      <input  className=" form-control" placeholder="Enter your password" type="password" {...field} />
      )}
      /> 
      {errors.password && <p className="text-danger">This is required.</p>}
            <br /> 
    <Controller
    name="password2"
    control={control}
    render={({field,fieldState:{errors}})=>(
      <input  className=" form-control" placeholder="Confirm your password" type="password" {...field} />
      )}
      />
      {errors.password2 && <p className="text-danger">This is required.</p>}
    <br /> 
    <div className="d-grid ">
        <button className="btn btn-primary"  type="submit"  >Submit</button>
    </div>
</form>
    </div>
    </div>

    
  )

}

export default App