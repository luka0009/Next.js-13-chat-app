import getCurrentUser from "@/app/actions/getCurrentUser";
import DesktopSidebar from "./DesktopSidebar";
import MobileFooter from "./MobileFooter";

type Props = {
    children: React.ReactNode;
}

async function Sidebar({ children }: Props) {
  const currentUser = await getCurrentUser();
  return (
    <div className="h-full bg-gradient-to-b from-blue-900 via-black to-blue-900 text-white">
      <DesktopSidebar currentUser={currentUser!}/>
      <MobileFooter />
      <main className="lg:pl-20 h-full">
        {children}
      </main>
    </div>
  );
}

export default Sidebar;
