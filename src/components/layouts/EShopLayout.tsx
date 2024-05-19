import NavBarBanner from "../partials/multiMenuNavbar/NavBarBanner/NavBarBanner";
import TopNavbar from "../partials/multiMenuNavbar/topNavbar/TopNavbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NavBarBanner
                banner="Welcome to EShop"
                contactInfo={{
                    email: "uqj6O@example.com",
                    phone: "+972-555-555-555",
                }}
            />
            <TopNavbar className="z-50 sticky top-0"/>
            {children}
        </>
    );
}
