import director from '../../assets/slider-img/director.jpg';

import SectionTitle from "../../components/sectiontitle/SectionTitle";
import './Director.css'
const DirectorMsg = () => {
    return (
        <div>
            <SectionTitle title="Message of Director."></SectionTitle>

        <div className="inharite h-96 p-4 flex-auto">
        <img
        src={director} // Replace with your image URL
        alt="Image"
        className="w-72 h-64 image-director"
      />

          <p className="text-director">Professor Dr. Engr. Mohammad Abdul Mannan obtained 1st class B.Sc.Engg. in EEE from erstwhile Chittagong Engineering College(now CUET) in 1982, M.Sc. Engg. in CSE from BUET and Ph.D in Advanced Engineering Management from USA. He joined as Lecturer, Dept. of EEE in 1984 and passed responsibilites of Dean (EEE), Head (EEE) , Registrar (adl.Charge) provost (K.N.I Hall), Director (Computer Centre) and syndicate member of DUET, Gazipur. He has long national contribution for poverty alleviation, income generation and growth of GDP through establishment and management of two pioneer academic institutions namely MIST Gazipur and MIST Netrakona. He has been serving as vice chairman of national crime & Corruption Prevention Foundation Since January 2010. His field of interest in engineerng system and management. As a researcher , he has more then 21 publications including 10 internationals. As a professional engineer, consultant and ABC licensee, he has participated 12 professional training courses and long experience on design, installation, testing, commissioning and O/M of (i) Low / medium /high voltage systems (ii) Fire systems, (iii) CCTV Systems, (iv) Renewable energy systems and (v) Electrical installations in hihg rise buildings and large industries.Obviously, all electrical installation,sub-station,sound systems etc in DUET campus are checked and supervised by him. As an honest, sincere and professionally skilled professor, he is involved as member of TEC/PEC/SB/MB of many public bodies, PSC and universities. He completed Doctoral Thesis on “Evaluation of public procurement reforms for sustainable development in Bangladesh” and published related five publications in international journals of high impact factor. As a Ph.D in advanced engineerng management, he has been teachig related PG cources like Sourcing / Procurement management,sales and operations, plannig in MBA (major: Supply Chain Management) of Bangladesh university of professionals(BUP),Mirpur Cantonment and providing consulting services on tender evaluation, proposal evaluation,prepartion of tender documents,preparation of cost estimation, shcedule of requiements etc in public sectors. He is also providing advisory and consulting services in many engineerng firms as ” Chief Technical Advisor”</p>
        </div>
      </div>
    
    );
};

export default DirectorMsg;