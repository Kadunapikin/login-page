import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import toast from 'react-hot-toast';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const { email, password } = data;
  
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful!");
    } catch (error: any) {
      console.error("Login error:", error.message);
      toast.error(error.message || "Login failed");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Email"
          name="email"
          type="email"
          register={register}
          error={errors.email?.message as string}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          register={register}
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
