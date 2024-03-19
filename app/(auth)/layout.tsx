import { IReadOnlyChildren } from "@/types/types";

const AuthLayout: React.FC<IReadOnlyChildren> = ({ children }) => {
  return <main className="auth">{children}</main>;
};

export default AuthLayout;
