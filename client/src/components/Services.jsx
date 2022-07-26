import { BsShieldFillCheck } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { RiHeart2Fill } from 'react-icons/ri';

const ServicesCard = ({ color, title, icon, subtitle }) => (
	<div className="flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
		<div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>{icon}</div>
		<div className="ml-5 flex-col flex-1">
			<h1 className="mt-2 text-white text-lg ">{title}</h1>
			<p className="mt-2 text-white text-sm md:w-9/12"> {subtitle}</p>
		</div>
	</div>
);

const Services = () => {
	return (
		<div className="flex flex-col md:flex-row w-full justify-center items-center gradient-bg-services">
			<div className="flex mf:flex-row flex-col items-center justyfy-beetwen md:p-20 py-12 px-4">
				<div className="flex-1 flex flex-col justify-start items-starts">
					<h1 className="text-white text-3xl sm:text-5xl text-gradient">
						{' '}
						Services that we
						<br />
						continue to improve
					</h1>
				</div>
			</div>
			<div className="flex-1 flex flex-col justyfy-start items-center">
				<ServicesCard
					color="bg-[#2952E3]"
					title="Security Guaranteed"
					icon={<BsShieldFillCheck font-size={21} className="text-white" />}
					subtitle="Security is guaranted. We alway maintain privacy and mainting the quality of our products."
				/>
				<ServicesCard
					color="bg-[#8945F8]"
					title="Best exchange rate"
					icon={<BiSearchAlt font-size={21} className="text-white" />}
					subtitle="Security is guaranted. We alway maintain privacy and mainting the quality of our products."
				/>
				<ServicesCard
					color="bg-[#F84550]"
					title="Fastest transactions"
					icon={<RiHeart2Fill font-size={21} className="text-white" />}
					subtitle="Security is guaranted. We alway maintain privacy and mainting the quality of our products."
				/>
			</div>
		</div>
	);
};

export default Services;
