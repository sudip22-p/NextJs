import AdminNavbar from "@/components/AdminNavbar";
export const metadata = {
  title: "first:admin panel",
  description: "my first next js app's admin panel",
};

export default function AdminLayout({ children }) {
  return (
    <>
      <AdminNavbar />
      <div className="h-auto">{children}</div>
    </>
  );
}
