import { Link } from 'react-router-dom';

function RouteLink({ className, to, children }) {
	return (
		<Link className={className} to={to}>
			{children}
		</Link>
	);
}

export default RouteLink;
