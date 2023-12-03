import { useForm } from "react-hook-form";

export default function HookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      react hook form
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>

        {/* use aria-invalid to indicate field contain error */}
        <input
          id="name"
          aria-invalid={errors.name ? "true" : "false"}
          {...register("name", { required: true, maxLength: 30 })}
        />

        <input type="submit" />
        {/* use role="alert" to announce the error message */}
        {errors.name && errors.name.type === "required" && (
          <p role="alert">This is required</p>
        )}
        {errors.name && errors.name.type === "maxLength" && (
          <p role="alert">Max length exceeded</p>
        )}
      </form>
    </div>
  );
}
