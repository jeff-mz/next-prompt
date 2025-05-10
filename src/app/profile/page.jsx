import ClientProfile from "./ClientProfile";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const generateMetadata = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return { title: `${user?.given_name}'s | AI-Based Prompt Generator` };
};
const ProfilePage = () => {
  return <ClientProfile />;
};

export default ProfilePage;
