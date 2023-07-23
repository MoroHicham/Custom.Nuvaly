import { Link } from '@remix-run/react';
export default function Logo() {
    return (
        <div className="flex flex-col text-left">
            <div>
                <Link key={0} to='/'>
                    <div className="text-[35px] font-bold  max-[750px]:text-[30px]">NUVALY</div>
                    <p className="text-[15px] mt-[-11px] text-center max-[750px]:text-[10px]">Regular Skin</p>
                </Link>
            </div>
        </div>
    );
}