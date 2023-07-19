
import HeaderLayout from "./HeaderLayout";

// Basic main layout , this layout should be called from root.jsx
export default function MainLayout({ children, title }) {
    return (
        <div className="bg-[#ECECEC]">

            {/* Header Section  - start */}
            <HeaderLayout /> 
            {/* Header Section  - end */}

            <main>
                {children}
            </main>

            {/* Footer Section - start */}
         
             {/* Footer Section - end */}
        </div>
    );
}