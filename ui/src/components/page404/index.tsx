import { Button, Result } from "antd";
import { Link } from "react-router-dom";

const Page404 = () => {
	const link = "/";
	return (
		<div>
			<Result
				status="404"
				title="404"
				subTitle="Sorry, the page you visited does not exist."
				extra={
					<Button ghost>
						<Link to={link}>Back Home</Link>
					</Button>
				}
			/>
		</div>
	);
};

export default Page404;
