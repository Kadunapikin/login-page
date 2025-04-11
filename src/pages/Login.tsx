import { useForm } from 'react-hook-form';
import Input from '../components/Input';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("Login data:", data);
    // Perform login logic here
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Email"
          name="email"
          type="email"
          register={register("email", { required: "Email is required" })}
          error={errors.email?.message as string}
          />
        <Input
          label="Password"
          name="password"
          type="password"
          register={register("password", { required: "Password is required" })}
          error={errors.password?.message as string}
        />
        <div className="text-right mb-4">
          <Link to="/recover" className="text-sm text-blue-600 hover:underline">
            Forgot Password?
          </Link>
        </div>
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default Login;
