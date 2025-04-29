import { useForm } from 'react-hook-form';
import Input from '../components/Input';
import Button from '../components/Button';
import toast from 'react-hot-toast';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    const { email, password } = data;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Signup successful! You can now log in.");
      navigate('/');
    } catch (error: any) {
      console.error("Signup error:", error.message);
      toast.error(error.message || "Signup failed");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6">Create an Account</h2>
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
          <Link to="/" className="text-sm text-blue-600 hover:underline">
            Already have an account? SignIn
          </Link>
        </div>
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default Signup;
