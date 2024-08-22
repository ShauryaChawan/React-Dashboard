import React from "react";
import "./customerDetailsCard.scss";
import customer_data from "../../../../data/customer_data.json";

const customerDetailsCard = () => {
  console.log(customer_data[0]);

  return (
    <div>
      <h2>Customer Details</h2>
			<table>
				<tr>
					<th>Customer ID</th>
				</tr>
			</table>
    </div>
  );
};

export default customerDetailsCard;
