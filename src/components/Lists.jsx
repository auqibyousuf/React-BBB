import React from "react";
import Link from "./Link";

function Lists() {
	return (
		<nav className="nav">
			<ul className="nav-list-wrapper">
				<li>
					<Link linkUrl="/finance-options" linkText="Finance options" />
				</li>
				<li>
					<Link linkUrl="/business-guidance" linkText="Business guidance" />
				</li>
				<li>
					<Link linkUrl="/our-partners" linkText="Our partners" />
				</li>
				<li>
					<Link linkUrl="/news" linkText="News and events" />
				</li>
				<li>
					<Link linkUrl="/about" linkText="About" />
				</li>
			</ul>
		</nav>
	);
}

export default Lists;
