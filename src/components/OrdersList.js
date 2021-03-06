const OrderList = ({ orderData }) => {
  //set status button color based
  const orderStatus = (status) => {
    if (status === "Paid") {
      return "status-paid status-btn";
    } else if (status === "Delivered") {
      return "status-delivered status-btn";
    } else {
      return "status-cart status-btn";
    }
  };
  //date format to mmm, dd, yyyy
  const dateFormat = (date) => {
    const monthStrings = [
      "Jan.",
      "Feb.",
      "Mar.",
      "Apr.",
      "May.",
      "Jun.",
      "Jul.",
      "Aug.",
      "Sept.",
      "Oct.",
      "Nov.",
      "Dec.",
    ];

    let result =
      monthStrings[parseInt(date.split("-")[1])] +
      " " +
      date.split("-")[1] +
      ", " +
      date.split("-")[0];

    if (date) {
      return result;
    }
  };

  return (
    <section className='wrapper'>
      <div className='table-header'>
        <div className='status '>STATUS</div>
        <div className='delivery-day '>DELIVERY DAY</div>
        <div className='supplier '>SUPPLIER</div>
        <div className='total '>TOTAL</div>
      </div>
      {orderData &&
        orderData.map((order) => {
          return (
            <div className='table-row' key={order.id}>
              <div className='status'>
                <p>
                  <span className={orderStatus(order.orderBuyerStatus)}>
                    {order.orderBuyerStatus}
                  </span>
                </p>
              </div>

              <div className='delivery-day'>
                <p>{dateFormat(order.deliveryDay)}</p>
              </div>
              <div className='supplier'>
                <p>
                  {order.vendorName}
                  {/* if vendor BYOS is true, show token */}
                  {order.isBYOS && (
                    <span className='isBYOS status-btn'>market</span>
                  )}

                  {/* if vendor pending onboarding is true, show token */}
                  {order.isPendingVendorOnboarding && (
                    <span className='isPendingVendor status-btn'>1st</span>
                  )}
                </p>
              </div>
              <div className='total'>
                {/* do not show $0 value */}
                <p>{order.total !== 0 ? "$" + order.total.toFixed(2) : ""}</p>
              </div>
            </div>
          );
        })}
    </section>
  );
};

export default OrderList;
