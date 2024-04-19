import { FaChartBar } from 'react-icons/fa';

const NavDashboard = () => {
    return ( 
        <div className="rounded-lg bg-gray-100 border pl-8 pr-8 pt-6 pb-6 flex gap-4 items-center" style={{boxShadow: '0px 0px 12px #0000005c;'}}>
            <div>
                <FaChartBar size={36} color="#626262" />
            </div>
            <div className="leading-none">
                <h4 className="text-base">Analytics Dashboard</h4>
                <span className="text-xs text-gray-700">Visualize estatísticas e tendências de vagas de estágio.</span>
            </div>
        </div>
     );
}
 
export default NavDashboard;