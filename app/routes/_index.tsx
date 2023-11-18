import { ActionFunctionArgs } from "@remix-run/node";
import { Form } from "@remix-run/react";

import { useRemixForm } from "remix-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
//TODO: make script for icons so icons can be imported as component

const schema = z.object({
  usernameOrEmail: z.string(),
  password: z.string().min(1).max(100),
});
export const action = async ({ request }: ActionFunctionArgs) => {
  const body = await request.formData();
  const entries = body.entries();
  const data = Object.fromEntries(entries);
  console.log(data);
  return null;
};

export default function LoginRoute() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useRemixForm({
    mode: "onSubmit",
    resolver: zodResolver(schema),

    submitConfig: {
      method: "post",
    },
  });
  return (
    <Form
      method="post"
      className="flex h-full items-center justify-center"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-4 mx-auto h-full w-full items-center justify-center lg:w-2/3">
        <input
          type="email"
          {...register("usernameOrEmail")}
          autoFocus
          className="w-full"
        />

        <input type="password" {...register("password")} className="w-full" />

        <button
          type="submit"
          className="h-12 px-6 m-2 transition-colors duration-150"
        >
          sdsad
        </button>
        {/* <Form method="POST" action="/auth/google">
          <button className="flex">
            <img className="mr-2" src={GoogleIcon} alt="Google" />
            {t("buttons.login")} {t("buttons.with_google")}
          </button>
        </Form>
        <Form method="POST" action="/auth/facebook">
          <button className="flex">
            <img className="mr-2" src={FacebookIcon} alt="Facebook" />
            {t("buttons.login")} {t("buttons.with_facebook")}
          </button>
        </Form>
        <Form method="POST" action="/auth/github">
          <button type="submit" className="flex">
            <img className="mr-2" src={GithubIcon} alt="GitHub" />
            {t("buttons.login")} {t("buttons.with_github")}
          </button>
        </Form> */}
      </div>
    </Form>
  );
}
