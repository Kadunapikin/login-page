import { useForm } from 'react-hook-form';
import Input from '../components/Input';
import Button from '../components/Button';
import toast from 'react-hot-toast';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase';
import Navbar from '../components/Navbar';

const PasswordRecovery = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      await sendPasswordResetEmail(auth, data.email);
      toast.success("Recovery email sent!");
    } catch (error: any) {
      console.error("Recovery error:", error.message);
      toast.error(error.message || "Failed to send recovery email");
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6">Recover Password</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Email"
            name="email"
            type="email"
            register={register}
            error={errors.email?.message as string}
          />
          <Button type="submit">Send Recovery Email</Button>
        </form>
      </div>
    </>
  );
};

export default PasswordRecovery;
